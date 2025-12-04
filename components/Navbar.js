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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const productCategories = [
    {
      title: "Laptops",
      items: ["Gaming Laptops", "Business Laptops", "Student Laptops"],
    },
    {
      title: "Desktops",
      items: ["All-in-One PCs", "Custom Built PCs", "Branded Desktops"],
    },
    {
      title: "Printers & Scanners",
      items: ["Inkjet Printers", "Laser Printers", "Scanners"],
    },
    {
      title: "Accessories",
      items: ["Keyboards & Mouse", "Monitors", "Headphones", "Webcams"],
    },
  ];

  return (
    <nav className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="py-4 text-center border-b border-white/20">
          <Link href="/">
            <img src="/logo.png" alt="IT Point Logo" className="mx-auto" />
            
          
          </Link>
        </div>

        {/* Navigation Section */}
        <div className="flex items-center justify-between py-3">
          {/* Desktop Menu - Hidden, using Hamburger for all */}
          <div className="hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href="#home"
                    className="px-4 py-2 hover:bg-white/10 rounded block"
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/10">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-4 gap-4 p-6 w-[800px]">
                      {productCategories.map((category) => (
                        <div key={category.title}>
                          <h3 className="font-semibold mb-2 text-[#006680]">
                            {category.title}
                          </h3>
                          <ul className="space-y-1">
                            {category.items.map((item) => (
                              <li key={item}>
                                <Link
                                  href={`#${item
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="text-sm text-gray-600 hover:text-[#006680]"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="#services"
                    className="px-4 py-2 hover:bg-white/10 rounded block"
                  >
                    Services
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="#latest"
                    className="px-4 py-2 hover:bg-white/10 rounded block"
                  >
                    Latest Products
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="#about"
                    className="px-4 py-2 hover:bg-white/10 rounded block"
                  >
                    About Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="#contact"
                    className="px-4 py-2 hover:bg-white/10 rounded block"
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Hamburger Menu for All Devices */}
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
                <Link
                  href="#home"
                  className="text-lg font-medium text-gray-800 hover:text-[#006680]"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* Products Mega Menu in Mobile */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Products
                  </h3>
                  <div className="space-y-4 pl-4">
                    {productCategories.map((category) => (
                      <div key={category.title}>
                        <h4 className="font-medium text-[#006680] mb-1">
                          {category.title}
                        </h4>
                        <ul className="space-y-1 pl-2">
                          {category.items.map((item) => (
                            <li key={item}>
                              <Link
                                href={`#${item
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="text-sm text-gray-600 hover:text-[#006680]"
                                onClick={() => setIsOpen(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="#services"
                  className="text-lg font-medium text-gray-800 hover:text-[#006680]"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>

                <Link
                  href="#latest"
                  className="text-lg font-medium text-gray-800 hover:text-[#006680]"
                  onClick={() => setIsOpen(false)}
                >
                  Latest Products
                </Link>

                <Link
                  href="#about"
                  className="text-lg font-medium text-gray-800 hover:text-[#006680]"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>

                <Link
                  href="#contact"
                  className="text-lg font-medium text-gray-800 hover:text-[#006680]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
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
