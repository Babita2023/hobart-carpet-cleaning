"use client"; // Required because we use useState
import Image from 'next/image';
import { Shield, Award, Clock } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Fully Insured" },
  { icon: Award, label: "5+ Years Experience" },
  { icon: Clock, label: "Same Day Service" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
          Hobart's Trusted Carpet Cleaning Experts
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          At Hobart Premium Carpet Cleaning, we are a locally owned and operated professional 
          carpet cleaning company proudly serving Hobart and surrounding suburbs. Our experienced
           technicians use state-of-the-art steam cleaning equipment and eco-friendly products to
            deliver exceptional results every time. Whether it's a deep clean for your home or a
             commercial property, we guarantee carpets that look, feel, and smell brand new.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-center gap-3 text-blue-600 font-semibold">
              <h.icon className="w-6 h-6 " />
              <span>{h.label}</span>
            </div>
          ))}
        </div>

        {/* <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Customers Trust Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="shadow p-6 rounded">
            <h3 className="font-semibold mb-2">Experienced Professionals</h3>
            <p className="text-gray-600">
              Skilled team with real cleaning expertise.
            </p>
          </div>

          <div className="shadow p-6 rounded">
            <h3 className="font-semibold mb-2">Eco-Friendly Products</h3>
            <p className="text-gray-600">
              Safe for kids, pets and the environment.
            </p>
          </div>

          <div className="shadow p-6 rounded">
            <h3 className="font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">
              Transparent pricing with no hidden costs.
            </p>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  </section>
);

export default AboutSection;