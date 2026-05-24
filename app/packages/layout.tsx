import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/packages";

export const metadata: Metadata = {
  title: { absolute: "Photo Booth Packages Swansea | Prices From £220" },
  description:
    "Transparent photo booth hire pricing for Swansea and South Wales. All packages include unlimited prints, attendant and custom strip design.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Photo Booth Packages Swansea | Prices From £220",
    description: "Transparent photo booth hire pricing for Swansea and South Wales.",
    url: PAGE_URL,
  },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
