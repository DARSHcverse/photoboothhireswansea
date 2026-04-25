"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { FormInput, FormSelect, FormTextarea } from "../components/FormCard";
import { useReveal } from "../components/useReveal";

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function QuickQuotePage() {
  useReveal([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, formType: "quickquote" }) });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <PageHero eyebrow="Quick Quote" title="Get A Quick Quote" description="Send the basics and Shan will come back with pricing guidance, availability, and the right booth recommendation for your Swansea or surrounding area event." heroBg="/assets/hero-banner-4.webp" />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3 grid gap-8" style={{ maxWidth: "1240px", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>

          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Quote Form</span>
            <h2 className="section-title">Tell us about the event</h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput id="quote-fullName" name="fullName" label="Full Name" type="text" required />
                <FormInput id="quote-email" name="email" label="Email" type="email" required />
                <FormInput id="quote-phone" name="phoneNumber" label="Phone Number" type="tel" required />
                <FormInput id="quote-eventDate" name="eventDate" label="Event Date" type="date" required />
                <FormInput id="quote-location" name="eventLocation" label="Venue / Location" type="text" required />
                <FormSelect id="quote-duration" name="packageDuration" label="Package Duration" required options={["2 Hours","3 Hours","4 Hours","5 Hours"]} />
                <FormSelect id="quote-service" name="service" label="Service" required options={["Wedding","Birthday Party","Prom","Graduation","Corporate Event","Private Party"]} />
              </div>
              <FormTextarea id="quote-message" name="message" label="Message" placeholder="Timings, guest numbers, preferred booth style, or any venue notes." />
              {status === "sent" && <p className="text-sm" style={{ color: "var(--color-accent)" }}>✓ Quote request sent! We&rsquo;ll be in touch soon.</p>}
              {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again.</p>}
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send Quote Request"}
              </button>
            </form>
          </div>

          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">What Happens Next?</span>
            <h2 className="section-title">Fast reply, simple next step.</h2>
            <ul className="bullet-list text-sm mb-6">
              <li>We review the date, venue, and booth requirements</li>
              <li>You get the best-fit package guidance for your event</li>
              <li>Booking can be completed online when you&rsquo;re ready</li>
            </ul>
            <p className="text-sm mb-6">If your date is urgent, use the phone icon in the header or move straight to the booking page.</p>
            <Link href="/booking" className="btn btn-secondary">Go to Booking</Link>
          </div>

        </div>
      </section>
    </main>
  );
}
