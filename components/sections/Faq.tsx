export type FaqItem = { q: string; a: string };

export function Faq({ heading = "FAQ", items }: { heading?: string; items: FaqItem[] }) {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container-x">
        <h2 className="text-3xl md:text-4xl">
          <span className="accent">{heading}</span>
        </h2>
        <dl className="mt-8 divide-y divide-line">
          {items.map((item) => (
            <div key={item.q} className="py-6">
              <dt className="text-lg font-medium text-ink">{item.q}</dt>
              <dd className="mt-2 text-ink-soft">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
