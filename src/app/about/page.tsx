import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Our Story</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">A founder-led mission to bring fresh nutrition home</h1>
          <p className="mt-5 text-lg text-slate-600">Duddela Poornima founded Seven Hills Microgreens with a simple goal: make premium microgreens accessible for every Indian household, restaurant, and wellness enthusiast.</p>
        </div>
        <Card>
          <CardContent>
            <h3 className="text-2xl font-semibold">Founder</h3>
            <p className="mt-3 text-slate-600">Duddela Poornima believes food should be both delicious and deeply nourishing. Every harvest is carefully grown to preserve flavor, texture, and nutrients.</p>
            <Image
              src="/images/brand/founder.jpeg"
              alt="Founder Duddela Poornima"
              width={640}
              height={640}
              className="mt-6 w-full rounded-2xl border border-slate-200 bg-slate-50 p-2 object-contain"
            />
          </CardContent>
        </Card>
      </section>
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <Card><CardContent><h3 className="text-xl font-semibold">Mission</h3><p className="mt-3 text-slate-600">Deliver clean, fresh, nutrient-rich greens with transparency and trust.</p></CardContent></Card>
        <Card><CardContent><h3 className="text-xl font-semibold">Vision</h3><p className="mt-3 text-slate-600">Build a healthier future through sustainable, locally grown superfoods.</p></CardContent></Card>
        <Card><CardContent><h3 className="text-xl font-semibold">Values</h3><p className="mt-3 text-slate-600">Purity, sustainability, innovation, and customer wellness.</p></CardContent></Card>
      </section>
    </main>
  );
}
