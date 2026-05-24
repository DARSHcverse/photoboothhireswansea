"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import { useReveal } from "../../components/useReveal";

const introBullets = [
  "DBS-checked attendant — fully compliant for school and youth events",
  "Fast high-volume setup — queues move quickly so no one misses the dancefloor",
  "Custom strip design with school name, year group and prom theme",
  "Covering Swansea, Cardiff, Neath, Bridgend and all South Wales schools",
  "Safe, professional and organised — staff experienced working with young people",
];

const includedItems = [
  "Custom strip design with school name and year group",
  "Unlimited photos and instant prints",
  "DBS-checked professional attendant",
  "Fun props and themed accessories suited to the year group",
  "USB digital images and online gallery (3+ hour packages)",
  "Choice of backdrop to match prom theme",
];

const faqs = [
  {
    q: "Are your attendants DBS checked for school events?",
    a: "Yes. All attendants hold a current DBS (Disclosure and Barring Service) check and are experienced working with young people at school proms and youth events across South Wales.",
  },
  {
    q: "How far in advance should schools book?",
    a: "Prom dates fill up fast — especially May, June and July which is peak prom season in Wales. We recommend booking at least 3 to 6 months in advance to secure your date.",
  },
  {
    q: "Can we have the school logo on the photo strip?",
    a: "Yes — custom photo strip design is included in every package. We can include your school name, crest, year group and prom theme on every print.",
  },
  {
    q: "Do you cover schools outside Swansea?",
    a: "Yes, we cover schools across South Wales including Cardiff, Bridgend, Neath, Port Talbot, Llanelli, Caerphilly and surrounding areas.",
  },
];

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function PromsPage() {
  const [open, setOpen] = useState<number | null>(null);
  useReveal([open]);

  return (
    <main>
      <PageHero
        eyebrow="Proms and Graduations"
        title="PROM PHOTO BOOTH HIRE SWANSEA"
        description="The night they will talk about for years. Fast queues, sharp photos, and a setup that runs smoothly from first arrivals to last dance."
        heroBg="/assets/graduation.jpg"
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
            <h2 className="section-title">Why Schools Choose PBH For Prom Night</h2>
            <ul className="bullet-list text-sm mb-6">
              {introBullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div className="reveal relative w-full overflow-hidden rounded-[var(--radius-xl)]" style={{ aspectRatio: "4 / 3", ...cardStyle }}>
            <Image src="/assets/graduation.jpg" alt="Prom photo booth hire Swansea Wales" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal p-8 md:p-12 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">What&rsquo;s Included</span>
            <h2 className="section-title">Every prom package includes</h2>
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
            <h2 className="section-title">Which booth suits a prom?</h2>
            <p>
              The Selfie Pod is the most popular choice for proms — it handles large groups quickly, the open air
              setup means bigger group shots, and the fun props always go down well. The Enclosed Booth works well
              for more intimate prom setups or smaller year groups.
            </p>
            <p className="text-sm" style={{ color: "var(--color-fg-muted)" }}>
              <strong style={{ color: "var(--color-accent)" }}>Recommended:</strong> Selfie Pod
            </p>
            <Link href="/photobooths" className="btn btn-primary mt-2">Compare All Booths</Link>
          </div>
        </div>
      </section>

      <section className="bg-mist" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal text-center p-10 md:p-14 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Pricing</span>
            <h2 className="section-title">Prom photo booth pricing</h2>
            <div
              className="font-extrabold text-white my-4"
              style={{ fontSize: "clamp(2.4rem,6vw,3.4rem)", lineHeight: 1, letterSpacing: "-0.04em", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}
            >
              From £250 for 2 hours
            </div>
            <p className="mx-auto mb-6" style={{ maxWidth: "32rem" }}>
              Selfie Pod pricing for school proms starts at £250. See the full breakdown of 2, 3, 4 and 5 hour
              packages with DBS-checked attendant included.
            </p>
            <Link href="/packages" className="btn btn-primary">See Full Pricing</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Prom photo booth questions</h2>
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
            <h2 className="section-title mx-auto" style={{ maxWidth: "32rem" }}>Booking a prom in South Wales?</h2>
            <p className="mx-auto mb-8" style={{ maxWidth: "28rem" }}>
              Tell us your school, prom date, and venue and we&rsquo;ll come back with availability, package advice,
              and a tailored quote.
            </p>
            <Link href="/quickquote" className="btn btn-light">Get a Free Quote</Link>
            <p className="text-sm mt-4 mb-0" style={{ color: "var(--color-fg-muted)" }}>
              Now taking bookings for 2027 events — secure your date early.
            </p>
            <p className="text-sm mt-2 mb-0" style={{ color: "var(--color-fg-muted)" }}>
              Prom season runs May to July 2027 — schools are already confirming dates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
