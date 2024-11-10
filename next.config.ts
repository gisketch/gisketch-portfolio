import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "api.microlink.io" }],
  },
};

export default nextConfig;
