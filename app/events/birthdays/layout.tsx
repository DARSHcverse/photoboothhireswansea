import type { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/events/birthdays";

export const metadata: Metadata = {
  title: { absolute: "Birthday Party Photo Booth Hire Swansea & South Wales" },
  description:
    "Fun birthday party photo booth hire in Swansea. Props, instant prints and custom strip designs for milestone birthdays across South Wales.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Birthday Party Photo Booth Hire Swansea & South Wales",
    description:
      "Fun birthday party photo booth hire in Swansea. Milestone birthdays across South Wales.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Birthday party photo booth hire Swansea" }],
  },
};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Birthday Party Photo Booth Hire",
  name: "Birthday Party Photo Booth Hire Swansea",
  description: "Birthday party photo booth hire in Swansea and South Wales with unlimited prints, props and an attendant.",
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
      name: "What size venue do you need for a photo booth?",
      acceptedAnswer: { "@type": "Answer", text: "We recommend a clear flat space of at least 3m x 3m for the booth and backdrop plus room for a short queue. We have set up in homes, village halls, hotel function rooms and outdoor marquees across South Wales." },
    },
    {
      "@type": "Question",
      name: "Can we choose a theme for the props and strip?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — let us know your party theme when booking and we will tailor the props selection and photo strip design to match." },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book for a birthday?",
      acceptedAnswer: { "@type": "Answer", text: "Weekend dates especially Saturdays book up fast. We recommend booking at least 6 to 8 weeks in advance for birthday parties, and longer for summer and December dates." },
    },
    {
      "@type": "Question",
      name: "Do you travel to birthday parties outside Swansea?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we cover all of South Wales including Cardiff, Bridgend, Neath, Llanelli, Barry and surrounding areas." },
    },
  ],
};

export default function BirthdaysLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />
      {children}
    </>
  );
}

