"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import { useReveal } from "../../components/useReveal";

const introBullets = [
  "Fun themed props matched to your party theme and age group",
  "Instant prints guests take home as keepsakes from the night",
  "Custom strip design with the birthday person's name and age",
  "Works in homes, halls, restaurants, hotels and outdoor marquees",
  "Flexible 2 to 5 hour packages to suit any party length",
];

const includedItems = [
  "Custom strip design with the birthday person's name and age",
  "Unlimited photos and instant prints",
  "Themed props to match the party",
  "Professional attendant for setup, hosting and pack-down",
  "USB digital images and online gallery (3+ hour packages)",
  "Choice of backdrop to match the party theme",
];

const faqs = [
  {
    q: "What size venue do you need for a photo booth?",
    a: "We recommend a clear flat space of at least 3m x 3m for the booth and backdrop plus room for a short queue. We have set up in homes, village halls, hotel function rooms and outdoor marquees across South Wales.",
  },
  {
    q: "Can we choose a theme for the props and strip?",
    a: "Yes — let us know your party theme when booking and we will tailor the props selection and photo strip design to match.",
  },
  {
    q: "How far in advance should I book for a birthday?",
    a: "Weekend dates especially Saturdays book up fast. We recommend booking at least 6 to 8 weeks in advance for birthday parties, and longer for summer and December dates.",
  },
  {
    q: "Do you travel to birthday parties outside Swansea?",
    a: "Yes, we cover all of South Wales including Cardiff, Bridgend, Neath, Llanelli, Barry and surrounding areas.",
  },
];

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function BirthdaysPage() {
  const [open, setOpen] = useState<number | null>(null);
  useReveal([open]);

  return (
    <main>
      <PageHero
        eyebrow="Birthdays and Parties"
        title="BIRTHDAY PARTY PHOTO BOOTH HIRE SWANSEA"
        description="Whether it is a 21st, a 40th, or a 50th milestone — make it a night they will actually remember. Fun props, instant prints, and a booth that runs itself."
        heroBg="/assets/hero-banner-4.webp"
      />

      <section style={{ padding: "clamp(2rem,4vw,3rem) 0 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="flex flex-wrap gap-3 justify-center reveal">
            <Link href="/packages" className="btn btn-primary">View Packages</Link>
            <Link href="/quickquote" className="btn btn-secondary">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(4rem,7vw,6rem) 0" }}>
        <div className="mx-auto px-4 md:px-3 grid gap-8 items-center" style={{ maxWidth: "1240px", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
          <div className="reveal">
            <span className="eyebrow">Why PBH</span>
            <h2 className="section-title">Why Birthday Parties Love PBH</h2>
            <ul className="bullet-list text-sm mb-6">
              {introBullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div className="reveal relative w-full overflow-hidden rounded-[var(--radius-xl)]" style={{ aspectRatio: "4 / 3", ...cardStyle }}>
            <Image src="/assets/hero-banner-4.webp" alt="Birthday party photo booth" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal p-8 md:p-12 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">What&rsquo;s Included</span>
            <h2 className="section-title">Every birthday package includes</h2>
            <ul className="bullet-list text-sm mb-6">
              {includedItems.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <Link href="/packages" className="btn btn-secondary">See Full Package Details</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal p-8 md:p-12 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Which Booth</span>
            <h2 className="section-title">Which booth suits a birthday party?</h2>
            <p>
              For birthday parties the Selfie Pod is the most flexible — it fits any venue and works for any age
              group. For milestone birthdays like 40ths and 50ths where the photos need to look special, the Glam
              Booth delivers glamorous black and white portraits that feel like a treat. The Enclosed Booth is
              great for smaller, more intimate gatherings.
            </p>
            <p className="text-sm" style={{ color: "var(--color-fg-muted)" }}>
              <strong style={{ color: "var(--color-accent)" }}>Recommended:</strong> Selfie Pod or Glam Booth
            </p>
            <Link href="/photobooths" className="btn btn-primary mt-2">Compare All Booths</Link>
          </div>
        </div>
      </section>

      <section className="bg-mist" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal text-center p-10 md:p-14 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Pricing</span>
            <h2 className="section-title">Birthday photo booth pricing</h2>
            <div
              className="font-extrabold text-white my-4"
              style={{ fontSize: "clamp(2.4rem,6vw,3.4rem)", lineHeight: 1, letterSpacing: "-0.04em", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}
            >
              From £250 for 2 hours
            </div>
            <p className="mx-auto mb-6" style={{ maxWidth: "32rem" }}>
              Selfie Pod pricing for birthdays starts at £220. See the full breakdown of 2, 3, 4 and 5 hour packages
              with everything included.
            </p>
            <Link href="/packages" className="btn btn-primary">See Full Pricing</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Birthday photo booth questions</h2>
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

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal text-center p-10 md:p-14 rounded-[var(--radius-xl)]" style={cardStyle}>
            <h2 className="section-title mx-auto" style={{ maxWidth: "32rem" }}>Ready to make it a birthday to remember?</h2>
            <p className="mx-auto mb-8" style={{ maxWidth: "28rem" }}>
              Tell us your party date, venue, and theme and we&rsquo;ll come back with availability, package advice,
              and a tailored quote.
            </p>
            <Link href="/quickquote" className="btn btn-light">Get a Free Quote</Link>
            <p className="text-sm mt-4 mb-0" style={{ color: "var(--color-fg-muted)" }}>
              Now taking bookings for 2027 events — secure your date early.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
