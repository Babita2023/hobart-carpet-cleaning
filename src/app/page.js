import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />

    </div>
  );
}
