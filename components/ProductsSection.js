import Link from "next/link";
import { client } from "@/sanity/lib/client";

async function getCategories() {
  const query = `*[_type == "category" && isActive == true] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    "productCount": count(*[_type == "product" && references(^._id) && isActive == true])
  }[0...8]`;

  return await client.fetch(query);
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
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/products?category=${category.slug}`}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-[#006680] transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#006680] transition-colors mb-2">
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
          ))}
        </div>
      </div>
    </section>
  );
}
