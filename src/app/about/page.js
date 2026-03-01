


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
            <div key={h.label} className="flex items-center gap-3 text-primary font-semibold">
              <h.icon className="w-6 h-6" />
              <span>{h.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-16">
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
      </div>
      </div>
    </div>
  </section>
);

export default AboutSection;


// export const metadata = {
//   title: "About Us | Premium Carpet Cleaning Hobart",
//   description:
//     "Learn more about our professional carpet cleaning services in Hobart. Trusted, affordable and eco-friendly solutions.",
// };

// export default function About() {
//   return (
//     <div className="max-w-6xl mx-auto py-16 px-6">
//       {/* Heading */}
//       <h1 className="text-4xl font-bold mb-6 text-center">
//         About Our Company
//       </h1>

//       {/* Intro Section */}
//       <div className="mb-12 text-lg text-gray-700 text-center">
//         <p>
//           We are a locally owned carpet cleaning business proudly serving
//           Hobart and surrounding areas. Our mission is to provide high-quality,
//           affordable and reliable cleaning services for homes and businesses.
//         </p>
//       </div>

//       {/* Story Section */}
//       <div className="grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">
//             Our Story
//           </h2>
//           <p className="text-gray-600 mb-4">
//             With years of experience in professional cleaning, we understand
//             the importance of maintaining a clean and healthy home.
//           </p>
//           <p className="text-gray-600">
//             We use eco-friendly products and modern equipment to ensure deep
//             cleaning while protecting your family and pets.
//           </p>
//         </div>

//         <div className="bg-gray-200 rounded p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//   <Image
//     src="/images/sample1.jpeg"
//     alt="Cleaning Image 1"
//     width={500}
//     height={400}
//     className="rounded object-cover w-full h-64"
//   />

//   <Image
//     src="/images/sample2.jpeg"
//     alt="Cleaning Image 2"
//     width={500}
//     height={400}
//     className="rounded object-cover w-full h-64"
//   />
// </div>
//       </div>

//       {/* Why Trust Us */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           Why Customers Trust Us
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 text-center">
//           <div className="shadow p-6 rounded">
//             <h3 className="font-semibold mb-2">Experienced Professionals</h3>
//             <p className="text-gray-600">
//               Skilled team with real cleaning expertise.
//             </p>
//           </div>

//           <div className="shadow p-6 rounded">
//             <h3 className="font-semibold mb-2">Eco-Friendly Products</h3>
//             <p className="text-gray-600">
//               Safe for kids, pets and the environment.
//             </p>
//           </div>

//           <div className="shadow p-6 rounded">
//             <h3 className="font-semibold mb-2">Affordable Pricing</h3>
//             <p className="text-gray-600">
//               Transparent pricing with no hidden costs.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }