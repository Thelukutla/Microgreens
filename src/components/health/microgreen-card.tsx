"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BenefitBadge } from "@/components/health/benefit-badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Microgreen } from "@/lib/health-data";

function getUsageIcon(usage: string) {
  const normalized = usage.toLowerCase();

  if (normalized.includes("salad") || normalized.includes("bowl")) {
    return { symbol: "🥗", label: "Salad bowl" };
  }

  if (
    normalized.includes("sandwich") ||
    normalized.includes("wrap") ||
    normalized.includes("burger") ||
    normalized.includes("taco") ||
    normalized.includes("bruschetta") ||
    normalized.includes("chapati") ||
    normalized.includes("bread")
  ) {
    return { symbol: "🥪", label: "Sandwich and wraps" };
  }

  if (
    normalized.includes("smoothie") ||
    normalized.includes("yogurt") ||
    normalized.includes("juice")
  ) {
    return { symbol: "🥤", label: "Drink or bowl" };
  }

  if (
    normalized.includes("soup") ||
    normalized.includes("dal") ||
    normalized.includes("curry") ||
    normalized.includes("raita")
  ) {
    return { symbol: "🍲", label: "Soup and curry" };
  }

  if (normalized.includes("pizza")) {
    return { symbol: "🍕", label: "Pizza" };
  }

  if (
    normalized.includes("pasta") ||
    normalized.includes("noodle") ||
    normalized.includes("pesto")
  ) {
    return { symbol: "🍝", label: "Pasta and noodles" };
  }

  if (
    normalized.includes("omelette") ||
    normalized.includes("scrambled") ||
    normalized.includes("egg")
  ) {
    return { symbol: "🍳", label: "Egg dish" };
  }

  if (
    normalized.includes("sushi") ||
    normalized.includes("dumpling") ||
    normalized.includes("spring roll")
  ) {
    return { symbol: "🍣", label: "Asian bites" };
  }

  if (normalized.includes("rice")) {
    return { symbol: "🍚", label: "Rice dish" };
  }

  if (normalized.includes("toast")) {
    return { symbol: "🍞", label: "Toast" };
  }

  if (normalized.includes("stir-fr") || normalized.includes("fried")) {
    return { symbol: "🍛", label: "Stir-fry" };
  }

  return { symbol: "🍽️", label: "Meal" };
}

export function MicrogreenCard({ item }: { item: Microgreen }) {
  const reduceMotion = useReducedMotion();

  const fallbackImage = useMemo(() => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900' viewBox='0 0 1600 900'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='#d1fae5'/><stop offset='100%' stop-color='#a7f3d0'/></linearGradient></defs><rect width='1600' height='900' fill='url(#g)'/><text x='50%' y='45%' dominant-baseline='middle' text-anchor='middle' font-family='Georgia, serif' font-size='58' fill='#065f46'>${item.name}</text><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='30' fill='#047857'>Image currently unavailable</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }, [item.name]);

  const [imageSrc, setImageSrc] = useState(item.image);

  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.35 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-emerald-200 bg-white/85 shadow-lg shadow-emerald-900/5 dark:border-emerald-900/60 dark:bg-slate-900/70">
        <div className="group relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={item.imageAlt}
            width={1600}
            height={900}
            loading="lazy"
            onError={() => setImageSrc(fallbackImage)}
            className="h-60 w-full rounded-none object-cover transition duration-500 motion-reduce:transition-none group-hover:scale-105 motion-reduce:group-hover:scale-100 sm:h-72"
          />
        </div>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{item.name}</h3>
            {item.keyCompound ? (
              <p className="text-sm text-emerald-700 dark:text-emerald-300">
                Key compound: <span className="font-semibold">{item.keyCompound}</span>
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <BenefitBadge key={tag} text={tag} className="bg-emerald-50 text-emerald-700 dark:border-emerald-700/40 dark:bg-emerald-950/60 dark:text-emerald-200" />
            ))}
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">Scientific Highlights</p>
            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
              {item.scientificHighlights.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">Health Benefits</p>
            <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
              {item.healthBenefits.map((benefit) => (
                <li key={benefit}>- {benefit}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">How to Use</p>
            <ul className="flex flex-wrap gap-2" aria-label={`How to use ${item.name}`}>
              {item.howToUse.map((usage) => {
                const icon = getUsageIcon(usage);

                return (
                  <li key={usage}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1.5 text-xs font-medium text-emerald-900 dark:border-emerald-700/50 dark:bg-emerald-950/40 dark:text-emerald-100">
                      <span role="img" aria-label={icon.label} className="leading-none">
                        {icon.symbol}
                      </span>
                      {usage}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-3 text-sm dark:border-slate-700 dark:bg-slate-800/70">
            <p className="text-slate-700 dark:text-slate-200">
              <span className="font-semibold">Best For:</span> {item.bestFor.join(", ")}
            </p>
            <p className="text-slate-700 dark:text-slate-200">
              <span className="font-semibold">Taste:</span> {item.taste}
            </p>
            <p className="text-slate-700 dark:text-slate-200">
              <span className="font-semibold">Recommended Daily Quantity:</span> {item.recommendedDailyQuantity}
            </p>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Image: {item.attribution.source} photo by{" "}
            <Link
              href={item.attribution.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-300"
            >
              {item.attribution.photographer}
            </Link>{" "}
            ({" "}
            <Link
              href={item.attribution.imageUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-300"
            >
              source
            </Link>
            ).
          </p>
        </CardContent>
      </Card>
    </motion.article>
  );
}
