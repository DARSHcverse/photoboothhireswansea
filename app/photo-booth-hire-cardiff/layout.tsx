import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";

const SITE_URL = "https://www.photoboothhireswansea.co.uk";
const CARDIFF_DOMAIN = "https://www.photoboothhirecardiff.co.uk";

/**
 * This page is served at the Cardiff domain root as well as at
 * /photo-booth-hire-cardiff on the main site. The Cardiff domain is the
 * canonical home so it can rank for Cardiff searches in its own right.
 */
const PAGE_URL = CARDIFF_DOMAIN;

export const metadata: Metadata = {
  title: { absolute: "Photo Booth Hire Cardiff | From £250 | PBH" },
  description:
    "Professional photo booth hire in Cardiff and South Wales. Selfie Pods, Glam Booths and Enclosed Booths for weddings, proms and events. From £250.",
  keywords:
    "photo booth hire Cardiff, Cardiff photo booth, wedding photo booth Cardiff, corporate photo booth Cardiff Bay, photo booth Penarth, photo booth Barry",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Photo Booth Hire Cardiff | From £250 | PBH",
    description:
      "Professional photo booth hire in Cardiff and South Wales. From £250.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Photo Booth Hire Cardiff — PBH" }],
  },
};

/**
 * Cardiff-specific structured data.
 *
 * The root layout's LocalBusiness is named "Photo Booth Hire Swansea", which
 * gives Google no signal that this page serves Cardiff. These describe the
 * Cardiff service explicitly, and `areaServed` mirrors the areas the page
 * itself actually names.
 */
const cardiffServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Photo Booth Hire",
  name: "Photo Booth Hire Cardiff",
  description:
    "Professional photo booth hire in Cardiff and the surrounding South Wales area for weddings, corporate events, proms and parties.",
  url: PAGE_URL,
  areaServed: [
    { "@type": "City", name: "Cardiff" },
    { "@type": "Place", name: "Cardiff Bay" },
    { "@type": "Place", name: "Penarth" },
    { "@type": "Place", name: "Barry" },
    { "@type": "Place", name: "Caerphilly" },
    { "@type": "Place", name: "Pontypridd" },
    { "@type": "Place", name: "Vale of Glamorgan" },
  ],
  provider: {
    "@type": "LocalBusiness",
    name: "Photo Booth Hire Swansea",
    url: SITE_URL,
    telephone: "+447544193175",
    email: "photoboothhireinwales@gmail.com",
    image: `${SITE_URL}/og-image.png`,
    areaServed: "South Wales",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Selfie Pod 2 Hours",
      price: "250",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Glam Booth 2 Hours",
      price: "300",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Photo Booth Hire Cardiff",
      item: PAGE_URL,
    },
  ],
};

export default function CardiffLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[cardiffServiceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
