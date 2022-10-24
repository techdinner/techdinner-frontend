/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // compiler: {
  //   styledComponents: true,
  // },
  staticPageGenerationTimeout: 1000,
  experimental: {
    modularizeImports: {
      lodash: {
        transform: "lodash/{{member}}",
      },
      "@mui/material": {
        transform: "@mui/material/{{member}}",
      },
      "@mui/lab": {
        transform: "@mui/lab/{{member}}",
      },
      "@mui/icons-material/?(((\\w*)?/?)*)": {
        transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
      },
    },
  },
};

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
// });

// module.exports = withPWA(nextConfig);

module.exports = nextConfig;
