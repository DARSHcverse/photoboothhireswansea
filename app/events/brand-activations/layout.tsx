import type { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/events/brand-activations";

export const metadata: Metadata = {
  title: { absolute: "Brand Activation Photo Booth Swansea | Branded" },
  description:
    "Fully branded photo booth hire for brand activations and product launches in Swansea and Cardiff. Custom overlays and professional setup.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Brand Activation Photo Booth Swansea | Branded",
    description:
      "Fully branded photo booth hire for brand activations in Swansea and Cardiff.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Brand activation photo booth Swansea" }],
  },
};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Brand Activation Photo Booth Hire",
  name: "Brand Activation Photo Booth Hire Swansea",
  description: "Brand activation photo booth hire in Swansea and South Wales with fully branded prints and start screens.",
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
      name: "Can the booth be fully branded for our campaign?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — photo strip overlays are fully customised with your logo, campaign name, hashtag, QR code or any other brand elements. Send us your brand guidelines and we handle the design." },
    },
    {
      "@type": "Question",
      name: "Do you cover Cardiff for brand activations?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, Cardiff Bay and city centre are covered as standard with no extra travel charge. Cardiff is one hour from our Swansea base and we cover activations there regularly." },
    },
    {
      "@type": "Question",
      name: "Can guests share photos digitally at the event?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — USB digital images are included in every package, and from 3 hours you also get an online gallery. Guests can receive their photos via QR code or online gallery link, making it easy to share on social media immediately after their session." },
    },
    {
      "@type": "Question",
      name: "Do you work with agencies and event companies?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — we work directly with brands, marketing agencies and event management companies. Get in touch to discuss your activation requirements and we will provide a tailored quote." },
    },
  ],
};

export default function BrandActivationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />
      {children}
    </>
  );
}

