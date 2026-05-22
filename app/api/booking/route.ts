import { NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";
import BookingConfirmation from "../../../emails/BookingConfirmation";
import AdminBookingAlert from "../../../emails/AdminBookingAlert";
import { generateInvoiceNumber, getCurrentDate } from "../../../lib/invoice";
import { splitName, formatPrice, formatTimestamp } from "../../../lib/form-helpers";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;
  const resendToEmail = process.env.RESEND_TO_EMAIL || resendFromEmail;
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const currency = (process.env.STRIPE_INVOICE_CURRENCY || "gbp").toLowerCase();
  const daysUntilDue = Number(process.env.INVOICE_DAYS_UNTIL_DUE || 7);

  if (!resendFromEmail || !resendToEmail) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    const data = {
      fullName: String(body.fullName || "").trim(),
      email: String(body.email || "").trim(),
      phoneNumber: String(body.phoneNumber || "").trim(),
      eventDate: String(body.eventDate || "").trim(),
      eventLocation: String(body.eventLocation || "").trim(),
      packageDuration: String(body.packageDuration || "").trim(),
      service: String(body.service || "").trim(),
      boothType: String(body.boothType || "").trim(),
      guestCount: String(body.guestCount || "").trim(),
      message: String(body.message || "").trim(),
      price: Number(body.price || 0),
    };

    if (
      !data.fullName ||
      !data.email ||
      !data.phoneNumber ||
      !data.eventDate ||
      !data.eventLocation ||
      !data.packageDuration ||
      !data.service ||
      !data.boothType ||
      !Number.isFinite(data.price) ||
      data.price <= 0
    ) {
      return NextResponse.json(
        { error: "Required fields are missing for booking." },
        { status: 400 },
      );
    }

    const invoiceNumber = await generateInvoiceNumber();
    const bookingDate = getCurrentDate();
    const submittedAt = formatTimestamp();
    const { firstName, lastName } = splitName(data.fullName);
    const prettyPrice = formatPrice(data.price, currency.toUpperCase());
    const guestCount = data.guestCount || "Not specified";

    let invoiceUrl = "";

    if (stripeSecretKey) {
      try {
        const stripe = new Stripe(stripeSecretKey);
        const customer = await stripe.customers.create({
          name: data.fullName,
          email: data.email,
          phone: data.phoneNumber,
        });

        await stripe.invoiceItems.create({
          customer: customer.id,
          amount: Math.round(data.price * 100),
          currency,
          description: `${data.boothType} - ${data.packageDuration} | ${data.service} (${invoiceNumber})`,
        });

        const dueDate =
          Math.floor(Date.now() / 1000) + Math.max(daysUntilDue, 1) * 24 * 60 * 60;

        const invoice = await stripe.invoices.create({
          customer: customer.id,
          auto_advance: false,
          collection_method: "send_invoice",
          description: `Booking Invoice ${invoiceNumber}`,
          metadata: {
            invoice_number: invoiceNumber,
            booth_type: data.boothType,
            event_date: data.eventDate,
            event_location: data.eventLocation,
          },
          due_date: dueDate,
        });

        const finalInvoice = await stripe.invoices.finalizeInvoice(invoice.id);
        const sentInvoice = await stripe.invoices.sendInvoice(finalInvoice.id);
        invoiceUrl = sentInvoice.hosted_invoice_url || finalInvoice.hosted_invoice_url || "";
      } catch (stripeError) {
        console.error("Stripe invoice creation failed:", stripeError);
      }
    }

    const resend = new Resend(resendApiKey);
    const fromName = `Photo Booth Hire Swansea <${resendFromEmail}>`;
    const systemFromName = `PBH System <${resendFromEmail}>`;

    const clientEmail = await resend.emails.send({
      from: fromName,
      to: [data.email],
      replyTo: resendToEmail,
      subject: `Booking Confirmed — ${invoiceNumber} — Photo Booth Hire Swansea`,
      react: BookingConfirmation({
        firstName,
        invoiceNumber,
        bookingDate,
        eventDate: data.eventDate,
        eventType: data.service,
        venue: data.eventLocation,
        boothType: data.boothType,
        hireDuration: data.packageDuration,
        guestCount,
        price: prettyPrice,
      }),
    });

    if (clientEmail.error) {
      console.error("Booking client email failed:", clientEmail.error);
      return NextResponse.json(
        { error: "Failed to send booking confirmation email." },
        { status: 500 },
      );
    }

    const adminEmail = await resend.emails.send({
      from: systemFromName,
      to: [resendToEmail],
      replyTo: data.email,
      subject: `📋 New Booking — ${invoiceNumber} — ${firstName} ${lastName}`.trim(),
      react: AdminBookingAlert({
        firstName,
        lastName,
        clientEmail: data.email,
        clientPhone: data.phoneNumber,
        eventType: data.service,
        eventDate: data.eventDate,
        venue: data.eventLocation,
        boothType: data.boothType,
        hireDuration: data.packageDuration,
        guestCount,
        message: data.message,
        submittedAt,
        invoiceNumber,
        price: prettyPrice,
      }),
    });

    if (adminEmail.error) {
      console.error("Booking admin email failed:", adminEmail.error);
    }

    return NextResponse.json({
      success: true,
      invoiceNumber,
      invoiceUrl,
      message: "Booking confirmed",
    });
  } catch (error) {
    console.error("Booking request failed:", error);
    return NextResponse.json(
      { error: "Failed to process booking." },
      { status: 500 },
    );
  }
}
