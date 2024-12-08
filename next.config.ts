import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/learn-tailwindcss-jun-layout"
      : "",
  basePath:
    process.env.NODE_ENV === "production"
      ? "/learn-tailwindcss-jun-layout"
      : "",
};

export default nextConfig;
