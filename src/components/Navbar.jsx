"use client"; // Required because we use useState

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallerySection" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg text-blue-800">
          Hobart Premium<br className="hidden sm:inline" /> Carpet Cleaning
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-800 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop Contact */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+61413466112"
            className="flex items-center gap-2 text-sm font-semibold text-blue-800"
          >
            <Phone className="w-4 h-4" /> +61 413 466 112
          </a>

          <Link
            href="#contact"
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition-colors text-sm font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-800"
            >
              {l.label}
            </a>
          ))}

          <a
            href="tel:+61413466112"
            className="flex items-center gap-2 py-2 text-sm font-semibold text-blue-800"
          >
            <Phone className="w-4 h-4" /> +61 413 466 112
          </a>

          <Link
            href="#contact"
            className="block bg-blue-800 text-white text-center py-2 rounded mt-2 text-sm font-medium hover:bg-blue-900 transition-colors"
            onClick={() => setOpen(false)}
          >
            Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}