export type Stat = { label: string; value: string };

export function CaseStudyStats({ intro, stats }: { intro?: string; stats: Stat[] }) {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16">
      <div className="container-x grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
        {intro && <p className="text-lg text-ink-soft">{intro}</p>}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-red/40 pl-4">
              <p className={`font-medium text-ink ${s.value.length > 12 ? "text-lg md:text-xl" : "text-3xl md:text-4xl"}`}>
                {s.value}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
