/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/posts",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.microcms-assets.io" },
    ],
  },
};

module.exports = nextConfig;
