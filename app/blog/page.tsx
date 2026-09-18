import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { JsonLd } from "../components/JsonLd";
import { getAllPostMeta, SITE_URL } from "../../lib/blog";
import BlogIndex from "./BlogIndex";

const PAGE_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: { absolute: "Photo Booth Hire Blog | Tips, Guides & News | Swansea" },
  description:
    "Planning guides, booth comparisons and news from the Photo Booth Hire Swansea team. Everything you need to plan a photo booth for your wedding, prom or corporate event in South Wales.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Photo Booth Hire Blog | Tips, Guides & News",
    description:
      "Planning guides, booth comparisons and news from the Photo Booth Hire Swansea team.",
    url: PAGE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Photo Booth Hire Swansea blog",
      },
    ],
  },
};

export default function BlogPage() {
  const posts = getAllPostMeta();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Photo Booth Hire Swansea Blog",
    description:
      "Planning guides, booth comparisons and news for photo booth hire across Swansea and South Wales.",
    url: PAGE_URL,
    publisher: {
      "@type": "LocalBusiness",
      name: "Photo Booth Hire Swansea",
      telephone: "+447544193175",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: PAGE_URL },
    ],
  };

  return (
    <main>
      <JsonLd data={[blogSchema, breadcrumbSchema]} />
      <PageHero
        eyebrow="Blog"
        title="PHOTO BOOTH TIPS, GUIDES & NEWS"
        description="Straight answers on planning a photo booth for your event — what to expect, which booth to pick, and when to book across Swansea and South Wales."
        heroBg="/assets/hero-banner-2.webp"
      />
      <BlogIndex posts={posts} />
    </main>
  );
}
