/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
      {
        protocol: 'https',
        hostname: 'wordpress-1269066-4577871.cloudwaysapps.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)', // This applies to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors *", // Allows all origins
          },
        ],
      },
    ];
  },
};

export default nextConfig;
