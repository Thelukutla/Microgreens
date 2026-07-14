"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, HeartPulse, MoonStar, Sparkles, Sun, Utensils } from "lucide-react";
import { ComparisonTable } from "@/components/health/comparison-table";
import { ConsumptionCard } from "@/components/health/consumption-card";
import { FAQAccordion } from "@/components/health/faq-accordion";
import { FilterPanel } from "@/components/health/filter-panel";
import { MedicalDisclaimer } from "@/components/health/medical-disclaimer";
import { MicrogreenCard } from "@/components/health/microgreen-card";
import { SearchBar } from "@/components/health/search-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqItems, healthFilters, microgreens, type HealthFilter } from "@/lib/health-data";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Benefits", href: "#benefits" },
  { label: "Daily Intake", href: "#daily-intake" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
] as const;

const warningPoints = [
  "Mild stomach upset",
  "Gas",
  "Bloating",
  "Strong spicy taste in sensitive individuals",
  "Microgreens should complement normal vegetables, not replace them",
] as const;

const childIntake = [
  { title: "Toddlers (3-5 years)", amount: "5-10 grams/day", subtitle: "Start with tiny portions", tone: "amber" as const },
  { title: "Children (5-10 years)", amount: "10-15 grams/day", subtitle: "Mix with familiar meals", tone: "blue" as const },
  { title: "Teens (10-15 years)", amount: "15-20 grams/day", subtitle: "Great for active growth years", tone: "rose" as const },
  { title: "Adults", amount: "25-50 grams/day", subtitle: "Around 1/2 to 1 cup daily", tone: "green" as const },
] as const;

