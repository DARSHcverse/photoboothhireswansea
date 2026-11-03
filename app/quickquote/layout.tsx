import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/quickquote";

export const metadata: Metadata = {
  title: { absolute: "Free Photo Booth Quote | Swansea & South Wales" },
  description:
    "Tell us your date, venue and event type and get availability and a tailored photo booth quote for Swansea or South Wales. No obligation.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Free Photo Booth Quote | Swansea & South Wales",
    description: "Tell us your date, venue and event type and get availability and a tailored photo booth quote for Swansea or South Wales. No obligation.",
    url: PAGE_URL,
  },
};

export default function QuickQuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
