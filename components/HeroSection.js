"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  // All Carousel Images (1-9)
  const carouselImages = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
  ];

  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [current, isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrent(index);
  };

  return (
    <section id="home" className="w-full">
      {/* --------------------- FULL WIDTH CAROUSEL --------------------- */}
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Carousel Image */}
        <div className="relative w-full h-full">
          <Image
            src={carouselImages[current]}
            alt={`Slide ${current + 1}`}
            fill
            className="object-contain transition-opacity duration-500"
            priority={current < 2}
          />
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Counter Badge */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm md:text-base backdrop-blur-sm">
          {current + 1} / {carouselImages.length}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? "w-8 h-2 bg-blue-600"
                  : "w-2 h-2 bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-6 right-6 text-sm text-gray-700 bg-white/80 hover:bg-white px-3 py-1 rounded-full backdrop-blur-sm transition-colors"
        >
          {isAutoPlaying ? "⏸" : "▶"}
        </button>
      </div>
    </section>
  );
}
