"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Wrench, 
  Laptop, 
  HardDrive, 
  Cpu, 
  Check, 
  Phone,
  Award,
  ThumbsUp,
  Shield,
  Zap,
  X
} from "lucide-react";

export default function RepairServicesPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const services = [
    {
      icon: Wrench,
      title: "कंप्यूटर एवं लैपटॉप रिपेयरिंग",
      description: "सभी ब्रांड के लैपटॉप और डेस्कटॉप की गहन मरम्मत",
      features: [
        "मदरबोर्ड, डिस्प्ले, कीबोर्ड, बैटरी रिपेयर",
        "विंडोज इंस्टॉलेशन, ड्राइवर अपडेट, वायरस रिमूवल",
        "हार्डवेयर एवं सॉफ्टवेयर दोनों समस्याओं का समाधान",
      ],
    },
    {
      icon: Laptop,
      title: "सेकंड हैंड लैपटॉप",
      description: "बजट में क्वालिटी - स्टूडेंट्स और बिज़नेस के लिए परफेक्ट",
      features: [
        "अच्छी कंडीशन वाले क्वालिटी चेक्ड लैपटॉप",
        "खरीदने से पहले पूरी जांच और टेस्टिंग",
        "सीमित वारंटी / सपोर्ट उपलब्ध",
      ],
    },
    {
      icon: HardDrive,
      title: "रिफर्बिश्ड / रिसर्विस लैपटॉप",
      description: "पुराने लैपटॉप को नया जैसा परफॉर्मेंस दें",
      features: [
        "SSD अपग्रेड, RAM अपग्रेड से स्पीड बढ़ाएँ",
        "ओवरहीटिंग, स्लो परफॉर्मेंस की समस्या खत्म",
        "पुराने PC में भी Windows 11 की जुगाड़ व्यवस्था",
      ],
    },
    {
      icon: Cpu,
      title: "डेस्कटॉप रिपेयर एवं असेंबलिंग",
      description: "कस्टम PC बिल्डिंग से लेकर पूरी रिपेयर तक",
      features: [
        "ऑफिस / होम / गेमिंग PC असेंबलिंग",
        "CPU, SMPS, RAM, हार्ड डिस्क रिप्लेसमेंट",
        "सभी सॉफ्टवेयर की अरेंजमेंट वाजिब कीमत पर",
      ],
    },
  ];

  const galleryImages = [
    "/services/1.jpg",
    "/services/2.png",
    "/services/3.png",
    "/services/4.png",
    "/services/5.png",
    "/services/6.jpg",
    "/services/7.jpg",
    "/services/8.jpg",
    "/services/9.jpg",
    "/services/10.jpg",
  ];

  const whyChooseUs = [
    { icon: Award, text: "अनुभवी कारीगर - इंच-इंच तोड़कर जोड़ने की एक्सपर्ट टीम" },
    { icon: ThumbsUp, text: "उचित और पारदर्शी कीमत - कोई छुपा चार्ज नहीं" },
    { icon: Shield, text: "भरोसेमंद सर्विस और ईमानदार सलाह" },
    { icon: Zap, text: "समय पर काम और ग्राहक संतुष्टि की गारंटी" },
    { icon: Check, text: "रिपेयर के बाद पूरा सिस्टम चेक और टेस्टिंग" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">मरम्मत सेवाएं</h1>
          <p className="text-xl">आपके कंप्यूटर की हर समस्या का विश्वसनीय समाधान</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            📸 हमारे काम की झलकियाँ
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Service ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    देखें
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-5xl max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Full size"
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-3xl p-10 shadow-2xl mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            ⭐ हमें क्यों चुनें?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <p className="text-white font-medium">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 p-10 rounded-3xl border-2 border-amber-200">
          <Phone className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            📞 आज ही संपर्क करें
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            यदि आपका लैपटॉप या कंप्यूटर स्लो है, खराब हो गया है या आप बजट में
            सेकंड हैंड लैपटॉप लेना चाहते हैं — आज ही हमसे संपर्क करें।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919335833783"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
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