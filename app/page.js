// app/page.js

import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <OffersSection />
      <AboutSection />
    </>
  );
}
