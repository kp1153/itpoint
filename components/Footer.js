export default function Footer() {
  return (
    <footer className="bg-indigo-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-2">IT SERVICES POINT</h3>
            <p className="text-white/90 italic mb-2">life extension of your pc</p>
            <p className="text-white/80">By Ashish Gupta</p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Deals In:</h4>
            <ul className="space-y-1 text-white/90 text-sm">
              <li>• Laptop Desktop</li>
              <li>• Printer Repairing</li>
              <li>• CCTV Camera</li>
              <li>• Cartridge Refiling</li>
              <li>• Software Update & Formatting</li>
              <li>• AMC's, Branded & Assemble PC</li>
              <li>• Data Recovery & Maintainance</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-white/90 text-sm">
              <p>📞 9335833783</p>
              <p>📱 7905838004</p>
              <p>📱 9889868627</p>
              <p>✉️ itservices0607@gmail.com</p>
              <p className="mt-3">
                📍 S6/119 In front of Chaura Mata Mandir,<br />
                Kachahari Road, Orderly Bazar, Varanasi
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/90">
          <p>
            Website Developed by{" "}
            <a 
              href="https://www.web-developer-kp.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-white underline"
            >
              Kamta Prasad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}