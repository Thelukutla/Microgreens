import { Card, CardContent } from "@/components/ui/card";

export function ConsumptionCard({
  title,
  amount,
  subtitle,
  tone,
}: {
  title: string;
  amount: string;
  subtitle?: string;
  tone: "green" | "blue" | "amber" | "rose";
}) {
  const toneStyles = {
    green: "from-emerald-500/20 to-lime-400/20 border-emerald-200",
    blue: "from-sky-500/20 to-cyan-400/20 border-sky-200",
    amber: "from-amber-500/20 to-orange-400/20 border-amber-200",
    rose: "from-rose-500/20 to-pink-400/20 border-rose-200",
  };

  return (
    <Card className={`border bg-gradient-to-br ${toneStyles[tone]}`}>
      <CardContent className="space-y-2">
        <p className="text-sm font-semibold text-slate-700">{title}</p>
        <p className="text-2xl font-bold text-slate-900">{amount}</p>
        {subtitle ? <p className="text-xs text-slate-600">{subtitle}</p> : null}
      </CardContent>
    </Card>
  );
}
