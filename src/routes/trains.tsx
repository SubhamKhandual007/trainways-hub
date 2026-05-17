import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SearchCard } from "@/components/SearchCard";
import { ArrowRight, Clock, Train as TrainIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Tables } from "@/integrations/supabase/types";

type Train = Tables<"trains">;

type SearchParams = { from?: string; to?: string; date?: string; coach?: string; sort?: string };

export const Route = createFileRoute("/trains")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    from: (s.from as string) || "",
    to: (s.to as string) || "",
    date: (s.date as string) || new Date().toISOString().slice(0, 10),
    coach: (s.coach as string) || "ALL",
    sort: (s.sort as string) || "departure",
  }),
  head: () => ({ meta: [{ title: "Search Trains — RailYatra" }, { name: "description", content: "Find trains between any two stations with live availability and fares." }] }),
  component: SearchPage,
});

function SearchPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [trains, setTrains] = useState<Train[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let query = supabase.from("trains").select("*").limit(100);
      if (search.from) query = query.ilike("source", `%${search.from}%`);
      if (search.to) query = query.ilike("destination", `%${search.to}%`);
      const { data } = await query;
      setTrains(data ?? []);
      setLoading(false);
    })();
  }, [search.from, search.to]);

  const filtered = useMemo(() => {
    let list = [...trains];
    if (search.coach && search.coach !== "ALL") {
      list = list.filter((t) => t.coach_types.includes(search.coach!));
    }
    if (search.sort === "price")
      list.sort((a, b) => (a.price_sleeper || a.price_ac3) - (b.price_sleeper || b.price_ac3));
    else if (search.sort === "duration")
      list.sort((a, b) => a.duration.localeCompare(b.duration));
    else
      list.sort((a, b) => a.departure_time.localeCompare(b.departure_time));
    return list;
  }, [trains, search.coach, search.sort]);

  const setParam = (k: keyof SearchParams, v: string) =>
    navigate({ search: { ...search, [k]: v } as any });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-6">
        <h1 className="font-display text-3xl font-bold">Search trains</h1>
        <p className="text-sm text-muted-foreground">
          Showing trains {search.from && `from ${search.from}`} {search.to && `to ${search.to}`} on {search.date}
        </p>
      </div>

      <SearchCard />

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {["ALL", "SL", "3A", "2A", "1A"].map((c) => (
            <button key={c} onClick={() => setParam("coach", c)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                search.coach === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/40"
              }`}>
              {c === "ALL" ? "All classes" : c === "SL" ? "Sleeper" : c === "3A" ? "AC 3-Tier" : c === "2A" ? "AC 2-Tier" : "AC 1st"}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted-foreground">Sort by</span>
          <select value={search.sort} onChange={(e) => setParam("sort", e.target.value)}
            className="rounded-md border border-border bg-card px-2 py-1.5 text-xs font-medium">
            <option value="departure">Departure time</option>
            <option value="price">Price (low to high)</option>
            <option value="duration">Duration</option>
          </select>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {loading && <SkeletonList />}
        {!loading && filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <TrainIcon className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="mt-4 font-medium">No trains found</p>
            <p className="text-sm text-muted-foreground">Try different stations or remove filters.</p>
          </div>
        )}
        {!loading && filtered.map((t) => <TrainCard key={t.id} t={t} />)}
      </div>
    </div>
  );
}

function TrainCard({ t }: { t: Train }) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-5 shadow-card transition hover:border-primary/40 hover:shadow-glow md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-foreground">{t.train_name}</span>
            <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">#{t.train_number}</span>
          </div>
          <div className="mt-1 flex flex-wrap gap-1 text-xs">
            {t.coach_types.map((c) => (
              <span key={c} className="rounded bg-accent px-1.5 py-0.5 text-accent-foreground">{c}</span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Available</div>
          <div className="font-display text-xl font-bold text-success">{t.available_seats}</div>
        </div>
      </div>

      <div className="mt-5 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
        <Stop time={t.departure_time} station={t.source} />
        <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{t.duration}</span>
          <div className="flex items-center text-primary">
            <div className="h-px w-12 bg-primary/40" />
            <ArrowRight className="mx-1 h-4 w-4" />
            <div className="h-px w-12 bg-primary/40" />
          </div>
        </div>
        <Stop time={t.arrival_time} station={t.destination} align="right" />
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <div className="flex gap-4 text-sm">
          {t.price_sleeper > 0 && <Fare label="SL" amount={t.price_sleeper} />}
          <Fare label="3A" amount={t.price_ac3} />
          <Fare label="2A" amount={t.price_ac2} />
        </div>
        <Button className="bg-saffron text-white hover:opacity-90">Book now</Button>
      </div>
    </div>
  );
}

function Stop({ time, station, align = "left" }: { time: string; station: string; align?: "left" | "right" }) {
  return (
    <div className={align === "right" ? "text-right" : ""}>
      <div className="font-display text-2xl font-bold tabular-nums">{time}</div>
      <div className="text-sm text-muted-foreground">{station}</div>
    </div>
  );
}

function Fare({ label, amount }: { label: string; amount: number }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="font-display font-bold">₹{amount}</div>
    </div>
  );
}

function SkeletonList() {
  return (
    <>
      {[1,2,3].map((i) => (
        <div key={i} className="h-44 animate-pulse rounded-2xl border border-border bg-card" />
      ))}
    </>
  );
}
