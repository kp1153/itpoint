export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-indigo-600 to-indigo-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          IT SERVICES POINT
        </h1>
        
        <p className="text-2xl md:text-3xl font-light italic mb-8">
          life extension of your pc
        </p>
        
        <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
          वाराणसी का भरोसेमंद IT समाधान केंद्र
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+919335833783"
            className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            कॉल करें
          </a>
          <a
            href="https://wa.me/919335833783"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-colors"
          >
            WhatsApp करें
          </a>
        </div>
      </div>
    </section>
  );
}