import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Prom Photo Booth Hire Swansea | PBH" },
  description:
    "Safe, fun and professional prom photo booth hire in Swansea and South Wales. DBS-checked attendants, fast queues and premium prints for Year 11, Sixth Form and university leavers. From £250.",
  alternates: { canonical: "/events/proms" },
};

export default function PromsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
