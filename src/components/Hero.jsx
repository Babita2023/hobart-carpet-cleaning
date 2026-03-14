"use client";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
<section className="relative  h-130 py-20 text-center text-white ">
  
  <div
    className="absolute h-130 inset-0 bg-cover bg-center opacity-50"
    style={{ backgroundImage: "url('/images/hero-carpet.jpg')" }}
  ></div>


  <div className="absolute inset-0 hero-gradient opacity-70"></div>


  <div className="relative  mt-8 z-10">
    <span className="inline-block bg-accent/20 text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-accent/30">
          ⭐ #1 Rated Carpet Cleaners in Hobart
        </span>
    <h2 className="text-4xl font-bold mb-4">
      Premium Carpet Cleaning in Hobart
    </h2>
     <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
  Transform your home with Hobart's most trusted carpet cleaning service. 
  Deep steam cleaning that removes stains, allergens, and odours — guaranteed results.
</p>
    <p className="mb-6">
      Same Day Service | Affordable | Professional
    </p>

    <div className="space-x-4">
      <a
        href="tel:+61413466112"
        className=" bg-background text-primary px-6 py-3 rounded"
      >
        <Phone className="w-5 h-5 mr-2 inline" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="bg-accent hover:bg-accent-foreground hover:opacity-90 text-background px-6 py-3 rounded"
      >
        <MessageSquare className="w-5 h-5 mr-2 inline" />
        Get Free Quote
      </Link>

      
    </div>
   
    <div className="flex  justify-center items-center gap-6 mt-8 text-primary-foreground/80 text-sm">
          <span>✓ Same Day Service</span>
          <span>✓ 100% Satisfaction</span>
          <span>✓ Eco-Friendly</span>
        </div>

    
  </div>
</section>
  );
}