import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Quote",
  alternates: { canonical: "/quickquote" },
};

export default function QuickQuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
