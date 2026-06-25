import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold">Seven Hills Little Leaves</h3>
          <p className="mt-3 text-sm text-slate-400">Fresh microgreens, pure nutrition, delivered across India.</p>
        </div>
        <div>
          <h4 className="font-medium">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link href="/products">All Products</Link></li>
            <li><Link href="/subscriptions">Subscriptions</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/admin">Admin</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>support@sevenhillslittleleaves.in</li>
            <li>+91 98765 43210</li>
            <li>WhatsApp: +91 98765 43210</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
