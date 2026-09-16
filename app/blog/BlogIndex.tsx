"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReveal } from "../components/useReveal";
import { CATEGORIES, formatPostDate, type PostMeta } from "../../lib/blog-types";

const cardStyle = {
  background:
    "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow:
    "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

type Filter = "all" | (typeof CATEGORIES)[number];

export default function BlogIndex({ posts }: { posts: PostMeta[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  // Only offer categories that actually have posts behind them.
  const filters = useMemo(() => {
    const used = CATEGORIES.filter((category) =>
      posts.some((post) => post.category === category),
    );
    return ["all" as const, ...used];
  }, [posts]);

  const visiblePosts = useMemo(
    () =>
      filter === "all"
        ? posts
        : posts.filter((post) => post.category === filter),
    [filter, posts],
  );

  useReveal([filter]);

  return (
    <section style={{ padding: "clamp(4rem,7vw,6rem) 0" }}>
      <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
        <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((value) => (
            <button
              key={value}
              type="button"
              className={`filter-btn${filter === value ? " active" : ""}`}
              onClick={() => setFilter(value)}
            >
              {value === "all" ? "All Posts" : value}
            </button>
          ))}
        </div>

        {visiblePosts.length === 0 ? (
          <p className="text-center">No posts in this category yet.</p>
        ) : (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
            }}
          >
            {visiblePosts.map((post) => (
              <article
                key={post.slug}
                className="reveal overflow-hidden rounded-[var(--radius-xl)] flex flex-col"
                style={cardStyle}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block w-full overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                  aria-label={post.title}
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 33vw"
                    className="object-cover"
                  />
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="eyebrow" style={{ margin: 0 }}>
                      {post.category}
                    </span>
                  </div>

                  <h2
                    className="mb-2"
                    style={{ fontSize: "1.2rem", lineHeight: 1.35 }}
                  >
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-sm mb-4">{post.description}</p>

                  <p
                    className="text-sm mt-auto mb-0"
                    style={{ color: "var(--color-fg-muted)" }}
                  >
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    {" · "}
                    {post.readingMinutes} min read
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="reveal flex flex-wrap gap-3 justify-center mt-12">
          <Link href="/quickquote" className="btn btn-primary">
            Get a Free Quote
          </Link>
          <Link href="/packages" className="btn btn-secondary">
            View Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
