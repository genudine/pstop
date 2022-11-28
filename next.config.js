/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: "experimental-edge",
  },
  env: {
    saerroUrl: "https://saerro.harasse.rs/graphql",
  },
};

module.exports = nextConfig;
