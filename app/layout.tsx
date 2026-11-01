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

const siteDescription =
  "Tasknify is a premium software development agency. We engineer custom web apps, mobile platforms, cloud solutions, and APIs that scale with your business."

export const metadata: Metadata = {
  metadataBase: new URL("https://tasknify.com"),
  title: {
    default: "Tasknify — Software Development Agency",
    template: "%s — Tasknify",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    url: "https://tasknify.com",
    siteName: "Tasknify",
    title: "Tasknify — Software Development Agency",
    description: siteDescription,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tasknify — Software Development Agency" }],
  },
  twitter: { card: "summary_large_image", title: "Tasknify — Software Development Agency", description: siteDescription, images: ["/og.png"] },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${paytoneOne.variable} antialiased`}>
      <body className="font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K56RRHMH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K56RRHMH');
          `}
        </Script>
        <UISounds />
        {children}
      </body>
    </html>
  )
}
