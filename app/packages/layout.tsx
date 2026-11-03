import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/packages";

export const metadata: Metadata = {
  title: { absolute: "Photo Booth Hire Prices Swansea | From £250" },
  description:
    "Clear photo booth hire prices for Swansea and South Wales, 2 to 5 hours, VAT included. Attendant, unlimited prints and custom design in every package.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Photo Booth Hire Prices Swansea | From £250",
    description: "Clear photo booth hire prices for Swansea and South Wales, 2 to 5 hours, VAT included. Attendant, unlimited prints and custom design in every package.",
    url: PAGE_URL,
  },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
