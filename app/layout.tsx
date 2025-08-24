import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Tasknify - Fast, Scalable Software Development",
  description:
    "Tasknify builds fast, scalable software—so your product moves at the speed of your ambition. Rust & TypeScript, Cloud-Native, High-Scale Architectures.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
