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
    { title: "Home", href: "#home" },
    { title: "Products", href: "#products" },
    { title: "Services", href: "#services" },
    { title: "Special Offers", href: "#offers" },
    { title: "About Us", href: "#about" },
  ];

  // Google Translate Script Load
  useEffect(() => {
    // Add Google Translate script
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);

    // Initialize Google Translate
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
    <nav className="bg-green-400 text-pink-600 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Row - Logo + Brand */}
        <div className="flex items-center justify-between py-6 min-h-[80px]">
          {/* Logo + Brand Name */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 relative">
              <Image
                src="/logo.png"
                alt="IT Point Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold leading-tight text-red-600">
                IT POINT COMPUTER SHOP
              </h1>
              <p className="text-sm text-red-600">Solution that you need</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-amber-600 hover:text-white py-2"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.title}
                    </a>
                  ))}

                  {/* Mobile: Pay Now Button */}
                  <button
                    onClick={handlePayment}
                    className="w-full px-4 py-2 bg-[#006680] text-white rounded text-sm"
                  >
                    Pay Now
                  </button>

                  <div className="pt-4 border-t">
                    {/* Mobile: Google Translate */}
                    <div id="google_translate_element_mobile"></div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Menu Bar */}
        <div className="hidden md:block py-3 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium hover:text-[#00d4ff] transition-colors py-1"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Desktop: Pay Now Button */}
            <button
              onClick={handlePayment}
              className="px-4 py-1 bg-[#006680] text-white rounded text-sm"
            >
              Pay Now
            </button>

            {/* Desktop: Google Translate */}
            <div id="google_translate_element"></div>
          </div>
        </div>
      </div>

      {/* Hide Google Translate branding */}
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
