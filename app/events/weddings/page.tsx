"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import { useReveal } from "../../components/useReveal";

const introBullets = [
  "Elegant backdrops and premium props designed to match your wedding theme and colour palette",
  "Custom photo strip layouts with your names, wedding date and personal design",
  "Guest book included in 4 and 5 hour packages — signed, printed and ready to take home",
  "Professional DBS-checked attendant who blends into your wedding, not over it",
  "Covering all Swansea venues plus Cardiff, Bridgend, Neath and wider South Wales",
];

const includedItems = [
  "Unlimited photos and instant prints",
  "Custom photo strip design with names and wedding date",
  "Professional DBS-checked attendant",
  "Choice of backdrop and event props",
  "USB digital images and online gallery (3+ hour packages)",
  "Guest book (4 and 5 hour packages)",
];

const faqs = [
  {
    q: "How long should I hire a wedding photo booth?",
    a: "Most Swansea weddings book 3 to 4 hours, starting after the wedding breakfast when guests are relaxed and the dance floor opens. A 4-hour package gives you the most activity and includes a guest book.",
  },
  {
    q: "Can we customise the photo strip design?",
    a: "Yes — every package includes a custom photo strip design. We work with you before the event to create a layout that matches your wedding theme, colours and style.",
  },
  {
    q: "Do you cover wedding venues outside Swansea?",
    a: "Yes, we cover all of South Wales including Cardiff, Bridgend, Neath, Port Talbot, Llanelli, Barry, Penarth and the Vale of Glamorgan. Get in touch to confirm your venue.",
  },
  {
    q: "Is the attendant included in wedding packages?",
    a: "Yes, a professional attendant is included in every package. For 4 and 5 hour packages you can also choose a male or female attendant to suit your wedding party preference.",
  },
];

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function WeddingsPage() {
  const [open, setOpen] = useState<number | null>(null);
  useReveal([open]);

  return (
    <main>
      <PageHero
        eyebrow="Weddings"
        title="WEDDING PHOTO BOOTH HIRE SWANSEA"
        description="Elegant, all-inclusive photo booth hire for your wedding day. Stunning prints, a packed guest book, and memories that last longer than the cake."
        heroBg="/assets/wedding.webp"
      />

      {/* Hero CTA buttons */}
      <section style={{ padding: "clamp(2rem,4vw,3rem) 0 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="flex flex-wrap gap-3 justify-center reveal">
            <Link href="/packages" className="btn btn-primary">View Packages</Link>
            <Link href="/quickquote" className="btn btn-secondary">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section style={{ padding: "clamp(4rem,7vw,6rem) 0" }}>
        <div className="mx-auto px-4 md:px-3 grid gap-8 items-center" style={{ maxWidth: "1240px", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
          <div className="reveal">
            <span className="eyebrow">Why PBH</span>
            <h2 className="section-title">Why Couples Choose PBH For Their Wedding</h2>
            <ul className="bullet-list text-sm mb-6">
              {introBullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div className="reveal relative w-full overflow-hidden rounded-[var(--radius-xl)]" style={{ aspectRatio: "4 / 3", ...cardStyle }}>
            <Image src="/assets/wedding2.webp" alt="Wedding photo booth hire Swansea South Wales" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal p-8 md:p-12 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">What&rsquo;s Included</span>
            <h2 className="section-title">Every wedding package includes</h2>
            <ul className="bullet-list text-sm mb-6">
              {includedItems.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <Link href="/packages" className="btn btn-secondary">See Full Package Details</Link>
          </div>
        </div>
      </section>

      {/* WHICH BOOTH */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal p-8 md:p-12 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Which Booth</span>
            <h2 className="section-title">Which booth suits a wedding?</h2>
            <p>
              Both the Selfie Pod and Glam Booth work beautifully at weddings. The Selfie Pod is fun and sociable —
              perfect for the dance floor hour. The Glam Booth gives you those timeless black and white portraits
              that feel like art. Many couples book the Glam Booth for exactly that reason.
            </p>
            <p className="text-sm" style={{ color: "var(--color-fg-muted)" }}>
              <strong style={{ color: "var(--color-accent)" }}>Recommended:</strong> Glam Booth
            </p>
            <Link href="/photobooths" className="btn btn-primary mt-2">Compare All Booths</Link>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="bg-mist" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal text-center p-10 md:p-14 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Pricing</span>
            <h2 className="section-title">Wedding photo booth pricing</h2>
            <div
              className="font-extrabold text-white my-4"
              style={{ fontSize: "clamp(2.4rem,6vw,3.4rem)", lineHeight: 1, letterSpacing: "-0.04em", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}
            >
              From £300 for 2 hours
            </div>
            <p className="mx-auto mb-6" style={{ maxWidth: "32rem" }}>
              Glam Booth pricing for weddings. See the full package breakdown for 3, 4 and 5 hour wedding packages
              including guest books and attendant choice.
            </p>
            <Link href="/packages" className="btn btn-primary">See Full Pricing</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Wedding photo booth questions</h2>
          </div>
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

      {/* CTA BANNER */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal text-center p-10 md:p-14 rounded-[var(--radius-xl)]" style={cardStyle}>
            <h2 className="section-title mx-auto" style={{ maxWidth: "32rem" }}>Ready to book your wedding photo booth?</h2>
            <p className="mx-auto mb-8" style={{ maxWidth: "28rem" }}>
              Tell us your wedding date, venue, and the kind of vibe you want and we&rsquo;ll come back with availability,
              package advice, and a tailored quote.
            </p>
            <Link href="/quickquote" className="btn btn-light">Get a Free Quote</Link>
            <p className="text-sm mt-4 mb-0" style={{ color: "var(--color-fg-muted)" }}>
              Now taking bookings for 2027 events — secure your date early.
            </p>
            <p className="text-sm mt-2 mb-0" style={{ color: "var(--color-fg-muted)" }}>
              Summer 2027 wedding dates are already being requested — enquire now to check availability for your date.
            </p>
            <p className="text-sm mt-4 mb-0" style={{ color: "var(--color-fg-muted)" }}>
              Planning a corporate event? See our{" "}
              <Link href="/events/corporate" style={{ color: "var(--color-accent)" }}>
                Corporate Photo Booth Hire
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
