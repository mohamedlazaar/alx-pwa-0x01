import type { NextConfig } from 'next';

import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'm.media-amazon.com',
        pathname: '/**',
        protocol: 'https',
      },
    ],
  },
};

export default withPWA({ ...nextConfig });
