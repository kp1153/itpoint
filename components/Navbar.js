"use client";

import Link from "next/link";
import Image from "next/image";
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
    { title: "स्पेशल ऑफर्स", href: "/offers" },
    { title: "मरम्मत सेवाएं", href: "/repair-services" },
    { title: "सालाना देखरेख", href: "/amc-plans" },
    { title: "CCTV इंस्टालेशन", href: "/cctv-installation" },
    { title: "कार्ट", href: "/cart" },
    { title: "संपर्क करें", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white relative">
      {/* Logo */}
      <div className="flex items-center justify-center py-4">
        <Image
          src="/logo.jpeg"
          alt="Logo"
          width={260}
          height={260}
          priority
        />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden absolute right-4 top-6">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 hover:bg-black/5 rounded">
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

      {/* Desktop Menu */}
      <div className="hidden md:block py-3 border-t border-amber-600/20">
        <div className="flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-700 hover:text-amber-600 transition-colors py-1"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
