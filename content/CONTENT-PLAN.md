# Blog Content Plan

The publishing queue and the house rules for writing posts. The monthly
drafting routine reads this file to decide what to write next.

## How to add a post

1. Create `content/blog/<slug>.mdx`. The filename **is** the URL:
   `content/blog/my-post.mdx` → `/blog/my-post`.
2. Fill in the front matter (see below).
3. Commit and push. Vercel builds, and the post appears on `/blog`, in
   `sitemap.xml` with its own `lastmod`, and in `rss.xml`.

Prefix a filename with `_` to keep it as a draft — `_draft-post.mdx` is
ignored by the build.

## Front matter

```yaml
---
title: "Post Title in Title Case"
description: "150–160 characters. This is the search result snippet — write it for a human deciding whether to click."
date: 2026-10-02          # publish date, never changes
updated: 2026-10-02       # bump ONLY on a meaningful edit
category: Planning        # Planning | Booths | Weddings | Event Managers | News
keywords: [primary keyword, secondary keyword, third]
image: /assets/boothimg6.webp
imageAlt: "Describes the image for screen readers and image search"
featured: false           # true lifts sitemap priority to 0.8
---
```

Notes:

- `updated` drives `lastmod` in the sitemap. Bumping it for a typo fix is
  crying wolf at Google — only move it for real changes.
- `category` must be one of the five listed. Anything else falls back to `News`.
- Quote any value containing a colon or comma.
- Images must already exist in `public/assets/`.

## House style

- **Answer the question in the first two sentences.** No throat-clearing.
- Write like a person who has actually run these events. Specifics — 45-minute
  setup, 10-second prints, 3m x 2m — beat adjectives.
- Say the honest downside. It is the most persuasive thing on the page and it
  is what separates us from every competitor's copy.
- Use `##` for main sections. Google lifts these into featured snippets.
- **Always link internally**, at minimum to `/quickquote` and one relevant
  service page. This is how link equity reaches the money pages.
- 800–1,500 words. Long enough to be useful, short enough to be read.
- British English: "personalised", "colour", "organise".
- No invented statistics, awards, or review counts. Ever.

## Queue

Roughly one post a month. Seasonal pieces need to land **before** the season
they target — people search while planning, not on the day.

| Target | Working title | Category | Primary keyword |
|---|---|---|---|
| Oct 2026 | How Much Does Photo Booth Hire Cost in Swansea? | Planning | photo booth hire cost swansea |
| Nov 2026 | Christmas Party Photo Booth Ideas for South Wales Businesses | News | christmas party photo booth swansea |
| Dec 2026 | Photo Booth Backdrops: How to Match Your Venue | Booths | photo booth backdrop ideas |
| Jan 2027 | The 2027 Wedding Planning Timeline (and Where the Booth Fits) | Weddings | wedding planning timeline wales |
| Feb 2027 | Questions to Ask Before Booking Any Photo Booth Supplier | Planning | questions to ask photo booth hire |
| Mar 2027 | Prom Season: A Guide for Schools and Sixth Forms | Planning | prom photo booth hire south wales |
| Apr 2027 | Photo Booth Hire at Swansea's Most Popular Wedding Venues | Weddings | swansea wedding venues photo booth |
| May 2027 | Corporate Event Photo Booths That Actually Generate Leads | Event Managers | corporate photo booth branding |

### Ideas not yet scheduled

- Guest book vs digital gallery: which do couples actually use afterwards?
- What makes a photo booth attendant good (and why it matters)
- Photo booth hire for charity balls and fundraisers
- Behind the strip: how we design a custom layout
- A venue-by-venue access guide for event managers

## What not to publish

- Thin posts written to hit a cadence. A skipped month costs nothing; a page
  of filler dilutes the whole domain.
- Anything duplicating an existing service page instead of linking to it.
- Unreviewed AI-generated copy. Google's scaled-content-abuse policy targets
  exactly that, and it puts existing rankings at risk.
