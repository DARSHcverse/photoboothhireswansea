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
        text: "Yes, we cover all Swansea boroughs and surrounding areas including Cardiff, Bridgend, Neath, Port Talbot, Llanelli, Barry, Penarth and Caerphilly. Travel is included across those areas; anywhere further afield we will confirm any travel cost before you book.",
      },
    },
    {
      "@type": "Question",
      name: "Are you insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Full public liability insurance and PAT testing on all equipment are in place from launch in March 2027, and certificates are available to your venue on request. Most venues in Swansea and Cardiff ask suppliers for both before letting them load in, so it is worth checking your venue's requirements early and we will send whatever they need.",
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
        text: "It depends entirely on your date. Peak dates — summer Saturdays between May and September, and anything in December — are typically booked 9 to 12 months ahead, because there are only so many Saturdays in a year. Quieter midweek dates and January to March can often be booked just a few weeks out. Last-minute enquiries are genuinely worth making, as cancellations and midweek gaps do come up.",
      },
    },
    {
      "@type": "Question",
      name: "How early should I book a photo booth for a 2027 wedding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a summer 2027 Saturday, 9 to 12 months ahead is sensible — most couples book their photo booth shortly after confirming the venue. Winter weddings generally need 6 to 9 months. The earlier you book, the more choice you have over booth type, backdrop and strip design, and the rate agreed at booking is the rate you pay.",
      },
    },
    {
      "@type": "Question",
      name: "Do photo booths get fully booked in Swansea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Peak dates do. Summer Saturdays, the whole of December and bank holiday weekends are the first to go, often many months ahead. Midweek dates and January to March stay available much longer. If your date is flexible, there is usually far more availability than people expect.",
      },
    },
    {
      "@type": "Question",
      name: "Is it too late to book a photo booth for my event?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often not. Cancellations happen and midweek dates sit open, and we have set up for events confirmed inside a fortnight. What we cannot do is free up a peak Saturday that is already taken. Checking takes a minute and costs nothing — send us your date and venue and we will tell you straight away.",
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
