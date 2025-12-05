"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Wrench,
  Award,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
  Star,
} from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="bg-gradient-to-b from-gray-50 to-white">
      {/* Image Slider with Overlay Content */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl space-y-6 text-white">
              <Badge className="bg-[#006680] hover:bg-[#005570] text-white border-0 px-4 py-2 text-sm">
                ✨ Trusted IT Solutions Provider
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your One-Stop Shop for{" "}
                <span className="text-[#00d4ff]">All Computer Needs</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200">
                From latest laptops to reliable repair services, we provide
                quality products and expert solutions at competitive prices.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-[#006680] hover:bg-[#005570] text-white px-8"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-8"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 pt-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#00d4ff]" />
                  <span>Varanasi, UP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-[#00d4ff] fill-[#00d4ff]" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          onClick={prevSlide}
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full z-20"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          onClick={nextSlide}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full z-20"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 hover:border-[#006680] transition-all duration-300 hover:shadow-xl group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#006680]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#006680] transition-colors">
                <Award className="h-8 w-8 text-[#006680] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Authorized Dealer
              </h3>
              <p className="text-gray-600">
                Official partner of HP, Dell, Lenovo, Acer & Asus
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-[#006680] transition-all duration-300 hover:shadow-xl group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#006680]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#006680] transition-colors">
                <Wrench className="h-8 w-8 text-[#006680] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Expert Repair
              </h3>
              <p className="text-gray-600">
                Certified technicians with years of experience
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-[#006680] transition-all duration-300 hover:shadow-xl group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#006680]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#006680] transition-colors">
                <TrendingUp className="h-8 w-8 text-[#006680] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Best Prices
              </h3>
              <p className="text-gray-600">
                Competitive rates with quality guarantee
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
