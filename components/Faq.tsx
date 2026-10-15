import { JsonLd } from "./ui";

export function Faq({ items, withSchema = true }: { items: { q: string; a: string }[]; withSchema?: boolean }) {
  return (
    <>
    <div className="divide-y divide-line rounded-[var(--radius-card)] bg-white/70 shadow-soft">
      {items.map((f) => (
        <details key={f.q} className="group px-6 py-5 md:px-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium tracking-tight">
            {f.q}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full ring-1 ring-ink/15 transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }}
        />
      )}
    </>
  );
}
