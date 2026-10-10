"use client";

import { useState } from "react";
import QuickDateCheck from "./QuickDateCheck";
import {
  BOOTH_BLURBS,
  BOOTH_LABELS,
  getIncluded,
  getPrice,
  HOURS,
  POPULAR_HOURS,
  type BoothType,
  type Hours,
} from "../../lib/pricing";

const BOOTHS: BoothType[] = ["open", "glam", "enclosed"];

const cardStyle = {
  background:
    "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow:
    "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

/**
 * Shows a price immediately, with no form and no request.
 *
 * Most visitors want the number before they will give up contact details.
 * All of this is local arithmetic over `lib/pricing`, so there is no network
 * call and nothing to wait for.
 */
export default function PriceCalculator() {
  const [booth, setBooth] = useState<BoothType>("open");
  const [hours, setHours] = useState<Hours>(POPULAR_HOURS);
  const [checking, setChecking] = useState(false);

  const price = getPrice(booth, hours);
  const included = getIncluded(hours);

  return (
    <div className="p-6 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
      <span className="eyebrow">Instant Price</span>
      <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
        See your price now
      </h2>

      {/* Booth choice */}
      <fieldset style={{ border: 0, padding: 0, margin: "0 0 1.5rem" }}>
        <legend className="text-sm font-bold text-white mb-3">
          1. Choose your booth
        </legend>
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))" }}
        >
          {BOOTHS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setBooth(value)}
              aria-pressed={booth === value}
              className={`filter-btn${booth === value ? " active" : ""}`}
              style={{ width: "100%", justifyContent: "center" }}
            >
              {BOOTH_LABELS[value]}
            </button>
          ))}
        </div>
        <p className="text-sm mt-3 mb-0" style={{ color: "var(--color-fg-muted)" }}>
          {BOOTH_BLURBS[booth]}
        </p>
      </fieldset>

      {/* Hours choice */}
      <fieldset style={{ border: 0, padding: 0, margin: "0 0 1.75rem" }}>
        <legend className="text-sm font-bold text-white mb-3">
          2. How long do you need it?
        </legend>
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(90px,1fr))" }}
        >
          {HOURS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setHours(value)}
              aria-pressed={hours === value}
              className={`filter-btn${hours === value ? " active" : ""}`}
              style={{ width: "100%", justifyContent: "center" }}
            >
              {value} hrs
              {value === POPULAR_HOURS && (
                <span
                  className="block text-xs font-normal"
                  style={{ color: "var(--color-fg-faint)" }}
                >
                  most booked
                </span>
              )}
            </button>
          ))}
        </div>
      </fieldset>

      {/* The number */}
      <div
        className="rounded-[var(--radius-lg)] p-6 text-center mb-5"
        style={{
          background: "rgba(26,111,212,0.11)",
          boxShadow: "inset 0 0 0 1px rgba(26,111,212,0.28)",
        }}
      >
        <p className="text-xs m-0" style={{ color: "var(--color-fg-muted)" }}>
          {BOOTH_LABELS[booth]} · {hours} hours
        </p>
        <p
          className="font-extrabold text-white m-0"
          style={{
            fontSize: "clamp(2.6rem,8vw,3.6rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)",
          }}
        >
          £{price}
        </p>
        <p className="text-xs m-0" style={{ color: "var(--color-fg-muted)" }}>
          All inclusive. No hidden extras.
        </p>
      </div>

      <p className="text-sm font-bold text-white mb-2">That price includes:</p>
      <ul className="bullet-list text-sm mb-5">
        {included.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="text-sm" style={{ color: "var(--color-fg-muted)" }}>
        Travel is included across Swansea, Cardiff, Bridgend, Neath, Port Talbot,
        Llanelli and the Vale. Further afield we will confirm any travel cost
        before you book.
      </p>

      <button
        type="button"
        onClick={() => setChecking(true)}
        className="btn btn-primary w-full justify-center"
      >
        Check this date is free →
      </button>

      <QuickDateCheck
        open={checking}
        onClose={() => setChecking(false)}
        summary={`${BOOTH_LABELS[booth]} · ${hours} hours · £${price}`}
      />
    </div>
  );
}
