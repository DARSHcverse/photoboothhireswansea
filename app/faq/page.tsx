"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { useReveal } from "../components/useReveal";

const faqs = [
  { q: "Do you cover all of Swansea?", a: "Yes, we cover all Swansea boroughs and surrounding areas including Cardiff, Bridgend, Neath, Port Talbot, Llanelli, Barry, Penarth and Caerphilly. Travel is included across those areas; anywhere further afield we will confirm any travel cost before you book." },
  { q: "Are you insured?", a: "Yes. Full public liability insurance and PAT testing on all equipment are in place from launch in March 2027, and certificates are available to your venue on request. Most venues in Swansea and Cardiff ask suppliers for both before letting them load in, so it is worth checking your venue's requirements early and we will send whatever they need." },
  { q: "Are your attendants DBS checked?", a: "Yes. All attendants hold a current DBS (Disclosure and Barring Service) check and are experienced working with all ages, including school and youth events." },
  { q: "What's included in your packages?", a: "Every package includes unlimited photos, instant prints, props, a custom photostrip design, a professional attendant, and your choice of backdrop. USB digital images and online gallery are included from 3-hour packages. Guest book is included in 4-hour and 5-hour packages. No hidden fees." },
  { q: "How much space do you need?", a: "We recommend a clear flat area of at least 3m × 3m for the booth and backdrop, plus room for a short queue. We'll confirm setup requirements once you share your venue details." },
  { q: "How far in advance should I book?", a: "It depends entirely on your date. Peak dates — summer Saturdays between May and September, and anything in December — are typically booked 9 to 12 months ahead, because there are only so many Saturdays in a year. Quieter midweek dates and January to March can often be booked just a few weeks out. Last-minute enquiries are genuinely worth making, as cancellations and midweek gaps do come up." },
  { q: "How early should I book a photo booth for a 2027 wedding?", a: "For a summer 2027 Saturday, 9 to 12 months ahead is sensible — most couples book their photo booth shortly after confirming the venue. Winter weddings generally need 6 to 9 months. The earlier you book, the more choice you have over booth type, backdrop and strip design, and the rate agreed at booking is the rate you pay." },
  { q: "Do photo booths get fully booked in Swansea?", a: "Peak dates do. Summer Saturdays, the whole of December and bank holiday weekends are the first to go, often many months ahead. Midweek dates and January to March stay available much longer. If your date is flexible, there is usually far more availability than people expect." },
  { q: "Is it too late to book a photo booth for my event?", a: "Often not. Cancellations happen and midweek dates sit open, and we have set up for events confirmed inside a fortnight. What we cannot do is free up a peak Saturday that is already taken. Checking takes a minute and costs nothing — send us your date and venue and we will tell you straight away." },
  { q: "Can I customise the photostrip design?", a: "Yes. Every package includes a custom photostrip design. Share your colours, theme, or event name and we'll create a layout that fits your event perfectly." },
  { q: "What payment methods do you accept?", a: "We accept secure online payment via Stripe. A deposit is required to secure your date, with the balance due before the event." },
  { q: "Do you provide a backdrop?", a: "Yes, a standard backdrop is included in every package. Premium backdrops and neon signs are available as add-ons. Visit the Backdrop page to see options." },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);
  useReveal([open]);

  return (
    <main>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Frequently Asked Questions"
        description="A few of the things clients usually ask before booking their booth experience."
        heroBg="/assets/hero-banner-1.webp"
      />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="grid gap-3 max-w-3xl mx-auto">
            {faqs.map(({ q, a }, i) => (
              <div
                key={q}
                className="reveal rounded-[var(--radius-lg)] overflow-hidden"
                style={{
                  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 14px 34px rgba(0,0,0,0.2)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left border-0 bg-transparent"
                  style={{ color: "var(--color-white)", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)", fontSize: "1rem", fontWeight: 700 }}
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{q}</span>
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-transform duration-250"
                    style={{ color: "var(--color-accent)", background: "rgba(255,145,76,0.08)", transform: open === i ? "rotate(45deg)" : "none" }}
                  >+</span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? "400px" : "0" }}>
                  <div className="px-5 pb-5"><p className="text-sm m-0">{a}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div
            className="reveal text-center p-10 md:p-14 rounded-[var(--radius-xl)]"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
            }}
          >
            <h2 className="section-title mx-auto" style={{ maxWidth: "28rem" }}>Still have a question?</h2>
            <p className="mx-auto mb-8" style={{ maxWidth: "24rem" }}>Send us your event details and Shan will come back with tailored answers and a quote.</p>
            <Link href="/quickquote" className="btn btn-light">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
