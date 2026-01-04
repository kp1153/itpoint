"use client";

import { Check, Shield, Clock, Wrench, Phone, Star } from "lucide-react";

export default function AMCPlansPage() {
  const plans = [
    {
      name: "बेसिक प्लान",
      price: "₹3,000",
      duration: "प्रति वर्ष",
      features: [
        "साल में 4 बार फ्री चेकअप",
        "सॉफ्टवेयर अपडेट और एंटीवायरस इंस्टॉलेशन",
        "विंडोज फॉर्मेटिंग (1 बार फ्री)",
        "हार्डवेयर क्लीनिंग",
        "टेलीफोन सपोर्ट",
      ],
      color: "from-blue-500 to-blue-600",
      popular: false,
    },
    {
      name: "स्टैंडर्ड प्लान",
      price: "₹5,500",
      duration: "प्रति वर्ष",
      features: [
        "साल में 6 बार फ्री चेकअप",
        "सभी सॉफ्टवेयर अपडेट फ्री",
        "विंडोज फॉर्मेटिंग (2 बार फ्री)",
        "हार्डवेयर रिपेयर में 20% छूट",
        "डेटा बैकअप सपोर्ट",
        "प्रायोरिटी सर्विस",
        "24/7 टेलीफोन सपोर्ट",
      ],
      color: "from-indigo-500 to-indigo-600",
      popular: true,
    },
    {
      name: "प्रीमियम प्लान",
      price: "₹8,500",
      duration: "प्रति वर्ष",
      features: [
        "साल में 12 बार फ्री चेकअप (मासिक)",
        "सभी सॉफ्टवेयर और ड्राइवर अपडेट",
        "अनलिमिटेड विंडोज फॉर्मेटिंग",
        "हार्डवेयर रिपेयर में 30% छूट",
        "फ्री डेटा रिकवरी (1 बार)",
        "ऑनसाइट सर्विस उपलब्ध",
        "24/7 प्रायोरिटी सपोर्ट",
        "1 साल की वारंटी",
      ],
      color: "from-purple-500 to-purple-600",
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "लंबी उम्र",
      description: "नियमित देखरेख से आपके PC की लाइफ बढ़ती है",
    },
    {
      icon: Clock,
      title: "समय की बचत",
      description: "समस्या आने से पहले ही रोकथाम",
    },
    {
      icon: Wrench,
      title: "कम खर्च",
      description: "बड़ी मरम्मत से बचें, छोटे खर्च में रखरखाव",
    },
    {
      icon: Star,
      title: "बेहतर परफॉर्मेंस",
      description: "हमेशा तेज और स्मूथ परफॉर्मेंस",
    },
  ];

  const coverage = [
    "डेस्कटॉप और लैपटॉप दोनों के लिए",
    "होम और ऑफिस दोनों के लिए उपलब्ध",
    "सभी ब्रांड्स को कवर करता है",
    "CCTV और प्रिंटर AMC भी उपलब्ध",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">सालाना देखरेख योजना (AMC)</h1>
          <p className="text-xl">अपने कंप्यूटर को हमेशा फिट रखें</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AMC के <span className="text-indigo-600">फायदे</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            हमारे <span className="text-indigo-600">प्लान्स</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? "border-4 border-indigo-500 scale-105" : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="bg-indigo-500 text-white text-center py-2 font-bold">
                    ⭐ सबसे लोकप्रिय
                  </div>
                )}
                <div className={`bg-gradient-to-r ${plan.color} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-1">{plan.price}</div>
                  <p className="text-white/90">{plan.duration}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-8 bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                    चुनें
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-10 mb-12 border-2 border-indigo-200">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            📋 AMC में क्या-क्या कवर होता है?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coverage.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-md"
              >
                <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-white text-center">
          <Phone className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">📞 AMC लेने के लिए संपर्क करें</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            अपने कंप्यूटर को हमेशा फिट रखें। आज ही AMC प्लान चुनें और चिंतामुक्त रहें!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919335833783"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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