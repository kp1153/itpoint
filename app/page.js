// app/page.js
import OffersSection from "@/components/OffersSection";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <OffersSection />
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
    </>
  );
}
