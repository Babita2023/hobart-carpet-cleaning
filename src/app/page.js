import ContactForm from "@/components/ContactForm";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />

      <WhyChooseUs />
      <GallerySection />
      <Testimonials />
      <ContactForm />

    </div>
  );
}

// export default function Home() {
//   return (
//     <div className="hero-gradient text-white p-10 rounded shadow-card">
//       <h1>Hobart Premium Cleaning</h1>
//       <p>Professional Carpet Cleaning in Hobart, Tasmania</p>
//     </div>
//   );
// }