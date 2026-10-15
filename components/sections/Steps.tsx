import { Section } from "../ui";
import { STEPS } from "@/lib/data";

export function Steps({ tone = "plain" }: { tone?: "plain" | "dark" }) {
  return (
    <Section tone={tone}>
      <h2 className="max-w-3xl text-[2rem] leading-tight md:text-5xl">
        Audit, build, <span className="accent">run.</span>
      </h2>
      <p className={`mt-5 max-w-2xl text-lg ${tone === "dark" ? "text-mist/70" : "text-ink-soft"}`}>
        Every engagement runs in three steps, and each ends in something you keep.
      </p>
      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {STEPS.map((s) => (
          <li key={s.n} className="border-t border-current/20 pt-6">
            <p className="text-sm text-red">{s.n}</p>
            <h3 className="mt-3 text-3xl">{s.title}</h3>
            <p className={`mt-3 leading-relaxed ${tone === "dark" ? "text-mist/70" : "text-ink-soft"}`}>{s.body}</p>
            <p className="mt-4 font-medium">You get: <span className="font-normal opacity-80">{s.get}</span></p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
