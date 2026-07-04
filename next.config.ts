import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [70, 75, 80, 90],
  },
  async redirects() {
    return [
      // Legacy static HTML URLs should resolve to the current canonical routes.
      {
        source: "/index.html",
        destination: "https://www.photoboothhireswansea.co.uk/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "https://www.photoboothhireswansea.co.uk/about",
        permanent: true,
      },
      {
        source: "/backdrop.html",
        destination: "https://www.photoboothhireswansea.co.uk/backdrop",
        permanent: true,
      },
      {
        source: "/booking.html",
        destination: "https://www.photoboothhireswansea.co.uk/booking",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "https://www.photoboothhireswansea.co.uk/contact",
        permanent: true,
      },
      {
        source: "/events.html",
        destination: "https://www.photoboothhireswansea.co.uk/events",
        permanent: true,
      },
      {
        source: "/faq.html",
        destination: "https://www.photoboothhireswansea.co.uk/faq",
        permanent: true,
      },
      {
        source: "/gallery.html",
        destination: "https://www.photoboothhireswansea.co.uk/gallery",
        permanent: true,
      },
      {
        source: "/how-it-works.html",
        destination: "https://www.photoboothhireswansea.co.uk/how-it-works",
        permanent: true,
      },
      {
        source: "/packages.html",
        destination: "https://www.photoboothhireswansea.co.uk/packages",
        permanent: true,
      },
      {
        source: "/pay.html",
        destination: "https://www.photoboothhireswansea.co.uk/pay",
        permanent: true,
      },
      {
        source: "/photobooths.html",
        destination: "https://www.photoboothhireswansea.co.uk/photobooths",
        permanent: true,
      },
      {
        source: "/quickquote.html",
        destination: "https://www.photoboothhireswansea.co.uk/quickquote",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "https://www.photoboothhireswansea.co.uk/services",
        permanent: true,
      },
      {
        source: "/testimonials.html",
        destination: "https://www.photoboothhireswansea.co.uk/testimonials",
        permanent: true,
      },
      // Legacy ecommerce (shop/cart) URLs from the old platform -> booking page.
      {
        source: "/shop",
        destination: "https://www.photoboothhireswansea.co.uk/booking",
        permanent: true,
      },
      {
        source: "/shop/:path*",
        destination: "https://www.photoboothhireswansea.co.uk/booking",
        permanent: true,
      },
      // Redirect non-www to www for Swansea domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "photoboothhireswansea.co.uk" }],
        destination: "https://www.photoboothhireswansea.co.uk/:path*",
        permanent: true,
      },
      // Redirect Cardiff domain homepage to Cardiff page
      {
        source: "/",
        has: [{ type: "host", value: "photoboothhirecardiff.co.uk" }],
        destination: "https://www.photoboothhireswansea.co.uk/photo-booth-hire-cardiff",
        permanent: true,
      },
      // Redirect Cardiff domain www to Cardiff page
      {
        source: "/",
        has: [{ type: "host", value: "www.photoboothhirecardiff.co.uk" }],
        destination: "https://www.photoboothhireswansea.co.uk/photo-booth-hire-cardiff",
        permanent: true,
      },
      // All other Cardiff domain paths redirect to main site
      {
        source: "/:path*",
        has: [{ type: "host", value: "photoboothhirecardiff.co.uk" }],
        destination: "https://www.photoboothhireswansea.co.uk/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.photoboothhirecardiff.co.uk" }],
        destination: "https://www.photoboothhireswansea.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
