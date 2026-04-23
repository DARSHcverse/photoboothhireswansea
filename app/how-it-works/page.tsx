"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { useReveal } from "../components/useReveal";

const steps = [
  { num: "1", eyebrow: "Step One",   title: "Get in Touch",  desc: "Fill in the quote form with your event date, venue, location, and a few details about the celebration. The more you share, the more tailored the quote can be. If you already know your preferred package, brilliant. If not, Shan can guide you based on guest numbers, timings, and the style of event." },
  { num: "2", eyebrow: "Step Two",   title: "Customise",     desc: "Choose your backdrop, print design, props, and any optional extras such as a guest book, neon signs, or branded templates. This is where the booth starts to feel like yours — wedding details, school colours, birthday themes, or company branding can all be built into the final setup." },
  { num: "3", eyebrow: "Step Three", title: "We Set Up",     desc: "On the day, Shan arrives early, handles the equipment, styles the area, and makes sure everything is camera-ready before guests start arriving. You don't need to troubleshoot tech or direct traffic — the booth is managed for you." },
  { num: "4", eyebrow: "Step Four",  title: "You Have Fun!", desc: "Guests step in, pose up, print their favourites, and create brilliant little moments all evening long. By the end of the event, you'll have instant prints in guests' hands and a booth experience that felt easy from start to finish." },
];

const faqs = [
  { q: "How much space does the booth need?", a: "We can advise based on your venue, but a modest footprint of around 3m × 3m with room for guests to queue comfortably is usually perfect." },
  { q: "What time do you arrive to set up?", a: "We aim to arrive at least 45–60 minutes before the booth hire start time to set up and run checks. We'll confirm logistics with you before the event." },
  { q: "Can we customise the prints on the night?", a: "The print design is set up before the event to match your theme, colours, and branding. Last-minute tweaks can sometimes be accommodated — just ask during booking." },
];

export default function HowItWorksPage() {
  const [open, setOpen] = useState<number | null>(null);
  useReveal([open]);

  return (
    <main>
      <PageHero eyebrow="How It Works" title="How It Works" description="Booking The Shan Booth is designed to feel smooth from the first enquiry to the final print." heroBg="/assets/photobooth.webp" />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-3 grid gap-6" style={{ maxWidth: "1240px" }}>
          {steps.map(({ num, eyebrow, title, desc }) => (
            <article
              key={num}
              className="reveal p-8 md:p-10 rounded-[var(--radius-xl)] flex flex-col md:flex-row gap-8 items-start"
              style={{
                background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
              }}
            >
              <div
                className="flex items-center justify-center text-3xl font-extrabold rounded-[var(--radius-lg)] shrink-0 w-20 h-20"
                style={{
                  color: "#201107",
                  background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-deep))",
                  fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)",
                }}
                aria-hidden="true"
              >{num}</div>
              <div className="flex-1">
                <span className="eyebrow">{eyebrow}</span>
                <h2 className="section-title">{title}</h2>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">Quick Answers</span>
            <h2 className="section-title">Common questions before you book</h2>
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
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? "300px" : "0" }}>
                  <div className="px-5 pb-5"><p className="text-sm m-0">{a}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal text-center p-10 md:p-14 rounded-[var(--radius-xl)]" style={{ background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)" }}>
            <h2 className="section-title mx-auto" style={{ maxWidth: "28rem" }}>Ready to book?</h2>
            <p className="mx-auto mb-8" style={{ maxWidth: "22rem" }}>Get a tailored quote in minutes — just tell us the date, venue, and event type.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/quickquote" className="btn btn-light">Get a Free Quote</Link>
              <Link href="/packages" className="btn btn-secondary">View Packages</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
