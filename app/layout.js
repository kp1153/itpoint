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
  title: "IT Point Computer Shop | Laptop & Desktop Services in Varanasi",
  description:
    "IT Point Computer Shop, Varanasi – Laptop repair, desktop repair, accessories, SSD/HDD upgrade, printer repair, chip-level service. Best & trusted computer shop in Varanasi.",
  keywords: [
    "computer shop varanasi",
    "laptop repair varanasi",
    "desktop repair banaras",
    "computer accessories varanasi",
    "it point varanasi",
    "chip level repair varanasi",
    "printer repair varanasi",
  ],
  authors: [{ name: "IT Point Computer Shop" }],
  openGraph: {
    title: "IT Point Computer Shop – Varanasi",
    description:
      "Best laptop & desktop repair shop in Varanasi. Genuine parts, fast service, accessories & upgrades.",
    url: "https://itpointcomputershop.in",
    siteName: "IT Point Computer Shop",
    locale: "hi_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://itpointcomputershop.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
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
