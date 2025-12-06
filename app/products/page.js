import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const query = `*[_type == "product" && isActive == true] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    price,
    discountPrice,
    inStock,
    images,
    category->{
      name,
      slug
    },
    brand,
    isFeatured
  }`;

  return await client.fetch(query);
}

async function getCategories() {
  const query = `*[_type == "category" && isActive == true] | order(order asc) {
    _id,
    name,
    slug
  }`;

  return await client.fetch(query);
}

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-indigo-700 mb-8">
          Our Products
        </h1>

        {/* Category Filter - You can add client-side filtering later */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              All Products
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/products?category=${cat.slug.current}`}
                className="px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            const finalPrice = product.discountPrice || product.price;
            const hasDiscount =
              product.discountPrice && product.discountPrice < product.price;
            const discountPercent = hasDiscount
              ? Math.round(
                  ((product.price - product.discountPrice) / product.price) *
                    100
                )
              : 0;

            return (
              <Link
                key={product._id}
                href={`/products/${product.slug.current}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-64 bg-gray-100">
                  {product.images?.[0]?.url ? (
                    <Image
                      src={product.images[0].url}
                      alt={product.title}
                      fill
                      className="object-contain p-4"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Image
                    </div>
                  )}

                  {hasDiscount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      {discountPercent}% OFF
                    </div>
                  )}

                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.title}
                  </h3>

                  {product.category && (
                    <p className="text-sm text-gray-500 mb-2">
                      {product.category.name}
                    </p>
                  )}

                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-indigo-700">
                      ₹{finalPrice.toLocaleString()}
                    </span>
                    {hasDiscount && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.price.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {product.brand && (
                    <p className="text-xs text-gray-400 mt-2 uppercase">
                      {product.brand}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
}
