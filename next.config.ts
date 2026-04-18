import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'placehold.co' },
      { hostname: 'picsum.photos' },
      { hostname: 'cdn.shopify.com' },
    ],
  },
};

export default nextConfig;
