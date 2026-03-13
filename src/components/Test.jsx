export default function TestBackground() {
  return (
    <div className="min-h-screen bg-background text-foreground p-10 space-y-6">
      
       <div className="bg-primary text-primary-foreground p-6 rounded-lg">
        This text should be WHITE on a blue background
      </div>

      <div className="bg-card text-card-foreground p-6 rounded-md border border-border">
        Card Background
      </div>

      <div className="bg-primary text-primary-foreground p-6 rounded-md">
        Primary Section
      </div>

      <p className="text-muted-foreground">
        Muted foreground text example
      </p>

    </div>
  );
}