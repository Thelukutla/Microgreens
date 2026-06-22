import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "GreenSprout Naturals | Fresh Microgreens & Powders",
    template: "%s | GreenSprout Naturals",
  },
  description:
    "GreenSprout Naturals offers premium fresh microgreens, powders, and subscription plans across India.",
  keywords: [
    "microgreens",
    "organic food",
    "nutrition",
    "wellness",
    "microgreens powder",
    "GreenSprout Naturals",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="min-h-full bg-white text-slate-900">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
