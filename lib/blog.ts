import fs from "node:fs";
import path from "node:path";
import { CATEGORIES, type Category, type Post, type PostMeta } from "./blog-types";

export * from "./blog-types";

export const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Minimal YAML front matter reader.
 *
 * Front matter here is authored by us, never by users, so this deliberately
 * supports only what the posts actually use — `key: value` and `key: [a, b]` —
 * instead of pulling in a full YAML parser.
 */
function parseFrontMatter(raw: string): {
  data: Record<string, string | string[]>;
  content: string;
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, content: raw.trim() };

  const [, block, content] = match;
  const data: Record<string, string | string[]> = {};

  for (const line of block.split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;

    const separator = line.indexOf(":");
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = splitList(value.slice(1, -1));
      continue;
    }

    value = unquote(value);
    if (value) data[key] = value;
  }

  return { data, content: content.trim() };
}

function unquote(value: string): string {
  const quoted = /^(['"])([\s\S]*)\1$/.exec(value);
  return quoted ? quoted[2] : value;
}

/** Splits `a, "b, c", d` on commas that sit outside quotes. */
function splitList(body: string): string[] {
  const items: string[] = [];
  let current = "";
  let quote: '"' | "'" | null = null;

  for (const char of body) {
    if (quote) {
      if (char === quote) quote = null;
      else current += char;
      continue;
    }

    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }

    if (char === ",") {
      items.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  items.push(current.trim());
  return items.filter(Boolean);
}

function asString(value: string | string[] | undefined, fallback = ""): string {
  if (Array.isArray(value)) return value[0] ?? fallback;
  return value ?? fallback;
}

function asArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

/** Average adult reading speed, rounded up so very short posts still read "1 min". */
function readingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function toPost(fileName: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = parseFrontMatter(raw);

  const slug = fileName.replace(/\.mdx?$/, "");
  const date = asString(data.date);
  const category = asString(data.category) as Category;

  return {
    slug,
    title: asString(data.title, slug),
    description: asString(data.description),
    date,
    // Posts that have never been revised report their publish date.
    updated: asString(data.updated, date),
    category: CATEGORIES.includes(category) ? category : "News",
    keywords: asArray(data.keywords),
    image: asString(data.image, "/assets/hero-banner-1.webp"),
    imageAlt: asString(data.imageAlt, asString(data.title, slug)),
    featured: asString(data.featured) === "true",
    readingMinutes: readingMinutes(content),
    content,
  };
}

/** All posts, newest first. Drafts are any file prefixed with `_`. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => /\.mdx?$/.test(file) && !file.startsWith("_"))
    .map(toPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllPostMeta(): PostMeta[] {
  return getAllPosts().map((post) => {
    const meta: PostMeta & { content?: string } = { ...post };
    delete meta.content;
    return meta;
  });
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}

/** Most recent `updated` across all posts — the blog index's lastModified. */
export function getLatestUpdate(posts: PostMeta[]): string | undefined {
  return posts.map((post) => post.updated).sort().at(-1);
}

/**
 * Posts related to `post`, preferring the same category and falling back to
 * recency so the "keep reading" rail is never empty.
 */
export function getRelatedPosts(post: PostMeta, limit = 3): PostMeta[] {
  const others = getAllPostMeta().filter((item) => item.slug !== post.slug);
  const sameCategory = others.filter((item) => item.category === post.category);
  const rest = others.filter((item) => item.category !== post.category);

  return [...sameCategory, ...rest].slice(0, limit);
}