export function HealthBenefitsClient() {
  const reduceMotion = useReducedMotion();
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilters, setActiveFilters] = useState<HealthFilter[]>([]);
  const [leftId, setLeftId] = useState(microgreens[0]?.id ?? "");
  const [rightId, setRightId] = useState(microgreens[1]?.id ?? "");

  const filteredMicrogreens = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return microgreens.filter((item) => {
      const joinedText = [
        item.name,
        item.taste,
        ...item.healthBenefits,
        ...item.bestFor,
        ...item.diseaseSupport,
        ...item.scientificHighlights,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = !normalized || joinedText.includes(normalized);
      const matchesFilter =
        activeFilters.length === 0 || item.tags.some((tag) => activeFilters.includes(tag));

      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilters]);

  const leftSelection = useMemo(
    () => microgreens.find((item) => item.id === leftId),
    [leftId],
  );

  const rightSelection = useMemo(
    () => microgreens.find((item) => item.id === rightId),
    [rightId],
  );

  const toggleFilter = (filter: HealthFilter) => {
    setActiveFilters((current) =>
      current.includes(filter)
        ? current.filter((item) => item !== filter)
        : [...current, filter],
    );
  };

  return (
    <main
      className={cn(
        darkMode ? "dark" : "",
        "min-h-screen bg-[radial-gradient(circle_at_top,#e5ffea_0%,#f4fff7_25%,#ffffff_100%)] transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top,#1f3b2d_0%,#0f172a_30%,#020617_100%)]",
      )}
    >
      <div className="sticky top-0 z-40 border-b border-emerald-100/70 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <nav aria-label="Health benefits navigation" className="flex flex-wrap items-center gap-2 sm:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-emerald-100 hover:text-emerald-800 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode((current) => !current)}
            className="border border-emerald-200 dark:border-slate-700 dark:text-slate-100"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <section id="top" className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.4 }}
          className="rounded-[2rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-100/70 via-white/70 to-sky-100/70 p-7 shadow-xl shadow-emerald-900/10 backdrop-blur dark:border-slate-700 dark:from-emerald-950/40 dark:via-slate-900/80 dark:to-sky-950/30"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:bg-slate-800/80 dark:text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                Health Benefits and Daily Guide
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Health Benefits and Daily Consumption Guide
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
                Explore evidence-informed microgreens guidance with practical daily intake, condition-focused filters,
                and side-by-side comparison to build a balanced routine.
              </p>
            </div>
            <Card className="border-emerald-200 bg-white/70 dark:border-slate-700 dark:bg-slate-900/70">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                    <HeartPulse className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Evidence-focused nutrition at a glance</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-emerald-100 bg-white/80 p-3 dark:border-slate-700 dark:bg-slate-800/80">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{microgreens.length}</p>
                    <p className="text-slate-600 dark:text-slate-300">Microgreens covered</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-white/80 p-3 dark:border-slate-700 dark:bg-slate-800/80">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">25-50g</p>
                    <p className="text-slate-600 dark:text-slate-300">Adult daily range</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      <section id="daily-intake" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-emerald-200 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-xl shadow-emerald-800/20">
          <CardContent className="grid gap-7 p-7 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black">Recommended Daily Consumption</h2>
              <p className="mt-3 text-sm text-emerald-50">
                Adults (15+ years): 25-50 grams/day, approximately 1/2-1 cup, or 1-2 handfuls.
              </p>
              <div className="mt-4 rounded-2xl bg-white/15 p-4 text-sm leading-6 text-emerald-50 backdrop-blur">
                Microgreens are highly concentrated nutrient-rich vegetables. A small serving is enough to obtain
                significant vitamins, minerals and antioxidants.
              </div>
            </div>
            <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-50">Adults quick guide</p>
              <ul className="space-y-2 text-sm text-emerald-50">
                <li>- 25-50 grams/day</li>
                <li>- Approximately 1/2-1 cup</li>
                <li>- 1-2 handfuls</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {childIntake.map((entry) => (
            <ConsumptionCard
              key={entry.title}
              title={entry.title}
              amount={entry.amount}
              subtitle={entry.subtitle}
              tone={entry.tone}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">What Happens If You Eat Too Much?</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {warningPoints.map((point) => (
            <Card
              key={point}
              className="border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 dark:border-amber-900/50 dark:from-amber-950/30 dark:to-orange-950/20"
            >
              <CardContent className="flex items-start gap-3">
                <Utensils className="mt-0.5 h-4 w-4 text-amber-700 dark:text-amber-300" />
                <p className="text-sm text-amber-900 dark:text-amber-100">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-5">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Microgreens Benefits Grid</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Search instantly and filter by condition, health goal, taste preference, and support area.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          <SearchBar value={query} onChange={setQuery} />
          <FilterPanel
            filters={healthFilters}
            activeFilters={activeFilters}
            onToggle={toggleFilter}
            onClear={() => setActiveFilters([])}
          />
        </div>

        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          Showing {filteredMicrogreens.length} of {microgreens.length} microgreens
        </p>

        <AnimatePresence mode={reduceMotion ? "sync" : "popLayout"}>
          {filteredMicrogreens.length === 0 ? (
            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              className="mt-6 rounded-3xl border border-dashed border-emerald-300 bg-white/70 p-8 text-center text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300"
            >
              No matching microgreens found. Try a different keyword or clear filters.
            </motion.div>
          ) : (
            <motion.div layout={!reduceMotion} className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredMicrogreens.map((item) => (
                <MicrogreenCard key={item.id} item={item} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Compare Two Microgreens</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Select any two varieties and compare nutrition, benefits, taste, daily quantity, and best use case.
          </p>
        </div>

        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Microgreen A</span>
            <select
              value={leftId}
              onChange={(event) => setLeftId(event.target.value)}
              className="h-11 w-full rounded-xl border border-emerald-200 bg-white/85 px-3 text-sm outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white"
            >
              {microgreens.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Microgreen B</span>
            <select
              value={rightId}
              onChange={(event) => setRightId(event.target.value)}
              className="h-11 w-full rounded-xl border border-emerald-200 bg-white/85 px-3 text-sm outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white"
            >
              {microgreens.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <ComparisonTable left={leftSelection} right={rightSelection} />
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="mb-5 text-3xl font-black text-slate-900 dark:text-white">FAQ</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <MedicalDisclaimer />
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <Card className="border-emerald-200 bg-white/80 text-center dark:border-slate-700 dark:bg-slate-900/80">
          <CardContent>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Need personalized guidance?</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Talk with our team to build a weekly microgreens routine for your family, fitness, or health goals.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
