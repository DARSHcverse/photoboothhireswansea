import type { Metadata } from "next";

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
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Brand activation photo booth Swansea" }],
  },
};

export default function BrandActivationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
