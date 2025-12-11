// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "upload.wikimedia.org",
    ],
    contentDispositionType: "inline",
  },
};

module.exports = nextConfig;
