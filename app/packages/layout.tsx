import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages and Pricing",
  alternates: { canonical: "/packages" },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
