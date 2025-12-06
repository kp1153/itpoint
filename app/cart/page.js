"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartData);
    setLoading(false);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cart.map((item) => {
      if (item._id === id) {
        // Check stock limit
        if (item.stock && newQuantity > item.stock) {
          alert(`Only ${item.stock} items available in stock`);
          return item;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    if (confirm("Are you sure you want to clear the cart?")) {
      setCart([]);
      localStorage.removeItem("cart");
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.18; // 18% GST
  const deliveryCharge = subtotal > 5000 ? 0 : 100;
  const total = subtotal + tax + deliveryCharge;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading cart...</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some products to get started!
          </p>
          <Link
            href="/products"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 font-medium"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow p-4 flex gap-4"
              >
                <div className="relative w-24 h-24 bg-gray-100 rounded flex-shrink-0">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-xs">
                      No Image
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <Link
                    href={`/products/${item.slug}`}
                    className="font-semibold text-gray-800 hover:text-indigo-600 line-clamp-2"
                  >
                    {item.title}
                  </Link>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-bold text-indigo-700">
                      ₹{item.price.toLocaleString()}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {!item.inStock && (
                    <p className="text-red-600 text-sm mt-1">Out of Stock</p>
                  )}
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => removeItem(item._id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>

                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity - 1)
                      }
                      className="px-3 py-1 hover:bg-gray-100"
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="px-4 py-1 border-x font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity + 1)
                      }
                      className="px-3 py-1 hover:bg-gray-100"
                      disabled={item.stock && item.quantity >= item.stock}
                    >
                      +
                    </button>
                  </div>

                  <p className="text-lg font-bold text-gray-800">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (GST 18%)</span>
                  <span>₹{tax.toFixed(0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Charge</span>
                  <span>
                    {deliveryCharge === 0 ? (
                      <span className="text-green-600 font-medium">FREE</span>
                    ) : (
                      `₹${deliveryCharge}`
                    )}
                  </span>
                </div>
                {subtotal < 5000 && subtotal > 0 && (
                  <p className="text-xs text-gray-500">
                    Add ₹{(5000 - subtotal).toLocaleString()} more for free
                    delivery
                  </p>
                )}
              </div>

              <div className="border-t pt-3 mb-6">
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>₹{total.toFixed(0).toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => router.push("/checkout")}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Proceed to Checkout
              </button>

              <Link
                href="/products"
                className="block text-center text-indigo-600 hover:text-indigo-700 font-medium mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
