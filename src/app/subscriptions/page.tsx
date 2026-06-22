import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { subscriptionPlans } from "@/lib/data";

export default function SubscriptionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Subscriptions</p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">Choose the plan that fits your routine</h1>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {subscriptionPlans.map((plan) => (
          <Card key={plan.name} className={plan.name === "Premium Health Plan" ? "border-emerald-500" : ""}>
            <CardContent>
              <p className="text-sm font-semibold text-emerald-600">{plan.name}</p>
              <p className="mt-2 text-4xl font-semibold">₹{plan.price}</p>
              <p className="mt-2 text-sm text-slate-500">per month</p>
              <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">{plan.perks.map((perk) => <li key={perk}>• {perk}</li>)}</ul>
              <Button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
