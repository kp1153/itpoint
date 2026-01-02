export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-600">संपर्क करें</h4>
            <div className="space-y-2 text-white text-sm">
              <p>📞 9335833783</p>
              <p>📱 7905838004</p>            
              <p>✉️ itservices0607@gmail.com</p>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-600">पता</h4>
            <p className="text-white text-sm">
              📍 S6/119 चौरा माता मंदिर के सामने,<br />
              कचहरी रोड, अर्दली बाजार, वाराणसी
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/90">
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