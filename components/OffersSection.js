"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OffersSection() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const query = `*[_type == "offer" && isActive == true] | order(order asc) {
          _id,
          images
        }`;

        const data = await client.fetch(query);
        setOffers(data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  const allImages = offers.flatMap((offer) => offer.images || []);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (allImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (loading) {
    return (
      <section className="relative w-full h-[400px] md:h-[500px] bg-gray-200 animate-pulse">
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 text-xl">Loading Special Offers...</p>
        </div>
      </section>
    );
  }

  if (allImages.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-900 overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {allImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.url}
              alt={img.alt || `Offer ${idx + 1}`}
              fill
              className="object-contain"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {allImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
        {currentSlide + 1} / {allImages.length}
      </div>
    </section>
  );
}
