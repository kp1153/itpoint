"use client";

import { useState } from "react";
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
  const [activeService, setActiveService] = useState(0);

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
        "Dedicated customer support and warranty services for all products purchased from us",
      features: ["Warranty Claims", "Technical Assistance", "Product Guidance"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Services</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert IT services to keep your digital world running smoothly
          </p>
        </div>

        {/* Services Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveService(index)}
                className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  activeService === index
                    ? "shadow-2xl shadow-amber-500/30 scale-105 border-2 border-amber-500"
                    : "shadow-lg hover:shadow-xl border-2 border-transparent"
                }`}
              >
                {/* Image (if exists) */}
                {service.image && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                )}

                <div className="p-6 relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                    activeService === index
                      ? "bg-gradient-to-br from-amber-500 to-amber-700 scale-110 rotate-6"
                      : "bg-gradient-to-br from-zinc-800 to-zinc-900"
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
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
                        <span className={`w-2 h-2 rounded-full mr-3 transition-all ${
                          activeService === index ? "bg-amber-600 scale-150" : "bg-zinc-800"
                        }`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative bg-gradient-to-r from-zinc-900 via-zinc-800 to-amber-900 rounded-3xl p-12 text-center text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-600 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-4">
              Need Technical Assistance?
            </h3>
            <p className="mb-8 text-xl text-gray-300 max-w-2xl mx-auto">
              Our experienced team is ready to help you with any IT-related issue.
              From installation to troubleshooting, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919999999999"
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
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
        "Dedicated customer support and warranty services for all products purchased from us",
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
              href="tel:+919999999999"
              className="bg-white text-[#006680] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919999999999"
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