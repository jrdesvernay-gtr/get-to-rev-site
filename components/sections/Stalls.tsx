import { Section } from "../ui";
import { STALLS } from "@/lib/data";

export function Stalls() {
  return (
    <Section tone="dark">
      <h2 className="max-w-3xl text-[2rem] leading-tight md:text-5xl">
        Why most AI marketing stacks stall: nobody owns the <span className="accent">build.</span>
      </h2>
      <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-white/10 md:grid-cols-3">
        {STALLS.map((s, i) => (
          <div key={s.title} className="bg-ink p-8">
            <p className="text-sm text-mist/40">0{i + 1}</p>
            <h3 className="mt-4 text-xl leading-snug">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-mist/70">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
