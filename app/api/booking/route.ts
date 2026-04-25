import { NextResponse } from "next/server";
import { Resend } from "resend";
import Stripe from "stripe";

export const runtime = "nodejs";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(request: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;
  const resendToEmail = process.env.RESEND_TO_EMAIL || resendFromEmail;
  const currency = (process.env.STRIPE_INVOICE_CURRENCY || "gbp").toLowerCase();
  const daysUntilDue = Number(process.env.INVOICE_DAYS_UNTIL_DUE || 7);

  if (!stripeSecretKey || !resendApiKey || !resendFromEmail || !resendToEmail) {
    return NextResponse.json(
      { error: "Booking service is not configured." },
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
      message: String(body.message || "").trim(),
      invoiceNumber: String(body.invoiceNumber || "").trim(),
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
      !data.invoiceNumber ||
      !Number.isFinite(data.price) ||
      data.price <= 0
    ) {
      return NextResponse.json(
        { error: "Required fields are missing for booking." },
        { status: 400 },
      );
    }

    const stripe = new Stripe(stripeSecretKey);
    const resend = new Resend(resendApiKey);

    const customer = await stripe.customers.create({
      name: data.fullName,
      email: data.email,
      phone: data.phoneNumber,
    });

    await stripe.invoiceItems.create({
      customer: customer.id,
      amount: Math.round(data.price * 100),
      currency,
      description: `${data.boothType} - ${data.packageDuration} | ${data.service} (${data.invoiceNumber})`,
    });

    const dueDate =
      Math.floor(Date.now() / 1000) + Math.max(daysUntilDue, 1) * 24 * 60 * 60;

    const invoice = await stripe.invoices.create({
      customer: customer.id,
      auto_advance: false,
      collection_method: "send_invoice",
      description: `Booking Invoice ${data.invoiceNumber}`,
      metadata: {
        invoice_number: data.invoiceNumber,
        booth_type: data.boothType,
        event_date: data.eventDate,
        event_location: data.eventLocation,
      },
      due_date: dueDate,
    });

    const finalInvoice = await stripe.invoices.finalizeInvoice(invoice.id);
    const sentInvoice = await stripe.invoices.sendInvoice(finalInvoice.id);
    const invoiceUrl = sentInvoice.hosted_invoice_url || finalInvoice.hosted_invoice_url || "";
    const prettyPrice = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(data.price);

    await resend.emails.send({
      from: resendFromEmail,
      to: [data.email],
      subject: `Your Booking Confirmation - ${data.invoiceNumber}`,
      html: `
        <h2>Hi ${escapeHtml(data.fullName)},</h2>
        <p>Thank you for booking <strong>Photo Booth Hire Swansea</strong>.</p>
        <p><strong>Invoice Number:</strong> ${escapeHtml(data.invoiceNumber)}</p>
        <p><strong>Event Date:</strong> ${escapeHtml(data.eventDate)}</p>
        <p><strong>Location:</strong> ${escapeHtml(data.eventLocation)}</p>
        <p><strong>Booth Type:</strong> ${escapeHtml(data.boothType)}</p>
        <p><strong>Package:</strong> ${escapeHtml(data.packageDuration)} – ${escapeHtml(data.service)}</p>
        <p><strong>Total Price:</strong> ${escapeHtml(prettyPrice)}</p>
        ${
          invoiceUrl
            ? `<p><a href="${invoiceUrl}" style="display:inline-block;padding:12px 20px;border-radius:999px;background:#ff914c;color:#1d1208;text-decoration:none;font-weight:700;">Pay your invoice</a></p>`
            : ""
        }
        <p>We look forward to making your event unforgettable.</p>
      `,
    });

    await resend.emails.send({
      from: resendFromEmail,
      to: [resendToEmail],
      replyTo: data.email,
      subject: `New Booking Request from ${data.fullName}`,
      html: `
        <h2>New Booking Details</h2>
        <p><strong>Invoice Number:</strong> ${escapeHtml(data.invoiceNumber)}</p>
        <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phoneNumber)}</p>
        <p><strong>Event Date:</strong> ${escapeHtml(data.eventDate)}</p>
        <p><strong>Event Location:</strong> ${escapeHtml(data.eventLocation)}</p>
        <p><strong>Booth Type:</strong> ${escapeHtml(data.boothType)}</p>
        <p><strong>Package:</strong> ${escapeHtml(data.packageDuration)}</p>
        <p><strong>Service:</strong> ${escapeHtml(data.service)}</p>
        <p><strong>Price:</strong> ${escapeHtml(prettyPrice)}</p>
        <p><strong>Invoice URL:</strong> ${invoiceUrl ? `<a href="${invoiceUrl}">${invoiceUrl}</a>` : "Unavailable"}</p>
        <p><strong>Message:</strong><br />${
          data.message ? escapeHtml(data.message).replaceAll("\n", "<br />") : "N/A"
        }</p>
      `,
    });

    return NextResponse.json({
      message: "Booking created successfully.",
      invoiceNumber: data.invoiceNumber,
      invoiceUrl,
    });
  } catch (error) {
    console.error("Booking request failed:", error);
    return NextResponse.json(
      { error: "Failed to process booking." },
      { status: 500 },
    );
  }
}
