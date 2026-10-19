import type { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";

const SITE_URL = "https://www.photoboothhireswansea.co.uk";
const PAGE_URL = `${SITE_URL}/events/proms`;

export const metadata: Metadata = {
  title: { absolute: "Prom Photo Booth Hire Swansea | DBS Checked" },
  description:
    "Safe and fun prom photo booth hire in Swansea and South Wales. DBS-checked attendants, fast queues and premium prints for Year 11 and Sixth Form.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Prom Photo Booth Hire Swansea | DBS Checked",
    description:
      "Safe and fun prom photo booth hire in Swansea and South Wales. DBS-checked attendants.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Prom photo booth hire Swansea Wales" }],
  },
};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Prom Photo Booth Hire",
  name: "Prom Photo Booth Hire Swansea",
  description: "Prom and school event photo booth hire in Swansea and South Wales with DBS-checked attendants.",
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
      name: "Are your attendants DBS checked for school events?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. All attendants hold a current DBS (Disclosure and Barring Service) check and are experienced working with young people at school proms and youth events across South Wales." },
    },
    {
      "@type": "Question",
      name: "How far in advance should schools book?",
      acceptedAnswer: { "@type": "Answer", text: "Prom dates fill up fast — especially May, June and July which is peak prom season in Wales. We recommend booking at least 3 to 6 months in advance to secure your date." },
    },
    {
      "@type": "Question",
      name: "Can we have the school logo on the photo strip?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — custom photo strip design is included in every package. We can include your school name, crest, year group and prom theme on every print." },
    },
    {
      "@type": "Question",
      name: "Do you cover schools outside Swansea?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we cover schools across South Wales including Cardiff, Bridgend, Neath, Port Talbot, Llanelli, Caerphilly and surrounding areas." },
    },
  ],
};

export default function PromsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />
      {children}
    </>
  );
}

