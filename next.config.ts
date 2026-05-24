import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [70, 75, 80, 90],
  },
  async redirects() {
    return [
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
