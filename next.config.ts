import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
        protocol: "https",
        port: "",
      },
      { hostname: "avatar.iran.liara.run", protocol: "https", port: "" },
    ],
  },
  /* config options here */
};

export default nextConfig;
