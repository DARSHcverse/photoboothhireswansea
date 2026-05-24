"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReveal } from "./components/useReveal";

/* ── Hero slideshow ─────────────────────────────────────────────── */
const heroSlides = [
  "/assets/hero-banner-1.webp",
  "/assets/hero-banner-2.webp",
  "/assets/hero-banner-3.webp",
  "/assets/hero-banner-4.webp",
];

const cardImageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";

const launchReasons = [
  {
    icon: "📅",
    title: "Best Date Selection",
    text: "Popular summer weekends and December dates go fast. Early bookings get first pick.",
  },
  {
    icon: "🏷️",
    title: "2027 Pricing Locked In",
    text: "Book now and your price is fixed at our 2027 rates. No surprises closer to the date.",
  },
  {
    icon: "⭐",
    title: "Personalised from the Start",
    text: "Early bookings get more time to design custom strips, choose backdrops and plan extras.",
  },
];

/* ── Packages data ──────────────────────────────────────────────── */
const packages = [
  {
    hours: "2 Hours", name: "Selfie Pod", price: "£250",
    desc: "Unlimited photos, instant prints, event props, photostrip design, USB digital images, a booth attendant, a standard backdrop, and a custom start screen.",
    items: ["Unlimited photos and instant prints", "Event props and photostrip design", "USB digital images and attendant", "Standard backdrop and custom start screen"],
  },
  {
    hours: "3 Hours", name: "Selfie Pod", price: "£325", popular: true,
    desc: "Everything in the 2-hour package, plus extra prints and an online gallery.",
    items: ["3 hours of booth hire", "All 2-hour inclusions", "Extra prints", "Online gallery"],
  },
  {
    hours: "4 Hours", name: "Selfie Pod", price: "£400",
    desc: "Everything in the 3-hour package, plus your choice of attendant and a traditional guest book.",
    items: ["4 hours of booth hire", "All 3-hour inclusions", "Male or female attendant choice", "Traditional guest book"],
  },
  {
    hours: "5 Hours", name: "Selfie Pod", price: "£470",
    desc: "The full all-inclusive package for events that want the booth running deep into the party.",
    items: ["5 hours of booth hire", "All 4-hour inclusions", "Full all-inclusive package"],
  },
];

/* ── FAQ data ───────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Do you cover all of Swansea?",
    a: "Yes, we cover all Swansea boroughs and surrounding areas including Cardiff, South Wales, and South Wales. Travel fees may apply for events outside South Wales and we'll confirm this when you enquire.",
  },
  {
    q: "Are your attendants DBS checked?",
    a: "Yes. All attendants hold a current DBS (Disclosure and Barring Service) check and are experienced working with all ages, including school and youth events.",
  },
  {
    q: "What's included in your packages?",
    a: "Every package includes unlimited photos, instant prints, props, a custom photostrip design, a professional attendant, and your choice of backdrop. USB digital images and online gallery are included from 3-hour packages. Guest book is included in 4-hour and 5-hour packages. No hidden fees.",
  },
  {
    q: "How much space do you need?",
    a: "We recommend a clear flat area of at least 3m × 3m for the booth and backdrop, plus room for a short queue. We'll confirm setup requirements once you share your venue details.",
  },
];

/* ── Testimonials ───────────────────────────────────────────────── */
const testimonials = [
  { stars: 5, text: '"The booth was packed from the minute it opened. Shan kept the atmosphere fun and the guest book ended up being one of our favourite parts of the night."', name: "Priya & Marcus", event: "Wedding · Swansea" },
  { stars: 5, text: '"Perfect for our Year 11 prom. It felt polished, the students loved it, and everything was managed so professionally from start to finish."', name: "Mrs Patel", event: "Prom · South Wales" },
  { stars: 5, text: '"We booked for a company celebration and the branding looked brilliant. Great service, easy setup, and really strong photo quality."', name: "Olivia R.", event: "Corporate Event · Cardiff Bay" },
];

