"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddToCart({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const router = useRouter();

  const handleAddToCart = () => {
    setIsAdding(true);

    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if product already exists in cart
    const existingItemIndex = existingCart.findIndex(
      (item) => item._id === product._id
    );

    if (existingItemIndex > -1) {
      // Update quantity
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      existingCart.push({
        _id: product._id,
        title: product.title,
        slug: product.slug.current,
        price: product.discountPrice || product.price,
        originalPrice: product.price,
        image: product.images?.[0]?.url || "",
        quantity: quantity,
        inStock: product.inStock,
        stock: product.stock,
      });
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Show success message
    setTimeout(() => {
      setIsAdding(false);
      alert("Product added to cart!");
    }, 500);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => {
      router.push("/cart");
    }, 600);
  };

  const incrementQuantity = () => {
    if (product.stock && quantity >= product.stock) return;
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product.inStock) {
    return (
      <div className="space-y-4">
        <button
          disabled
          className="w-full bg-gray-300 text-gray-600 py-3 px-6 rounded-lg font-semibold cursor-not-allowed"
        >
          Out of Stock
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="font-medium text-gray-700">Quantity:</span>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={decrementQuantity}
            className="px-4 py-2 text-xl font-bold hover:bg-gray-100"
            disabled={quantity <= 1}
          >
            −
          </button>
          <span className="px-6 py-2 font-semibold border-x">{quantity}</span>
          <button
            onClick={incrementQuantity}
            className="px-4 py-2 text-xl font-bold hover:bg-gray-100"
            disabled={product.stock && quantity >= product.stock}
          >
            +
          </button>
        </div>
        {product.stock && (
          <span className="text-sm text-gray-500">(Max: {product.stock})</span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
        >
          {isAdding ? "Adding..." : "Add to Cart"}
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
