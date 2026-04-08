import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: './', // 🔥 CRITICAL FIX
};

export default nextConfig;