export function FAQAccordion({
  items,
}: {
  items: ReadonlyArray<{ question: string; answer: string }>;
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-emerald-100 bg-white/80 p-4 shadow-sm"
        >
          <summary className="cursor-pointer list-none pr-8 text-sm font-semibold text-slate-900">
            {item.question}
          </summary>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
