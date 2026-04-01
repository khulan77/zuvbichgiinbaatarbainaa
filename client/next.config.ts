/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
  // Таны кодонд Turbopack ашиглагдаж байгаа бол:
  experimental: {
    turbo: {
      // Турбо тохиргоонууд энд орно
    },
  },
};

export default nextConfig;
