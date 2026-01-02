export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-indigo-700">IT Services Point</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-700 mx-auto"></div>
        </div>
        {/* Content */}
        <div className="space-y-8">
          {/* First Paragraph */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              आपका भरोसेमंद IT समाधान केंद्र। हम लैपटॉप, डेस्कटॉप, प्रिंटर रिपेयरिंग, CCTV कैमरा, कार्ट्रिज रीफिलिंग, सॉफ्टवेयर अपडेट और फॉर्मेटिंग की सेवाएं प्रदान करते हैं। हमारा उद्देश्य है आपके PC की लाइफ बढ़ाना और बेहतर परफॉर्मेंस देना।
            </p>
          </div>
          {/* Second Paragraph */}
          <div className="bg-indigo-700 p-8 rounded-lg shadow-md">
            <p className="text-lg text-white leading-relaxed">
              <span className="font-bold">"IT Services Point"</span> वाराणसी में स्थित एक विश्वसनीय सेवा प्रदाता है। हम AMC's, ब्रांडेड और असेंबल PC, डेटा रिकवरी और मेंटेनेंस की सेवाएं देते हैं। अशीष गुप्ता के नेतृत्व में, हम ग्राहकों को गुणवत्तापूर्ण और किफायती समाधान प्रदान करने के लिए प्रतिबद्ध हैं।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}