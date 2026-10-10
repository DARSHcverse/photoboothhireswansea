/**
 * Single source of truth for package pricing.
 *
 * The packages page and the instant price calculator both read this, so a
 * price can never be right in one place and wrong in the other. Keep these
 * figures in sync with any printed or quoted material.
 */

export type BoothType = "open" | "glam" | "enclosed";

export const BOOTH_LABELS: Record<BoothType, string> = {
  open: "Selfie Pod",
  glam: "Glam Booth",
  enclosed: "Enclosed Booth",
};

export const BOOTH_BLURBS: Record<BoothType, string> = {
  open: "Bright, sociable and great for big groups. Our most popular all-rounder.",
  glam: "Black and white Hollywood portraits with soft studio lighting.",
  enclosed: "Curtain closed, nobody watching — gets the shyest guests involved.",
};

export const HOURS = [2, 3, 4, 5] as const;
export type Hours = (typeof HOURS)[number];

/** Prices in GBP, by booth then hire length. */
export const PRICES: Record<BoothType, Record<Hours, number>> = {
  open: { 2: 250, 3: 325, 4: 400, 5: 470 },
  glam: { 2: 300, 3: 380, 4: 460, 5: 530 },
  enclosed: { 2: 250, 3: 325, 4: 400, 5: 470 },
};

/** The hire length most people book, highlighted in the calculator. */
export const POPULAR_HOURS: Hours = 3;

export function getPrice(booth: BoothType, hours: Hours): number {
  return PRICES[booth][hours];
}

/** What every package includes, regardless of booth or length. */
export const ALWAYS_INCLUDED = [
  "Unlimited photos and instant prints",
  "Custom photo strip design",
  "Professional DBS-checked attendant",
  "Backdrop and event props",
  "Delivery, setup and pack-down",
];

/** Extras unlocked by longer hires, keyed by the minimum hours needed. */
export const UNLOCKED_AT: { hours: Hours; label: string }[] = [
  { hours: 3, label: "USB digital images and online gallery" },
  { hours: 4, label: "Traditional guest book" },
  { hours: 4, label: "Choice of male or female attendant" },
];

export function getIncluded(hours: Hours): string[] {
  return [
    ...ALWAYS_INCLUDED,
    ...UNLOCKED_AT.filter((x) => hours >= x.hours).map((x) => x.label),
  ];
}
