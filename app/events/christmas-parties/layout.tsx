import type { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/events/christmas-parties";

export const metadata: Metadata = {
  title: { absolute: "Christmas Party Photo Booth Hire Swansea 2027" },
  description:
    "Festive photo booth hire for Christmas parties in Swansea and South Wales. Book early — December 2027 dates are filling fast.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Christmas Party Photo Booth Hire Swansea 2027",
    description:
      "Festive photo booth hire for Christmas parties in Swansea and South Wales.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Christmas party photo booth hire Swansea" }],
  },
};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Christmas Party Photo Booth Hire",
  name: "Christmas Party Photo Booth Hire Swansea",
  description: "Christmas party photo booth hire in Swansea and South Wales for corporate and private festive events.",
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
      name: "How early should I book for Christmas?",
      acceptedAnswer: { "@type": "Answer", text: "As early as possible — December weekends book up by September or October in South Wales. If you are planning a Christmas party, enquire now to secure your date before it goes." },
    },
    {
      "@type": "Question",
      name: "Do you have Christmas themed props?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — our Christmas prop collection includes Santa hats, reindeer antlers, elf ears, tinsel boas, novelty glasses and more. We can also accommodate specific theme requests." },
    },
    {
      "@type": "Question",
      name: "Can you do multiple events across the Christmas period?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — if your business has multiple office locations or events across December, get in touch and we can discuss availability and a multi-booking arrangement." },
    },
    {
      "@type": "Question",
      name: "Do you cover Cardiff for Christmas parties?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, Cardiff is one hour from our Swansea base and is covered as standard with no extra travel charge. We cover all Cardiff corporate venues and hotels for Christmas parties." },
    },
  ],
};

export default function ChristmasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />
      {children}
    </>
  );
}

