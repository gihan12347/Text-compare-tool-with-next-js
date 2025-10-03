import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove the X-Powered-By header for better SEO and security
  poweredByHeader: false,

  // Enable React strict mode for catching potential issues
  reactStrictMode: true,

  // Configure domains for optimized images
  images: {
    domains: ["freeonlinetextcomparetool.com"], // your actual domain
  },

  // Optional: Experimental features if using server components
  experimental: {
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/text-compare',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
