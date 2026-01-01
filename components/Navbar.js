"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
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
    { title: "Services", href: "/#services" },
    { title: "Cart", href: "/cart" },
    { title: "About Us", href: "/#about" },
  ];

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-6 min-h-[80px]">
          <div className="flex items-center gap-3 w-full justify-center text-center">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-wider text-white font-serif">
                IT SERVICES POINT
              </h1>

              <p className="text-xl font-semibold italic text-white font-serif drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]">
                life extension of your pc
              </p>
            </div>
          </div>

          {/* Mobile Menu */}
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
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-amber-600 hover:text-indigo-600 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block py-3 border-t border-white/20">
          <div className="flex items-center justify-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium hover:text-[#00d4ff] transition-colors py-1"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}