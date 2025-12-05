"use client";
import { useState, useEffect } from "react";

export default function OffersSection() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sanity fetch logic यहाँ आएगी
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <section id="offers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="offers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Special <span className="text-[#006680]">Offers</span>
          </h2>
          <div className="w-24 h-1 bg-[#006680] mx-auto"></div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer._id}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Offer content यहाँ render होगी */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}