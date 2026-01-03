import { useState } from "react";
import {
  Wrench,
  Laptop,
  HardDrive,
  Cpu,
  Check,
  Phone,
  Zap,
  Award,
  ThumbsUp,
  Shield,
  X,
} from "lucide-react";

export default function ServicesSection() {
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

  const whyChooseUs = [
    {
      icon: Award,
      text: "अनुभवी कारीगर - इंच-इंच तोड़कर जोड़ने की एक्सपर्ट टीम",
    },
    {
      icon: ThumbsUp,
      text: "उचित और पारदर्शी कीमत - कोई छुपा चार्ज नहीं",
    },
    {
      icon: Shield,
      text: "भरोसेमंद सर्विस और ईमानदार सलाह",
    },
    {
      icon: Zap,
      text: "समय पर काम और ग्राहक संतुष्टि की गारंटी",
    },
    {
      icon: Check,
      text: "रिपेयर के बाद पूरा सिस्टम चेक और टेस्टिंग",
    },
  ];

  // Gallery images from public/services/
  const galleryImages = Array.from({ length: 10 }, (_, i) => {
    const num = i + 1;
    // Try different extensions
    const extensions = ['png', 'jpg', 'jpeg'];
    return `/services/${num}.${extensions[0]}`; // Default to .png, will work with any
  });

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            हमारी <span className="text-indigo-600">सेवाएं</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            हम आपके कंप्यूटर और लैपटॉप से जुड़ी हर समस्या का विश्वसनीय, किफायती
            और तेज समाधान प्रदान करते हैं
          </p>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
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

        {/* Photo Gallery Section */}
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
                <img
                  src={src}
                  alt={`Service ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback: try different extensions
                    const extensions = ['png', 'jpg', 'jpeg'];
                    const currentExt = e.target.src.split('.').pop();
                    const currentIndex = extensions.indexOf(currentExt);
                    if (currentIndex < extensions.length - 1) {
                      e.target.src = `/services/${index + 1}.${extensions[currentIndex + 1]}`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
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
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Why Choose Us */}
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

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 p-10 rounded-3xl border-2 border-amber-200">
          <Phone className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            📞 आज ही संपर्क करें
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            यदि आपका लैपटॉप या कंप्यूटर स्लो है, खराब हो गया है या आप बजट में
            सेकंड हैंड लैपटॉप लेना चाहते हैं — आज ही हमसे संपर्क करें, आपकी
            समस्या का सही समाधान मिलेगा।
          </p>
        </div>
      </div>
    </section>
  );
}