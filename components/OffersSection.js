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

export default async function OffersSection() {
  const offers = await getOffers();

  if (!offers || offers.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            विशेष <span className="text-red-600">ऑफर्स</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

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
      </div>
    </section>
  );
}