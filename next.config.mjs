/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
