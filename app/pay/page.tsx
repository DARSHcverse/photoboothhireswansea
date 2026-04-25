import PageHero from "../components/PageHero";

export const metadata = {
  title: "Pay Here",
  alternates: { canonical: "/pay" },
  robots: { index: false, follow: false },
};

export default function PayPage() {
  return (
    <main>
      <PageHero eyebrow="Pay Here" title="Secure Payment" description="Complete your secure payment below. If you haven't yet received an invoice, please visit the booking page first." heroBg="/assets/boothimg4.webp" />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "900px" }}>
          <div
            className="reveal p-8 md:p-12 rounded-[var(--radius-xl)] flex flex-col gap-4"
            style={{
              background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
            }}
          >
            <span className="eyebrow">Stripe</span>
            <h2
              className="text-2xl font-extrabold text-white m-0"
              style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}
            >
              Complete your payment securely
            </h2>
            <p>
              If the Stripe environment variables are configured in Vercel, the secure payment button will load below
              automatically.
            </p>
            <div
              className="p-8 rounded-[var(--radius-lg)] flex items-center justify-center min-h-[120px]"
              style={{ background: "rgba(255,255,255,0.03)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
              data-stripe-buy-button
            >
              <p className="text-sm text-center m-0" style={{ color: "var(--color-fg-faint)" }}>
                Stripe buy button will appear here once environment variables are configured.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
