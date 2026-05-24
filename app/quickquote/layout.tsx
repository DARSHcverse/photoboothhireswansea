import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/quickquote";

export const metadata: Metadata = {
  title: { absolute: "Quick Quote | Photo Booth Hire Swansea" },
  description:
    "Get a fast free quote for photo booth hire in Swansea and South Wales. Tell us your event details and we reply within 24 hours.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Quick Quote | Photo Booth Hire Swansea",
    description: "Get a fast free quote for photo booth hire in Swansea and South Wales.",
    url: PAGE_URL,
  },
};

export default function QuickQuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
