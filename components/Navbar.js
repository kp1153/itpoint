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
    { title: "होम", href: "/" },
    { title: "उत्पाद", href: "/products" },    
    { title: "मरम्मत सेवाएं", href: "/repair-services" }, 
    { title: "AMC प्लान्स", href: "/amc-plans" },
    { title: "CCTV सेवाएं", href: "/cctv-services" },
    { title: "कार्ट", href: "/cart" },  
    { title: "संपर्क करें", href: "/contact" },
  ];

  return (
    <nav className="bg-slate-700 text-amber-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-6 min-h-[80px]">
          <div className="flex items-center gap-3 w-full justify-center text-center">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-wider text-amber-600 font-serif">
                IT SERVICES POINT
              </h1>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden absolute right-4 top-8">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-white/10 rounded">
                  <Menu className="h-8 w-8 text-amber-600" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[280px] bg-white overflow-y-auto"
              >
                <SheetTitle className="text-xl font-bold text-slate-700 mb-6">
                  मेनू
                </SheetTitle>

                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-amber-600 hover:text-slate-700 py-2"
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
        <div className="hidden md:block py-3 border-t border-amber-600/20">
          <div className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium hover:text-white transition-colors py-1"
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