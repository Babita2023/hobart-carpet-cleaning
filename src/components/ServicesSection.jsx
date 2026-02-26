export default function ServicesSection() {
  return (
    <section className="py-16 text-center">
      <h3 className="text-3xl font-bold mb-10">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="shadow p-6">
          <h4 className="font-bold mb-2">Carpet Cleaning</h4>
          <p>Deep steam cleaning for fresh carpets.</p>
        </div>
        <div className="shadow p-6">
          <h4 className="font-bold mb-2">Upholstery Cleaning</h4>
          <p>Professional sofa & couch cleaning.</p>
        </div>
        <div className="shadow p-6">
          <h4 className="font-bold mb-2">End of Lease Cleaning</h4>
          <p>Perfect cleaning for rental inspection.</p>
        </div>
      </div>
    </section>
  );
}