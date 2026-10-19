import type { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";

const SITE_URL = "https://www.photoboothhireswansea.co.uk";
const PAGE_URL = `${SITE_URL}/events/corporate`;

export const metadata: Metadata = {
  title: { absolute: "Corporate Photo Booth Hire Swansea | Branded Prints" },
  description:
    "Professional corporate photo booth hire in Swansea and Cardiff. Branded overlays, high capacity and polished presentation for your next event.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Corporate Photo Booth Hire Swansea | Branded Prints",
    description:
      "Professional corporate photo booth hire in Swansea and Cardiff. Branded overlays for your next event.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Corporate photo booth hire Swansea Cardiff" }],
  },
};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corporate Photo Booth Hire",
  name: "Corporate Photo Booth Hire Swansea",
  description: "Corporate photo booth hire in Swansea and South Wales with branded prints, invoicing and a professional attendant.",
  areaServed: ["Swansea", "Cardiff", "South Wales"],
  provider: {
    "@type": "LocalBusiness",
    name: "Photo Booth Hire Swansea",
    telephone: "+447544193175",
  },
  offers: {
    "@type": "Offer",
    price: "250",
    priceCurrency: "GBP",
    description: "From £250 for 2 hours, inc. VAT",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you add our company branding to the prints?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — every corporate booking includes a custom branded photo strip overlay. Send us your logo and brand guidelines and we create a template that fits your event perfectly." },
    },
    {
      "@type": "Question",
      name: "Do you handle large corporate groups?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Our open air Selfie Pod is designed for high throughput — we can comfortably handle large corporate groups without queues building up. Let us know your expected guest numbers when enquiring." },
    },
    {
      "@type": "Question",
      name: "Can you set up at Cardiff venues for corporate events?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. Cardiff is one hour from our Swansea base and falls within our standard service area with no extra travel charge. We regularly cover Cardiff Bay and city centre venues." },
    },
    {
      "@type": "Question",
      name: "Do you provide a VAT invoice for corporate bookings?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, a full VAT invoice is provided for all corporate bookings. Get in touch and we will confirm details when you enquire." },
    },
  ],
};

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />
      {children}
    </>
  );
}

