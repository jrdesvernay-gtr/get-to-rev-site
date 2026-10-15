import Link from "next/link";
import { Section, Card } from "../ui";
import { PRACTICES } from "@/lib/data";

export function Practices() {
  return (
    <Section>
      <h2 className="max-w-3xl text-[2rem] leading-tight md:text-5xl">
        What a fractional GTM engineer <span className="accent">builds.</span>
      </h2>
      <p className="mt-5 max-w-2xl text-lg text-ink-soft">
        A fractional GTM engineer builds and runs your go-to-market automation without a full-time hire. We offer three practices.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {PRACTICES.map((p) => (
          <Card key={p.title} className="flex flex-col">
            <h3 className="text-2xl">{p.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.body}</p>
            <Link href={p.href} className="mt-6 text-[0.95rem] font-medium text-red">{p.cta} →</Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
