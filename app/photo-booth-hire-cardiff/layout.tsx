import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/photo-booth-hire-cardiff";

export const metadata: Metadata = {
  title: { absolute: "Photo Booth Hire Cardiff | From £220 | PBH" },
  description:
    "Professional photo booth hire in Cardiff and South Wales. Selfie Pods, Glam Booths and Enclosed Booths for weddings, proms and events. From £220.",
  alternates: {
    canonical: PAGE_URL,
    types: { "text/html": "https://www.photoboothhirecardiff.co.uk" },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Photo Booth Hire Cardiff | From £220 | PBH",
    description:
      "Professional photo booth hire in Cardiff and South Wales. From £220.",
    url: PAGE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Photo Booth Hire Cardiff — PBH" }],
  },
};

export default function CardiffLayout({ children }: { children: React.ReactNode }) {
  return children;
}
