import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Revenue", value: "₹2.4L" },
  { label: "Orders", value: "128" },
  { label: "Customers", value: "842" },
  { label: "Inventory", value: "96%" },
];

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Admin Dashboard</p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">Operations overview</h1>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent>
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Recent orders</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>ORD-1001 — ₹1,299 — Delivered</li>
              <li>ORD-1002 — ₹899 — Processing</li>
              <li>ORD-1003 — ₹2,499 — Paid</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Low stock alerts</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Broccoli Powder — 18 units left</li>
              <li>Mustard Microgreens — 22 units left</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
