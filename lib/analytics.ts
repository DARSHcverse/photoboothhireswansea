/**
 * GA4 event helpers for Photo Booth Hire Swansea.
 *
 * All tracked events follow GA4's recommended event schema:
 *   https://support.google.com/analytics/answer/9267735
 *
 * Usage:
 *   import { trackEvent } from "@/lib/analytics";
 *   trackEvent("whatsapp_click", { source: "fab" });
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Safe wrapper — silently does nothing if gtag isn't loaded yet. */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

// ── Typed helpers for each tracked interaction ──────────────────────────

/** WhatsApp FAB or inline link clicked. */
export const trackWhatsAppClick = (source: "fab" | "inline" = "fab") =>
  trackEvent("whatsapp_click", { source });

/** Phone number link clicked. */
export const trackPhoneClick = (source: string = "footer") =>
  trackEvent("phone_click", { source });

/** Email link clicked. */
export const trackEmailClick = (source: string = "footer") =>
  trackEvent("email_click", { source });

/** Quick Date Check form submitted successfully. */
export const trackQuickDateCheckSubmit = (contactType: "email" | "phone") =>
  trackEvent("quick_date_check_submit", { contact_type: contactType });

/** Quick Quote / Book Now CTA clicked. */
export const trackCtaClick = (label: string, source: string = "footer") =>
  trackEvent("cta_click", { cta_label: label, source });

/** Instagram social link clicked. */
export const trackSocialClick = (platform: string, source: string = "footer") =>
  trackEvent("social_click", { platform, source });

/** Booking page CTA clicked. */
export const trackBookingClick = (source: string) =>
  trackEvent("booking_click", { source });
