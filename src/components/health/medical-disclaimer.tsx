import { AlertTriangle } from "lucide-react";

export function MedicalDisclaimer() {
  return (
    <div className="rounded-3xl border border-amber-300 bg-amber-50/90 p-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-700" />
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-amber-900">Medical Disclaimer</h3>
          <p className="mt-2 text-sm leading-6 text-amber-900/90">
            The information provided is educational only and is not a substitute for professional medical advice.
            People with medical conditions, allergies, or those taking medications should consult a qualified
            healthcare professional before making significant dietary changes.
          </p>
        </div>
      </div>
    </div>
  );
}
