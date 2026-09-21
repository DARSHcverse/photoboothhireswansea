export const SWANSEA_HOST = "https://www.photoboothhireswansea.co.uk";
export const CARDIFF_HOST = "https://www.photoboothhirecardiff.co.uk";

/**
 * Maps an incoming `Host` header to the canonical origin for that domain.
 *
 * Both domains are served by the same app, so `robots.txt` and `sitemap.xml`
 * have to describe the host that was actually requested. Anything we do not
 * recognise (preview deployments, the .vercel.app host) falls back to the
 * Swansea origin, which is the site's primary domain.
 */
export function resolveSiteHost(hostHeader: string | null | undefined): string {
  const host = hostHeader?.split(":")[0].toLowerCase() ?? "";

  if (host.endsWith("photoboothhirecardiff.co.uk")) return CARDIFF_HOST;

  return SWANSEA_HOST;
}
