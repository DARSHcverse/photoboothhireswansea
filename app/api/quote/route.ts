import { NextResponse } from "next/server";
import { Resend } from "resend";
import QuoteConfirmation from "../../../emails/QuoteConfirmation";
import AdminQuoteAlert from "../../../emails/AdminQuoteAlert";
import { splitName, formatTimestamp } from "../../../lib/form-helpers";

export const runtime = "nodejs";

const requiredFields = ["fullName", "eventDate"] as const;

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
      packageInterest: String(body.packageInterest || "").trim(),
      service: String(body.service || "").trim(),
      guestCount: String(body.guestCount || "").trim(),
      message: String(body.message || "").trim(),
      heardFrom: String(body.heardFrom || "").trim(),
    };

    for (const key of requiredFields) {
      if (!data[key]) {
        return NextResponse.json(
          { error: "Required fields are missing for the quote request." },
          { status: 400 },
        );
      }
    }

    // The quick date check asks for one contact method, since some people will
    // not give a phone number and others prefer not to give an email. Either
    // is enough to reply; neither is not.
    if (!data.email && !data.phoneNumber) {
      return NextResponse.json(
        { error: "Please give us either an email address or a phone number." },
        { status: 400 },
      );
    }

    const { firstName, lastName } = splitName(data.fullName);
    const boothType = data.packageInterest || "To be discussed";
    const hireDuration = data.packageDuration || "To be discussed";
    const guestCount = data.guestCount || "Not specified";
    const eventType = data.service || "Not specified";
    // Append the source to the admin message so it lands in the alert email
    // without changing the shared email template.
    const adminMessage = data.heardFrom
      ? `${data.message ? `${data.message}\n\n` : ""}Heard about us via: ${data.heardFrom}`
      : data.message;
    const venue = data.eventLocation || "Not specified";
    const submittedAt = formatTimestamp();

    const resend = new Resend(resendApiKey);
    const fromName = `Photo Booth Hire Swansea <${resendFromEmail}>`;
    const systemFromName = `PBH System <${resendFromEmail}>`;

    const clientEmail = data.email
      ? await resend.emails.send({
          from: fromName,
          to: [data.email],
          replyTo: resendToEmail,
          subject: "Thanks for your enquiry — Photo Booth Hire Swansea",
          react: QuoteConfirmation({
            firstName,
            eventType,
            eventDate: data.eventDate,
            venue,
            boothType,
            hireDuration,
            guestCount,
          }),
        })
      : null;

    if (clientEmail?.error) {
      console.error("Quote client email failed:", clientEmail.error);
      return NextResponse.json(
        { error: "Failed to send confirmation email." },
        { status: 500 },
      );
    }

    const adminEmail = await resend.emails.send({
      from: systemFromName,
      to: [resendToEmail],
      replyTo: data.email,
      subject: `🎉 New Quote Request — ${eventType} on ${data.eventDate}`,
      react: AdminQuoteAlert({
        firstName,
        lastName,
        clientEmail: data.email,
        clientPhone: data.phoneNumber,
        eventType,
        eventDate: data.eventDate,
        venue,
        boothType,
        hireDuration,
        guestCount,
        message: adminMessage,
        submittedAt,
      }),
    });

    if (adminEmail.error) {
      console.error("Quote admin email failed:", adminEmail.error);
    }

    return NextResponse.json({
      success: true,
      message: "Quote request received",
    });
  } catch (error) {
    console.error("Quote request failed:", error);
    return NextResponse.json(
      { error: "Failed to send quote request." },
      { status: 500 },
    );
  }
}
