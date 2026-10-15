import { Section, Button } from "../ui";
import { PLANS } from "@/lib/data";

export function Plans({ full = false }: { full?: boolean }) {
  return (
    <Section>
      <h2 className="max-w-3xl text-[2rem] leading-tight md:text-5xl">
        Three plans, from <span className="accent">$2,500</span> a month
      </h2>
      <p className="mt-5 max-w-2xl text-lg text-ink-soft">
        There are three monthly plans: Outbound, GTM Engineering, and GTM + Growth Engineering. We do not take engagements below $2,500 a month, and every plan runs on a 6-month term. Every engagement starts with a free audit.
      </p>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.name} className={`flex flex-col rounded-[var(--radius-card)] p-8 shadow-soft ${p.featured ? "bg-ink text-mist" : "bg-white/70"}`}>
            <h3 className="text-xl">{p.name}</h3>
            <p className="mt-5 text-5xl tracking-tight">{p.price}<span className="text-base font-normal opacity-60"> / month</span></p>
            <p className="mt-1 text-sm opacity-60">6-month term</p>
            <p className={`mt-5 leading-relaxed ${p.featured ? "text-mist/80" : "text-ink-soft"}`}>{p.blurb}</p>
            {full && (
              <ul className={`mt-6 flex-1 space-y-2.5 text-[0.95rem] ${p.featured ? "text-mist/80" : "text-ink-soft"}`}>
                {p.includes.map((i) => <li key={i} className="flex gap-3"><span className="text-red">✓</span><span>{i}</span></li>)}
              </ul>
            )}
            {full && <p className="mt-5 text-sm opacity-60">{p.excludes}</p>}
            {!full && <div className="flex-1" />}
            <div className="mt-8"><Button variant={p.featured ? "primary" : "ghost"}>Book a call</Button></div>
          </div>
        ))}
      </div>
      {!full && <p className="mt-6"><a href="/pricing/" className="font-medium text-red">See full pricing →</a></p>}
    </Section>
  );
}
