import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Birthday Party Photo Booth Hire Swansea | PBH" },
  description:
    "Fun and affordable birthday party photo booth hire in Swansea and South Wales. Selfie Pods, Glam Booths and Enclosed Booths for milestone birthdays and private parties. From £250.",
  alternates: { canonical: "/events/birthdays" },
};

export default function BirthdaysLayout({ children }: { children: React.ReactNode }) {
  return children;
}
