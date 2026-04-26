import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Photo Booth Hire Swansea",
  description:
    "Browse real photo booth moments from events across Swansea and South Wales. Weddings, parties, proms and corporate events captured by Photo Booth Hire Swansea.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
