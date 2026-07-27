import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — the home directory (a parent dir)
  // has its own stray package-lock.json that would otherwise get inferred as root.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
