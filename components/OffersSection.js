"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/lib/sanity";

export default function OffersSection() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const query = `*[_type == "offer" && isActive == true] | order(order asc) {
          _id,
          images
        }`;

        const data = await client.fetch(query);
        setOffers(data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) {
    return (
      <section
        id="offers"
        className="py-16 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse text-gray-500 text-xl">
              Loading Special Offers...
            </div>
          </div>
        </div>
      </section>
    );
  }

  // सारे offers की सारी images एक array में
  const allImages = offers.flatMap((offer) => offer.images || []);

  if (allImages.length === 0) {
    return null;
  }

  return (
    <section
      id="offers"
      className="py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Special <span className="text-red-600">Offers</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">
            Limited time deals - Don't miss out!
          </p>
        </div>

        {/* Images Grid - एक के नीचे एक */}
        <div className="space-y-8">
          {allImages.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={img.url}
                  alt={img.alt || `Offer ${idx + 1}`}
                  fill
                  className="object-contain bg-white"
                  priority={idx < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
