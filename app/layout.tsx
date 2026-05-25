import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RevealInit from "./components/RevealInit";
import { JsonLd } from "./components/JsonLd";

const SITE_URL = "https://www.photoboothhireswansea.co.uk";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Photo Booth Hire Swansea | From £220 | PBH",
    template: "%s | Photo Booth Hire Swansea",
  },
  description:
    "Professional photo booth hire in Swansea and South Wales. Selfie Pods, Glam Booths and Enclosed Booths for weddings, proms and corporate events. From £220. Now booking 2027.",
  keywords:
    "photo booth hire Swansea, photo booth Cardiff, wedding photo booth Swansea, prom photo booth South Wales, corporate event photo booth, Selfie Pod, Glam Booth, Enclosed Booth",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: "/iconlogo.ico", type: "image/x-icon" }],
    shortcut: [{ url: "/iconlogo.ico", type: "image/x-icon" }],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-precomposed.png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Photo Booth Hire Swansea | From £220 | PBH",
    description:
      "Professional photo booth hire in Swansea and South Wales. Now booking for 2027.",
    url: SITE_URL,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Photo Booth Hire Swansea — PBH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pbhswansea",
    title: "Photo Booth Hire Swansea | From £220 | PBH",
    description:
      "Professional photo booth hire in Swansea and South Wales. Now booking for 2027.",
    images: ["/og-image.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Photo Booth Hire Swansea",
  alternateName: "PBH Swansea",
  description:
    "Professional photo booth hire in Swansea and South Wales for weddings, corporate events, proms and parties.",
  url: SITE_URL,
  telephone: "+447544193175",
  email: "photoboothhireinwales@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Swansea",
    addressRegion: "Wales",
    addressCountry: "GB",
  },
  areaServed: [
    "Swansea",
    "Cardiff",
    "South Wales",
    "Bridgend",
    "Neath",
    "Port Talbot",
    "Llanelli",
    "Barry",
    "Penarth",
    "Caerphilly",
    "Pontypridd",
  ],
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card",
  openingHours: "Mo-Su 09:00-21:00",
  sameAs: ["https://www.photoboothhirecardiff.co.uk"],
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
        <JsonLd data={localBusinessSchema} />
        <RevealInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
