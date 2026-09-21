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
      // The testimonials page was removed; send it and its legacy URL to the
      // gallery, which shows real events rather than written reviews.
      {
        source: "/testimonials.html",
        destination: "https://www.photoboothhireswansea.co.uk/gallery",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "https://www.photoboothhireswansea.co.uk/gallery",
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
      // Cardiff: force the apex onto www so one hostname is canonical. The
      // www host is NOT redirected — it serves the Cardiff page via the
      // rewrite below, so the domain can rank on its own.
      {
        source: "/:path*",
        has: [{ type: "host", value: "photoboothhirecardiff.co.uk" }],
        destination: "https://www.photoboothhirecardiff.co.uk/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // The Cardiff domain root serves the Cardiff page without changing
        // the URL. Deeper paths fall through and resolve normally, so
        // /packages etc. still work on this domain.
        {
          source: "/",
          has: [{ type: "host", value: "www.photoboothhirecardiff.co.uk" }],
          destination: "/photo-booth-hire-cardiff",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
