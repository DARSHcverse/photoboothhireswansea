import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Christmas Party Photo Booth Hire Swansea | PBH" },
  description:
    "Christmas party photo booth hire Swansea 2027. Festive props, branded prints and unlimited photos for work parties and private celebrations across South Wales. Book early — December dates fill fast. From £220.",
  alternates: { canonical: "/events/christmas-parties" },
};

export default function ChristmasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
