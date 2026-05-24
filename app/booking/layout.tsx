import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/booking";

export const metadata: Metadata = {
  title: { absolute: "Book Your Photo Booth Swansea | PBH" },
  description:
    "Book your photo booth hire in Swansea online. Secure your 2027 date for weddings, proms and events across South Wales.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Book Your Photo Booth Swansea | PBH",
    description: "Book your photo booth hire in Swansea online. Secure your 2027 date.",
    url: PAGE_URL,
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
