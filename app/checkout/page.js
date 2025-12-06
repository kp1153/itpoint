"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "razorpay",
    notes: "",
  });

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cartData.length === 0) {
      router.push("/cart");
      return;
    }
    setCart(cartData);
    setLoading(false);

    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, [router]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.18;
  const deliveryCharge = subtotal > 5000 ? 0 : 100;
  const total = subtotal + tax + deliveryCharge;

  const createOrderInSanity = async (orderData) => {
    try {
      const response = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) throw new Error("Failed to create order");
      return await response.json();
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  };

  const handleRazorpayPayment = async () => {
    const orderNumber = `ORD${Date.now()}`;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "YOUR_KEY_ID",
      amount: Math.round(total * 100), // Amount in paise
      currency: "INR",
      name: "IT Point Computer Shop",
      description: `Order #${orderNumber}`,
      image: "/logo.png",
      handler: async function (response) {
        try {
          // Create order in Sanity
          const orderData = {
            orderNumber,
            ...formData,
            products: cart.map((item) => ({
              product: item._id,
              quantity: item.quantity,
              priceAtOrder: item.price,
            })),
            subtotal,
            tax,
            deliveryCharge,
            total,
            paymentMethod: "razorpay",
            paymentStatus: "paid",
            orderStatus: "confirmed",
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id || "",
            razorpaySignature: response.razorpay_signature || "",
          };

          await createOrderInSanity(orderData);

          // Clear cart
          localStorage.removeItem("cart");

          alert("Payment successful! Order placed.");
          router.push("/");
        } catch (error) {
          alert(
            "Payment successful but order creation failed. Please contact support."
          );
        }
      },
      prefill: {
        name: formData.customerName,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#4F46E5",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      alert("Payment failed: " + response.error.description);
      setProcessing(false);
    });
    rzp.open();
  };

  const handleCODOrder = async () => {
    try {
      const orderNumber = `ORD${Date.now()}`;

      const orderData = {
        orderNumber,
        ...formData,
        products: cart.map((item) => ({
          product: item._id,
          quantity: item.quantity,
          priceAtOrder: item.price,
        })),
        subtotal,
        tax,
        deliveryCharge,
        total,
        paymentMethod: "cod",
        paymentStatus: "pending",
        orderStatus: "pending",
      };

      await createOrderInSanity(orderData);

      // Clear cart
      localStorage.removeItem("cart");

      alert("Order placed successfully! Pay on delivery.");
      router.push("/");
    } catch (error) {
      alert("Failed to place order. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.customerName ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill all required fields");
      return;
    }

    setProcessing(true);

    if (formData.paymentMethod === "razorpay") {
      handleRazorpayPayment();
    } else {
      await handleCODOrder();
    }

    setProcessing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Customer Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Customer Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      pattern="[0-9]{6}"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="Any special instructions..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Payment Method
                </h2>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="razorpay"
                      checked={formData.paymentMethod === "razorpay"}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span className="font-medium">Pay Online (Razorpay)</span>
                  </label>

                  <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span className="font-medium">Cash on Delivery</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item._id} className="flex gap-3 pb-3 border-b">
                      <div className="relative w-16 h-16 bg-gray-100 rounded flex-shrink-0">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain p-1"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 line-clamp-2">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-600">
                          Qty: {item.quantity} × ₹{item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (18%)</span>
                    <span>₹{tax.toFixed(0).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span>
                      {deliveryCharge === 0 ? (
                        <span className="text-green-600 font-medium">FREE</span>
                      ) : (
                        `₹${deliveryCharge}`
                      )}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-3 mb-6">
                  <div className="flex justify-between text-xl font-bold text-gray-800">
                    <span>Total</span>
                    <span>₹{total.toFixed(0).toLocaleString()}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
                >
                  {processing
                    ? "Processing..."
                    : formData.paymentMethod === "razorpay"
                      ? "Pay Now"
                      : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
