/**
 * Types and pure helpers shared by server and client components.
 *
 * Kept free of `node:fs` so Client Components can import it without pulling
 * the filesystem into the browser bundle.
 */

export const SITE_URL = "https://www.photoboothhireswansea.co.uk";

/** Categories double as the filter pills on the blog index. */
export const CATEGORIES = [
  "Planning",
  "Booths",
  "Weddings",
  "Event Managers",
  "News",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Post {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD) the post was first published. */
  date: string;
  /** ISO date of the last meaningful edit. Drives sitemap lastModified. */
  updated: string;
  category: Category;
  keywords: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  readingMinutes: number;
  content: string;
}

export type PostMeta = Omit<Post, "content">;

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function postUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}
