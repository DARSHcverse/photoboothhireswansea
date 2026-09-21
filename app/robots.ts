import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { resolveSiteHost } from "../lib/site-host";

/**
 * Both domains are served by this app, so robots.txt must describe whichever
 * host the crawler actually asked for. Declaring the Swansea host on the
 * Cardiff domain would tell crawlers that domain is not canonical.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = resolveSiteHost((await headers()).get("host"));

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
