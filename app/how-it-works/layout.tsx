import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/how-it-works";

export const metadata: Metadata = {
  title: { absolute: "How It Works | Photo Booth Hire Swansea" },
  description:
    "How to book a photo booth in Swansea. Simple three step process — enquire, confirm, enjoy. Photo Booth Hire Swansea.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "How It Works | Photo Booth Hire Swansea",
    description: "How to book a photo booth in Swansea. Simple three step process.",
    url: PAGE_URL,
  },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
