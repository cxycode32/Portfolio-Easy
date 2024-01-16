/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'crowdytheme.com',
            port: '',
            pathname: '/html/info/info-demo/assets/imgs/**',
          },
        ],
      },
}

module.exports = nextConfig
