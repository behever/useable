import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Pin the workspace root: several package-lock.json files exist above this
  // repo, and Next would otherwise infer a parent directory as the root.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
