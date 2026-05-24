import type { Metadata } from "next";

const SITE_URL = "https://www.photoboothhireswansea.co.uk";
const PAGE_URL = `${SITE_URL}/events/proms`;

export const metadata: Metadata = {
  title: { absolute: "Prom Photo Booth Hire Swansea | DBS Checked" },
  description:
    "Safe and fun prom photo booth hire in Swansea and South Wales. DBS-checked attendants, fast queues and premium prints for Year 11 and Sixth Form.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Prom Photo Booth Hire Swansea | DBS Checked",
    description:
      "Safe and fun prom photo booth hire in Swansea and South Wales. DBS-checked attendants.",
    url: PAGE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Prom photo booth hire Swansea Wales" }],
  },
};

export default function PromsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
