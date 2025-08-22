/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bazaarica.com",
      },
    ],
  },
};

export default nextConfig;
