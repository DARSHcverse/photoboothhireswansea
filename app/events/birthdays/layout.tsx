import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/events/birthdays";

export const metadata: Metadata = {
  title: { absolute: "Birthday Party Photo Booth Hire Swansea | From £220" },
  description:
    "Fun birthday party photo booth hire in Swansea. Props, instant prints and custom strip designs for milestone birthdays across South Wales.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Birthday Party Photo Booth Hire Swansea | From £220",
    description:
      "Fun birthday party photo booth hire in Swansea. Milestone birthdays across South Wales.",
    url: PAGE_URL,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Birthday party photo booth hire Swansea" }],
  },
};

export default function BirthdaysLayout({ children }: { children: React.ReactNode }) {
  return children;
}
