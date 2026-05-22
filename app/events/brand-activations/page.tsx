"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import { useReveal } from "../../components/useReveal";

const introBullets = [
  "Fully branded photo strip overlays with logo, campaign messaging and brand colours",
  "High quality print output suitable for social media sharing and content creation",
  "Professional sleek setup that complements your brand aesthetic",
  "Fast throughput for high footfall activation environments",
  "Covering Cardiff Bay, Swansea and all South Wales activation venues",
];

const includedItems = [
  "Fully customised branded photo strip overlay with logo and campaign details",
  "Unlimited photos and instant prints",
  "Professional attendant for setup, hosting and pack-down",
  "Digital copies via QR code or online gallery (3+ hour packages)",
  "Choice of backdrop to match brand aesthetic",
  "Quick turnaround for high footfall activation environments",
];

const faqs = [
  {
    q: "Can the booth be fully branded for our campaign?",
    a: "Yes — photo strip overlays are fully customised with your logo, campaign name, hashtag, QR code or any other brand elements. Send us your brand guidelines and we handle the design.",
  },
  {
    q: "Do you cover Cardiff for brand activations?",
    a: "Yes, Cardiff Bay and city centre are covered as standard with no extra travel charge. Cardiff is one hour from our Swansea base and we cover activations there regularly.",
  },
  {
    q: "Can guests share photos digitally at the event?",
    a: "Yes — digital copies are included from 3 hour packages. Guests can receive their photos via QR code or online gallery link, making it easy to share on social media immediately after their session.",
  },
  {
    q: "Do you work with agencies and event companies?",
    a: "Yes — we work directly with brands, marketing agencies and event management companies. Get in touch to discuss your activation requirements and we will provide a tailored quote.",
  },
];

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function BrandActivationsPage() {
  const [open, setOpen] = useState<number | null>(null);
  useReveal([open]);

  return (
    <main>
      <PageHero
        eyebrow="Brand Activations"
        title="BRAND ACTIVATION PHOTO BOOTH SWANSEA"
        description="Turn your brand moment into content. Custom branded prints, social-ready output, and a setup that looks as good as your campaign."
        heroBg="/assets/corporate.webp"
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
            <h2 className="section-title">Why Brands Choose PBH For Activations</h2>
            <ul className="bullet-list text-sm mb-6">
              {introBullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div className="reveal relative w-full overflow-hidden rounded-[var(--radius-xl)]" style={{ aspectRatio: "4 / 3", ...cardStyle }}>
            <Image src="/assets/boothimg6.webp" alt="Brand activation photo booth setup" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal p-8 md:p-12 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">What&rsquo;s Included</span>
            <h2 className="section-title">Every brand activation package includes</h2>
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
            <h2 className="section-title">Which booth suits a brand activation?</h2>
            <p>
              The Selfie Pod is the most versatile for brand activations — open air, highly brandable, and handles
              high footfall environments well. For premium launches or luxury brand events the Glam Booth creates
              a more exclusive, editorial feel with its black and white glamour output.
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
            <h2 className="section-title">Brand activation pricing</h2>
            <div
              className="font-extrabold text-white my-4"
              style={{ fontSize: "clamp(2.4rem,6vw,3.4rem)", lineHeight: 1, letterSpacing: "-0.04em", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}
            >
              From £250 for 2 hours
            </div>
            <p className="mx-auto mb-6" style={{ maxWidth: "32rem" }}>
              Selfie Pod pricing for brand activations starts at £250. See the full breakdown of 2, 3, 4 and 5 hour
              packages with full custom branded overlays.
            </p>
            <Link href="/packages" className="btn btn-primary">See Full Pricing</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Brand activation questions</h2>
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
            <h2 className="section-title mx-auto" style={{ maxWidth: "32rem" }}>Planning a brand activation in South Wales?</h2>
            <p className="mx-auto mb-8" style={{ maxWidth: "28rem" }}>
              Tell us about your campaign, expected footfall, and brand requirements and we&rsquo;ll come back with
              availability and a tailored quote.
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
