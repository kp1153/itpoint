import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { 
  Shield, 
  Monitor, 
  HardDrive, 
  Headphones, 
  Wrench, 
  Printer, 
  Laptop, 
  Tv, 
  Cpu, 
  MemoryStick,
  Box,
  Video,
  Tablet
} from "lucide-react";

async function getCategories() {
  const query = `*[_type == "category"] {
    _id,
    name,
    "slug": slug.current,
    "productCount": count(*[_type == "product" && references(^._id)])
  }`;

  return await client.fetch(query);
}

// Category Icons Mapping
const categoryIcons = {
  "antivirus": Shield,
  "desktop": Monitor,
  "storage": HardDrive,
  "accessories": Headphones,
  "assemble-desktop": Wrench,
  "cartridge": Printer,
  "laptop": Laptop,
  "monitor": Tv,
  "motherboard": Cpu,
  "printer": Printer,
  "ram": MemoryStick,
  "cabinet": Box,
  "cctv-camera": Video,
  "tablet": Tablet
};

function getCategoryIcon(slug) {
  const IconComponent = categoryIcons[slug] || Box;
  return IconComponent;
}

export default async function ProductsSection() {
  const categories = await getCategories();

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

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category.slug);
            
            return (
              <Link
                key={category._id}
                href={`/products?category=${category.slug}`}
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-[#006680] transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center gap-3"
              >
                <Icon 
                  size={40} 
                  strokeWidth={2.5} 
                  className="text-[#006680] group-hover:scale-110 transition-transform"
                />
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#006680] transition-colors text-center">
                  {category.name
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </h3>
                {category.productCount > 0 && (
                  <p className="text-sm text-gray-500">
                    {category.productCount} products
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}