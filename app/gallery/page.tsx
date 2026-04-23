"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { useReveal } from "../components/useReveal";

type FilterVal = "all" | "weddings" | "proms" | "corporate" | "birthdays";

const galleryItems = [
  { filter: "weddings",  title: "Rose Gold Wedding",    sub: "Islington vows and a packed dance floor",      bg: "linear-gradient(180deg,#ffc26c,#f47920)", size: "tall" },
  { filter: "proms",     title: "Leavers Night",        sub: "Sharp suits, sparkling dresses, loud smiles",  bg: "linear-gradient(180deg,#83d8f2,#3badd4)", size: "medium" },
  { filter: "corporate", title: "Launch Party",         sub: "Canary Wharf activation with branded prints",  bg: "linear-gradient(180deg,#ffd86d,#f5a623)", size: "normal" },
  { filter: "birthdays", title: "Sweet Sixteen",        sub: "Full evening of colour and group prints",      bg: "linear-gradient(180deg,#ff9db4,#f47920)",  size: "medium" },
  { filter: "weddings",  title: "Garden Wedding",       sub: "Surrey countryside, custom strip design",      bg: "linear-gradient(180deg,#d4f0c0,#6db56d)", size: "normal" },
  { filter: "proms",     title: "Sixth Form Formal",    sub: "Essex school, fast queue, big smiles",         bg: "linear-gradient(180deg,#c9b8ff,#7c5cbf)", size: "tall" },
  { filter: "corporate", title: "Team Night Out",       sub: "London Bridge office party, GIF booth",        bg: "linear-gradient(180deg,#ffe49a,#fa7e25)", size: "normal" },
  { filter: "birthdays", title: "50th Milestone",       sub: "Hackney hall, four generations of prints",     bg: "linear-gradient(180deg,#ffb3c1,#c0005e)", size: "normal" },
  { filter: "weddings",  title: "Winter Celebration",   sub: "Mayfair hotel, Magic Mirror setup",            bg: "linear-gradient(180deg,#b8d4f8,#3a6fcf)", size: "medium" },
  { filter: "proms",     title: "Year 11 Prom",         sub: "North London school hall, DBS-checked hosting", bg: "linear-gradient(180deg,#fce4a6,#f0a500)", size: "normal" },
  { filter: "corporate", title: "Brand Activation",     sub: "Shoreditch pop-up with digital sharing",       bg: "linear-gradient(180deg,#f2c2ff,#c020d0)", size: "tall" },
  { filter: "birthdays", title: "Family Reunion",       sub: "Camden restaurant, all-day hire",              bg: "linear-gradient(180deg,#c9f2d2,#2eae5c)", size: "normal" },
];

const filters: Array<{ val: FilterVal; label: string }> = [
  { val: "all",       label: "All" },
  { val: "weddings",  label: "Weddings" },
  { val: "proms",     label: "Proms" },
  { val: "corporate", label: "Corporate" },
  { val: "birthdays", label: "Birthdays" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<FilterVal>("all");
  useReveal([filter]);

  const visible = filter === "all" ? galleryItems : galleryItems.filter((g) => g.filter === filter);

  return (
    <main>
      <PageHero eyebrow="Our Gallery" title="Our Gallery" description="A peek at the colourful moments, big group shots, and booth energy we bring to celebrations across London and surrounding areas." heroBg="/assets/hero-banner-2.webp" />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-3" style={{ maxWidth: "1240px" }}>

          {/* Filters */}
          <div className="reveal flex flex-wrap justify-center gap-2 mb-8">
            {filters.map(({ val, label }) => (
              <button key={val} className={`filter-btn${filter === val ? " active" : ""}`} onClick={() => setFilter(val)}>
                {label}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gridAutoRows: "200px" }}
          >
            {visible.map(({ title, sub, bg, size }) => (
              <article
                key={title}
                className="reveal relative overflow-hidden rounded-[var(--radius-lg)] flex flex-col justify-end p-5 cursor-pointer group"
                style={{
                  background: bg,
                  gridRowEnd: size === "tall" ? "span 2" : size === "medium" ? "span 1" : "span 1",
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="relative z-10">
                  <strong className="block text-white text-sm font-bold" style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>{title}</strong>
                  <span className="block text-white/70 text-xs mt-0.5" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>{sub}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/quickquote" className="btn btn-primary">Book Your Booth</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
