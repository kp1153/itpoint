import Image from "next/image";

export default function ProductsSection() {
  const products = [
    {
      title: "Laptops",
      image: "/products/1.jpeg",
    },
    {
      title: "Computer Parts",
      image: "/products/2.jpeg",
    },
    {
      title: "Networking Equipment",
      image: "/products/3.jpeg",
    },
    {
      title: "CCTV Cameras",
      image: "/products/4.jpeg",
    },
    {
      title: "Printers & Scanners",
      image: "/products/5.jpeg",
    },
    {
      title: "Accessories",
      image: "/products/6.jpeg",
    },
    {
      title: "Mobile & Tablets",
      image: "/products/7.jpeg",
    },
    {
      title: "Desktops & Monitors",
      image: "/products/8.jpeg",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority={idx < 4}
                />
              </div>
              <div className="p-4 text-center bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-lg font-bold text-gray-900">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Looking for something specific? Contact us for personalized
            recommendations!
          </p>
          <a
            href="https://wa.me/919336486071"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#006680] text-white px-8 py-3 rounded-lg hover:bg-[#005570] transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
