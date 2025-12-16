"use client";

import { useState, useEffect } from "react";

export default function WebsiteSalePage() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const features = [
    "ई-कॉमर्स",
    "पेमेंट गेटवे",
    "डैशबोर्ड",
    "SEO अनुकूलित",
    "Next.js",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">🌐 वेबसाइट बिक्री</div>
          <a
            href="https://wa.me/919996865069"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            <span>📱</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-700/30 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-amber-400 mr-2">⚡</span>
              <span className="text-white font-semibold">
                तैयार वेबसाइट - तुरंत उपयोग करें
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              यह वेबसाइट
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 inline-block min-h-[80px]">
                बिकाऊ है
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              पूरी तरह से विकसित{" "}
              <span className="text-amber-400 font-bold">
                {features[currentFeature]}
              </span>{" "}
              वेबसाइट
              <br />
              आपकी जरूरत के अनुसार कस्टमाइज़ करने के लिए तैयार
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-4xl mb-3">💳</div>
                <div className="text-lg font-bold text-white mb-1">
                  पेमेंट गेटवे
                </div>
                <div className="text-sm text-gray-400">पहले से एकीकृत</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-4xl mb-3">📊</div>
                <div className="text-lg font-bold text-white mb-1">
                  डैशबोर्ड
                </div>
                <div className="text-sm text-gray-400">पूर्ण प्रबंधन</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-4xl mb-3">🚀</div>
                <div className="text-lg font-bold text-white mb-1">Next.js</div>
                <div className="text-sm text-gray-400">तेज़ प्रदर्शन</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-4xl mb-3">📈</div>
                <div className="text-lg font-bold text-white mb-1">
                  बेहतरीन SEO
                </div>
                <div className="text-sm text-gray-400">गूगल रैंकिंग</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-12 space-y-6">
              <div className="flex flex-wrap justify-center gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50">
                  <span className="relative z-10 flex items-center gap-2">
                    <span>अभी खरीदें</span>
                    <span>→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>

                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105">
                  डेमो देखें
                </button>
              </div>

              <div className="space-y-2">
                <p className="text-gray-400 text-sm">
                  💬 अपनी जरूरत बताएं, हम इसे उसी के अनुसार विकसित कर देंगे
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-gray-300 text-sm">
                  <a
                    href="https://wa.me/919996865069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-green-400 transition-colors"
                  >
                    <span>📱</span>
                    <span>WhatsApp: 9996865069</span>
                  </a>
                  <span className="hidden md:inline text-gray-600">|</span>
                  <a
                    href="mailto:prasad.kamta@gmail.com"
                    className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                  >
                    <span>📧</span>
                    <span>prasad.kamta@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            क्या-क्या मिलेगा? 🎁
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                ई-कॉमर्स तैयार
              </h3>
              <p className="text-gray-700 leading-relaxed">
                पूरी तरह कार्यशील ऑनलाइन स्टोर। उत्पाद जोड़ें, ऑर्डर प्राप्त
                करें, और बिक्री शुरू करें।
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                कस्टमाइज़ेशन
              </h3>
              <p className="text-gray-700 leading-relaxed">
                आपकी आवश्यकताओं के अनुसार पूरी तरह से अनुकूलित किया जा सकता है।
                डिज़ाइन से लेकर फीचर्स तक।
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                SEO ऑप्टिमाइज़्ड
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Next.js की शक्ति के साथ बनाया गया। गूगल पर बेहतरीन रैंकिंग की
                गारंटी।
              </p>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">
              तकनीकी विशेषताएं 💻
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">Next.js फ्रेमवर्क</h4>
                  <p className="text-gray-400">
                    सर्वर-साइड रेंडरिंग और बेहतरीन प्रदर्शन
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    रिस्पॉन्सिव डिज़ाइन
                  </h4>
                  <p className="text-gray-400">
                    सभी डिवाइस पर परफेक्ट दिखता है
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">एडमिन डैशबोर्ड</h4>
                  <p className="text-gray-400">आसान प्रबंधन और नियंत्रण</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">सुरक्षित पेमेंट</h4>
                  <p className="text-gray-400">एकीकृत पेमेंट गेटवे सिस्टम</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            तैयार हैं अपना बिज़नेस ऑनलाइन लाने के लिए?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            आज ही संपर्क करें और अपनी आवश्यकताएं बताएं
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/919996865069"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 bg-white text-orange-600 font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-2"
            >
              <span>📱</span>
              <span>WhatsApp करें</span>
            </a>
            <a
              href="mailto:prasad.kamta@gmail.com"
              className="px-12 py-4 bg-orange-700 text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-2 border-2 border-white"
            >
              <span>📧</span>
              <span>ईमेल करें</span>
            </a>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            prasad.kamta@gmail.com | WhatsApp: 9996865069
          </p>
        </div>
      </section>
    </div>
  );
}
