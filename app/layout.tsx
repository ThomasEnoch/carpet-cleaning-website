import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import BusinessHoursStatus from "@/components/business-hours-status"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Armstrong Carpet & Tile Cleaning | Commercial Cleaning Services Shawnee, OK",
    template: "%s | Armstrong Carpet & Tile Cleaning Shawnee"
  },
  description: "Professional commercial carpet, tile, and grout cleaning services in Shawnee, OK and surrounding areas within 60 miles. Expert solutions for businesses with flexible scheduling and advanced cleaning technology.",
  keywords: [
    "commercial carpet cleaning",
    "tile cleaning",
    "grout cleaning",
    "Shawnee OK",
    "Oklahoma commercial cleaning",
    "professional carpet cleaning",
    "business cleaning services",
    "commercial cleaning company",
    "low moisture cleaning",
    "steam cleaning"
  ],
  authors: [{ name: "Armstrong Carpet & Tile Cleaning" }],
  creator: "Armstrong Carpet & Tile Cleaning",
  publisher: "Armstrong Carpet & Tile Cleaning",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://armstrongcarpetandtile.com",
    title: "Armstrong Carpet & Tile Cleaning | Commercial Cleaning Services Shawnee, OK",
    description: "Professional commercial carpet, tile, and grout cleaning services in Shawnee, OK and surrounding areas within 60 miles. Expert solutions for businesses.",
    siteName: "Armstrong Carpet & Tile Cleaning",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "verification_token",
  },
  category: "Business Services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://armstrongcarpetandtile.com" />
        <meta name="geo.region" content="US-OK" />
        <meta name="geo.placename" content="Shawnee" />
        <meta name="geo.position" content="35.3272;-96.9253" />
        <meta name="ICBM" content="35.3272, -96.9253" />
      </head>
      <body className={inter.className}>
        {children}
        <BusinessHoursStatus />
      </body>
    </html>
  )
}
