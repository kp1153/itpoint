"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // WhatsApp message format
    const message = `*नई पूछताछ*%0A%0A*नाम:* ${formData.name}%0A*फोन:* ${formData.phone}%0A*ईमेल:* ${formData.email}%0A*सेवा:* ${formData.service}%0A*संदेश:* ${formData.message}`;
    
    window.open(`https://wa.me/919335833783?text=${message}`, "_blank");
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
      alert("आपका संदेश भेज दिया गया है! हम जल्द ही संपर्क करेंगे।");
    }, 1000);
  };

  const services = [
    "लैपटॉप रिपेयर",
    "डेस्कटॉप रिपेयर",
    "सेकंड हैंड लैपटॉप",
    "CCTV इंस्टॉलेशन",
    "AMC सेवा",
    "प्रिंटर रिपेयर",
    "डेटा रिकवरी",
    "अन्य",
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "फोन नंबर",
      details: ["9335833783", "7905838004"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Mail,
      title: "ईमेल",
      details: ["itservices0607@gmail.com"],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: MapPin,
      title: "पता",
      details: [
        "S6/119 चौरा माता मंदिर के सामने",
        "कचहरी रोड, अर्दली बाजार, वाराणसी",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Clock,
      title: "समय",
      details: ["सोमवार - शनिवार: 10:00 AM - 8:00 PM", "रविवार: 11:00 AM - 6:00 PM"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">संपर्क करें</h1>
          <p className="text-xl">हम आपकी सेवा के लिए हमेशा तैयार हैं</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 ${info.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${info.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              संदेश भेजें
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  नाम *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="अपना नाम लिखें"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  फोन नंबर *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="अपना फोन नंबर लिखें"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ईमेल
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="अपना ईमेल लिखें"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  सेवा चुनें *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">सेवा चुनें</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  संदेश *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="अपना संदेश यहाँ लिखें..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "भेजा जा रहा है..." : "संदेश भेजें"}
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              हमारी लोकेशन
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5447898765234!2d82.99899631501493!3d25.286946683853636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dda03a5c8ab%3A0x6c4e0e7c1e8a9c0d!2sArdali%20Bazaar%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💬 तुरंत संपर्क करें
              </h3>
              <p className="text-gray-700 mb-6">
                किसी भी प्रकार की मदद के लिए हमें कॉल या WhatsApp करें
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+919335833783"
                  className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center"
                >
                  📞 कॉल करें
                </a>
                <a
                  href="https://wa.me/919335833783"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}