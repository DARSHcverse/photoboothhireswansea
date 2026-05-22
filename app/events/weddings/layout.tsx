import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Wedding Photo Booth Hire Swansea | PBH" },
  description:
    "Wedding photo booth hire Swansea — now booking for summer 2027 weddings across South Wales. Elegant prints, custom strip designs and a professional attendant for your perfect day. From £220.",
  alternates: { canonical: "/events/weddings" },
};

export default function WeddingsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
