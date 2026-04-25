import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  alternates: { canonical: "/faq" },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
