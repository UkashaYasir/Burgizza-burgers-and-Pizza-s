import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-extrabold tracking-tight">
        🍔 Burgizza 🍕
      </h1>
      <p className="text-lg text-muted-foreground">
        Burgers &amp; Pizza — Coming Soon
      </p>
    </div>
  );
}
