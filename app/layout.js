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
    "IT Point Computer Shop Varanasi | Laptop, Desktop Repair & Sales | Orderly Bazar, Pahariya, Sigra",
  description:
    "Leading computer shop in Varanasi with 4 locations - Orderly Bazar Main Branch near LT College (Lapcare Dealer), Sigra Branch at Hotel Purvika, Pahariya Branch & Orderly Bazar Branch near Bank of Baroda. Expert laptop repair, desktop sales, SSD upgrades, printer repair, computer accessories at best prices. Authorized dealer with 15+ years experience in Varanasi.",
  keywords: [
    "computer shop varanasi",
    "laptop repair varanasi",
    "desktop repair varanasi",
    "it point varanasi",
    "computer accessories varanasi",
    "laptop sales varanasi",
    "orderly bazar computer shop",
    "orderly bazar lt college computer shop",
    "pahariya computer shop",
    "sigra computer shop",
    "hotel purvika computer shop",
    "bank of baroda computer shop varanasi",
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
    "computer shop near lt college varanasi",
    "computer shop sigra varanasi",
    "computer shop pahariya varanasi",
  ],
  authors: [{ name: "IT Point Computer Shop" }],
  creator: "IT Point Computer Shop",
  publisher: "IT Point Computer Shop",
  openGraph: {
    title:
      "IT Point Computer Shop - Varanasi's Trusted Laptop & Computer Store",
    description:
      "4 locations in Varanasi: Orderly Bazar Main (near LT College - Lapcare Dealer), Sigra (Hotel Purvika), Pahariya & Orderly Bazar (Bank of Baroda). Laptop repair, desktop sales, gaming laptops, accessories & chip-level service. 15+ years trusted experience.",
    url: "https://itpointcomputershop.in",
    siteName: "IT Point Computer Shop Varanasi",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IT Point Computer Shop Varanasi - 4 Locations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Point Computer Shop Varanasi - 4 Locations",
    description:
      "Laptop repair, desktop sales & computer accessories in Varanasi. Main Branch: Orderly Bazar (LT College), Branches: Sigra, Pahariya & Orderly Bazar.",
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
    "business.contact_data.street_address":
      "S. 6/1, Near LT College, Orderly Bazar",
    "business.contact_data.locality": "Varanasi",
    "business.contact_data.region": "Uttar Pradesh",
    "business.contact_data.postal_code": "221002",
    "business.contact_data.country_name": "India",
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

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://itpointcomputershop.in",
              name: "IT Point Computer Shop",
              image: "https://itpointcomputershop.in/og-image.jpg",
              description:
                "Leading computer shop in Varanasi with laptop repair, desktop sales, and computer accessories",
              url: "https://itpointcomputershop.in",
              telephone: "+919336486071",
              email: "itpoint51@gmail.com",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress: "S. 6/1, Near LT College, Orderly Bazar",
                addressLocality: "Varanasi",
                addressRegion: "Uttar Pradesh",
                postalCode: "221002",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "25.3176",
                longitude: "82.9739",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "10:00",
                  closes: "20:00",
                },
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+919889571571",
                  contactType: "Main Branch",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+919369499806",
                  contactType: "Sigra Branch",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+919198886071",
                  contactType: "Pahariya Branch",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+919044406071",
                  contactType: "Orderly Bazar Branch",
                },
              ],
              areaServed: {
                "@type": "City",
                name: "Varanasi",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Computer Services and Products",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Laptop Repair",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Desktop Repair",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Laptop Sales",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Computer Accessories",
                    },
                  },
                ],
              },
            }),
          }}
        />
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
