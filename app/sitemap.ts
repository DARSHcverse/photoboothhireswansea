import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://photoboothhireswansea.co.uk",                                  lastModified: new Date(), changeFrequency: "weekly",  priority: 1   },
    { url: "https://photoboothhireswansea.co.uk/photobooths",                      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://photoboothhireswansea.co.uk/packages",                         lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://photoboothhireswansea.co.uk/events",                           lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://photoboothhireswansea.co.uk/events/weddings",                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://photoboothhireswansea.co.uk/events/corporate",                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://photoboothhireswansea.co.uk/events/proms",                     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://photoboothhireswansea.co.uk/events/birthdays",                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://photoboothhireswansea.co.uk/events/christmas-parties",         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://photoboothhireswansea.co.uk/events/brand-activations",         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://photoboothhireswansea.co.uk/about",                            lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://photoboothhireswansea.co.uk/gallery",                          lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: "https://photoboothhireswansea.co.uk/faq",                              lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://photoboothhireswansea.co.uk/contact",                          lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://photoboothhireswansea.co.uk/photo-booth-hire-cardiff",         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
