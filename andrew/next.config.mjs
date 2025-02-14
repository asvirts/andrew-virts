/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co"
      },
      {
        protocol: "https",
        hostname: "mjofrqyopzbcipzeghug.supabase.co"
      }
    ]
  },
  transpilePackages: ["framer-motion"]
}

export default nextConfig
