import { createFileRoute, Link } from "@tanstack/react-router";
import { Train, Shield, Clock, Headphones, MapPin, Sparkles } from "lucide-react";
import { SearchCard } from "@/components/SearchCard";
import heroTrain from "@/assets/hero-train.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RailYatra — Book Indian Railways Tickets Online" },
      { name: "description", content: "Search trains, check PNR, live status, and book confirmed Indian Railways tickets in seconds." },
      { property: "og:title", content: "RailYatra — Book Indian Railways Tickets" },
      { property: "og:description", content: "Fast, secure railway booking inspired by IRCTC." },
    ],
  }),
  component: Home,
});

const popularRoutes = [
  { from: "New Delhi", to: "Mumbai", price: 755 },
  { from: "Bengaluru", to: "Delhi", price: 845 },
  { from: "Hyderabad", to: "Delhi", price: 810 },
  { from: "Sealdah", to: "Delhi", price: 720 },
  { from: "Delhi", to: "Bhopal", price: 0 },
  { from: "Kerala", to: "Delhi", price: 925 },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <img
          src={heroTrain}
          alt="Modern Indian express train at sunset"
          width={1920} height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-saffron" />
        <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-20 sm:px-6 md:pt-28">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-saffron" /> India's smartest railway booking
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Book Indian Railways<br />
              <span className="text-saffron">in seconds.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
              Search 13,000+ trains across 7,000 stations. Real-time seat availability, instant PNR, and a UI that doesn't make you want to cry.
            </p>
          </div>

          {/* Animated train strip */}
          <div className="pointer-events-none absolute inset-x-0 bottom-24 hidden h-12 overflow-hidden md:block">
            <div className="animate-train inline-flex w-max items-center text-saffron/80">
              <Train className="h-8 w-8 -scale-x-100" />
              <span className="mx-2 h-0.5 w-40 bg-saffron/40" />
              <Train className="h-8 w-8 -scale-x-100" />
            </div>
          </div>

          <div className="relative mt-10 md:-mb-24">
            <SearchCard />
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="mx-auto mt-32 max-w-7xl px-4 sm:px-6 md:mt-40">
        <SectionHeader eyebrow="Popular routes" title="Where India travels" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularRoutes.map((r) => (
            <Link
              key={`${r.from}-${r.to}`}
              to="/trains"
              search={{ from: r.from, to: r.to, date: new Date().toISOString().slice(0,10) } as any}
              className="group rounded-xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{r.from}</span>
                  <span className="text-muted-foreground">→</span>
                  <span>{r.to}</span>
                </div>
                <span className="text-xs font-semibold text-saffron">
                  {r.price > 0 ? `from ₹${r.price}` : "AC only"}
                </span>
              </div>
              <div className="mt-3 text-xs text-muted-foreground group-hover:text-primary">
                View trains →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Why RailYatra" title="Built for Indian travellers" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={<Clock className="h-5 w-5" />} title="Instant booking" desc="Confirmed tickets in under 60 seconds with Tatkal-ready flow." />
          <Feature icon={<Shield className="h-5 w-5" />} title="Bank-grade security" desc="Encrypted payments, OTP auth, zero compromise on safety." />
          <Feature icon={<Train className="h-5 w-5" />} title="Live train status" desc="Track your train station-by-station in real time." />
          <Feature icon={<Headphones className="h-5 w-5" />} title="24×7 support" desc="Talk to a human, in Hindi or English, any hour." />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-hero p-10 text-white shadow-glow md:p-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to ride?</h2>
            <p className="mt-3 text-white/85">
              Create your free account and book your first journey. No hidden fees, no agent surcharge.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/register" className="rounded-lg bg-saffron px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90">
                Create account
              </Link>
              <Link to="/trains" className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20">
                Browse trains
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-saffron">{eyebrow}</span>
      <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:border-primary/40">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">{icon}</div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
