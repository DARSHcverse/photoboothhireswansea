"use client";

import { useState } from "react";
import Link from "next/link";
import { useReveal } from "../components/useReveal";

/* ── Data ─────────────────────────────────────────────────────────── */
// Note: metadata for /packages is set via app/packages/layout.tsx for client-page support.
type BoothType = "open" | "glam" | "enclosed";

const boothLabels: Record<BoothType, string> = {
  open:     "Selfie Pod",
  glam:     "Magic Mirror",
  enclosed: "Enclosed Booth",
};

interface Package {
  hours: string;
  booth: BoothType;
  price: string;
  popular?: boolean;
  desc: string;
  items: string[];
}

const packages: Package[] = [
  // Selfie Pod
  { hours: "2 Hours", booth: "open",     price: "£220", desc: "Unlimited photos, instant prints, event props, photostrip design, USB digital images, a booth attendant, a standard backdrop, and a custom start screen.", items: ["Unlimited photos and instant prints","Event props and photostrip design","USB digital images and attendant","Standard backdrop and custom start screen"] },
  { hours: "3 Hours", booth: "open",     price: "£295", popular: true, desc: "Everything in the 2-hour package, plus extra prints and an online gallery.", items: ["3 hours of booth hire","All 2-hour inclusions","Extra prints","Online gallery"] },
  { hours: "4 Hours", booth: "open",     price: "£370", desc: "Everything in the 3-hour package, plus your choice of attendant and a traditional guest book.", items: ["4 hours of booth hire","All 3-hour inclusions","Male or female attendant choice","Traditional guest book"] },
  { hours: "5 Hours", booth: "open",     price: "£440", desc: "The full all-inclusive package for events that want the booth running deep into the party.", items: ["5 hours of booth hire","All 4-hour inclusions","Full all-inclusive package"] },
  // Magic Mirror
  { hours: "2 Hours", booth: "glam",     price: "£270", desc: "Unlimited photos, postcard prints, event props, photostrip design, USB, an attendant, and a white backdrop.", items: ["Unlimited photos and postcard prints","Event props and photostrip design","USB and attendant","White backdrop"] },
  { hours: "3 Hours", booth: "glam",     price: "£350", popular: true, desc: "Everything in the 2-hour package, plus extra prints.", items: ["3 hours of booth hire","All 2-hour inclusions","Extra prints"] },
  { hours: "4 Hours", booth: "glam",     price: "£430", desc: "Everything in the 3-hour package, plus your choice of attendant and a guest book.", items: ["4 hours of booth hire","All 3-hour inclusions","Male or female attendant choice","Guest book"] },
  { hours: "5 Hours", booth: "glam",     price: "£500", desc: "The full all-inclusive package for premium events that want extra booth time.", items: ["5 hours of booth hire","All 4-hour inclusions","Full all-inclusive package"] },
  // Enclosed Booth
  { hours: "2 Hours", booth: "enclosed", price: "£220", desc: "Unlimited photos, instant prints, props, an attendant, and a backdrop for a classic private-booth feel.", items: ["Unlimited photos and instant prints","Props included","Attendant included","Backdrop included"] },
  { hours: "3 Hours", booth: "enclosed", price: "£295", popular: true, desc: "Everything in the 2-hour package, plus USB and an online gallery.", items: ["3 hours of booth hire","All 2-hour inclusions","USB","Online gallery"] },
  { hours: "4 Hours", booth: "enclosed", price: "£370", desc: "Everything in the 3-hour package, plus a guest book.", items: ["4 hours of booth hire","All 3-hour inclusions","Guest book"] },
  { hours: "5 Hours", booth: "enclosed", price: "£440", desc: "The full all-inclusive package for guests who want the classic booth running all evening.", items: ["5 hours of booth hire","All 4-hour inclusions","Full all-inclusive package"] },
];

const addons = [
  { title: "Props Box Upgrade",        desc: "Add themed props, statement glasses, signs, and playful accessories for even bigger reactions." },
  { title: "Extra Hour",               desc: "Keep the booth running longer when you know the crowd will want more time for group shots." },
  { title: "Neon Signs",               desc: "Add extra personality to your booth space with a glowing statement backdrop moment." },
  { title: "Luxury Guest Book Styling",desc: "Perfect for weddings and milestone birthdays where keepsakes matter just as much as the photos." },
];

