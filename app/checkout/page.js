"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    address: "",
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

  const handleWhatsAppOrder = () => {
    if (!formData.customerName || !formData.phone || !formData.address) {
      alert("कृपया सभी आवश्यक फ़ील्ड भरें");
      return;
    }

    const orderDetails = cart
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.title}\n   Qty: ${item.quantity} × ₹${item.price} = ₹${item.quantity * item.price}`
      )
      .join("\n\n");

    const message = `🛒 *New Order from Website*

📦 *Order Details:*
${orderDetails}

💰 *Payment Summary:*
Subtotal: ₹${subtotal.toLocaleString()}
Tax (18%): ₹${tax.toFixed(0)}
Delivery: ${deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
*Total Amount: ₹${total.toFixed(0)}*

👤 *Customer Details:*
Name: ${formData.customerName}
Phone: ${formData.phone}
Address: ${formData.address}
${formData.notes ? `Notes: ${formData.notes}` : ""}

💳 *Payment Details:*
UPI ID: paytmqr6vid3r@ptys
Phone Pay: 9336486071

_I will send payment screenshot after completing payment._`;

    const whatsappUrl = `https://wa.me/919336486071?text=${encodeURIComponent(message)}`;

    localStorage.removeItem("cart");
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      router.push("/");
    }, 1000);
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Customer Details
              </h2>

              <div className="space-y-4">
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="Any special instructions..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                💳 Payment Method - Paytm/UPI
              </h3>

              <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
                <Image
                  src="/payment-qr.jpg"
                  alt="Paytm QR Code - IT Point"
                  width={300}
                  height={400}
                  className="mx-auto"
                  priority
                />
              </div>

              <div className="space-y-2 text-sm text-blue-800">
                <p className="font-semibold">📱 Payment करने के लिए:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>ऊपर दिए गए QR Code को scan करें</li>
                  <li>या नीचे दी गई UPI ID use करें</li>
                  <li>Payment करने के बाद screenshot WhatsApp पर भेजें</li>
                </ol>
              </div>

              <div className="mt-4 p-3 bg-white rounded border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-2">
                  UPI Details:
                </p>
                <div className="space-y-1 text-sm">
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded">
                    <span className="font-semibold">UPI ID:</span>{" "}
                    paytmqr6vid3r@ptys
                  </p>
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded">
                    <span className="font-semibold">Name:</span> IT POINT
                  </p>
                  <p className="font-mono bg-gray-100 px-2 py-1 rounded">
                    <span className="font-semibold">Phone:</span> 9336486071
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-3">
                <p className="text-xs text-yellow-800">
                  ⚠️ <strong>Note:</strong> Payment confirmation के लिए
                  screenshot जरूर भेजें WhatsApp पर: 9336486071
                </p>
              </div>
            </div>
          </div>

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
                  <span>₹{tax.toFixed(0)}</span>
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
                  <span>₹{total.toFixed(0)}</span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>💬</span>
                Place Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
