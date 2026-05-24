import type { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/events/weddings";

export const metadata: Metadata = {
  title: { absolute: "Wedding Photo Booth Hire Swansea | From £270" },
  description:
    "Elegant wedding photo booth hire in Swansea and South Wales. Custom strips, guest books and a professional attendant. Summer 2027 booking now.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Wedding Photo Booth Hire Swansea | From £270",
    description:
      "Elegant wedding photo booth hire in Swansea and South Wales. Now booking summer 2027.",
    url: PAGE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Wedding photo booth hire Swansea South Wales" }],
  },
};

const weddingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wedding Photo Booth Hire",
  name: "Wedding Photo Booth Hire Swansea",
  description: "Elegant wedding photo booth hire in Swansea and South Wales",
  areaServed: ["Swansea", "Cardiff", "South Wales"],
  provider: {
    "@type": "LocalBusiness",
    name: "Photo Booth Hire Swansea",
    telephone: "+447544193175",
  },
  offers: {
    "@type": "Offer",
    price: "270",
    priceCurrency: "GBP",
    description: "From £270 for 2 hours",
  },
};

export default function WeddingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={weddingServiceSchema} />
      {children}
    </>
  );
}
