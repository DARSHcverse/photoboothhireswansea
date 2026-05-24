import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/events/christmas-parties";

export const metadata: Metadata = {
  title: { absolute: "Christmas Party Photo Booth Hire Swansea 2027" },
  description:
    "Festive photo booth hire for Christmas parties in Swansea and South Wales. Book early — December 2027 dates are filling fast.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Christmas Party Photo Booth Hire Swansea 2027",
    description:
      "Festive photo booth hire for Christmas parties in Swansea and South Wales.",
    url: PAGE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Christmas party photo booth hire Swansea" }],
  },
};

export default function ChristmasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
