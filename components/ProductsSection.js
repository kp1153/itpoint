"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export default function ProductsSection() {
  const [categories, setCategories] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "category"] {
        _id,
        name,
        "slug": slug.current,
        "productCount": count(*[_type == "product" && references(^._id)])
      }`;
      const data = await client.fetch(query);
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Products
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of IT products and electronics
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category._id}
              href={`/products?category=${category.slug}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              <div
                className={`
                relative bg-white rounded-2xl p-8 shadow-lg
                border-2 transition-all duration-500
                ${
                  hoveredCard === index
                    ? "border-amber-500 shadow-2xl shadow-amber-500/30 -translate-y-3 scale-105"
                    : "border-gray-200 hover:border-amber-400"
                }
              `}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-700/10 rounded-2xl
                  transition-opacity duration-500
                  ${hoveredCard === index ? "opacity-100" : "opacity-0"}
                `}
                ></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon Circle */}
                  <div
                    className={`
                    w-20 h-20 mx-auto mb-4 rounded-2xl
                    flex items-center justify-center
                    transition-all duration-500
                    ${
                      hoveredCard === index
                        ? "bg-gradient-to-br from-amber-500 to-amber-700 rotate-12 scale-110"
                        : "bg-gradient-to-br from-zinc-800 to-zinc-900"
                    }
                  `}
                  >
                    <span className="text-3xl font-black text-white">
                      {category.name.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  {/* Category Name */}
                  <h3
                    className={`
                    text-xl font-bold mb-2 transition-colors duration-300
                    ${hoveredCard === index ? "text-amber-600" : "text-gray-900"}
                  `}
                  >
                    {category.name
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </h3>

                  {/* Product Count */}
                  {category.productCount > 0 && (
                    <div
                      className={`
                      inline-block px-4 py-1 rounded-full text-sm font-semibold
                      transition-all duration-300
                      ${
                        hoveredCard === index
                          ? "bg-amber-500 text-white scale-110"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                    >
                      {category.productCount} products
                    </div>
                  )}
                </div>

                {/* Shine Effect on Hover */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-transparent via-white/30 to-transparent
                  -translate-x-full group-hover:translate-x-full
                  transition-transform duration-1000 ease-in-out
                  pointer-events-none
                `}
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
