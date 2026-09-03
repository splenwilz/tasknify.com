import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter, Paytone_One } from "next/font/google"
import { UISounds } from "@/components/ui-sounds"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const paytoneOne = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-paytone",
})

export const metadata: Metadata = {
  title: "Tasknify — Software Development Agency",
  description:
    "Tasknify is a premium software development agency. We engineer custom web apps, mobile platforms, cloud solutions, and APIs that scale with your business.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${paytoneOne.variable} antialiased`}>
      <body className="font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CDHXPNBBSQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CDHXPNBBSQ');
          `}
        </Script>
        <UISounds />
        {children}
      </body>
    </html>
  )
}
