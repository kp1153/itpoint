import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#006680] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-2">IT POINT</h3>
            <p className="text-sm text-gray-200">solution that you need.</p>
            <p className="text-sm text-gray-200 mt-3">
              Laptop • Desktop • Printers • Peripherals <br />
              <span className="font-semibold">Sales & Services</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Locations</h3>

            <ul className="space-y-4 text-sm">
              {/* Main Branch */}
              <li className="pb-3 border-b border-white/20">
                <p className="font-semibold">Main Branch</p>
                <div className="flex gap-2 items-start">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>
                     S. 6/1, Near LT College, Orderly Bazar, Varanasi.
                    <br />
                    Mob.: 9889571571
                  </span>
                </div>
              </li>

              {/* Branch Office D */}
              <li className="pb-3 border-b border-white/20">
                <p className="font-semibold">Branch Office</p>
                <div className="flex gap-2 items-start">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>
                    D. 59/103-Q-3-1, Brother Ji Complex, Hotel Purvika, Sigra,
                    Varanasi.
                    <br />
                    Mob.: 9369499806, 9598571571
                  </span>
                </div>
              </li>

              {/* Branch Office SA */}
              <li className="pb-3 border-b border-white/20">
                <p className="font-semibold">Branch Office</p>
                <div className="flex gap-2 items-start">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>
                    SA. 17/4, Pahariya, Varanasi.
                    <br />
                    Mob.: 9198886071
                  </span>
                </div>
              </li>

              {/* Branch Office S */}
              <li>
                <p className="font-semibold">Branch Office</p>
                <div className="flex gap-2 items-start">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>
                    S. 2/153, Orderly Bazar, Next to Bank of Baroda, Opp.
                    Reliance Trends, Varanasi.
                    <br />
                    Mob.: 9044406071
                  </span>
                </div>
              </li>
            </ul>

            {/* Common Contact */}
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919336486071" className="hover:text-white">
                  +91-9336486071
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:itpoint51@gmail.com"
                  className="hover:text-white"
                >
                  itpoint51@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="flex gap-2 items-start text-sm mb-6">
              <Clock className="h-5 w-5 mt-1" />
              <span>
                Mon–Sat: 10:00 AM – 8:00 PM <br />
                Sunday: Closed
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-200">
              Stay connected for latest updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-200">
          <p>© {new Date().getFullYear()} IT Point. All rights reserved.</p>
          <p className="mt-1">
            Developed by{" "}
            <a
              href="https://www.web-developer-kp.com"
              target="_blank"
              className="hover:underline font-semibold text-white"
            >
              KP Web Developer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
