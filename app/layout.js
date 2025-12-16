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
    "Professional Web Developer | Custom Website Development & Design Services",
  description:
    "Expert web developer specializing in custom website development, e-commerce solutions, responsive design, and digital solutions. Transform your business with professional web development services.",
  keywords: [
    "web developer",
    "website development",
    "custom website design",
    "e-commerce development",
    "responsive web design",
    "professional web developer",
    "website design services",
    "web development services",
    "business website development",
    "portfolio website",
    "landing page design",
    "react developer",
    "next.js developer",
    "full stack developer",
    "frontend developer",
    "website maintenance",
    "seo optimization",
    "web application development",
  ],
  authors: [{ name: "Web Developer KP" }],
  creator: "Web Developer KP",
  publisher: "Web Developer KP",
  openGraph: {
    title: "Web Developer KP - Professional Website Development Services",
    description:
      "Transform your business with custom website development, e-commerce solutions, and professional web design. Expert developer delivering high-quality digital solutions.",
    url: "https://www.web-developer-kp.com",
    siteName: "Web Developer KP",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Developer KP - Professional Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer KP - Custom Web Development",
    description:
      "Professional web developer offering custom website development, e-commerce solutions, and responsive design services.",
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
    canonical: "https://www.web-developer-kp.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  other: {
    "geo.region": "IN",
    "business.contact_data.country_name": "India",
    "service.type": "Web Development",
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
              "@type": "ProfessionalService",
              "@id": "https://www.web-developer-kp.com",
              name: "Web Developer KP",
              image: "https://www.web-developer-kp.com/og-image.jpg",
              description:
                "Professional web developer offering custom website development, e-commerce solutions, responsive design, and comprehensive digital services for businesses.",
              url: "https://www.web-developer-kp.com",
              telephone: "+919999999999",
              email: "contact@web-developer-kp.com",
              priceRange: "₹₹₹",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              serviceType: [
                "Website Development",
                "E-commerce Development",
                "Web Application Development",
                "Responsive Web Design",
                "Custom Web Solutions",
                "Website Maintenance",
                "SEO Optimization",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Website Development",
                      description:
                        "Tailored website solutions built with modern technologies",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-commerce Development",
                      description:
                        "Full-featured online store development with payment integration",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Responsive Web Design",
                      description:
                        "Mobile-friendly designs that work on all devices",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Maintenance",
                      description:
                        "Ongoing support and updates for your website",
                    },
                  },
                ],
              },
            }),
          }}
        />

        <Script id="whatsapp-widget" strategy="afterInteractive">
          {`
            (function() {
              var wa = document.createElement('a');
              wa.href = 'https://wa.me/919999999999';
              wa.target = '_blank';
              wa.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:999;background:#25D366;color:#fff;border-radius:50%;width:60px;height:60px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.15);text-decoration:none;transition:transform 0.3s';
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
