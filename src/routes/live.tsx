import { createFileRoute } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export const Route = createFileRoute("/live")({
  head: () => ({ meta: [{ title: "Live Train Status — RailYatra" }] }),
  component: Live,
});

function Live() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Activity className="h-6 w-6 animate-pulse" />
      </div>
      <h1 className="mt-4 font-display text-3xl font-bold">Live Train Status</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Real-time tracking with realtime updates lands in the next milestone.
      </p>
    </div>
  );
}
