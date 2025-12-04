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
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">IT POINT</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Your trusted computer and laptop shop in Varanasi. We provide
              quality products and expert repair services at competitive prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-200 hover:text-white text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#latest"
                  className="text-gray-200 hover:text-white text-sm transition-colors"
                >
                  Latest Products
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-200 hover:text-white text-sm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-200 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-200 hover:text-white text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - All Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Locations</h3>
            <ul className="space-y-4">
              {/* Main Location - Orderly Bazar */}
              <li className="pb-3 border-b border-white/20">
                <p className="font-semibold text-white mb-2">
                  Main Branch (Lapcare Dealer)
                </p>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">Orderly Bazar, Varanasi</span>
                </div>
              </li>

              {/* Pahariya Location */}
              <li className="pb-3 border-b border-white/20">
                <p className="font-semibold text-white mb-2">Pahariya Branch</p>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">
                    Front Of Surbhi International Hotel, Ganpathi Nagar, Paharia
                    - 221007
                  </span>
                </div>
              </li>

              {/* Bhojubeer Location */}
              <li>
                <p className="font-semibold text-white mb-2">
                  Bhojubeer Branch
                </p>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">
                    S2/355, Bhojubeer Road, Varanasi - 221002
                  </span>
                </div>
              </li>
            </ul>

            {/* Common Contact */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+919336486000"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  +91 93364 86000
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@itpointcomputershop.in"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  info@itpointcomputershop.in
                </a>
              </div>
            </div>
          </div>

          {/* Timing & Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="flex items-start gap-2 text-sm mb-6">
              <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span className="text-gray-200">
                Mon - Sat: 10:00 AM - 8:00 PM
                <br />
                Sunday: Closed
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-200">
              Stay connected for latest updates and offers
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-200">
          <p>
            © {new Date().getFullYear()} IT Point Computer Shop. All rights
            reserved.
          </p>
          <p className="mt-2">
            Developed by{" "}
            <a
              href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline"
            >
              KP Web Developer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
