import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardContent>
            <h1 className="text-3xl font-semibold">Checkout</h1>
            <div className="mt-6 space-y-4">
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Full name" />
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Phone number" />
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Address" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="City" />
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Pincode" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold">Payment</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-2xl border p-3"><span>Razorpay</span><span>Secure</span></div>
              <div className="flex items-center justify-between rounded-2xl border p-3"><span>Cash on Delivery</span><span>Available</span></div>
            </div>
            <Button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700">Pay now</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
