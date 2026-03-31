/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/Portfolio_new',
  assetPrefix: '/Portfolio_new/',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
