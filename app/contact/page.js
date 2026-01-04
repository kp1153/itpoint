"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">संपर्क करें</h1>
          <p className="text-xl">हम आपकी सेवा के लिए हमेशा तैयार हैं</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-start gap-4 mb-6">
            <Phone className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">फोन नंबर</h3>
              <p className="text-gray-700 text-lg">9335833783</p>
              <p className="text-gray-700 text-lg">7905838004</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <Mail className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ईमेल</h3>
              <p className="text-gray-700 text-lg">itservices0607@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">पता</h3>
              <p className="text-gray-700 text-lg">
                S6/119 चौरा माता मंदिर के सामने,<br />
                कचहरी रोड, अर्दली बाजार, वाराणसी
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}