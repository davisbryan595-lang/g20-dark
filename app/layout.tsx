import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "G2O Auto Detailing | Premium Car Care in Medford, OR",
  description:
    "Premium auto detailing services in Medford, OR. Professional ceramic coating, paint correction, and interior detailing.",
  generator: "v0.app",
  openGraph: {
    title: "G2O Auto Detailing | Premium Car Care",
    description: "Premium auto detailing services in Medford, OR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
