import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-blue-100 py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Premium Carpet Cleaning in Hobart
      </h2>
      <p className="mb-6">
        Same Day Service | Affordable | Professional
      </p>
      <div className="space-x-4">
        <a
          href="tel:+61400000000"
          className="bg-slate-900 text-white px-6 py-3 rounded"
        >
          Call Now
        </a>
        <Link
          href="/contact"
          className="bg-blue-500 text-white px-6 py-3 rounded"
        >
          Get Free Quote
        </Link>
      </div>
    </section>
  );
}