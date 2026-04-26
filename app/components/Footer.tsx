import Link from "next/link";
import Logo from "./Logo";

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

const areas = [
  { href: "/",                            label: "Photo Booth Hire Swansea" },
  { href: "/photo-booth-hire-cardiff",    label: "Photo Booth Hire Cardiff",      title: "Photo Booth Hire Cardiff — photoboothhirecardiff.co.uk" },
  { href: "/photo-booth-hire-cardiff",    label: "Photo Booth Hire South Wales" },
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
            "radial-gradient(circle at left top, rgba(26,111,212,0.06), transparent 24%), var(--color-canvas-dim)",
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
              <Logo variant="dark" width={160} height={48} />
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--color-fg-muted)" }}>
              Swansea&rsquo;s favourite photo booth hire service for weddings, parties and events across South Wales.
            </p>
            <div className="mt-4 grid gap-2 text-sm" style={{ color: "var(--color-fg-muted)" }}>
              <div className="flex items-center gap-2"><span>📧</span><span>photoboothhireinwales@gmail.com</span></div>
              <div className="flex items-center gap-2"><span>📱</span><span>[SWANSEA_PHONE_NUMBER]</span></div>
              <div className="flex items-center gap-2"><span>📍</span><span>Swansea, Wales, UK</span></div>
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

          {/* Areas We Cover column */}
          <div>
            <span className="eyebrow">Areas We Cover</span>
            <div className="grid gap-2 mt-1">
              {areas.map(({ href, label, title }) => (
                <Link
                  key={label}
                  href={href}
                  title={title}
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
          <span>© 2025 Photo Booth Hire Swansea. All rights reserved.</span>
          <span>Photo Booth Hire Swansea &amp; South Wales</span>
        </div>
      </div>
    </footer>
  );
}
