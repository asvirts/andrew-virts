/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "mjofrqyopzbcipzeghug.supabase.co" // Including this since it's used in your portfolio items
    ]
  }
}

module.exports = nextConfig
