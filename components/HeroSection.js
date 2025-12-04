"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Wrench,
  Award,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images from public/images folder
  const slides = [
    {
      image: "/images/1.jpeg",
      alt: "IT Point Computer Shop - Laptops and Desktops Varanasi",
    },
    {
      image: "/images/2.jpeg",
      alt: "Computer Repair Services Varanasi - IT Point",
    },
  ];

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds में बदलेगा

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="bg-white">
      {/* Image Slider */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-900">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-900" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-900" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Your One-Stop Shop for All Computer Needs
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600">
            From latest laptops to reliable repair services, we provide quality
            products and expert solutions at competitive prices.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <Award className="h-12 w-12 mx-auto mb-3 text-[#006680]" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Authorized Dealer
              </h3>
              <p className="text-sm text-gray-600">
                Official partner of leading brands
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <Wrench className="h-12 w-12 mx-auto mb-3 text-[#006680]" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Repair
              </h3>
              <p className="text-sm text-gray-600">
                Certified technicians at your service
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <TrendingUp className="h-12 w-12 mx-auto mb-3 text-[#006680]" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Best Prices
              </h3>
              <p className="text-sm text-gray-600">
                Competitive rates guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
