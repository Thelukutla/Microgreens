import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/data";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Shop</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">Fresh Microgreens & Powders</h1>
        </div>
        <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-700">{products.length} products</div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
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
                <p className="text-xl font-semibold text-slate-900">From ₹{product.price}</p>
                <Link href={`/products/${product.slug}`}>
                  <Button className="bg-slate-900 hover:bg-slate-800">View details</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
