import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/booking";

export const metadata: Metadata = {
  title: { absolute: "Book Your Photo Booth | Secure Your 2027 Date" },
  description:
    "Secure your photo booth date with a deposit. 2027 prices fixed at booking. Swansea, Cardiff and South Wales events from March 2027.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Book Your Photo Booth | Secure Your 2027 Date",
    description: "Secure your photo booth date with a deposit. 2027 prices fixed at booking. Swansea, Cardiff and South Wales events from March 2027.",
    url: PAGE_URL,
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
