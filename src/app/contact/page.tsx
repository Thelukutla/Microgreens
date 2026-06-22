import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Contact</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">Let’s grow something healthy together</h1>
          <p className="mt-5 text-slate-600">Reach out for bulk orders, subscriptions, partnerships, or custom nutrition support.</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>Email: support@greensprout.in</li>
            <li>WhatsApp: +91 98765 43210</li>
            <li>Location: India</li>
          </ul>
        </div>
        <Card>
          <CardContent>
            <form className="space-y-4">
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Your name" />
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Email address" />
              <textarea className="min-h-40 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="How can we help?" />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
