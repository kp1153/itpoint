import {
  Wrench,
  Monitor,
  Printer,
  Camera,
  HardDrive,
  Settings,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Laptop Desktop",
      description: "नए और पुराने लैपटॉप-डेस्कटॉप की बिक्री, रिपेयर और अपग्रेड",
    },
    {
      icon: Printer,
      title: "Printer Repairing",
      description: "सभी प्रकार के प्रिंटर की रिपेयरिंग और मेंटेनेंस",
    },
    {
      icon: Camera,
      title: "CCTV Camera",
      description: "CCTV कैमरा इंस्टॉलेशन, रिपेयर और मेंटेनेंस",
    },
    {
      icon: Wrench,
      title: "Cartridge Refiling",
      description: "प्रिंटर कार्ट्रिज रीफिलिंग और सॉफ्टवेयर अपडेट",
    },
    {
      icon: Settings,
      title: "AMC's & Branded PC",
      description: "ब्रांडेड और असेंबल PC की बिक्री और AMC सेवाएं",
    },
    {
      icon: HardDrive,
      title: "Data Recovery",
      description: "डेटा रिकवरी और कंप्यूटर मेंटेनेंस सेवाएं",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            हमारी <span className="text-indigo-700">सेवाएं</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-indigo-700 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}