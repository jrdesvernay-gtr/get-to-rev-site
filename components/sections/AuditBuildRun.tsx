const STEPS = [
  {
    name: "Audit",
    body: "A fixed-scope review of your funnel, data and stack. You get: a prioritized build plan, yours whether or not we continue. The audit is free: we show value before we pitch.",
  },
  {
    name: "Build",
    body: "We build in your tech stack, alongside your team, and document as we go. First campaigns start after a 2-3 week domain warmup; target: first system in production in month 2. You get: a working system live in your stack, with its documentation.",
  },
  {
    name: "Run",
    body: "We operate and improve the system. You get: weekly reporting that ties spend to pipeline, and a quarterly review of what was spent against what came back.",
  },
];

export function AuditBuildRun() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl md:text-4xl">
          Audit, <span className="accent">build</span>, run.
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Every engagement runs in three steps, and each ends in something you keep.
        </p>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.name} className="rounded-card border border-line bg-white/60 p-6 shadow-soft">
              <span className="text-sm font-medium text-red">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-medium text-ink">{s.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