/* ── Component ──────────────────────────────────────────────────── */
export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Reveal animations
  useReveal([slide]);

  // Hero slider interval
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <main>

      {/* ── Home Hero ─────────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "100%" }}>
          <div className="hero-stage">
            <div className="hero-slides" aria-hidden="true">
              {heroSlides.map((src, i) => (
                <div
                  key={src}
                  className={`hero-slide${i === slide ? " is-active" : ""}`}
                  style={{ backgroundImage: `url('${src}')` }}
                />
              ))}
            </div>

            <div className="hero-overlay">
              <div className="hero-overlay-inner mx-auto w-full px-4 md:px-3" style={{ maxWidth: "1240px" }}>
                <div className="home-hero-content reveal">
                  <span className="pill-note mb-4">🗓️ Now Booking for 2027</span>
                  <h1 className="home-hero-title">PHOTO BOOTH HIRE SWANSEA</h1>
                  <p className="home-hero-subtitle">
                    Swansea&rsquo;s favourite photo booth for weddings, parties and corporate events across South Wales.
                  </p>
                  <div className="hero-button-row">
                    <Link href="/packages" className="btn btn-primary hero-button">
                      View Packages
                    </Link>
                    <Link href="/quickquote" className="btn btn-secondary hero-button hero-button-secondary">
                      Quick Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-dots" aria-label="Hero image selection">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`Show hero image ${i + 1}`}
                  aria-pressed={i === slide}
                  className={`hero-dot${i === slide ? " is-active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Launch Booking Section ─────────────────────────────────── */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div
            className="glass reveal p-6 md:p-8 rounded-[var(--radius-xl)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,111,212,0.14), rgba(10,61,143,0.06)), rgba(18,20,30,0.82)",
              boxShadow: "inset 0 0 0 1px rgba(26,111,212,0.14), 0 30px 60px rgba(0,0,0,0.3)",
            }}
          >
            <div className="section-heading section-heading--split" style={{ margin: "0 0 2rem", maxWidth: "52rem" }}>
              <span className="eyebrow">Launching March 2027</span>
              <h2 className="section-title">Now Taking Advance Bookings</h2>
              <p style={{ fontSize: "1.04rem" }}>
                Photo Booth Hire Swansea officially launches in March 2027 — and we are already taking bookings for
                events from that date onwards. Whether you are planning a summer wedding, a school prom, a corporate
                event or a Christmas party, securing your date now means you get first choice and plenty of time to
                personalise every detail.
              </p>
            </div>

            <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
              {launchReasons.map(({ icon, title, text }) => (
                <article
                  key={title}
                  className="glass reveal p-5 rounded-[var(--radius-lg)]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015)), rgba(10,14,24,0.72)",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.24)",
                  }}
                >
                  <div className="text-2xl mb-3" aria-hidden="true">{icon}</div>
                  <h3
                    className="text-base font-extrabold text-white m-0 mb-2"
                    style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)", letterSpacing: "-0.02em" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm m-0">{text}</p>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <Link href="/quickquote" className="btn btn-primary">Check Your Date</Link>
              <Link href="/packages" className="btn btn-secondary">View Packages</Link>
            </div>

            <p className="text-sm m-0" style={{ color: "var(--color-fg-muted)" }}>
              Currently booking: Spring 2027 · Summer 2027 · Christmas 2027
            </p>
          </div>
        </div>
      </section>

      {/* ── Seasonal Banner ─────────────────────────────────────────── */}
      <section className="py-6">
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div
            className="reveal flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-[var(--radius-lg)]"
            style={{
              background: "linear-gradient(135deg, rgba(255,145,76,0.12), rgba(255,110,129,0.07)), rgba(24,24,24,0.88)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "inset 0 0 0 1px rgba(255,145,76,0.14), 0 24px 56px rgba(0,0,0,0.28)",
            }}
          >
            <div className="flex-1">
              <span className="eyebrow">Now Booking</span>
              <h2
                className="text-xl md:text-2xl font-extrabold text-white m-0"
                style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)", letterSpacing: "-0.03em" }}
              >
                Now Booking — 2027
              </h2>
            </div>
            <p className="m-0 flex-1" style={{ color: "var(--color-fg-muted)", alignSelf: "center" }}>
              Now taking advance bookings for events from March 2027 across Swansea and South Wales. Summer weddings,
              proms and Christmas parties are already being requested — secure your date early.
            </p>
          </div>
        </div>
      </section>

      {/* ── About + Home Cards ──────────────────────────────────────── */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading section-heading--split reveal">
            <span className="eyebrow">About Photo Booth Hire Swansea</span>
            <h2 className="section-title">All-inclusive photo booth hire across Swansea.</h2>
            <p style={{ fontSize: "1.04rem" }}>
              Photo Booth Hire Swansea brings a fresh, all-inclusive approach to photo booth hire in Swansea. Unlike most UK
              providers who charge extra for USB drives, online galleries, and guest books, we include everything in
              every package. Powered by Canon R100 mirrorless cameras and studio-grade lighting, our booths deliver
              photos that are sharp, vibrant, and worth keeping.
            </p>
          </div>

          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))" }}>
            {[
              { img: "/assets/wedding.webp",     alt: "Wedding photo booth hire Swansea South Wales",   title: "Weddings",                  desc: "Elegant prints, custom strip layouts, guest book add-ons, and a booth that feels part of the room.", href: "/events/weddings" },
              { img: "/assets/graduation.jpg",   alt: "Prom photo booth hire Swansea Wales",            title: "Proms & Graduations",       desc: "Fast queues, sharp photos, and a safe, organised setup for Year 11, Sixth Form, and uni celebrations.", href: "/events/proms" },
              { img: "/assets/corporate.webp",   alt: "Corporate photo booth hire Swansea Cardiff",     title: "Brand & Corporate Events",  desc: "Branded prints, on-point presentation, and a booth that fits launches, activations, and team nights.", href: "/events/corporate" },
              { img: "/assets/packages.webp",    alt: "Photo booth package setup",                       title: "Transparent Packages",      desc: "Simple pricing with delivery, setup, unlimited prints, and optional upgrades when you want more.", href: "/packages" },
            ].map(({ img, alt, title, desc, href }) => (
              <article
                key={title}
                className="reveal overflow-hidden rounded-[var(--radius-lg)] flex flex-col"
                style={{
                  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={img} alt={alt} fill sizes={cardImageSizes} className="object-cover" />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3
                    className="text-base font-extrabold text-white m-0"
                    style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)", letterSpacing: "-0.02em" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm m-0">{desc}</p>
                  <Link href={href} className="btn btn-secondary mt-auto text-[0.82rem] min-h-[44px]">
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Event Links ─────────────────────────────────────────────── */}
      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">Events</span>
            <h2 className="section-title">We cover all event types across Swansea.</h2>
            <p style={{ fontSize: "1.04rem" }}>
              Weddings, corporate parties, school proms and formals, birthday celebrations, brand activations, and
              community events. Not sure which booth suits your event? Get a quick quote and we&rsquo;ll help you choose.
            </p>
          </div>

          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))" }}>
            {[
              { pill: "Weddings",   title: "Wedding Photo Booth Hire",       desc: "Soft glam lighting, premium strips, and a setup that stays full from first dance to final song.",       accent: "var(--color-rose)",       href: "/events/weddings" },
              { pill: "Proms",      title: "Prom & Graduation Events",       desc: "DBS-checked staff, fast queues, and premium output for sixth form, Year 11, and university leavers.",   accent: "var(--color-sky-bright)", href: "/events/proms" },
              { pill: "Corporate",  title: "Corporate & Brand Events",       desc: "Professional hosting, branded templates, and a booth experience that feels fun without losing its edge.", accent: "var(--color-accent)",    href: "/events/corporate" },
              { pill: "Birthdays",  title: "Birthdays & Private Parties",    desc: "Playful props, colourful prints, and a flexible setup for homes, halls, restaurants, and hotels.",       accent: "var(--color-rose)",       href: "/events/birthdays" },
              { pill: "Coverage",   title: "Swansea & Surrounding Areas",     desc: "Covering South Wales and surrounding areas for weddings, corporate events, school proms, and private parties.", accent: "var(--color-sky-bright)", href: "/photo-booth-hire-cardiff" },
            ].map(({ pill, title, desc, accent, href }) => (
              <article
                key={title}
                className="reveal flex flex-col gap-3 p-5 rounded-[var(--radius-lg)]"
                style={{
                  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
                }}
              >
                <span
                  className="text-[0.7rem] font-extrabold uppercase tracking-[0.12em] px-3 py-1 rounded-full w-fit"
                  style={{ color: accent, background: `color-mix(in srgb, ${accent} 12%, transparent)`, fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}
                >
                  {pill}
                </span>
                <h3
                  className="text-base font-extrabold text-white m-0"
                  style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)", letterSpacing: "-0.02em" }}
                >
                  {title}
                </h3>
                <p className="text-sm m-0 flex-1">{desc}</p>
                <Link href={href} className="btn btn-primary text-[0.82rem] min-h-[44px] mt-auto w-fit">
                  Explore
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages (preview) ──────────────────────────────────────── */}
      <section className="bg-mist" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">Packages</span>
            <h2 className="section-title">Straightforward UK pricing by booth and hire length.</h2>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))" }}>
            {packages.map(({ hours, name, price, popular, desc, items }) => (
              <article
                key={`${name}-${hours}`}
                className="reveal flex flex-col gap-4 p-6 rounded-[var(--radius-lg)]"
                style={popular ? {
                  background: "linear-gradient(180deg, rgba(255,145,76,0.14), rgba(255,110,129,0.08)), rgba(20,20,20,0.88)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  boxShadow: "inset 0 0 0 1px rgba(255,145,76,0.22), 0 24px 64px rgba(255,145,76,0.18)",
                  outline: "1.5px solid rgba(255,145,76,0.3)",
                } : {
                  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
                }}
              >
                {popular && <span className="popular-label">Most Popular</span>}
                <span className="package-badge">{hours}</span>
                <div
                  className="text-[1.2rem] font-extrabold uppercase text-white"
                  style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)", letterSpacing: "-0.03em" }}
                >
                  {name}
                </div>
                <div
                  className="font-extrabold text-white"
                  style={{ fontSize: "clamp(2.2rem,6vw,3.3rem)", lineHeight: 0.92, letterSpacing: "-0.06em", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}
                >
                  {price}
                </div>
                <p className="text-sm m-0">{desc}</p>
                <ul className="bullet-list text-sm flex-1">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <span className="pill-note text-xs">Includes everything — no hidden extras.</span>
                <Link href="/booking" className="btn btn-secondary text-[0.82rem] min-h-[44px]">
                  Book This Package
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-6">
            <span className="pill-note text-xs">Prices include VAT. Free travel within 25 miles of Swansea. Cardiff covered at no extra charge.</span>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────── */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-title">What clients say when the booth hits exactly right.</h2>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))" }}>
            {testimonials.map(({ stars, text, name, event }) => (
              <article
                key={name}
                className="reveal flex flex-col gap-3 p-6 rounded-[var(--radius-lg)]"
                style={{
                  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
                }}
              >
                <div className="text-[1.1rem] tracking-[0.08em]" style={{ color: "var(--color-accent)" }}>
                  {"★".repeat(stars)}
                </div>
                <p className="text-sm flex-1">{text}</p>
                <div>
                  <h3
                    className="text-sm font-bold text-white m-0"
                    style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}
                  >
                    {name}
                  </h3>
                  <p className="text-xs m-0" style={{ color: "var(--color-fg-faint)" }}>{event}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/testimonials" className="btn btn-primary">Read More Reviews</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">A few questions before you lock the date.</h2>
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
                    style={{
                      color: "var(--color-accent)",
                      background: "rgba(255,145,76,0.08)",
                      transform: openFaq === i ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? "400px" : "0" }}
                >
                  <div className="px-5 pb-5">
                    <p className="text-sm m-0">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────────── */}
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
            <h2 className="section-title mx-auto" style={{ maxWidth: "32rem" }}>
              Ready to blur the line between entertainment and keepsake?
            </h2>
            <p className="mx-auto mb-8" style={{ maxWidth: "28rem" }}>
              Tell us the date, venue, and event type and Shan will come back with availability, package advice, and a
              tailored quote.
            </p>
            <Link href="/quickquote" className="btn btn-light">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section aria-label="Service areas" className="sr-only">
        Photo Booth Hire Swansea serves all areas of Swansea and South Wales including Cardiff,
        Bridgend, Neath, Port Talbot, Llanelli, Barry, Penarth, Caerphilly, Pontypridd, Maesteg,
        Porthcawl, Merthyr Tydfil and surrounding areas. We provide Selfie Pod hire, Glam Booth
        hire and Enclosed Booth hire for weddings, corporate events, school proms, birthday
        parties, Christmas parties and brand activations across South Wales.
      </section>
    </main>
  );
}
