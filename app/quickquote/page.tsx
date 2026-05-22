"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { Field, FormInput, FormSelect, FormTextarea, inputCls, inputStyle } from "../components/FormCard";
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
  const [firstName, setFirstName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const submittedName = String(data.fullName || "").trim().split(/\s+/)[0] || "";
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "quickquote" }),
      });
      if (res.ok) {
        setFirstName(submittedName);
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <main>
        <PageHero
          eyebrow="Quick Quote"
          title="Enquiry Sent! 🎉"
          description="Thanks for getting in touch — your enquiry is on its way to Shan."
          heroBg="/assets/hero-banner-4.webp"
        />
        <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
          <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "720px" }}>
            <div className="reveal p-6 md:p-10 rounded-[var(--radius-xl)]" style={cardStyle}>
              <span className="eyebrow">Enquiry received</span>
              <h2 className="section-title">Enquiry Sent! 🎉</h2>
              <p className="text-base mb-5">
                Thanks {firstName || "there"}! We have received your enquiry and you should
                receive a confirmation email shortly. Shan will be in touch within 24 hours.
              </p>
              <p className="text-sm" style={{ color: "var(--color-fg-muted)" }}>
                Did not receive the email? Check your spam folder or contact us at{" "}
                <a href="mailto:photoboothhireinwales@gmail.com" style={{ color: "var(--color-accent)" }}>
                  photoboothhireinwales@gmail.com
                </a>
                .
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/packages" className="btn btn-primary">View Packages</Link>
                <Link href="/gallery" className="btn btn-secondary">See Gallery</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow="Quick Quote"
        title="Check Your 2027 Date"
        description="We are now taking advance bookings for events from March 2027 onwards. Fill in the form below and Shan will come back to you within 24 hours with availability and a tailored quote."
        heroBg="/assets/hero-banner-4.webp"
      />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3 grid gap-8" style={{ maxWidth: "1240px", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>

          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Quote Form</span>
            <h2 className="section-title">Tell us about the event</h2>
            <div className="availability-notice mb-5">
              📅 Currently booking events from March 2027 onwards across Swansea, Cardiff and South Wales.
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput id="quote-fullName" name="fullName" label="Full Name" type="text" required />
                <FormInput id="quote-email" name="email" label="Email" type="email" required />
                <FormInput id="quote-phone" name="phoneNumber" label="Phone Number" type="tel" required />
                <Field id="quote-eventDate" label="Event Date">
                  <div>
                    <input
                      id="quote-eventDate"
                      name="eventDate"
                      type="date"
                      min="2027-03-01"
                      required
                      className={inputCls}
                      style={inputStyle}
                      aria-describedby="quote-eventDate-hint"
                    />
                    <p id="quote-eventDate-hint" className="field-hint">
                      Please select a date from March 2027 onwards
                    </p>
                  </div>
                </Field>
                <FormInput id="quote-location" name="eventLocation" label="Venue / Location" type="text" required />
                <FormSelect id="quote-duration" name="packageDuration" label="Package Duration" required options={["2 Hours","3 Hours","4 Hours","5 Hours"]} />
                <FormSelect id="quote-service" name="service" label="Service" required options={["Wedding","Birthday Party","Prom","Graduation","Corporate Event","Private Party"]} />
                <FormSelect id="quote-packageInterest" name="packageInterest" label="Booth Interest" options={["Selfie Pod","Glam Booth","Enclosed Booth","Not sure yet"]} />
                <FormInput id="quote-guestCount" name="guestCount" label="Guest Numbers" type="text" />
              </div>
              <FormTextarea id="quote-message" name="message" label="Message" placeholder="Timings, guest numbers, preferred booth style, or any venue notes." />
              {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again.</p>}
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Check My 2027 Date"}
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
