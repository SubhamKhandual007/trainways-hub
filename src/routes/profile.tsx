import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { User } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — RailYatra" }] }),
  component: Profile,
});

function Profile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate({ to: "/login" }); return; }
      const { data } = await supabase.from("profiles").select("name,email,phone").eq("id", session.user.id).maybeSingle();
      setProfile({
        name: data?.name ?? "",
        email: data?.email ?? session.user.email ?? "",
        phone: data?.phone ?? "",
      });
      setLoading(false);
    })();
  }, [navigate]);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    const { error } = await supabase.from("profiles").update({
      name: profile.name, phone: profile.phone, updated_at: new Date().toISOString(),
    }).eq("id", session.user.id);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Profile updated");
  };

  if (loading) return <div className="mx-auto max-w-2xl px-4 py-16 text-center text-muted-foreground">Loading…</div>;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8 flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-glow">
          <User className="h-6 w-6" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">My Profile</h1>
          <p className="text-sm text-muted-foreground">Manage your RailYatra account</p>
        </div>
      </div>
      <form onSubmit={save} className="bg-glass space-y-4 rounded-2xl border border-border p-6 shadow-card">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="mt-1" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={profile.email} disabled className="mt-1 opacity-70" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} className="mt-1" />
          </div>
        </div>
        <Button type="submit" disabled={saving} className="bg-primary">{saving ? "Saving…" : "Save changes"}</Button>
      </form>

      <div className="mt-8 rounded-2xl border border-dashed border-border p-6 text-sm text-muted-foreground">
        Coming soon: booking history, upcoming journeys, wallet, and saved passengers.
        <div className="mt-3">
          <Link to="/trains" className="font-medium text-primary hover:underline">Book your first trip →</Link>
        </div>
      </div>
    </div>
  );
}
