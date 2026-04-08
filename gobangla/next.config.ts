import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },

  // If you ever want static export (Hostinger only)
  // output: 'export',
};

export default nextConfig;