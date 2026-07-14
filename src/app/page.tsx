'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { benefits, products, subscriptionPlans, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f7fff8_0%,#ffffff_30%,#f7fbf8_100%)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#d9fce5_0%,transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">Fresh Microgreens, Pure Nutrition</span>
            <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Grow your wellness with <span className="text-emerald-600">Seven Hills Microgreens</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Premium, farm-fresh microgreens and nutrient-dense powders crafted for health-conscious families, cafes, and fitness lovers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/products">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Shop Microgreens <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/subscriptions">
                <Button className="border border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50">
                  Explore Plans
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div>
                <p className="text-3xl font-semibold text-slate-900">10K+</p>
                <p className="text-sm text-slate-500">happy customers</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-slate-900">4.9/5</p>
                <p className="text-sm text-slate-500">average rating</p>
              </div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute -right-6 top-10 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl" />
            <Card className="overflow-hidden p-3">
              <Image src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1100&q=80" alt="Fresh microgreens" width={900} height={900} className="h-[560px] w-full rounded-2xl object-cover" />
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit}>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <p className="font-medium text-slate-800">{benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Featured Products</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Popular picks for everyday nutrition</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-emerald-700">View all</Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <Image src={product.image} alt={product.name} width={600} height={400} className="h-64 w-full object-cover" />
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-emerald-600">{product.category}</p>
                    <h3 className="mt-1 text-xl font-semibold">{product.name}</h3>
                  </div>
                  {product.badge && <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">{product.badge}</span>}
                </div>
                <p className="mt-3 text-sm text-slate-600">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-semibold text-slate-900">₹{product.price}</p>
                  <Link href={`/products/${product.slug}`}><Button className="bg-slate-900 hover:bg-slate-800">Buy now</Button></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl bg-slate-950 px-8 py-12 text-white lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Founder Spotlight</p>
            <h2 className="mt-3 text-3xl font-semibold">Duddela Poornima</h2>
            <p className="mt-4 text-slate-300">Founder of Seven Hills Microgreens, committed to bringing clean, nutrient-rich microgreens to homes and businesses across India.</p>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2">
            <Image
              src="/images/brand/founder.jpeg"
              alt="Founder Duddela Poornima"
              width={640}
              height={640}
              className="h-full w-full rounded-xl object-contain object-top"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <CardContent>
                <div className="flex items-center gap-1 text-emerald-500">
                  {Array.from({ length: 5 }).map((_, index) => (<Star key={index} className="h-4 w-4 fill-current" />))}
                </div>
                <p className="mt-4 text-slate-700">“{item.quote}”</p>
                <p className="mt-4 font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {subscriptionPlans.map((plan) => (
            <Card key={plan.name} className={plan.name === "Premium Health Plan" ? "border-emerald-500" : ""}>
              <CardContent>
                <p className="text-sm font-semibold text-emerald-600">{plan.name}</p>
                <p className="mt-2 text-4xl font-semibold">₹{plan.price}</p>
                <p className="mt-2 text-sm text-slate-500">per month</p>
                <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {plan.perks.map((perk) => (<li key={perk}>• {perk}</li>))}
                </ul>
                <Button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700">Subscribe now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

