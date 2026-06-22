import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Blog</p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">Wellness insights, recipes, and nutrition guides</h1>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden">
            <Image src={post.image} alt={post.title} width={600} height={400} className="h-56 w-full object-cover" />
            <CardContent>
              <p className="text-sm text-emerald-600">{post.category}</p>
              <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-emerald-700">Read article</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
