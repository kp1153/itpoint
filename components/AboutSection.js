"use client";

import { useState } from "react";

export default function AboutSection() {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  const brands = [
    { name: "HP", color: "from-blue-500 to-blue-700" },
    { name: "Dell", color: "from-blue-600 to-blue-800" },
    { name: "Lenovo", color: "from-red-500 to-red-700" },
    { name: "Acer", color: "from-green-500 to-green-700" },
    { name: "Asus", color: "from-orange-500 to-orange-700" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Us
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="space-y-8 mb-12">
          {/* First Card */}
          <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-amber-500">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-lg text-gray-700 leading-relaxed relative z-10">
              Your trusted destination for complete IT solutions and premium
              electronic essentials. We bring you a wide selection of
              high-quality products – from laptops, CPUs, printers, and monitors
              to accessories and more. Whether it's for your home, office, or
              business, we deliver reliable gadgets, expert services, and
              seamless support to keep your digital world running smarter and
              faster.
            </p>
          </div>

          {/* Second Card */}
          <div className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-lg text-white leading-relaxed relative z-10">
              We are a leading trader and service provider of a wide range of
              HP, Dell, Lenovo, Acer, and Asus laptops and desktops. With years
              of expertise, we ensure genuine products, competitive pricing, and
              dependable after-sales service. From device setup to maintenance
              and troubleshooting, our team is committed to delivering
              trustworthy solutions that match the needs of students,
              professionals, and businesses alike.
            </p>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="bg-white rounded-3xl p-10 shadow-xl">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Authorized Partner of Leading Brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredBrand(index)}
                onMouseLeave={() => setHoveredBrand(null)}
                className={`
                  relative px-8 py-4 rounded-2xl font-black text-3xl
                  transition-all duration-500 cursor-pointer
                  ${
                    hoveredBrand === index
                      ? `bg-gradient-to-r ${brand.color} text-white scale-125 shadow-2xl`
                      : "bg-gray-100 text-gray-400 hover:text-gray-600"
                  }
                `}
              >
                {brand.name}

                {/* Shine Effect */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-transparent via-white/40 to-transparent
                  -translate-x-full transition-transform duration-1000
                  ${hoveredBrand === index ? "translate-x-full" : ""}
                `}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
