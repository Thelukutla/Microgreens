import type { Metadata } from "next";
import { HealthBenefitsClient } from "@/app/health-benefits/health-benefits-client";

export const metadata: Metadata = {
  title: "Health Benefits and Daily Consumption Guide",
  description:
    "Comprehensive microgreens health guide with daily intake recommendations, benefit filters, comparison tools, and FAQ.",
  keywords: [
    "microgreens health benefits",
    "daily microgreens intake",
    "broccoli microgreens",
    "diabetes nutrition",
    "heart healthy vegetables",
  ],
};

export default function HealthBenefitsPage() {
  return <HealthBenefitsClient />;
}
