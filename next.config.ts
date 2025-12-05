import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable Next.js image optimization for deployment
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ['@/components'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore linting for deployment
  },
};

export default nextConfig;
