"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";
import { FormInput, FormSelect, FormTextarea } from "../components/FormCard";
import { useReveal } from "../components/useReveal";

const PRICES: Record<string, Record<string, number>> = {
  "Selfie Pod":     { "2 Hours": 250, "3 Hours": 325, "4 Hours": 400, "5 Hours": 470 },
  "Glam Booth":     { "2 Hours": 300, "3 Hours": 380, "4 Hours": 460, "5 Hours": 530 },
  "Enclosed Booth": { "2 Hours": 250, "3 Hours": 325, "4 Hours": 400, "5 Hours": 470 },
};

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function BookingPage() {
  useReveal([]);
  const [boothType, setBoothType] = useState("");
  const [duration, setDuration] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [confirmation, setConfirmation] = useState<{
    firstName: string;
    invoiceNumber: string;
    clientEmail: string;
  } | null>(null);
  const price = boothType && duration ? PRICES[boothType]?.[duration] ?? "" : "";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const submittedName = String(data.fullName || "").trim().split(/\s+/)[0] || "";
    const submittedEmail = String(data.email || "").trim();
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const json = await res.json().catch(() => ({}));
        setConfirmation({
          firstName: submittedName,
          invoiceNumber: String(json?.invoiceNumber || ""),
          clientEmail: submittedEmail,
        });
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" && confirmation) {
    return (
      <main>
        <PageHero
          eyebrow="Booking"
          title="Booking Received! 🎉"
          description="Your booking request has been received. Keep your invoice number for your records."
          heroBg="/assets/wedding2.webp"
        />
        <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
          <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "720px" }}>
            <div className="reveal p-6 md:p-10 rounded-[var(--radius-xl)]" style={cardStyle}>
              <span className="eyebrow">Confirmation</span>
              <h2 className="section-title">Booking Received! 🎉</h2>
              <p className="text-base mb-6">
                Thanks {confirmation.firstName || "there"}! Your booking request has been received.
                Your invoice number is <strong style={{ color: "var(--color-accent)" }}>{confirmation.invoiceNumber}</strong>.
                A confirmation email has been sent to{" "}
                <strong>{confirmation.clientEmail}</strong>.
              </p>
              <div
                className="p-6 md:p-8 rounded-[var(--radius-lg)] text-center"
                style={{
                  background: "#0a3d8f",
                  color: "#ffffff",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-[0.15em] mb-2"
                  style={{ color: "#a8c5ee" }}
                >
                  Your Invoice Number
                </div>
                <div
                  className="text-2xl md:text-3xl font-extrabold tracking-wider mb-2"
                  style={{ color: "#ffffff" }}
                >
                  {confirmation.invoiceNumber}
                </div>
                <div className="text-xs" style={{ color: "#a8c5ee" }}>
                  Keep this for your records
                </div>
              </div>
              <p className="text-sm mt-6" style={{ color: "var(--color-fg-muted)" }}>
                Did not receive the email? Check your spam folder or contact us at{" "}
                <a href="mailto:photoboothhireinwales@gmail.com" style={{ color: "var(--color-accent)" }}>
                  photoboothhireinwales@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow="Booking"
        title="Book Your 2027 Event"
        description="Secure your date for 2027 with a deposit. We will confirm availability and send full details within 24 hours of your booking request."
        heroBg="/assets/wedding2.webp"
      />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3 grid gap-8" style={{ maxWidth: "1240px", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>

          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Booking Form</span>
            <h2 className="section-title">Confirm your booking</h2>
            <div className="availability-notice mb-5">
              📅 Currently booking events from March 2027 onwards across Swansea, Cardiff and South Wales.
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput id="booking-fullName" name="fullName" label="Full Name" type="text" required />
                <FormInput id="booking-email" name="email" label="Email" type="email" required />
                <FormInput id="booking-phone" name="phoneNumber" label="Phone Number" type="tel" required />
                <FormInput id="booking-eventDate" name="eventDate" label="Event Date" type="date" min="2027-03-01" required />
                <FormInput id="booking-location" name="eventLocation" label="Venue / Location" type="text" required />
                <div className="flex flex-col">
                  <label htmlFor="booking-boothType" className="block text-[0.72rem] font-extrabold uppercase tracking-[0.1em] mb-1" style={{ color: "var(--color-fg-muted)", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}>Booth Type</label>
                  <select
                    id="booking-boothType" name="boothType" required
                    value={boothType} onChange={(e) => setBoothType(e.target.value)}
                    className="w-full px-4 py-3 rounded-[var(--radius-sm)] border-0 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-fg)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)", appearance: "auto" }}
                  >
                    <option value="">Select booth type</option>
                    {Object.keys(PRICES).map((k) => <option key={k}>{k}</option>)}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="booking-duration" className="block text-[0.72rem] font-extrabold uppercase tracking-[0.1em] mb-1" style={{ color: "var(--color-fg-muted)", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}>Package Duration</label>
                  <select
                    id="booking-duration" name="packageDuration" required
                    value={duration} onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-3 rounded-[var(--radius-sm)] border-0 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-fg)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)", appearance: "auto" }}
                  >
                    <option value="">Select duration</option>
                    {["2 Hours","3 Hours","4 Hours","5 Hours"].map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <FormSelect id="booking-service" name="service" label="Service" required options={["Wedding","Birthday Party","Prom","Graduation","Corporate Event","Private Party"]} />
                <FormInput id="booking-guestCount" name="guestCount" label="Guest Numbers" type="text" />
                <div className="flex flex-col">
                  <label className="block text-[0.72rem] font-extrabold uppercase tracking-[0.1em] mb-1" style={{ color: "var(--color-fg-muted)", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}>Price (£)</label>
                  <input readOnly value={price === "" ? "" : `£${price}`} className="w-full px-4 py-3 rounded-[var(--radius-sm)] border-0 text-sm outline-none" style={{ background: "rgba(255,255,255,0.03)", color: "var(--color-accent)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)", fontWeight: 700 }} placeholder="Select booth + duration" />
                  <input type="hidden" name="price" value={price} />
                </div>
              </div>
              <FormTextarea id="booking-message" name="message" label="Message" placeholder="Start time, end time, parking, access notes, or anything else we should know." />
              {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again.</p>}
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Processing…" : "Confirm Booking"}
              </button>
            </form>
          </div>

          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Booking Notes</span>
            <h2 className="section-title">What the booking flow does</h2>
            <ul className="bullet-list text-sm mb-6">
              <li>Generates a unique invoice number for your booking</li>
              <li>Sends a booking confirmation email with full invoice details</li>
              <li>Sends an admin notification with all event details</li>
              <li>Shan will follow up with payment link and event details</li>
            </ul>
            <p className="text-sm">This mirrors the booking flow for the UK site, adapted for Vercel route handlers in this Swansea project.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
