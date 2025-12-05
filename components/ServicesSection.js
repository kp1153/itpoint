import Image from "next/image";
import {
  Wrench,
  Shield,
  Truck,
  Headphones,
  RefreshCw,
  Settings,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Settings,
      title: "Device Setup & Installation",
      description:
        "Complete installation and configuration of laptops, desktops, printers, and CCTV systems for seamless operation",
      features: ["OS Installation", "Driver Setup", "Network Configuration"],
      image: "/services/1.jpeg",
    },
    {
      icon: Wrench,
      title: "Repair & Maintenance",
      description:
        "Expert repair services for hardware and software issues to keep your devices running smoothly",
      features: [
        "Hardware Repair",
        "Software Troubleshooting",
        "Virus Removal",
      ],
      image: "/services/2.jpeg",
    },
    {
      icon: RefreshCw,
      title: "Upgrades & Optimization",
      description:
        "Upgrade your systems with latest components and optimize performance for better productivity",
      features: ["RAM Upgrade", "SSD Installation", "Performance Tuning"],
    },
    {
      icon: Shield,
      title: "Data Backup & Recovery",
      description:
        "Secure data backup solutions and professional data recovery services to protect your valuable information",
      features: ["Cloud Backup", "Data Recovery", "Hard Drive Cloning"],
    },
    {
      icon: Truck,
      title: "On-Site Support",
      description:
        "Convenient on-site technical support at your home or office for immediate assistance",
      features: ["Home Service", "Office Support", "Emergency Visits"],
    },
    {
      icon: Headphones,
      title: "After-Sales Support",
      description:
        "Dedicated customer support and warranty services for all products purchased from IT Point",
      features: ["Warranty Claims", "Technical Assistance", "Product Guidance"],
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#006680]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#006680] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert IT services to keep your digital world running smoothly
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image (if exists) */}
                {service.image && (
                  <div className="relative w-full h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#006680] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-[#006680] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 bg-[#006680] rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Need Technical Assistance?
          </h3>
          <p className="mb-6 text-white/90">
            Our experienced team is ready to help you with any IT-related issue.
            From installation to troubleshooting, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919336486071"
              className="bg-white text-[#006680] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919336486071"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#006680] transition-colors font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
