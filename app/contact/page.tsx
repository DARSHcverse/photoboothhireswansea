"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";
import { FormInput, FormSelect, FormTextarea } from "../components/FormCard";
import { useReveal } from "../components/useReveal";

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function ContactPage() {
  useReveal([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <PageHero eyebrow="Get a Quote" title="Get a Quote" description="Tell us about your event and Shan will come back with availability, package guidance, and a tailored quote for Swansea and surrounding areas." heroBg="/assets/hero-banner-4.webp" />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3 grid gap-8" style={{ maxWidth: "1240px", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>

          {/* Form card */}
          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Enquiry Form</span>
            <h2 className="section-title">Let&rsquo;s plan your event</h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput id="contact-fullName" name="fullName" label="Full Name" type="text" required />
                <FormInput id="contact-email" name="email" label="Email" type="email" required />
                <FormInput id="contact-phoneNumber" name="phoneNumber" label="Phone" type="tel" required />
                <FormSelect id="contact-service" name="service" label="Event Type" required options={["Wedding","Prom","Graduation","Corporate Event","Birthday Party","Other Celebration"]} />
                <FormInput id="contact-eventDate" name="eventDate" label="Event Date" type="date" required />
                <FormInput id="contact-eventLocation" name="eventLocation" label="Venue / Location" type="text" required />
                <FormSelect id="contact-packageInterest" name="packageInterest" label="Package Interest" options={["Selfie Pod","Glam Booth","Enclosed Booth","Not sure yet"]} />
              </div>
              <FormTextarea id="contact-message" name="message" label="Message" placeholder="Tell us about your event, timings, guest numbers, or any styling ideas." />
              {status === "sent" && <p className="text-sm" style={{ color: "var(--color-accent)" }}>✓ Enquiry sent! We&rsquo;ll be in touch soon.</p>}
              {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>}
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send My Enquiry"}
              </button>
            </form>
          </div>

          {/* Info panel */}
          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Contact Details</span>
            <h2 className="section-title">Speak to Shan</h2>
            <div className="grid gap-5 mb-6">
              {[
                { icon: "📧", strong: "photoboothhireinwales@gmail.com",     detail: "Email for quotes, availability, and booking questions." },
                { icon: "📱", strong: "[SWANSEA_PHONE_NUMBER]",    detail: "Available for event enquiries and planning follow-ups." },
                { icon: "📍", strong: "Swansea, Wales, UK", detail: "Covering South Wales and surrounding areas." },
              ].map(({ icon, strong, detail }) => (
                <div key={strong} className="flex gap-3 items-start">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <strong className="block text-white text-sm font-bold">{strong}</strong>
                    <p className="text-sm m-0">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mb-6">
              {[["IG","Instagram"],["TT","TikTok"],["FB","Facebook"],["PI","Pinterest"]].map(([l,a]) => (
                <a key={l} href="#" aria-label={a} className="inline-flex items-center justify-center w-10 h-10 rounded-full text-xs font-bold" style={{ color: "var(--color-fg-muted)", background: "rgba(255,255,255,0.04)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}>{l}</a>
              ))}
            </div>
            <div
              className="p-6 rounded-[var(--radius-lg)] flex flex-col gap-2"
              style={{ background: "rgba(255,255,255,0.03)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
            >
              <span className="eyebrow">Map</span>
              <h3 className="text-sm font-bold text-white m-0" style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}>Swansea &amp; surrounding areas coverage</h3>
              <p className="text-sm m-0">Replace this area with an embedded map when you&rsquo;re ready to connect one.</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
