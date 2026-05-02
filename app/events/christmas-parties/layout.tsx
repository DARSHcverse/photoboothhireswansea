import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Christmas Party Photo Booth Hire Swansea | PBH" },
  description:
    "Festive photo booth hire for Christmas parties in Swansea and South Wales. Christmas props, themed strip designs and unlimited prints for work parties and private celebrations. From £220.",
  alternates: { canonical: "/events/christmas-parties" },
};

export default function ChristmasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
