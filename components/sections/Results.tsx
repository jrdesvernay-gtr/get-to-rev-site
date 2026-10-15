import { Section, Card } from "../ui";
import { STATS, MORE_STATS } from "@/lib/data";
import { LogoStrip } from "./LogoStrip";

export function Results() {
  return (
    <Section>
      <h2 className="max-w-3xl text-[2rem] leading-tight md:text-5xl">
        A 16-week healthtech outbound program reached 3,000 buyers across 1,800 companies, booked 21 meetings and produced <span className="accent">5 clients.</span>
      </h2>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <Card key={s.label}>
            <p className="text-5xl tracking-tight">{s.value}</p>
            <p className="mt-3 text-[0.95rem] text-ink-soft">{s.label}</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted">{s.note}</p>
          </Card>
        ))}
      </div>
      <ul className="mt-8 grid gap-x-10 gap-y-3 text-[0.95rem] text-ink-soft sm:grid-cols-2">
        {MORE_STATS.map(([v, l, n]) => (
          <li key={l} className="flex gap-3 border-t border-line pt-3">
            <span className="w-14 shrink-0 font-medium text-ink">{v}</span>
            <span>{l} <span className="text-muted">· {n}</span></span>
          </li>
        ))}
      </ul>
      <LogoStrip />
    </Section>
  );
}
