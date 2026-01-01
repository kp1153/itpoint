"use client";
import { useState } from "react";

export default function RazorpayPayment() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!amount || amount <= 0) {
      alert("कृपया सही राशि दर्ज करें");
      return;
    }

    setLoading(true);

    // Load Razorpay script
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK लोड नहीं हो सका। कृपया दोबारा कोशिश करें।");
      setLoading(false);
      return;
    }

    // Create order
    try {
      const orderResponse = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parseFloat(amount) }),
      });

      const order = await orderResponse.json();

      if (!order.id) {
        throw new Error("Order creation failed");
      }

      // Initialize Razorpay with ALL payment methods
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "IT Point Computer Shop",
        description: "Payment Transaction",
        image: "/logo.png", // Optional: आपका logo यहाँ डालें
        order_id: order.id,

        // ALL Payment Methods Enable
        config: {
          display: {
            blocks: {
              banks: {
                name: "Pay using UPI or NetBanking",
                instruments: [
                  {
                    method: "upi",
                  },
                  {
                    method: "netbanking",
                  },
                ],
              },
              card: {
                name: "Pay using Cards",
                instruments: [
                  {
                    method: "card",
                  },
                ],
              },
              wallet: {
                name: "Pay using Wallets",
                instruments: [
                  {
                    method: "wallet",
                  },
                ],
              },
            },
            sequence: ["block.banks", "block.card", "block.wallet"],
            preferences: {
              show_default_blocks: true,
            },
          },
        },

        // Payment Methods
        method: {
          netbanking: true,
          card: true,
          upi: true,
          wallet: true,
          emi: false,
          paylater: false,
          cardless_emi: false,
          bank_transfer: false,
        },

        handler: async function (response) {
          // Verify payment
          const verifyResponse = await fetch("/api/razorpay/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyResponse.json();

          if (verifyData.success) {
            alert("भुगतान सफल रहा! ✅");
            setAmount("");
          } else {
            alert("भुगतान सत्यापन विफल रहा");
          }
          setLoading(false);
        },

        prefill: {
          name: "",
          email: "",
          contact: "",
        },

        notes: {
          address: "IT Point Computer Shop",
        },

        theme: {
          color: "#3399cc",
        },

        modal: {
          ondismiss: function () {
            setLoading(false);
            alert("भुगतान रद्द किया गया");
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("भुगतान में त्रुटि हुई। कृपया दोबारा कोशिश करें।");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            IT Point Computer Shop
          </h1>
          <p className="text-gray-600">सुरक्षित भुगतान</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              राशि (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="राशि दर्ज करें"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              disabled={loading}
            />
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {loading ? "प्रक्रिया जारी है..." : "भुगतान करें"}
          </button>

          {/* Payment Methods Display */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <p className="text-sm font-medium text-gray-700 text-center mb-3">
              उपलब्ध भुगतान विधियाँ:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span>💳</span> Credit/Debit Cards
              </div>
              <div className="flex items-center gap-2">
                <span>🏦</span> Net Banking
              </div>
              <div className="flex items-center gap-2">
                <span>📱</span> UPI (GPay, PhonePe)
              </div>
              <div className="flex items-center gap-2">
                <span>💰</span> Wallets
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Secured by Razorpay</span>
          </div>
        </div>
      </div>
    </div>
  );
}
