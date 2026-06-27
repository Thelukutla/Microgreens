import { cn } from "@/lib/utils";

export function BenefitBadge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur",
        className,
      )}
    >
      {text}
    </span>
  );
}
