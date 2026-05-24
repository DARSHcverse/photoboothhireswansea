import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/faq";

export const metadata: Metadata = {
  title: { absolute: "Photo Booth Hire FAQs | PBH Swansea" },
  description:
    "Common questions about photo booth hire in Swansea. Pricing, setup, what is included and how to book answered clearly.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Photo Booth Hire FAQs | PBH Swansea",
    description: "Common questions about photo booth hire in Swansea.",
    url: PAGE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you cover all of Swansea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we cover all Swansea boroughs and surrounding areas including Cardiff, South Wales, and South Wales. Travel fees may apply for events outside South Wales and we'll confirm this when you enquire.",
      },
    },
    {
      "@type": "Question",
      name: "Are your attendants DBS checked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All attendants hold a current DBS (Disclosure and Barring Service) check and are experienced working with all ages, including school and youth events.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in your packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every package includes unlimited photos, instant prints, props, a custom photostrip design, a professional attendant, and your choice of backdrop. USB digital images and online gallery are included from 3-hour packages. Guest book is included in 4-hour and 5-hour packages. No hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "How much space do you need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend a clear flat area of at least 3m × 3m for the booth and backdrop, plus room for a short queue. We'll confirm setup requirements once you share your venue details.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As early as possible for peak dates like summer weddings, proms, and Christmas parties. We recommend booking at least 4–8 weeks ahead, though we do accommodate last-minute enquiries subject to availability.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customise the photostrip design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every package includes a custom photostrip design. Share your colours, theme, or event name and we'll create a layout that fits your event perfectly.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept secure online payment via Stripe. A deposit is required to secure your date, with the balance due before the event.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide a backdrop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a standard backdrop is included in every package. Premium backdrops and neon signs are available as add-ons. Visit the Backdrop page to see options.",
      },
    },
  ],
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqSchema} />
      {children}
    </>
  );
}
