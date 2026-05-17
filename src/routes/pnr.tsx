import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Route = createFileRoute("/pnr")({
  head: () => ({ meta: [{ title: "PNR Status — RailYatra" }] }),
  component: Pnr,
});

function Pnr() {
  const [pnr, setPnr] = useState("");
  const check = (e: React.FormEvent) => {
    e.preventDefault();
    if (pnr.length !== 10) return toast.error("Enter a valid 10-digit PNR");
    toast.info("Booking module is coming next — PNR lookup will activate then.");
  };
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold">PNR Status</h1>
      <p className="mt-2 text-sm text-muted-foreground">Track your booking with your 10-digit PNR.</p>
      <form onSubmit={check} className="bg-glass mt-6 flex gap-3 rounded-2xl border border-border p-4 shadow-card">
        <Input value={pnr} onChange={(e) => setPnr(e.target.value.replace(/\D/g, "").slice(0,10))}
          placeholder="e.g. 8412345678" inputMode="numeric" />
        <Button className="bg-primary"><Search className="mr-1 h-4 w-4" /> Check</Button>
      </form>
    </div>
  );
}
