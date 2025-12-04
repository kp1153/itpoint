import Link from "next/link";
import { ShoppingCart, Wrench, Award, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Your One-Stop Shop for All Computer Needs
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600">
            From latest laptops to reliable repair services, we provide quality
            products and expert solutions at competitive prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="#latest"
              className="bg-[#006680] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#005570] transition-colors inline-flex items-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Shop Now
            </Link>
            <Link
              href="#services"
              className="bg-white border-2 border-[#006680] text-[#006680] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
            >
              <Wrench className="h-5 w-5" />
              Our Services
            </Link>
          </div>

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
