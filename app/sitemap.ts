import { MetadataRoute } from "next";
import { getAllPostMeta, getLatestUpdate } from "../lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.photoboothhireswansea.co.uk";

  const posts = getAllPostMeta();
  const latestPost = getLatestUpdate(posts);

  // Static pages change when we deploy, so they carry the build date. Blog
  // URLs carry their own `updated` date instead — an accurate `lastmod` is
  // what Google uses to decide a recrawl is worthwhile.
  const buildDate = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                                       lastModified: buildDate, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/photobooths`,                      lastModified: buildDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/packages`,                         lastModified: buildDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/events`,                           lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/events/weddings`,                  lastModified: buildDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/events/corporate`,                 lastModified: buildDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/events/proms`,                     lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/events/birthdays`,                 lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/events/christmas-parties`,         lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/events/brand-activations`,         lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/photo-booth-hire-cardiff`,         lastModified: buildDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/event-managers`,                   lastModified: buildDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/gallery`,                          lastModified: buildDate, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${baseUrl}/about`,                            lastModified: buildDate, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faq`,                              lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`,                          lastModified: buildDate, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/services`,                         lastModified: buildDate, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/how-it-works`,                     lastModified: buildDate, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/backdrop`,                         lastModified: buildDate, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/testimonials`,                     lastModified: buildDate, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/quickquote`,                       lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
  ];

  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      // The index is only genuinely new when its newest post is.
      lastModified: latestPost ? new Date(latestPost) : buildDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: "monthly",
    priority: post.featured ? 0.8 : 0.7,
  }));

  return [...staticPages, ...blogIndex, ...blogPosts];
}
