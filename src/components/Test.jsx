export default function TestColors() {
  return (
    <div className="p-10 space-y-8 bg-background text-foreground min-h-screen">
      
      <h1 className="text-3xl font-heading font-bold">
        Tailwind Color Test
      </h1>

      {/* PRIMARY */}
      <div className="space-y-3">
        <p className="text-primary text-xl">Primary Text</p>

        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md">
          Primary Button
        </button>
      </div>

      {/* SECONDARY */}
      <div className="space-y-3">
        <p className="text-secondary-foreground text-xl">
          Secondary Text
        </p>

        <div className="bg-secondary p-6 rounded-md">
          Secondary Background
        </div>
      </div>

      {/* ACCENT */}
      <div className="space-y-3">
        <p className="text-accent text-xl">
          Accent Text
        </p>

        <div className="bg-accent text-accent-foreground p-6 rounded-md">
          Accent Background
        </div>
      </div>

      {/* CARD */}
      <div className="border border-border p-6 rounded-lg bg-card text-card-foreground shadow-md">
        Card Example
      </div>

      {/* MUTED */}
      <div className="bg-muted text-muted-foreground p-6 rounded-lg">
        Muted Section
      </div>

      {/* DESTRUCTIVE */}
      <button className="bg-destructive text-destructive-foreground px-6 py-3 rounded-md">
        Delete Button
      </button>

    </div>
  );
}