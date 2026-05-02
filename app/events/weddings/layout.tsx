import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Wedding Photo Booth Hire Swansea | PBH" },
  description:
    "Elegant wedding photo booth hire in Swansea and South Wales. Unlimited prints, custom strip designs, guest books and a professional attendant for your perfect day. From £220.",
  alternates: { canonical: "/events/weddings" },
};

export default function WeddingsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
