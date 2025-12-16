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
            About <span className="text-[#006680]">Us</span>
          </h2>
          <div className="w-24 h-1 bg-[#006680] mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* First Paragraph */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              Your trusted destination for complete IT solutions and premium
              electronic essentials. We bring you a wide selection of
              high-quality products – from laptops, CPUs, printers, and monitors
              to accessories and more. Whether it's for your home, office, or
              business, we deliver reliable gadgets, expert services, and
              seamless support to keep your digital world running smarter and
              faster.
            </p>
          </div>

          {/* Second Paragraph */}
          <div className="bg-[#006680] p-8 rounded-lg shadow-md">
            <p className="text-lg text-white leading-relaxed">
              We are a leading trader and service provider of a wide range of
              HP, Dell, Lenovo, Acer, and Asus laptops and desktops. With years
              of expertise, we ensure genuine products, competitive pricing, and
              dependable after-sales service. From device setup to maintenance
              and troubleshooting, our team is committed to delivering
              trustworthy solutions that match the needs of students,
              professionals, and businesses alike.
            </p>
          </div>

          {/* Brand Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
            <div className="text-2xl font-bold text-gray-400">HP</div>
            <div className="text-2xl font-bold text-gray-400">Dell</div>
            <div className="text-2xl font-bold text-gray-400">Lenovo</div>
            <div className="text-2xl font-bold text-gray-400">Acer</div>
            <div className="text-2xl font-bold text-gray-400">Asus</div>
          </div>
        </div>
      </div>
    </section>
  );
}
