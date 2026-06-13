import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.photoboothhireswansea.co.uk/sitemap.xml",
    host: "https://www.photoboothhireswansea.co.uk",
  };
}
