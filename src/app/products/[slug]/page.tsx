import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/data";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <Card className="overflow-hidden p-3">
          <Image src={product.image} alt={product.name} width={900} height={900} className="h-[520px] w-full rounded-2xl object-cover" />
        </Card>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">{product.category}</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">{product.name}</h1>
          <p className="mt-4 text-slate-600">{product.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <p className="text-3xl font-semibold text-slate-900">From ₹{product.price}</p>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700">{product.rating} ★</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {product.sizes.map((size) => (
              <Button key={size.label} variant="outline">{size.label} - ₹{size.price}</Button>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Add to cart</Button>
            <Button variant="outline">Add to wishlist</Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Card><CardContent><p className="text-sm text-slate-500">Benefits</p><p className="mt-2 font-semibold">{product.benefits[0]}</p></CardContent></Card>
            <Card><CardContent><p className="text-sm text-slate-500">Inventory</p><p className="mt-2 font-semibold">{product.inventory} units</p></CardContent></Card>
            <Card><CardContent><p className="text-sm text-slate-500">Reviews</p><p className="mt-2 font-semibold">{product.reviews} ratings</p></CardContent></Card>
          </div>
        </div>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold">Nutritional Highlights</h2>
            <ul className="mt-4 space-y-2 text-slate-600">{product.nutrition.map((item) => <li key={item}>• {item}</li>)}</ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold">How to use</h2>
            <ul className="mt-4 space-y-2 text-slate-600">{product.usage.map((item) => <li key={item}>• {item}</li>)}</ul>
          </CardContent>
        </Card>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-slate-900">Related products</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3).map((item) => (
            <Card key={item.slug} className="overflow-hidden">
              <Image src={item.image} alt={item.name} width={600} height={400} className="h-56 w-full object-cover" />
              <CardContent>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-slate-600">₹{item.price}</p>
                <Link href={`/products/${item.slug}`}><Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">View product</Button></Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
