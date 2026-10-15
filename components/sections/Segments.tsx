import Link from "next/link";
import { Section, Card } from "../ui";
import { SEGMENTS } from "@/lib/data";

export function Segments() {
  return (
    <Section>
      <h2 className="max-w-3xl text-[2rem] leading-tight md:text-5xl">
        Who we <span className="accent">build</span> for
      </h2>
      <p className="mt-5 max-w-2xl text-lg text-ink-soft">
        We build for SaaS companies in healthtech, martech, wellness and edtech, and for media agencies and publishers.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SEGMENTS.map((s) => (
          <Card key={s.slug} className="flex flex-col">
            <h3 className="text-xl">{s.name}</h3>
            <p className="mt-4 text-sm font-medium uppercase tracking-widest text-muted">They struggle with</p>
            <p className="mt-1 text-ink-soft">{s.struggle}</p>
            <p className="mt-4 text-sm font-medium uppercase tracking-widest text-muted">We build</p>
            <p className="mt-1 flex-1 text-ink-soft">{s.build}</p>
            <Link href={`/for/${s.slug}/`} className="mt-5 text-[0.95rem] font-medium text-red">See how we work with {s.name.toLowerCase()} →</Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
