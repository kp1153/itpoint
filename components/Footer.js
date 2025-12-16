export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-amber-600">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center text-sm">
          <p>
            © {new Date().getFullYear()} Computer Shop. All rights reserved.
          </p>
          <p className="mt-1">
            Developed by{" "}
            <a
              href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold"
            >
              Creative Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
