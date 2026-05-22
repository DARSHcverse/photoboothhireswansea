import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactConfirmation from "../../../emails/ContactConfirmation";
import AdminContactAlert from "../../../emails/AdminContactAlert";
import { splitName, formatTimestamp } from "../../../lib/form-helpers";

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
      message: String(body.message || "").trim(),
    };

    if (!data.fullName || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Required fields are missing for the contact message." },
        { status: 400 },
      );
    }

    const { firstName, lastName } = splitName(data.fullName);
    const submittedAt = formatTimestamp();

    const resend = new Resend(resendApiKey);
    const fromName = `Photo Booth Hire Swansea <${resendFromEmail}>`;
    const systemFromName = `PBH System <${resendFromEmail}>`;

    const clientEmail = await resend.emails.send({
      from: fromName,
      to: [data.email],
      replyTo: resendToEmail,
      subject: "We got your message — Photo Booth Hire Swansea",
      react: ContactConfirmation({
        firstName,
        message: data.message,
      }),
    });

    if (clientEmail.error) {
      console.error("Contact client email failed:", clientEmail.error);
      return NextResponse.json(
        { error: "Failed to send confirmation email." },
        { status: 500 },
      );
    }

    const adminEmail = await resend.emails.send({
      from: systemFromName,
      to: [resendToEmail],
      replyTo: data.email,
      subject: `💬 New Message — ${firstName} ${lastName}`.trim(),
      react: AdminContactAlert({
        firstName,
        lastName,
        clientEmail: data.email,
        clientPhone: data.phoneNumber,
        message: data.message,
        submittedAt,
      }),
    });

    if (adminEmail.error) {
      console.error("Contact admin email failed:", adminEmail.error);
    }

    return NextResponse.json({
      success: true,
      message: "Message received",
    });
  } catch (error) {
    console.error("Contact request failed:", error);
    return NextResponse.json(
      { error: "Failed to send contact message." },
      { status: 500 },
    );
  }
}
