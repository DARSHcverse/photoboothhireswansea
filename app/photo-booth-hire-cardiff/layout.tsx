import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Photo Booth Hire Cardiff | PBH Swansea" },
  description:
    "Professional photo booth hire in Cardiff and South Wales. Selfie Pods, Glam Booths and Enclosed Booths for weddings, parties, corporate events and school proms. From £220. Serving all Cardiff areas.",
  alternates: {
    canonical: "https://photoboothhireswansea.co.uk/photo-booth-hire-cardiff",
    types: { "text/html": "https://photoboothhirecardiff.co.uk" },
  },
};

export default function CardiffLayout({ children }: { children: React.ReactNode }) {
  return children;
}
