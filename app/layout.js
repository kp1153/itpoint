import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

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
    google: "your-google-verification-code",
  },
  category: "technology",
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Varanasi",
    "geo.position": "25.3176;82.9739",
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

        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6936a221c1fdd7197d7255e1/1jbumil08';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        <Script id="whatsapp-widget" strategy="afterInteractive">
          {`
            (function() {
              var wa = document.createElement('a');
              wa.href = 'https://wa.me/919336486071';
              wa.target = '_blank';
              wa.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:999;background:#25D366;color:#fff;border-radius:50%;width:60px;height:60px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.15);text-decoration:none;transition:transform 0.3s';
              wa.innerHTML = '<svg style="width:32px;height:32px" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
              wa.onmouseover = function() { this.style.transform = 'scale(1.1)'; };
              wa.onmouseout = function() { this.style.transform = 'scale(1)'; };
              document.body.appendChild(wa);
            })();
          `}
        </Script>
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
