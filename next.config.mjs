/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Higher quality settings
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    // If your images are already optimized WebP, you can skip Next.js optimization
    unoptimized: false,
  },
};

export default nextConfig;