type FilterVal = "all" | BoothType;

/* ── Page ─────────────────────────────────────────────────────────── */
export default function PackagesPage() {
  const [filter, setFilter] = useState<FilterVal>("all");
  useReveal([filter]);

  const visible = filter === "all" ? packages : packages.filter((p) => p.booth === filter);

  const filters: Array<{ val: FilterVal; label: string }> = [
    { val: "all",      label: "All Booths" },
    { val: "open",     label: "Selfie Pod" },
    { val: "glam",     label: "Magic Mirror" },
    { val: "enclosed", label: "Enclosed Booth" },
  ];

  return (
    <main>

      {/* ── Page Hero ───────────────────────────────────────────────── */}
      <section
        className="page-hero"
        style={{ ["--hero-bg" as string]: "url('/assets/packages.webp')" }}
      >
        <div className="relative z-10 mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div
            className="reveal max-w-[46rem] p-7 rounded-[var(--radius-xl)]"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01)), rgba(17,17,17,0.72)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
            }}
          >
            <span className="eyebrow">Packages &amp; Pricing</span>
            <h1 className="section-title">Packages &amp; Pricing</h1>
            <p>
              Selfie Pod, Magic Mirror, and Enclosed Booth pricing in GBP for
              Swansea and surrounding area events.
            </p>
          </div>
        </div>
      </section>

      {/* ── Packages Grid ───────────────────────────────────────────── */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">Choose Your Package</span>
            <h2 className="section-title">Straightforward UK pricing by booth and hire length</h2>
          </div>

          {/* Filter tabs */}
          <div className="reveal flex flex-wrap justify-center gap-2 mb-8">
            {filters.map(({ val, label }) => (
              <button
                key={val}
                className={`filter-btn${filter === val ? " active" : ""}`}
                onClick={() => setFilter(val)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", alignItems: "start" }}>
            {visible.map(({ hours, booth, price, popular, desc, items }) => (
              <article
                key={`${booth}-${hours}`}
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
                  {boothLabels[booth]}
                </div>
                <div
                  className="font-extrabold text-white"
                  style={{ fontSize: "clamp(2.2rem,5vw,3rem)", lineHeight: 0.92, letterSpacing: "-0.06em", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}
                >
                  {price}
                </div>
                <p className="text-sm m-0">{desc}</p>
                <ul className="bullet-list text-sm flex-1">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <span className="pill-note text-xs">Includes everything — no hidden extras.</span>
              </article>
            ))}
          </div>

          <div className="text-center mt-6">
            <span className="pill-note text-xs">Prices include VAT. Free travel within 25 miles of Swansea. Cardiff covered at no extra charge.</span>
          </div>
        </div>
      </section>

      {/* ── Add-ons ─────────────────────────────────────────────────── */}
      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">Add-ons</span>
            <h2 className="section-title">Optional extras to elevate the booth</h2>
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))" }}>
            {addons.map(({ title, desc }) => (
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
                <h3
                  className="text-base font-extrabold text-white m-0"
                  style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}
                >
                  {title}
                </h3>
                <p className="text-sm m-0">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Info ────────────────────────────────────────────── */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div
            className="reveal flex flex-col md:flex-row gap-10 items-start p-8 md:p-12 rounded-[var(--radius-xl)]"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
            }}
          >
            <div className="flex-1">
              <span className="eyebrow">Booking Info</span>
              <h2 className="section-title">Payment &amp; deposit details</h2>
              <p>
                To secure your date, a booking deposit is required. The remaining balance is usually due ahead of the
                event, with timings confirmed clearly during booking.
              </p>
              <ul className="bullet-list text-sm mb-6">
                <li>Deposits secure your date and booth package</li>
                <li>Custom quotes available for larger or branded events</li>
                <li>Free travel within 25 miles of Swansea — Cardiff included</li>
                <li>Package upgrades can be added as your plans develop</li>
              </ul>
              <Link href="/quickquote" className="btn btn-primary">Get a Custom Quote</Link>
            </div>
            <div
              className="flex items-center justify-center w-40 h-40 rounded-[var(--radius-lg)] text-5xl shrink-0"
              style={{
                background: "rgba(255,255,255,0.03)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
              }}
              aria-hidden="true"
            >
              💷
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
