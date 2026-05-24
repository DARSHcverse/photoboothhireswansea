import type { Metadata } from "next";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/contact";

export const metadata: Metadata = {
  title: { absolute: "Contact Photo Booth Hire Swansea | Get a Quote" },
  description:
    "Get in touch with Photo Booth Hire Swansea. We reply within 24 hours. Call, email or fill in our quick quote form.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Contact Photo Booth Hire Swansea | Get a Quote",
    description: "Get in touch with Photo Booth Hire Swansea. Reply within 24 hours.",
    url: PAGE_URL,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
