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
    { title: "Home", href: "/#home" },
    { title: "Products", href: "/#products" },
    { title: "Services", href: "/#services" },
    { title: "Special Offers", href: "/#offers" },
    { title: "About Us", href: "/#about" },
  ];

  return (
    <nav className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="py-4 text-center border-b border-white/20">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="IT Point Logo"
              width={64}
              height={64}
              className="mx-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation Section */}
        <div className="flex items-center justify-between py-3">
          {/* Hamburger Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-white/10 rounded">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] bg-white overflow-y-auto"
            >
              <SheetTitle className="text-xl font-bold text-[#006680] mb-4">
                Menu
              </SheetTitle>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-gray-800 hover:text-[#006680]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Language Switcher */}
          <div className="ml-auto">
            <button className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-sm">
              EN / HI
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
