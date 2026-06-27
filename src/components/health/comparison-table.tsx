import type { Microgreen } from "@/lib/health-data";

function ComparisonRow({
  label,
  left,
  right,
}: {
  label: string;
  left: string;
  right: string;
}) {
  return (
    <tr className="border-b border-slate-200/70 last:border-0">
      <th scope="row" className="w-40 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </th>
      <td className="px-4 py-3 text-sm text-slate-800">{left}</td>
      <td className="px-4 py-3 text-sm text-slate-800">{right}</td>
    </tr>
  );
}

export function ComparisonTable({
  left,
  right,
}: {
  left?: Microgreen;
  right?: Microgreen;
}) {
  if (!left || !right) {
    return (
      <div className="rounded-3xl border border-dashed border-emerald-300 bg-white/60 p-6 text-sm text-slate-600">
        Select two microgreens to compare nutrition profile, benefits, taste, and ideal daily quantity.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-3xl border border-emerald-100 bg-white/90 shadow-sm">
      <table className="min-w-full">
        <thead className="bg-slate-900 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-xs uppercase tracking-wide text-slate-300">Category</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">{left.name}</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">{right.name}</th>
          </tr>
        </thead>
        <tbody>
          <ComparisonRow label="Nutrition" left={left.scientificHighlights.join(", ")} right={right.scientificHighlights.join(", ")} />
          <ComparisonRow label="Benefits" left={left.healthBenefits.join(", ")} right={right.healthBenefits.join(", ")} />
          <ComparisonRow label="Taste" left={left.taste} right={right.taste} />
          <ComparisonRow label="Daily Quantity" left={left.recommendedDailyQuantity} right={right.recommendedDailyQuantity} />
          <ComparisonRow label="Best For" left={left.bestFor.join(", ")} right={right.bestFor.join(", ")} />
        </tbody>
      </table>
    </div>
  );
}
