export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
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