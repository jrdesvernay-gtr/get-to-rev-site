import Link from "next/link";
import { meta, breadcrumbs } from "@/lib/seo";
import { getEntries } from "@/lib/content";
import { PageHeader, Section, JsonLd } from "@/components/ui";
import { ClosingCta } from "@/components/sections/ClosingCta";

export const metadata = meta("Case Studies | Get-To-Rev", "Results from fractional GTM engineering: 21 meetings in 16 weeks for a healthtech platform, plus consumer-side growth cases.", "/case-studies/");

export default function Page() {
  const items = getEntries("case-studies").sort((a, b) => Number(!!a.data.legacy) - Number(!!b.data.legacy));
  return (
    <>
      <PageHeader title="Results from the" accent="work." intro="Every case study uses the same structure: summary, challenge, approach, stack, results, lessons." />
      <Section className="!pt-4">
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((c, i) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}/`} className={`group rounded-[var(--radius-card)] bg-white/70 p-8 shadow-soft transition hover:-translate-y-1 ${i === 0 ? "md:col-span-2" : ""}`}>
              <p className="text-xs uppercase tracking-widest text-muted">{c.data.industry}</p>
              <h2 className="mt-3 text-2xl md:text-3xl">{c.data.client}</h2>
              <p className="mt-3 max-w-2xl text-ink-soft">{c.data.oneLineResult}</p>
              <p className="mt-5 font-medium text-red">Read the case study →</p>
            </Link>
          ))}
        </div>
      </Section>
      <ClosingCta />
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Case studies", path: "/case-studies/" }])} />
    </>
  );
}
