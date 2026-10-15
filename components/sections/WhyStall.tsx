const REASONS = [
  {
    title: "You bought the tools and nobody can run them.",
    body: "Clay, a sequencer, a CRM. With no dedicated GTM engineer, or one already at capacity, the build backlog never moves.",
  },
  {
    title: "Agencies build tables, then disappear.",
    body: "A workflow handed over with no monitoring, no attribution and no owner stops being trusted.",
  },
  {
    title: "Rented pipeline leaves with the vendor.",
    body: "AI SDR platforms and black-box agencies keep the system. You keep the invoice.",
  },
];

export function WhyStall() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl md:text-4xl">
          Why most AI marketing stacks <span className="accent">stall</span>.
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">Most AI marketing stacks stall because nobody owns the build.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.title} className="rounded-card border border-line bg-white/60 p-6 shadow-soft">
              <h3 className="font-medium text-ink">{r.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
