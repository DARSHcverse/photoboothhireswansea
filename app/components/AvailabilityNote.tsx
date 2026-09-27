/**
 * A short, factual availability line.
 *
 * Deliberately states what is true about demand rather than manufacturing
 * scarcity — no counters, countdowns or "only N left" claims. UK advertising
 * rules require scarcity claims to be substantiated, and specific wording
 * reads as more credible than a generic "Book early!" badge.
 */
export default function AvailabilityNote({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="inline-flex items-center gap-2 text-xs font-bold rounded-full px-4 py-2 m-0"
      style={{
        fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
        color: "var(--color-accent)",
        background: "rgba(26,111,212,0.11)",
        boxShadow: "inset 0 0 0 1px rgba(26,111,212,0.28)",
      }}
    >
      <span aria-hidden="true">📅</span>
      {children}
    </p>
  );
}
