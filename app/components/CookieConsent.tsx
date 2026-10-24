"use client";

import { useState, useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const STORAGE_KEY = "pbh-cookie-consent";
const GA_ID = "G-5QFL1GXNK8";

type Consent = "accepted" | "rejected";

/** No-op: the hydration snapshot never changes after mount. */
function subscribeNoop() {
  return () => {};
}

function readStored(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "accepted" || stored === "rejected" ? stored : null;
  } catch {
    // Private browsing or blocked storage — treat as undecided and ask.
    return null;
  }
}

/**
 * Cookie consent banner, and the only place Google Analytics is mounted.
 *
 * PECR requires consent *before* non-essential cookies are set, so GA4 is not
 * rendered at all until the visitor accepts — gating it after the fact would
 * still have fired the tag. Vercel Analytics is cookieless and runs
 * regardless.
 *
 * Accept and Reject are deliberately equally prominent: the ICO treats a
 * banner where rejecting is harder than accepting as non-compliant.
 */
export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(() => readStored());

  // localStorage does not exist on the server, so the banner must not render
  // until hydration. useSyncExternalStore gives us that without a setState in
  // an effect: the server snapshot is false, the client snapshot true.
  const hydrated = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  function choose(value: Consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Still honour the choice for this session if storage is unavailable.
    }
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" && <GoogleAnalytics gaId={GA_ID} />}

      {hydrated && consent === null && (
        <div
          className="cookie-banner"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie choices"
        >
          <div className="cookie-banner__inner">
            <p className="cookie-banner__text">
              We use cookies to measure how the site is used. You can accept or
              reject these — rejecting will not affect the site.
            </p>
            <div className="cookie-banner__actions">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="btn btn-secondary cookie-banner__btn"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="btn btn-primary cookie-banner__btn"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
