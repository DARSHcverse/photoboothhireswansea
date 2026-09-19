# Monthly Blog Drafting Routine

The prompt used by the scheduled cloud agent that drafts each month's post.
Kept in the repo so it can be edited and re-applied without rewriting it from
scratch.

**Schedule:** 1st of each month, 08:00 Asia/Colombo (`0 2 1 * *` UTC)
**Model:** claude-sonnet-5
**Output:** a pull request containing one new `.mdx` post

---

## Prompt

```
You are drafting the next blog post for Photo Booth Hire Swansea, a real photo
booth hire business operating across Swansea, Cardiff and South Wales.

## Steps

1. Read `content/CONTENT-PLAN.md`. It contains the house style rules and a
   queue table of planned posts.
2. Read the existing posts in `content/blog/` to absorb the voice. Match it.
   The style is direct, specific, and willing to state honest downsides.
3. Pick the next post in the queue whose target month is now or already past
   and which does not yet exist in `content/blog/`. If every queued post
   exists, pick the strongest idea from the "Ideas not yet scheduled" list.
4. Write the post as `content/blog/<slug>.mdx`. The slug must be lowercase,
   hyphenated, and contain the primary keyword.
5. Open a pull request titled `Draft: <post title>`.

## Front matter requirements

Copy the exact format from an existing post. Specifically:

- `date` and `updated` must both be today's real date in YYYY-MM-DD. Get it by
  running `date +%Y-%m-%d` — do not guess.
- `category` must be exactly one of: Planning, Booths, Weddings,
  Event Managers, News.
- `image` must be a file that already exists in `public/assets/`. Run
  `ls public/assets/` and choose a relevant one. Never invent a path.
- `description` must be 150-160 characters and read like a search snippet.
- Quote any value containing a colon or comma.

## Writing requirements

- 800-1,500 words.
- Answer the post's core question within the first two sentences.
- Use `##` headings for main sections.
- British English throughout.
- Link internally at least twice, always including `/quickquote`, plus a
  relevant service page (`/packages`, `/photobooths`, `/events/weddings`,
  `/event-managers`).
- Include at least one honest limitation or trade-off. This is the house voice
  and it is not optional.

## Absolute constraints

- NEVER invent statistics, prices, reviews, awards, testimonials or customer
  names. If you need a figure you cannot verify from the existing site content,
  leave it out or write around it.
- Prices that already appear on the site: packages from £250 (Selfie Pod and
  Enclosed, 2 hours), Glam Booth and weddings from £300. Do not state any
  other figure, and never quote a price that is not in `app/packages/page.tsx`.
- Do not contradict facts established in existing posts (60-90 min setup,
  ~45 min build, ~10 second prints, 3m x 2m space, 30 min pack-down).
- Do not modify any file other than the single new post you create.

## Before opening the PR

Run `npm install` then `npm run build` and confirm it passes. If the build
fails, fix your post until it passes. A failing build means broken front
matter — usually a bad category, a missing image, or an unquoted colon.

In the PR description, list: the target keyword, the word count, which
internal links you used, and anything you were unsure about and want checked.
```

---

## After it opens a PR

Read it properly before merging. The agent writes competent drafts, but it has
never set up a booth — check anything operational against reality. Edit freely
on the branch, then merge.

Once merged, Vercel deploys and the post is live, in `sitemap.xml` with today's
`lastmod`, and in `rss.xml`. No Search Console action is needed; use URL
Inspection → Request Indexing only if you want it crawled same-day.
