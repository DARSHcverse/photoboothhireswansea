"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";
import { FormInput, FormSelect, FormTextarea } from "../components/FormCard";
import { useReveal } from "../components/useReveal";

const PRICES: Record<string, Record<string, number>> = {
  "Selfie Pod":     { "2 Hours": 220, "3 Hours": 295, "4 Hours": 370, "5 Hours": 440 },
  "Magic Mirror":   { "2 Hours": 270, "3 Hours": 350, "4 Hours": 430, "5 Hours": 500 },
  "Enclosed Booth": { "2 Hours": 220, "3 Hours": 295, "4 Hours": 370, "5 Hours": 440 },
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
  const price = boothType && duration ? PRICES[boothType]?.[duration] ?? "" : "";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) {
        const { invoiceUrl } = await res.json().catch(() => ({}));
        setStatus("sent");
        if (invoiceUrl) window.location.href = invoiceUrl;
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <PageHero eyebrow="Booking" title="Secure Your Date" description="Complete the booking form below and we'll create your invoice. If Stripe is configured, you'll be taken straight to secure payment." heroBg="/assets/wedding2.webp" />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3 grid gap-8" style={{ maxWidth: "1240px", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>

          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Booking Form</span>
            <h2 className="section-title">Confirm your booking</h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput id="booking-fullName" name="fullName" label="Full Name" type="text" required />
                <FormInput id="booking-email" name="email" label="Email" type="email" required />
                <FormInput id="booking-phone" name="phoneNumber" label="Phone Number" type="tel" required />
                <FormInput id="booking-eventDate" name="eventDate" label="Event Date" type="date" required />
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
                <div className="flex flex-col">
                  <label className="block text-[0.72rem] font-extrabold uppercase tracking-[0.1em] mb-1" style={{ color: "var(--color-fg-muted)", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}>Price (£)</label>
                  <input readOnly value={price === "" ? "" : `£${price}`} className="w-full px-4 py-3 rounded-[var(--radius-sm)] border-0 text-sm outline-none" style={{ background: "rgba(255,255,255,0.03)", color: "var(--color-accent)", boxShadow: "inset 0 0 0 1px rgba(255,145,76,0.18)", fontWeight: 700 }} placeholder="Select booth + duration" />
                  <input type="hidden" name="price" value={price} />
                </div>
              </div>
              <FormTextarea id="booking-message" name="message" label="Message" placeholder="Start time, end time, parking, access notes, or anything else we should know." />
              {status === "sent" && <p className="text-sm" style={{ color: "var(--color-accent)" }}>✓ Booking confirmed! Check your email for next steps.</p>}
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
              <li>Creates a Stripe invoice using your selected booth and duration</li>
              <li>Sends a booking confirmation email to the client</li>
              <li>Sends an admin notification with all event details</li>
              <li>Opens the secure payment invoice after submission when configured</li>
            </ul>
            <p className="text-sm">This mirrors the booking flow for the UK site, adapted for Vercel route handlers in this Swansea project.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
