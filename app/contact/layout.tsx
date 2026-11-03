import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/contact";

export const metadata: Metadata = {
  title: { absolute: "Contact Photo Booth Hire Swansea | Call or WhatsApp" },
  description:
    "Call, WhatsApp or email Photo Booth Hire Swansea about your wedding, prom, party or corporate event. Fast replies on availability and pricing.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Contact Photo Booth Hire Swansea | Call or WhatsApp",
    description: "Call, WhatsApp or email Photo Booth Hire Swansea about your wedding, prom, party or corporate event. Fast replies on availability and pricing.",
    url: PAGE_URL,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
