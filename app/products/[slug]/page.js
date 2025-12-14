import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "@/components/AddToCart";

async function getProduct(slug) {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    price,
    discountPrice,
    inStock,
    stock,
    images,
    category->{
      name,
      slug
    },
    brand
  }`;

  return await client.fetch(query, { slug });
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const finalPrice = product.discountPrice || product.price;
  const hasDiscount =
    product.discountPrice && product.discountPrice < product.price;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.price - product.discountPrice) / product.price) * 100
      )
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-indigo-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-indigo-600">
            Products
          </Link>
          {product.category && (
            <>
              <span className="mx-2">/</span>
              <span>{product.category.name}</span>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
          {/* Image Gallery */}
          <div>
            <div className="relative h-96 bg-gray-100 rounded-lg mb-4">
              {product.images?.[0]?.url ? (
                <Image
                  src={product.images[0].url}
                  alt={product.title}
                  fill
                  className="object-contain p-4"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No Image Available
                </div>
              )}

              {hasDiscount && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-lg text-lg font-bold">
                  {discountPercent}% OFF
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(0, 4).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-20 bg-gray-100 rounded cursor-pointer hover:ring-2 ring-indigo-600"
                  >
                    <Image
                      src={img.url}
                      alt={`${product.title} ${idx + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>

            {product.category && (
              <p className="text-sm text-gray-500 mb-2">
                Category:{" "}
                <span className="font-medium">{product.category.name}</span>
              </p>
            )}

            {product.brand && (
              <p className="text-sm text-gray-500 mb-4">
                Brand:{" "}
                <span className="font-medium uppercase">{product.brand}</span>
              </p>
            )}

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-indigo-700">
                  ₹{finalPrice.toLocaleString()}
                </span>
                {hasDiscount && (
                  <span className="text-xl text-gray-500 line-through">
                    ₹{product.price.toLocaleString()}
                  </span>
                )}
              </div>
              {hasDiscount && (
                <p className="text-green-600 font-medium mt-2">
                  You save ₹
                  {(product.price - product.discountPrice).toLocaleString()} (
                  {discountPercent}%)
                </p>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <span className="font-semibold">✓ In Stock</span>
                  {product.stock && (
                    <span className="text-sm text-gray-500">
                      ({product.stock} available)
                    </span>
                  )}
                </div>
              ) : (
                <div className="text-red-600 font-semibold">✗ Out of Stock</div>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Description
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}

            {/* Add to Cart */}
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
