export default function Test() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-10">

      <div className="grid gap-6 max-w-3xl">

        {/* Gradients */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-hero h-24 rounded-lg shadow-card flex items-center justify-center text-white">
            Hero
          </div>

          <div className="bg-section h-24 rounded-lg shadow-card flex items-center justify-center">
            Section
          </div>

          <div className="bg-cta h-24 rounded-lg shadow-card flex items-center justify-center text-primary-background/90">
            CTA
          </div>
        </div>

        {/* Colors */}
        <div className="grid grid-cols-3 gap-4">

          <div className="bg-foreground/90 text-primary-foreground p-10 rounded-lg shadow-card">
  Primary color box
</div>

          <div className="bg-secondary text-secondary-foreground p-6 rounded-lg shadow-card">
            Secondary
          </div>

          <div className="bg-accent text-accent-foreground p-6 rounded-lg shadow-card">
            Accent
          </div>

        </div>

        {/* Card */}
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-card hover:shadow-card-hover transition">
          Card Background
        </div>

        {/* Border / Input */}
        <div className="border border-border p-6 rounded-lg">
          <input
            className="border border-input rounded-md px-4 py-2 w-full"
            placeholder="Input test"
          />
        </div>

      </div>

    </div>
  );
}