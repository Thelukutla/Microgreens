"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/data";

const initialCartItems = [
  {
    product: products[0],
    quantity: 2,
    selectedSize: "100g",
  },
  {
    product: products[4],
    quantity: 1,
    selectedSize: "50g",
  },
];

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState(initialCartItems);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const shipping = subtotal > 999 ? 0 : 49;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + gst;

  const updateQuantity = (slug: string, delta: number) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.product.slug === slug
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (slug: string) => {
    setCartItems((current) => current.filter((item) => item.product.slug !== slug));
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Your cart</h1>
          <div className="mt-6 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.product.slug} className="overflow-hidden">
                <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Image src={item.product.image} alt={item.product.name} width={180} height={180} className="h-28 w-full rounded-2xl object-cover sm:w-28" />
                  <div className="flex-1">
                    <p className="text-sm text-emerald-600">{item.product.category}</p>
                    <h2 className="mt-1 text-lg font-semibold">{item.product.name}</h2>
                    <p className="mt-1 text-sm text-slate-500">Size: {item.selectedSize}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.product.slug, -1)}
                      aria-label={`Decrease quantity for ${item.product.name}`}
                    >
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.product.slug, 1)}
                      aria-label={`Increase quantity for ${item.product.name}`}
                    >
                      +
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-base font-semibold">₹{item.product.price * item.quantity}</p>
                    <Button
                      variant="ghost"
                      className="text-sm text-rose-600"
                      onClick={() => removeItem(item.product.slug)}
                    >
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold">Order Summary</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : `₹${shipping}`}</span></div>
              <div className="flex justify-between"><span>GST</span><span>₹{gst}</span></div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t pt-4 text-base font-semibold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <input className="mt-6 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Coupon code" />
            <Button
              className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700"
              onClick={() => router.push("/checkout")}
            >
              Proceed to checkout
            </Button>
            <Link href="/products" className="mt-3 block text-center text-sm font-medium text-emerald-700">
              Continue shopping
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
