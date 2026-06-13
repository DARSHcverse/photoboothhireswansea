import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.photoboothhireswansea.co.uk";
  const now = new Date();

  return [
    { url: baseUrl,                                       lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/photobooths`,                      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/packages`,                         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/events`,                           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/events/weddings`,                  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/events/corporate`,                 lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/events/proms`,                     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/events/birthdays`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/events/christmas-parties`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/events/brand-activations`,         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/photo-booth-hire-cardiff`,         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/gallery`,                          lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${baseUrl}/about`,                            lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faq`,                              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`,                          lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/services`,                         lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/how-it-works`,                     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/backdrop`,                         lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/testimonials`,                     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/quickquote`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
