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

  // You can add custom headers, caching, or redirects here in the future
};

export default nextConfig;
