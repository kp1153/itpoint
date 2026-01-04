import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Phone Numbers */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Phone size={24} className="text-amber-600" strokeWidth={2.5} />
              <h3 className="text-lg font-bold">फोन नंबर</h3>
            </div>
            <div className="space-y-2">
              <a 
                href="tel:+919335833783" 
                className="block text-white/90 hover:text-amber-600 text-lg font-medium transition-colors"
              >
                9335833783
              </a>
              <a 
                href="tel:+917905838004" 
                className="block text-white/90 hover:text-amber-600 text-lg font-medium transition-colors"
              >
                7905838004
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Mail size={24} className="text-amber-600" strokeWidth={2.5} />
              <h3 className="text-lg font-bold">ईमेल</h3>
            </div>
            <a 
              href="mailto:itservices0607@gmail.com" 
              className="text-white/90 hover:text-amber-600 text-base font-medium break-all transition-colors"
            >
              itservices0607@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <MapPin size={24} className="text-amber-600" strokeWidth={2.5} />
              <h3 className="text-lg font-bold">पता</h3>
            </div>
            <p className="text-white/90 text-base leading-relaxed">
              S6/119 चौरा माता मंदिर के सामने,<br />
              कचहरी रोड, अर्दली बाजार,<br />
              वाराणसी
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-white/90 space-y-2">
          <p>© 2025 IT Services Point. सर्वाधिकार सुरक्षित।</p>
          <p>
            Website Developed by{" "}
            <a 
              href="https://www.web-developer-kp.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-amber-600 underline"
            >
              Kamta Prasad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}