import type { Metadata } from "next";

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
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Corporate photo booth hire Swansea Cardiff" }],
  },
};

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
