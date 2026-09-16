import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { JsonLd } from "../../components/JsonLd";
import {
  formatPostDate,
  getAllPostMeta,
  getPostBySlug,
  getRelatedPosts,
  postUrl,
  SITE_URL,
} from "../../../lib/blog";
import { mdxComponents } from "./mdx-components";

type Props = { params: Promise<{ slug: string }> };

const cardStyle = {
  background:
    "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow:
    "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export function generateStaticParams() {
  return getAllPostMeta().map((post) => ({ slug: post.slug }));
}

// Every post is known at build time, so unknown slugs should 404 rather than
// be rendered on demand.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: { absolute: "Post Not Found" } };

  const url = postUrl(post.slug);

  return {
    title: { absolute: `${post.title} | Photo Booth Hire Swansea` },
    description: post.description,
    keywords: post.keywords.join(", "),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_GB",
      siteName: "Photo Booth Hire Swansea",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.updated,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pbhswansea",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post);
  const url = postUrl(post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.updated,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en-GB",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      name: "Photo Booth Hire Swansea",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Photo Booth Hire Swansea",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/LogoPNG.png`,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <main>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      <article>
        {/* HEADER */}
        <section
          style={{ padding: "clamp(8.25rem,12vw,9.5rem) 0 0" }}
        >
          <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "820px" }}>
            <nav aria-label="Breadcrumb" className="mb-5">
              <Link
                href="/blog"
                className="text-sm"
                style={{ color: "var(--color-accent)" }}
              >
                ← Back to blog
              </Link>
            </nav>

            <span className="eyebrow">{post.category}</span>
            <h1
              className="mb-4"
              style={{ fontSize: "clamp(1.9rem,4.4vw,3rem)", lineHeight: 1.15 }}
            >
              {post.title}
            </h1>

            <p
              className="text-sm mb-8"
              style={{ color: "var(--color-fg-muted)" }}
            >
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              {" · "}
              {post.readingMinutes} min read
            </p>

            <div
              className="relative w-full overflow-hidden rounded-[var(--radius-xl)] mb-10"
              style={{ aspectRatio: "16 / 9", ...cardStyle }}
            >
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 860px) 100vw, 820px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* BODY */}
        <section style={{ padding: "0 0 clamp(3rem,6vw,5rem)" }}>
          <div
            className="mx-auto px-4 md:px-3 blog-prose"
            style={{ maxWidth: "820px" }}
          >
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </section>
      </article>

      {/* CTA */}
      <section className="bg-sand" style={{ padding: "clamp(4rem,7vw,6rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "820px" }}>
          <div
            className="reveal p-8 md:p-12 rounded-[var(--radius-xl)] text-center"
            style={cardStyle}
          >
            <span className="eyebrow" style={{ marginInline: "auto" }}>
              Ready When You Are
            </span>
            <h2 className="section-title">Check your date</h2>
            <p>
              Tell us your event date and venue and we will come straight back
              with availability and a price. No obligation.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <Link href="/quickquote" className="btn btn-primary">
                Get a Free Quote
              </Link>
              <Link href="/packages" className="btn btn-secondary">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section style={{ padding: "clamp(4rem,7vw,6rem) 0" }}>
          <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
            <div className="section-heading mb-8 text-center">
              <span className="eyebrow">Keep Reading</span>
              <h2 className="section-title">More guides and news</h2>
            </div>

            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
              }}
            >
              {related.map((item) => (
                <article
                  key={item.slug}
                  className="reveal p-6 rounded-[var(--radius-xl)] flex flex-col"
                  style={cardStyle}
                >
                  <span className="eyebrow" style={{ margin: 0 }}>
                    {item.category}
                  </span>
                  <h3
                    className="mt-3 mb-2"
                    style={{ fontSize: "1.05rem", lineHeight: 1.4 }}
                  >
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className="text-sm mb-0">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
