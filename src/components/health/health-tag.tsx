import { cn } from "@/lib/utils";

export function HealthTag({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
        active
          ? "border-emerald-500 bg-emerald-500 text-white"
          : "border-emerald-200 bg-white/60 text-emerald-700 hover:bg-emerald-50",
      )}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
