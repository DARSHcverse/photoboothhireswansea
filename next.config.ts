import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [70, 75, 80, 90],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "photoboothhirecardiff.co.uk" }],
        destination: "https://photoboothhireswansea.co.uk/photo-booth-hire-cardiff",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "photoboothhirecardiff.co.uk" }],
        destination: "https://photoboothhireswansea.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
