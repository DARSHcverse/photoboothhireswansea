"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-80 px-3 sm:px-4 pt-3"
      aria-label="Site header"
    >
      <nav aria-label="Primary">
        <div
          className="flex items-center gap-3 mx-auto"
          style={{ maxWidth: "calc(1240px + 2rem)" }}
        >
          {/* Brand — separate from nav pill */}
          <Link
            href="/"
            className="navbar-brand hidden md:flex items-center shrink-0"
            aria-label="Photo Booth Hire Swansea home"
            onClick={() => setMenuOpen(false)}
          >
            <Logo variant="dark" width={160} height={48} />
          </Link>

          {/* pill shell */}
          <div
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 md:flex md:items-center md:gap-4 flex-1 px-3 py-[0.62rem] md:py-[0.7rem] rounded-full transition-all duration-300 md:mx-auto"
            style={{
              background: scrolled
                ? "rgba(10,10,10,0.92)"
                : "rgba(12,12,12,0.78)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: scrolled
                ? "inset 0 0 0 1px rgba(255,255,255,0.09), 0 24px 56px rgba(0,0,0,0.5), 0 0 24px rgba(26,111,212,0.06)"
                : "inset 0 0 0 1px rgba(255,255,255,0.07), 0 20px 48px rgba(0,0,0,0.38), 0 4px 12px rgba(0,0,0,0.22)",
            }}
          >
            <Link
              href="/"
              className="navbar-brand navbar-brand-mobile md:hidden flex items-center shrink-0 justify-self-start"
              aria-label="Photo Booth Hire Swansea home"
              onClick={() => setMenuOpen(false)}
            >
              <Logo variant="dark" width={124} height={38} />
            </Link>

            <Link
              href="/"
              className="md:hidden justify-self-center text-center text-[0.95rem] font-extrabold tracking-[0.1em] uppercase"
              style={{
                fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
                color: "rgba(255,255,255,0.88)",
              }}
              aria-label="Go to homepage"
              onClick={() => setMenuOpen(false)}
            >
              PBH Swansea
            </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border-0 shrink-0 justify-self-end"
            style={{
              background: "rgba(255,255,255,0.06)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
            }}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="flex flex-col gap-[5px]">
              <span
                className="block w-5 h-[2px] rounded-full transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block w-5 h-[2px] rounded-full transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-5 h-[2px] rounded-full transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                }}
              />
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-[2px]" id="site-menu">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative px-[0.88rem] py-[0.6rem] rounded-full text-[0.78rem] font-bold uppercase tracking-[0.06em] whitespace-nowrap transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
                    color: active ? "var(--color-accent)" : "rgba(255,255,255,0.72)",
                    background: active ? "rgba(26,111,212,0.1)" : "transparent",
                    boxShadow: active ? "inset 0 0 0 1px rgba(26,111,212,0.18)" : "none",
                  }}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.72)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }
                  }}
                >
                  {label}
                </Link>
              );
            })}

            {/* Contact icon */}
            <Link
              href="/contact"
              aria-label="Contact Photo Booth Hire Swansea"
              className="flex items-center justify-center w-[42px] h-[42px] rounded-full ml-1 transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
              }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(26,111,212,0.14)";
                (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 0 0 1px rgba(26,111,212,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 0 0 1px rgba(255,255,255,0.1)";
              }}
            >
              <Image src="/assets/call-icon.png" alt="" width={22} height={22} className="object-contain" />
            </Link>
          </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] mx-4 flex flex-col gap-1 p-4 rounded-[var(--radius-xl)] z-50"
            style={{
              background: "rgba(10,10,10,0.94)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 0 28px 56px rgba(0,0,0,0.5)",
            }}
            id="site-menu"
          >
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className="w-full text-center px-4 py-3 rounded-full text-[0.82rem] font-bold uppercase tracking-[0.06em] transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
                    color: active ? "var(--color-accent)" : "rgba(255,255,255,0.72)",
                    background: active ? "rgba(26,111,212,0.1)" : "transparent",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
