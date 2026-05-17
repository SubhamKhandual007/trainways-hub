import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRightLeft, Calendar, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const POPULAR = ["New Delhi", "Mumbai Central", "Bhopal Junction", "KSR Bengaluru", "Sealdah", "H Nizamuddin", "Hyderabad Decan", "Thiruvananthapuram", "Yesvantpur Jn", "Rajendra Nagar"];

export function SearchCard() {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const swap = () => { setFrom(to); setTo(from); };

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/trains", search: { from, to, date } as any });
  };

  return (
    <form onSubmit={onSearch} className="bg-glass rounded-2xl border border-white/40 p-5 shadow-glow md:p-7">
      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_1fr_auto] md:items-end">
        <Field label="From" icon={<MapPin className="h-4 w-4" />} value={from} onChange={setFrom} list="stations" placeholder="Source station" />
        <button type="button" onClick={swap}
          className="hidden md:grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-primary hover:bg-accent transition">
          <ArrowRightLeft className="h-4 w-4" />
        </button>
        <Field label="To" icon={<MapPin className="h-4 w-4" />} value={to} onChange={setTo} list="stations" placeholder="Destination" />
        <Field label="Date" icon={<Calendar className="h-4 w-4" />} value={date} onChange={setDate} type="date" />
        <Button type="submit" size="lg" className="h-11 bg-saffron text-white hover:opacity-90 md:h-12 md:px-7">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
      <datalist id="stations">
        {POPULAR.map((s) => <option key={s} value={s} />)}
      </datalist>
    </form>
  );
}

function Field({ label, icon, value, onChange, type = "text", placeholder, list }: {
  label: string; icon: React.ReactNode; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; list?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="flex h-11 items-center gap-2 rounded-lg border border-input bg-background/80 px-3 focus-within:ring-2 focus-within:ring-ring">
        <span className="text-primary">{icon}</span>
        <input
          type={type} value={value} onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder} list={list} required
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
        />
      </span>
    </label>
  );
}
