import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const repoRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Static assets (images, js, css) in /public are still served normally.
  // All HTML pages are now Next.js App Router pages — no rewrites needed.
  turbopack: {
    // Avoid picking the home directory as the workspace root when it has its own package.json.
    root: repoRoot,
  },
};

export default nextConfig;
