import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/highlights",
        destination: "/",
      },
      {
        source: "/curriculum",
        destination: "/",
      },
      {
        source: "/pricing",
        destination: "/",
      },
      {
        source: "/courses",
        destination: "/",
      },
      {
        source: "/faq",
        destination: "/",
      },
      {
        source: "/gurgaon/highlights",
        destination: "/gurgaon",
      },
      {
        source: "/gurgaon/curriculum",
        destination: "/gurgaon",
      },
      {
        source: "/gurgaon/pricing",
        destination: "/gurgaon",
      },
      {
        source: "/gurgaon/courses",
        destination: "/gurgaon",
      },
      {
        source: "/gurgaon/faq",
        destination: "/gurgaon",
      },
    ];
  },
};

export default nextConfig;
