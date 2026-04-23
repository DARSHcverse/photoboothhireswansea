import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RevealInit from "./components/RevealInit";

const fallbackSiteUrl = "https://photoboothhirelondon.uk";
const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : fallbackSiteUrl,
);

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["500", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
};

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "The Shan Booth | Photo Booth Hire London",
    template: "%s | The Shan Booth London",
  },
  description:
    "London's premium photo booth hire service for weddings, corporate events, school proms, and parties. Crystal-clear photos, unlimited prints, and a professional attendant every time.",
  keywords:
    "photo booth hire London, photo booth UK, wedding photo booth London, prom photo booth, corporate event photo booth, The Shan Booth",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-precomposed.png" },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "The Shan Booth",
    url: "/",
    images: [{ url: "/og-image.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${plusJakarta.variable}`}
      style={{ fontFamily: "var(--font-manrope, 'Manrope', sans-serif)" }}
    >
      <body>
        <RevealInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
