import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // This creates a static export
  images: {
    unoptimized: true, // Required for static export
  },
  // If you're using basePath or rewrites, make sure they're correct
};

export default nextConfig;
