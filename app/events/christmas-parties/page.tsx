"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import { useReveal } from "../../components/useReveal";

const introBullets = [
  "Festive themed props — Santa hats, reindeer antlers, tinsel boas and more",
  "Christmas strip designs with your company or party name and the year",
  "Works for work parties, family gatherings and private Christmas celebrations",
  "Book early — December weekends fill up faster than any other month",
  "Covering Swansea, Cardiff and all South Wales Christmas party venues",
];

const includedItems = [
  "Festive themed props collection",
  "Custom Christmas photo strip design with your party name",
  "Unlimited photos and instant prints",
  "Professional attendant for setup and hosting",
  "USB digital images and online gallery (3+ hour packages)",
  "Choice of festive backdrop",
];

const faqs = [
  {
    q: "How early should I book for Christmas?",
    a: "As early as possible — December weekends book up by September or October in South Wales. If you are planning a Christmas party, enquire now to secure your date before it goes.",
  },
  {
    q: "Do you have Christmas themed props?",
    a: "Yes — our Christmas prop collection includes Santa hats, reindeer antlers, elf ears, tinsel boas, novelty glasses and more. We can also accommodate specific theme requests.",
  },
  {
    q: "Can you do multiple events across the Christmas period?",
    a: "Yes — if your business has multiple office locations or events across December, get in touch and we can discuss availability and a multi-booking arrangement.",
  },
  {
    q: "Do you cover Cardiff for Christmas parties?",
    a: "Yes, Cardiff is one hour from our Swansea base and is covered as standard with no extra travel charge. We cover all Cardiff corporate venues and hotels for Christmas parties.",
  },
];

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function ChristmasPartiesPage() {
  const [open, setOpen] = useState<number | null>(null);
  useReveal([open]);

  return (
    <main>
      <PageHero
        eyebrow="Christmas Parties"
        title="CHRISTMAS PARTY PHOTO BOOTH HIRE SWANSEA"
        description="The office party just got a lot more memorable. Festive props, Christmas strip designs, and instant prints that actually make it onto the fridge."
        heroBg="/assets/events.webp"
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
            <h2 className="section-title">Why Christmas Parties Need a Photo Booth</h2>
            <ul className="bullet-list text-sm mb-6">
              {introBullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div className="reveal relative w-full overflow-hidden rounded-[var(--radius-xl)]" style={{ aspectRatio: "4 / 3", ...cardStyle }}>
            <Image src="/assets/events.webp" alt="Christmas party photo booth" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal p-8 md:p-12 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">What&rsquo;s Included</span>
            <h2 className="section-title">Every Christmas package includes</h2>
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
            <h2 className="section-title">Which booth suits a Christmas party?</h2>
            <p>
              The Selfie Pod is the most popular choice for Christmas parties — high capacity, fast turnaround, and
              the open setup means big group shots that capture the whole team. For more premium Christmas events
              or client nights the Glam Booth adds a touch of luxury with its black and white glamour finish.
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
            <h2 className="section-title">Christmas party photo booth pricing</h2>
            <div
              className="font-extrabold text-white my-4"
              style={{ fontSize: "clamp(2.4rem,6vw,3.4rem)", lineHeight: 1, letterSpacing: "-0.04em", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}
            >
              From £250 for 2 hours
            </div>
            <p className="mx-auto mb-6" style={{ maxWidth: "32rem" }}>
              Selfie Pod pricing for Christmas parties starts at £220. See the full breakdown of 2, 3, 4 and 5 hour
              packages with festive props included.
            </p>
            <Link href="/packages" className="btn btn-primary">See Full Pricing</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Christmas party photo booth questions</h2>
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
            <h2 className="section-title mx-auto" style={{ maxWidth: "32rem" }}>Sorting the Christmas party in South Wales?</h2>
            <p className="mx-auto mb-8" style={{ maxWidth: "28rem" }}>
              Tell us your party date, venue, and team size and we&rsquo;ll come back with availability and a tailored
              quote — but be quick, December books out fast.
            </p>
            <Link href="/quickquote" className="btn btn-light">Get a Free Quote</Link>
            <p className="text-sm mt-4 mb-0" style={{ color: "var(--color-fg-muted)" }}>
              Now taking bookings for 2027 events — secure your date early.
            </p>
            <p className="text-sm mt-2 mb-0" style={{ color: "var(--color-fg-muted)" }}>
              Christmas 2027 party dates will fill by mid-year — get in touch early to avoid missing out.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
