import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-400 text-blue-700">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Branch + Common Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Main Branch</h3>
            <div className="flex gap-2 items-start text-sm mb-4">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <span>
                S. 6/1, Near LT College, Orderly Bazar, Varanasi.
                <br />
                Mob.: 9889571571
              </span>
            </div>

            <div className="space-y-2 text-sm">
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

          {/* Other Branches */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Other Branches</h3>

            <ul className="space-y-3 text-sm">
              <li className="pb-2 border-b border-white/20">
                <div className="flex gap-2 items-start">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>
                    D. 59/103-Q-3-1, Brother Ji Complex, Sigra, Varanasi.
                    <br />
                    Mob.: 9369499806, 9598571571
                  </span>
                </div>
              </li>

              <li className="pb-2 border-b border-white/20">
                <div className="flex gap-2 items-start">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>
                    SA. 17/4, Pahariya, Varanasi.
                    <br />
                    Mob.: 9198886071
                  </span>
                </div>
              </li>

              <li>
                <div className="flex gap-2 items-start">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>
                    S. 2/153, Orderly Bazar, Next to Bank of Baroda, Varanasi.
                    <br />
                    Mob.: 9044406071
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
            <div className="flex gap-2 items-start text-sm mb-6">
              <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
              <span>
                Mon–Sat: 10:00 AM – 8:00 PM <br />
                Sunday: Closed
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 mb-3">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@itpointcomputershop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF0000] p-2 rounded-full hover:bg-[#CC0000] transition-colors"
                aria-label="Visit our YouTube channel"
              >
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/itpointcomputershop?igsh=ZWFlNjNnOWl6a2Nj&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-2 rounded-full hover:opacity-90 transition-opacity"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/19Fx1RQx7i/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] p-2 rounded-full hover:bg-[#166FE5] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            <p className="text-sm text-blue-600">
              Stay connected for latest updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-6 pt-4 text-center text-sm text-blue-900">
          <p>© {new Date().getFullYear()} IT Point. All rights reserved.</p>
          <p className="mt-1">
            Developed by{" "}
            <a
              href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold text-red-700"
            >
              Creative Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
