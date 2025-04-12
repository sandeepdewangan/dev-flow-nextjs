import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // add src of url which will be needed in app
  // here we need avatar to be displayed, so we use vecteezy image provider
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
