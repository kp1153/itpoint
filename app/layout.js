import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "IT Point Computer Shop Varanasi | Laptop, Desktop Repair & Sales | Orderly Bazar, Pahariya, Bhojubeer",
  description:
    "Leading computer shop in Varanasi with 3 locations - Orderly Bazar (Lapcare Dealer), Pahariya & Bhojubeer. Expert laptop repair, desktop sales, SSD upgrades, printer repair, computer accessories at best prices. Authorized dealer with 15+ years experience in Varanasi.",
  keywords: [
    "computer shop varanasi",
    "laptop repair varanasi",
    "desktop repair varanasi",
    "it point varanasi",
    "computer accessories varanasi",
    "laptop sales varanasi",
    "orderly bazar computer shop",
    "pahariya computer shop",
    "bhojubeer computer shop",
    "lapcare dealer varanasi",
    "chip level repair varanasi",
    "printer repair varanasi",
    "ssd upgrade varanasi",
    "hdd upgrade varanasi",
    "gaming laptop varanasi",
    "business laptop varanasi",
    "branded desktop varanasi",
    "computer repair near me varanasi",
    "best computer shop varanasi",
    "trusted laptop dealer varanasi",
    "amc service varanasi",
    "data recovery varanasi",
    "software installation varanasi",
  ],
  authors: [{ name: "IT Point Computer Shop" }],
  creator: "IT Point Computer Shop",
  publisher: "IT Point Computer Shop",
  openGraph: {
    title:
      "IT Point Computer Shop - Varanasi's Trusted Laptop & Computer Store",
    description:
      "3 locations in Varanasi: Orderly Bazar (Lapcare Dealer), Pahariya & Bhojubeer. Laptop repair, desktop sales, gaming laptops, accessories & chip-level service. 15+ years trusted experience.",
    url: "https://itpointcomputershop.in",
    siteName: "IT Point Computer Shop Varanasi",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IT Point Computer Shop Varanasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Point Computer Shop Varanasi",
    description:
      "Laptop repair, desktop sales & computer accessories in Varanasi. 3 locations to serve you better.",
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
  alternates: {
    canonical: "https://itpointcomputershop.in",
  },
  verification: {
    google: "your-google-verification-code", // Google Search Console se milega
  },
  category: "technology",
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Varanasi",
    "geo.position": "25.3176;82.9739", // Varanasi coordinates
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#006680" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
