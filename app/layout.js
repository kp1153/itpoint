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
    "IT Services Point Varanasi | Laptop, Desktop Repair & Sales | Orderly Bazar",
  description:
    "Leading computer shop in Varanasi - IT Services Point near Chaura Mata Mandir, Kachahari Road, Orderly Bazar. Expert laptop repair, desktop sales, CCTV, printer repair, data recovery at best prices. Life extension of your PC with 15+ years experience.",
  keywords: [
    "computer shop varanasi",
    "laptop repair varanasi",
    "desktop repair varanasi",
    "it services point varanasi",
    "computer accessories varanasi",
    "orderly bazar computer shop",
    "printer repair varanasi",
    "cctv camera varanasi",
    "data recovery varanasi",
    "cartridge refiling varanasi",
    "amc service varanasi",
    "software update varanasi",
    "best computer shop varanasi",
  ],
  authors: [{ name: "IT Services Point" }],
  creator: "IT Services Point",
  publisher: "IT Services Point",
  openGraph: {
    title: "IT Services Point - Varanasi's Trusted Computer Shop",
    description:
      "Life extension of your PC. Expert laptop repair, desktop sales, CCTV, printer services in Varanasi. Located at Orderly Bazar, Kachahari Road.",
    url: "https://www.itservicespoint.com/",
    siteName: "IT Services Point Varanasi",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
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
        <meta name="theme-color" content="#4F46E5" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "IT Services Point",
              description: "Life extension of your PC",
              telephone: "+919335833783",
              email: "itservices0607@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "S6/119 In front of Chaura Mata Mandir, Kachahari Road",
                addressLocality: "Orderly Bazar, Varanasi",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
            }),
          }}
        />

        <Script id="whatsapp-widget" strategy="afterInteractive">
          {`
            (function() {
              var wa = document.createElement('a');
              wa.href = 'https://wa.me/919335833783';
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