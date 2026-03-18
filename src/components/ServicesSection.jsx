"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Droplets, Sofa, Home, PawPrint, Building2 } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Carpet Steam Cleaning",
    desc: "Hot water extraction that removes deep-seated dirt, allergens, and bacteria from your carpets.",
    full: "Our professional steam cleaning uses high-pressure hot water extraction to remove deep dirt, allergens, bacteria, and tough stains. Ideal for maintaining a healthy home environment.",
  },
  {
    icon: Sofa,
    title: "Upholstery Cleaning",
    desc: "Refresh your sofas, chairs, and fabric furniture with our professional upholstery cleaning.",
    full: "We clean all types of fabric furniture, removing stains, dust, and odors while protecting the material and extending its lifespan.",
  },
  {
    icon: Home,
    title: "End of Lease Cleaning",
    desc: "Get your full bond back with our thorough end-of-lease carpet cleaning service.",
    full: "Our end-of-lease service ensures your carpets meet inspection standards, helping you secure your full bond refund without stress.",
  },
  {
    icon: PawPrint,
    title: "Pet Stain Removal",
    desc: "Specialist pet odour and stain removal that eliminates the toughest marks and smells.",
    full: "We use enzyme-based treatments to break down pet stains and eliminate odors completely from deep within the carpet fibers.",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    desc: "Keep your workplace spotless with scheduled commercial carpet cleaning programs.",
    full: "Flexible cleaning plans for offices and commercial spaces to maintain hygiene, professionalism, and long-lasting carpets.",
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Carpet Cleaning Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive cleaning solutions for homes and businesses across
            Hobart.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s) => (
            <Card
              key={s.title}
              onClick={() => setSelectedService(s)}
              className="cursor-pointer shadow-card hover:shadow-card-hover transition duration-300 border-0 bg-card"
            >
              <CardHeader className="flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-2">
                  <s.icon className="w-7 h-7 text-blue-800" />
                </div>
                <CardTitle className="text-lg">{s.title}</CardTitle>
                <CardDescription className="text-sm">{s.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* ✅ MODAL */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-4 mx-auto">
              <selectedService.icon className="w-8 h-8 text-blue-800" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-center mb-3">
              {selectedService.title}
            </h3>

            <p className="text-gray-600 text-center">{selectedService.full}</p>

            {/* CTA */}
            <div className="mt-6 flex justify-center">
              <Link
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="bg-orange-400 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
