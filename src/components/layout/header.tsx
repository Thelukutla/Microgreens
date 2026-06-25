import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/brand/logo.jpeg"
            alt="Seven Hills Little Leaves logo"
            width={240}
            height={120}
            className="h-11 w-auto max-w-[130px] object-contain sm:h-12 sm:max-w-[150px]"
          />
          <div>
            <p className="text-lg font-semibold text-slate-900">Seven Hills Little Leaves</p>
            <p className="text-xs text-slate-500">Fresh Microgreens</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/about" className="text-sm text-slate-600 hover:text-emerald-700">About</Link>
          <Link href="/products" className="text-sm text-slate-600 hover:text-emerald-700">Products</Link>
          <Link href="/blog" className="text-sm text-slate-600 hover:text-emerald-700">Blog</Link>
          <Link href="/contact" className="text-sm text-slate-600 hover:text-emerald-700">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <User className="h-4 w-4" />
          </Button>
          <Link href="/cart">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ShoppingBag className="mr-2 h-4 w-4" /> Cart
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
