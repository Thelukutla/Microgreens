import { HealthTag } from "@/components/health/health-tag";
import type { HealthFilter } from "@/lib/health-data";

export function FilterPanel({
  filters,
  activeFilters,
  onToggle,
  onClear,
}: {
  filters: HealthFilter[];
  activeFilters: HealthFilter[];
  onToggle: (filter: HealthFilter) => void;
  onClear: () => void;
}) {
  return (
    <div className="rounded-3xl border border-emerald-100 bg-white/75 p-4 shadow-sm backdrop-blur">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800">Filter by health goal</h3>
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800"
        >
          Clear
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <HealthTag
            key={filter}
            label={filter}
            active={activeFilters.includes(filter)}
            onClick={() => onToggle(filter)}
          />
        ))}
      </div>
    </div>
  );
}
