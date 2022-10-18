/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // compiler: {
  //   styledComponents: true,
  // },
  staticPageGenerationTimeout: 1000,
};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);

// module.exports = nextConfig
