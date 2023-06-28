/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.icons8.com',
            pathname: '/color/30/react-native.png',
          },
        ],
      },
}

module.exports = nextConfig
