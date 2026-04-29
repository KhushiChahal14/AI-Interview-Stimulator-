import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add this webpack configuration:
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // List all problematic modules here
        child_process: false,
        fs: false,
        net: false,
        tls: false,
        dns: false,
        os: false,
        http2: false,
        'gcp-metadata': false,
      };
    }
    return config;
  },
  // Add this experimental configuration:
  experimental: {
    serverComponentsExternalPackages: [
      '@google-cloud/compute',
      'google-auth-library'
    ],
  }
};

export default nextConfig;