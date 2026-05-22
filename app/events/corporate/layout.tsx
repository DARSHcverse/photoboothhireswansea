import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Corporate Photo Booth Hire Swansea | PBH" },
  description:
    "Professional corporate photo booth hire in Swansea and South Wales. Branded prints, custom overlays, and a polished setup for team events, launches and client nights. From £250.",
  alternates: { canonical: "/events/corporate" },
};

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
