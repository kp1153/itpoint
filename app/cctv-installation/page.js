"use client";

import { Camera, Shield, Check, Phone, Eye, Clock, Zap } from "lucide-react";

export default function CCTVInstallationPage() {
  const services = [
    {
      icon: Camera,
      title: "CCTV कैमरा इंस्टॉलेशन",
      description: "घर और ऑफिस के लिए पूर्ण सुरक्षा समाधान",
      features: [
        "HD और Full HD कैमरा",
        "नाइट विजन सपोर्ट",
        "मोबाइल में लाइव व्यू",
        "रिकॉर्डिंग और स्टोरेज",
      ],
    },
    {
      icon: Eye,
      title: "DVR/NVR सिस्टम",
      description: "उच्च क्वालिटी रिकॉर्डिंग सिस्टम",
      features: [
        "4, 8, 16 चैनल DVR उपलब्ध",
        "क्लाउड स्टोरेज विकल्प",
        "रिमोट एक्सेस",
        "मोशन डिटेक्शन अलर्ट",
      ],
    },
    {
      icon: Shield,
      title: "मेंटेनेंस और सपोर्ट",
      description: "निरंतर सुरक्षा के लिए देखरेख",
      features: [
        "नियमित चेकअप",
        "कैमरा क्लीनिंग",
        "सॉफ्टवेयर अपडेट",
        "24/7 सपोर्ट",
      ],
    },
  ];

  const packages = [
    {
      name: "होम पैकेज",
      cameras: "2-4 कैमरा",
      price: "₹12,000 से शुरू",
      features: [
        "2MP HD कैमरा",
        "4 चैनल DVR",
        "500GB हार्ड डिस्क",
        "मोबाइल ऐप",
        "फ्री इंस्टॉलेशन",
        "1 साल वारंटी",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "बिज़नेस पैकेज",
      cameras: "4-8 कैमरा",
      price: "₹25,000 से शुरू",
      features: [
        "2MP/4MP कैमरा मिक्स",
        "8 चैनल DVR",
        "1TB हार्ड डिस्क",
        "मल्टीपल यूजर एक्सेस",
        "प्रोफेशनल इंस्टॉलेशन",
        "1 साल वारंटी + AMC",
      ],
      color: "from-indigo-500 to-purple-600",
      popular: true,
    },
    {
      name: "एंटरप्राइज पैकेज",
      cameras: "8+ कैमरा",
      price: "₹50,000 से शुरू",
      features: [
        "4MP/5MP हाई रेजोल्यूशन",
        "16 चैनल NVR",
        "2TB+ स्टोरेज",
        "एडवांस्ड एनालिटिक्स",
        "कस्टम सेटअप",
        "2 साल वारंटी + AMC",
      ],
      color: "from-purple-500 to-pink-600",
    },
  ];

  const features = [
    {
      icon: Eye,
      title: "24/7 निगरानी",
      description: "हर समय अपनी संपत्ति पर नजर रखें",
    },
    {
      icon: Clock,
      title: "लाइव व्यू",
      description: "कहीं से भी मोबाइल पर देखें",
    },
    {
      icon: Shield,
      title: "सुरक्षा",
      description: "चोरी और अनचाही घटनाओं से बचाव",
    },
    {
      icon: Zap,
      title: "तुरंत अलर्ट",
      description: "मोशन डिटेक्शन पर तुरंत सूचना",
    },
  ];

  const brands = [
    "Hikvision",
    "Dahua",
    "CP Plus",
    "Godrej",
    "Honeywell",
    "Samsung",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Camera className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">CCTV इंस्टॉलेशन</h1>
          <p className="text-xl">अपने घर और व्यवसाय को सुरक्षित रखें</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            CCTV के <span className="text-blue-600">फायदे</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            हमारी <span className="text-blue-600">सेवाएं</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            हमारे <span className="text-blue-600">पैकेज</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  pkg.popular ? "border-4 border-blue-500 scale-105" : "border border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 font-bold">
                    ⭐ सबसे लोकप्रिय
                  </div>
                )}
                <div className={`bg-gradient-to-r ${pkg.color} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-white/90 mb-2">{pkg.cameras}</p>
                  <div className="text-3xl font-bold">{pkg.price}</div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-8 bg-gradient-to-r ${pkg.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                    संपर्क करें
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-10 mb-12 border-2 border-blue-200">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            📹 हम इन ब्रांड्स के साथ काम करते हैं
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center font-bold text-gray-700 hover:shadow-lg transition-shadow"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white text-center">
          <Phone className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">📞 CCTV लगवाने के लिए संपर्क करें</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            अपने घर या ऑफिस को पूरी तरह सुरक्षित बनाएं। फ्री कंसल्टेशन के लिए आज ही संपर्क करें!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919335833783"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 कॉल करें
            </a>
            <a
              href="https://wa.me/919335833783"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              💬 WhatsApp करें
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}