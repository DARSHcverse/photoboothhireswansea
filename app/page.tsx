import type { Metadata } from "next";
import HomeContent from "./HomeContent";
import { JsonLd } from "./components/JsonLd";

const SITE_URL = "https://www.photoboothhireswansea.co.uk";

export const metadata: Metadata = {
  title: { absolute: "Photo Booth Hire Swansea | From £250 | PBH" },
  description:
    "Professional photo booth hire in Swansea and South Wales. Selfie Pods, Glam Booths and Enclosed Booths for weddings, proms and corporate events. From £250. Now booking 2027.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Photo Booth Hire Swansea | From £250 | PBH",
    description:
      "Professional photo booth hire in Swansea and South Wales. Now booking for 2027.",
    url: SITE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Photo Booth Hire Swansea — PBH" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Photo Booth Hire",
  provider: {
    "@type": "LocalBusiness",
    name: "Photo Booth Hire Swansea",
  },
  areaServed: "South Wales",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photo Booth Packages",
    itemListElement: [
      { "@type": "Offer", name: "Selfie Pod 2 Hours", price: "250", priceCurrency: "GBP" },
      { "@type": "Offer", name: "Glam Booth 2 Hours", price: "300", priceCurrency: "GBP" },
      { "@type": "Offer", name: "Enclosed Booth 2 Hours", price: "250", priceCurrency: "GBP" },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <HomeContent />
    </>
  );
}
