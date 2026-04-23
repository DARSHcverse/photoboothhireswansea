import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/",             label: "Homepage" },
  { href: "/photobooths",  label: "Photobooths" },
  { href: "/events",       label: "Events" },
  { href: "/packages",     label: "Packages" },
  { href: "/backdrop",     label: "Backdrop" },
  { href: "/booking",      label: "Booking" },
  { href: "/quickquote",   label: "Quick Quote" },
  { href: "/pay",          label: "Pay Here" },
  { href: "/gallery",      label: "Gallery" },
  { href: "/faq",          label: "FAQ" },
];

const socials = [
  { label: "IG", href: "#", aria: "Instagram" },
  { label: "TT", href: "#", aria: "TikTok" },
  { label: "FB", href: "#", aria: "Facebook" },
  { label: "PI", href: "#", aria: "Pinterest" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div
        className="py-16"
        style={{
          background:
            "radial-gradient(circle at left top, rgba(49,209,252,0.06), transparent 24%), var(--color-canvas-dim)",
        }}
      >
        <div
          className="mx-auto px-4 grid gap-10"
          style={{
            maxWidth: "1240px",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/logo.png"
                alt="The Shan Booth logo"
                width={46}
                height={46}
                className="rounded-full object-contain"
              />
              <div>
                <div
                  className="text-[0.96rem] font-extrabold uppercase tracking-tight text-white"
                  style={{ fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
                >
                  The Shan Booth
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--color-fg-muted)" }}>
              London photo booth hire with crystal-clear photos, unlimited prints, and professional event support.
              Friendly, all-inclusive booth hire for weddings, corporate events, school proms, brand activations,
              and private parties across London and surrounding areas.
            </p>
            <div className="mt-4 grid gap-2 text-sm" style={{ color: "var(--color-fg-muted)" }}>
              <div className="flex items-center gap-2"><span>📧</span><span>[your UK email]</span></div>
              <div className="flex items-center gap-2"><span>📱</span><span>[your UK number]</span></div>
              <div className="flex items-center gap-2"><span>📍</span><span>London, United Kingdom</span></div>
            </div>
          </div>

          {/* Links column */}
          <div>
            <span className="eyebrow">Explore</span>
            <div className="grid gap-2 mt-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "var(--color-fg-muted)" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick action card */}
          <div
            className="p-6 rounded-[var(--radius-lg)]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01)), rgba(38,38,38,0.72)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
            }}
          >
            <span className="eyebrow">Need Help Fast?</span>
            <h3
              className="text-lg font-extrabold mb-3"
              style={{
                fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
                color: "var(--color-fg)",
              }}
            >
              Quick quote, booking, or payment.
            </h3>
            <p className="text-sm mb-5" style={{ color: "var(--color-fg-muted)" }}>
              Use the navigation above for a quick quote, secure booking, backdrop choices, or direct payment.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/quickquote" className="btn btn-primary text-[0.82rem] min-h-[44px] px-4">
                Quick Quote
              </Link>
              <Link href="/booking" className="btn btn-secondary text-[0.82rem] min-h-[44px] px-4">
                Book Now
              </Link>
            </div>
            {/* Socials */}
            <div className="flex flex-wrap gap-2 mt-4">
              {socials.map(({ label, href, aria }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={aria}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full text-xs font-bold transition-all duration-200 hover:bg-white/10"
                  style={{
                    fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
                    color: "var(--color-fg-muted)",
                    background: "rgba(255,255,255,0.04)",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mx-auto px-4 mt-10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs"
          style={{
            maxWidth: "1240px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "var(--color-fg-faint)",
          }}
        >
          <span>© {new Date().getFullYear()} The Shan Booth. All rights reserved.</span>
          <span>Photo Booth Hire London &amp; Surrounding Areas</span>
        </div>
      </div>
    </footer>
  );
}
