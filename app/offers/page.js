import { client } from "@/sanity/lib/client";
import Image from "next/image";

async function getOffers() {
  const query = `*[_type == "offer" && isActive == true] | order(order asc) {
    _id,
    title,
    description,
    images,
    order
  }`;
  
  return await client.fetch(query);
}

export default async function OffersPage() {
  const offers = await getOffers();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">विशेष ऑफर्स</h1>
          <p className="text-xl">शानदार डील्स और छूट पाएं</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {offers && offers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div
                key={offer._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-red-100 hover:border-red-300"
              >
                {offer.images && offer.images.length > 0 && (
                  <div className="relative h-64 w-full">
                    <Image
                      src={offer.images[0].url}
                      alt={offer.images[0].alt || offer.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {offer.title}
                  </h3>
                  {offer.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {offer.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">अभी कोई ऑफर उपलब्ध नहीं है</p>
          </div>
        )}
      </div>
    </div>
  );
}