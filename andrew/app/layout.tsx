import Navbar from "@/components/local/Navbar"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "Andrew Virts",
  description: "Software engineer and UI/UX designer"
}

import posthog from "posthog-js"

posthog.init("phc_KLMF2ytZDgSTs9dgiQYYvVx78KtnSpeLZzANPla2IBW", {
  api_host: "https://us.i.posthog.com",
  person_profiles: "identified_only" // or 'always' to create profiles for anonymous users as well
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
