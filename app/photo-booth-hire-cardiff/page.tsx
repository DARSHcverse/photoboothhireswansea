"use client";

import { useState } from "react";
import Link from "next/link";
import { useReveal } from "../components/useReveal";

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

const booths = [
  {
    title: "Selfie Pod",
    price: "From £250",
    desc: "A sleek, modern open-air setup that fits any venue and encourages group shots and guest interaction. The most popular choice for Cardiff weddings, corporate events, and birthday parties.",
    items: ["Sleek open-air design", "Perfect for group shots", "Most popular for weddings, brands, and birthdays"],
  },
  {
    title: "Glam Booth",
    price: "From £300",
    desc: "Hollywood-style black and white portraits taken in a sleek open air setup. Dramatic lighting, glamour prints, and a finish that looks stunning every time.",
    items: ["Full-length portraits with glam styling", "Black and white or colour finish", "Ideal for weddings and premium events"],
  },
  {
    title: "Enclosed Booth",
    price: "From £250",
    desc: "A nostalgic, private photo booth experience. Perfect for school proms, weddings with a vintage theme, and guests who love the classic photo strip feel.",
    items: ["Classic enclosed booth feel", "Great for proms and vintage-style weddings", "Perfect for guests who love photo strips"],
  },
];

const pillars = [
  { icon: "📸", title: "Canon R100 image quality",  desc: "Mirrorless image quality and studio lighting deliver photos that look sharp, vibrant, and premium for every Cardiff event." },
  { icon: "🖨️", title: "Unlimited instant prints",  desc: "Every package includes unlimited instant prints, so guests leave with proper keepsakes on the night." },
  { icon: "🚐", title: "Cardiff covered as standard",desc: "Cardiff is just one hour from our Swansea base — included within our standard service area at no extra travel charge." },
  { icon: "👩‍💼", title: "Professional attendants", desc: "Every booking includes a DBS checked attendant who handles setup, hosting, and pack-down." },
];

const events = [
  { pill: "Weddings",       title: "Wedding Photo Booth Hire Cardiff", desc: "Soft glam lighting, premium strips, and a setup that stays full from first dance to final song." },
  { pill: "Corporate",      title: "Corporate & Brand Events",         desc: "Professional hosting, branded templates, and a booth experience that feels fun without losing its edge." },
  { pill: "Birthdays",      title: "Birthday Parties",                  desc: "Playful props, colourful prints, and a flexible setup for homes, halls, restaurants, and hotels." },
  { pill: "Proms",          title: "School Proms",                       desc: "Fast queues, sharp photos, and a safe, organised setup for Year 11, Sixth Form, and Year 13 leavers." },
  { pill: "Christmas",      title: "Christmas Parties",                  desc: "Festive backdrops, props, and a booth that keeps office and venue parties buzzing." },
  { pill: "Brand",          title: "Brand Activations",                  desc: "Branded overlays and print templates for launches, pop-ups, and client-facing campaigns." },
];

const faqs = [
  {
    q: "Do you travel to Cardiff from Swansea?",
    a: "Yes — Cardiff is just one hour from our Swansea base and falls within our standard service area. We cover Cardiff events regularly and there is no extra travel charge for Cardiff bookings.",
  },
  {
    q: "What areas of Cardiff do you cover?",
    a: "We cover all areas of Cardiff including Cardiff Bay, Canton, Roath, Pontprennau, Whitchurch, Llanishen, Heath, Splott, Tremorfa and all surrounding neighbourhoods.",
  },
  {
    q: "Do you cover venues near Cardiff?",
    a: "Yes, we also serve Bridgend, Pontypridd, Barry, Penarth, Caerphilly and the wider Vale of Glamorgan. If you are unsure whether your venue is covered, get in touch and we will confirm.",
  },
  {
    q: "How do I book a photo booth in Cardiff?",
    a: "The process is exactly the same as any booking. Use our Quick Quote form to tell us your event details, we will confirm availability and send you a quote, then you secure the date with a deposit.",
  },
  {
    q: "What is the minimum hire for Cardiff events?",
    a: "Our minimum hire is 2 hours for all locations including Cardiff. Most weddings and parties book 3 to 4 hours.",
  },
];

export default function PhotoBoothHireCardiffPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useReveal([openFaq]);

  return (
    <main>
      {/* HERO */}
      <section className="home-hero">
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "100%" }}>
          <div className="hero-stage">
            <div
              className="hero-slide is-active"
              style={{ backgroundImage: "url('/assets/hero-banner-1.webp')" }}
              aria-hidden="true"
            />
            <div className="hero-overlay">
              <div className="hero-overlay-inner mx-auto w-full px-4 md:px-3" style={{ maxWidth: "1240px" }}>
                <div className="home-hero-content reveal">
                  <h1 className="home-hero-title">PHOTO BOOTH HIRE CARDIFF</h1>
                  <p className="home-hero-subtitle">
                    Serving Cardiff, Swansea and all of South Wales — weddings, parties, corporate events and school proms.
                  </p>
                  <div className="hero-button-row">
                    <Link href="/quickquote" className="btn btn-primary hero-button">
                      Get a Quick Quote
                    </Link>
                    <Link href="/packages" className="btn btn-secondary hero-button hero-button-secondary">
                      View Packages
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "clamp(4rem,7vw,6rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Cardiff &amp; South Wales</span>
            <h2 className="section-title">Cardiff covered as standard from our Swansea base</h2>
            <p style={{ fontSize: "1.04rem" }}>
              Based in Swansea, we cover Cardiff and the whole of South Wales for every type of event. Cardiff is just
              one hour from our base — we travel there regularly and include it within our standard service area with
              no extra travel charge.
            </p>
          </div>
        </div>
      </section>

      {/* BOOTH TYPES */}
      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">Our Booths</span>
            <h2 className="section-title">Three booth setups, one Cardiff service</h2>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {booths.map(({ title, price, desc, items }) => (
              <article key={title} className="reveal flex flex-col gap-4 p-6 rounded-[var(--radius-lg)]" style={cardStyle}>
                <span className="package-badge">{price}</span>
                <h3
                  className="text-lg font-extrabold text-white m-0"
                  style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)", letterSpacing: "-0.03em" }}
                >
                  {title}
                </h3>
                <p className="text-sm m-0">{desc}</p>
                <ul className="bullet-list text-sm flex-1">
                  {items.map((i) => <li key={i}>{i}</li>)}
                </ul>
                <Link href="/packages" className="btn btn-secondary text-[0.82rem] min-h-[44px]">See Pricing</Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="pill-note text-xs">Prices include VAT. Free travel within 25 miles of Swansea. Cardiff covered at no extra charge.</span>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title">Why Cardiff clients book Photo Booth Hire Swansea</h2>
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            {pillars.map(({ icon, title, desc }) => (
              <article key={title} className="reveal p-6 rounded-[var(--radius-lg)] flex flex-col gap-3" style={cardStyle}>
                <div className="text-3xl">{icon}</div>
                <h3 className="text-base font-extrabold text-white m-0" style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}>{title}</h3>
                <p className="text-sm m-0">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-mist" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">Events We Cover</span>
            <h2 className="section-title">Cardiff events we love hosting</h2>
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            {events.map(({ pill, title, desc }) => (
              <article key={title} className="reveal flex flex-col gap-3 p-5 rounded-[var(--radius-lg)]" style={cardStyle}>
                <span
                  className="text-[0.7rem] font-extrabold uppercase tracking-[0.12em] px-3 py-1 rounded-full w-fit"
                  style={{ color: "var(--color-accent)", background: "rgba(26,111,212,0.12)", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}
                >
                  {pill}
                </span>
                <h3 className="text-base font-extrabold text-white m-0" style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)", letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="text-sm m-0 flex-1">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CARDIFF FAQ */}
      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">Cardiff FAQs</span>
            <h2 className="section-title">Answers for Cardiff bookings</h2>
          </div>
          <div className="grid gap-3 max-w-3xl mx-auto">
            {faqs.map(({ q, a }, i) => (
              <div
                key={q}
                className="reveal faq-item"
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
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{q}</span>
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-transform duration-250"
                    style={{ color: "var(--color-accent)", background: "rgba(26,111,212,0.08)", transform: openFaq === i ? "rotate(45deg)" : "none" }}
                  >+</span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? "400px" : "0" }}>
                  <div className="px-5 pb-5"><p className="text-sm m-0">{a}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div
            className="reveal text-center p-10 md:p-14 rounded-[var(--radius-xl)]"
            style={cardStyle}
          >
            <h2 className="section-title mx-auto" style={{ maxWidth: "32rem" }}>Ready to book your Cardiff event?</h2>
            <p className="mx-auto mb-8" style={{ maxWidth: "28rem" }}>
              Tell us the date, venue, and event type and we&rsquo;ll come back with availability, package advice, and a tailored quote for Cardiff.
            </p>
            <Link href="/quickquote" className="btn btn-light">Get a Quick Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
