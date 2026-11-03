import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/gallery";

export const metadata: Metadata = {
  title: { absolute: "Photo Booth Gallery | Example Event Photos | PBH" },
  description:
    "Example photo booth prints and setups. Current photos are from our sister business, The Shan Booth, Australia. UK event photos added from March 2027.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Photo Booth Gallery | Example Event Photos | PBH",
    description: "Example photo booth prints and setups. Current photos are from our sister business, The Shan Booth, Australia. UK event photos added from March 2027.",
    url: PAGE_URL,
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
