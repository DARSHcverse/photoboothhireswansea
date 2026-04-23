import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const requiredFields = [
  "fullName",
  "email",
  "phoneNumber",
  "eventDate",
  "eventLocation",
  "service",
] as const;

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;
  const resendToEmail = process.env.RESEND_TO_EMAIL || resendFromEmail;

  if (!resendApiKey || !resendFromEmail || !resendToEmail) {
    return NextResponse.json(
      { error: "Quote email service is not configured." },
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
      message: String(body.message || "").trim(),
    };

    for (const key of requiredFields) {
      if (!data[key]) {
        return NextResponse.json(
          { error: "Required fields are missing for the quote request." },
          { status: 400 },
        );
      }
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: resendFromEmail,
      to: [resendToEmail],
      replyTo: data.email,
      subject: `New Quote Request from ${data.fullName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phoneNumber)}</p>
        <p><strong>Event Date:</strong> ${escapeHtml(data.eventDate)}</p>
        <p><strong>Location:</strong> ${escapeHtml(data.eventLocation)}</p>
        <p><strong>Package / Booth Interest:</strong> ${escapeHtml(
          data.packageDuration || data.packageInterest || "Not specified",
        )}</p>
        <p><strong>Service:</strong> ${escapeHtml(data.service)}</p>
        <p><strong>Message:</strong><br />${
          data.message ? escapeHtml(data.message).replaceAll("\n", "<br />") : "N/A"
        }</p>
      `,
    });

    return NextResponse.json({
      message: "Quote request sent successfully.",
    });
  } catch (error) {
    console.error("Quote request failed:", error);
    return NextResponse.json(
      { error: "Failed to send quote request." },
      { status: 500 },
    );
  }
}
