import {
  Monitor,
  Laptop,
  Printer,
  HardDrive,
  Keyboard,
  Camera,
} from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      icon: Laptop,
      title: "Laptops",
      description: "HP, Dell, Lenovo, Acer, and Asus laptops for every need",
      brands: ["HP", "Dell", "Lenovo", "Acer", "Asus"],
    },
    {
      icon: Monitor,
      title: "Desktops & Monitors",
      description: "High-performance desktops and premium display monitors",
      brands: ["HP", "Dell", "Lenovo", "Acer"],
    },
    {
      icon: Printer,
      title: "Printers & Scanners",
      description:
        "Reliable printing and scanning solutions for office and home",
      brands: ["HP", "Canon", "Epson", "Brother"],
    },
    {
      icon: Camera,
      title: "CCTV Cameras",
      description: "Advanced security cameras and surveillance systems",
      brands: ["Hikvision", "CP Plus", "Dahua"],
    },
    {
      icon: HardDrive,
      title: "Computer Parts",
      description: "CPUs, RAM, SSD, HDD, and other essential components",
      brands: ["Intel", "AMD", "Kingston", "Samsung"],
    },
    {
      icon: Keyboard,
      title: "Accessories",
      description: "Keyboards, mice, headphones, and all IT accessories",
      brands: ["Logitech", "HP", "Dell", "Zebronics"],
    },
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#006680]">Products</span>
          </h2>
          <div className="w-24 h-1 bg-[#006680] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of IT products and electronics
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-[#006680] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Brands */}
                <div className="flex flex-wrap gap-2">
                  {product.brands.map((brand, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Looking for something specific? Contact us for personalized
            recommendations!
          </p>
          <button className="bg-[#006680] text-white px-8 py-3 rounded-lg hover:bg-[#005570] transition-colors font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
