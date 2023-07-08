/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.icons8.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'cdn.cdnlogo.com',
            pathname: '**',
          }
        ],
      },
}

module.exports = nextConfig
