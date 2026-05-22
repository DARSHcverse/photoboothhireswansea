import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Brand Activation Photo Booth Hire Swansea | PBH" },
  description:
    "Photo booth hire for brand activations, product launches and marketing events in Swansea and South Wales. Fully branded prints, custom overlays and a professional setup. From £250.",
  alternates: { canonical: "/events/brand-activations" },
};

export default function BrandActivationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
