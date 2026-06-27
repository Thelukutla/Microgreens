import { Search } from "lucide-react";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (next: string) => void;
}) {
  return (
    <label className="relative block">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <span className="sr-only">Search microgreens</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by name, benefit, disease support, or taste..."
        className="h-12 w-full rounded-full border border-emerald-200 bg-white/80 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
      />
    </label>
  );
}
