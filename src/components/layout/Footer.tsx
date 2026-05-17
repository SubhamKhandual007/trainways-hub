import { Link } from "@tanstack/react-router";
import { Train } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Train className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold text-primary">RailYatra</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Book Indian Railways tickets fast. Track trains, manage PNRs, travel comfortably.
          </p>
        </div>
        <FooterCol title="Book" links={[["Search Trains","/trains"],["PNR Status","/pnr"],["Live Status","/live"]]} />
        <FooterCol title="Account" links={[["Login","/login"],["Register","/register"],["Profile","/profile"]]} />
        <FooterCol title="Support" links={[["Help Centre","/"],["Refund Policy","/"],["Contact","/"]]} />
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RailYatra. Inspired by IRCTC. For demo purposes only.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="hover:text-primary transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
