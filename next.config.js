/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3.ap-northeast-2.amazonaws.com",
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}

module.exports = nextConfig
