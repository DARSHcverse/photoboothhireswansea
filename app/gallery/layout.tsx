import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/gallery";

export const metadata: Metadata = {
  title: { absolute: "Photo Booth Gallery | Real Events | PBH Swansea" },
  description:
    "Browse real photo booth moments from events captured by our team. Weddings, parties and corporate events across Swansea and South Wales.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Photo Booth Gallery | Real Events | PBH Swansea",
    description: "Browse real photo booth moments from events across Swansea and South Wales.",
    url: PAGE_URL,
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
