import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RevealInit from "./components/RevealInit";

const fallbackSiteUrl = "https://photoboothhireswansea.co.uk";
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
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Photo Booth Hire Swansea | PBH",
    template: "%s | Photo Booth Hire Swansea",
  },
  description:
    "Swansea's premier photo booth hire service for weddings, corporate events, school proms and parties across South Wales. Selfie Pods, Magic Mirrors and Enclosed Booths with unlimited prints and a professional attendant every time.",
  keywords:
    "photo booth hire Swansea, photo booth Cardiff, wedding photo booth Swansea, prom photo booth South Wales, corporate event photo booth, Selfie Pod, Magic Mirror, Enclosed Booth",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/IconLogo.ico", sizes: "any" }],
    shortcut: [{ url: "/IconLogo.ico" }],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-precomposed.png" },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "Photo Booth Hire Swansea",
    url: "https://photoboothhireswansea.co.uk",
    images: [{ url: "/og-image.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pbhswansea",
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
