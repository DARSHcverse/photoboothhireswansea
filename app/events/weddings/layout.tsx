import type { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/events/weddings";

export const metadata: Metadata = {
  title: { absolute: "Wedding Photo Booth Hire Swansea & South Wales" },
  description:
    "Elegant wedding photo booth hire in Swansea and South Wales. Custom strips, guest books and a professional attendant. Summer 2027 booking now.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Wedding Photo Booth Hire Swansea & South Wales",
    description:
      "Elegant wedding photo booth hire in Swansea and South Wales. Now booking summer 2027.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Wedding photo booth hire Swansea South Wales" }],
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
    price: "250",
    priceCurrency: "GBP",
    description: "From £250 for 2 hours",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long should I hire a wedding photo booth?",
      acceptedAnswer: { "@type": "Answer", text: "Most Swansea weddings book 3 to 4 hours, starting after the wedding breakfast when guests are relaxed and the dance floor opens. A 4-hour package gives you the most activity and includes a guest book." },
    },
    {
      "@type": "Question",
      name: "Can we customise the photo strip design?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — every package includes a custom photo strip design. We work with you before the event to create a layout that matches your wedding theme, colours and style." },
    },
    {
      "@type": "Question",
      name: "Do you cover wedding venues outside Swansea?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we cover all of South Wales including Cardiff, Bridgend, Neath, Port Talbot, Llanelli, Barry, Penarth and the Vale of Glamorgan. Get in touch to confirm your venue." },
    },
    {
      "@type": "Question",
      name: "Is the attendant included in wedding packages?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, a professional attendant is included in every package. For 4 and 5 hour packages you can also choose a male or female attendant to suit your wedding party preference." },
    },
  ],
};

export default function WeddingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[weddingServiceSchema, faqSchema]} />
      {children}
    </>
  );
}
