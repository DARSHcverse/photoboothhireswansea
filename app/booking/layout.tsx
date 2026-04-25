import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Now",
  alternates: { canonical: "/booking" },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
