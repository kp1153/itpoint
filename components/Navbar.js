"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "Services", href: "#services" },
    { title: "Special Offers", href: "#offers" },
    { title: "Cart", href: "/cart" },
    { title: "About Us", href: "#about" },
  ];

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  const handlePayment = () => {
    const options = {
      key: "YOUR_KEY_ID",
      amount: 10000,
      currency: "INR",
      name: "IT Point",
      description: "Test Payment",
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    // Only handle hash links
    if (!href.startsWith("#")) {
      return;
    }

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navHeight = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-indigo-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-6 min-h-[80px]">
          <div className="flex items-center gap-3 w-full justify-center text-center">
            <div className="w-16 h-16 relative">
              <Image
                src="/logo.png"
                alt="IT Point Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-wider text-white font-serif">
                IT POINT COMPUTER SHOP
              </h1>

              <p className="text-xl font-semibold italic text-white font-serif drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]">
                Solutions That You Need
              </p>
            </div>
          </div>

          <div className="md:hidden absolute right-4 top-8">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-white/10 rounded">
                  <Menu className="h-8 w-8" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[280px] bg-white overflow-y-auto"
              >
                <SheetTitle className="text-xl font-bold text-rose-600 mb-6">
                  Menu
                </SheetTitle>

                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) =>
                    link.href.startsWith("/") ? (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-amber-600 hover:text-indigo-600 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-amber-600 hover:text-indigo-600 py-2"
                        onClick={(e) => handleNavClick(e, link.href)}
                      >
                        {link.title}
                      </a>
                    )
                  )}

                  <button
                    onClick={handlePayment}
                    className="w-full px-4 py-2 bg-[#006680] text-white rounded text-sm"
                  >
                    Pay Now
                  </button>

                  <div className="pt-4 border-t">
                    <div id="google_translate_element_mobile"></div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="hidden md:block py-3 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-[#00d4ff] transition-colors py-1"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-[#00d4ff] transition-colors py-1"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.title}
                  </a>
                )
              )}
            </div>

            <button
              onClick={handlePayment}
              className="px-4 py-1 bg-[#006680] text-white rounded text-sm"
            >
              Pay Now
            </button>

            <div id="google_translate_element"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .goog-te-banner-frame {
          display: none !important;
        }
        .goog-te-gadget {
          color: transparent !important;
        }
        .goog-te-gadget img {
          display: none !important;
        }
        .goog-te-combo {
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid #ddd;
          background: white;
          font-size: 14px;
        }
        body {
          top: 0 !important;
        }
      `}</style>
    </nav>
  );
}
