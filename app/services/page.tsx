import Link from "next/link";
import { meta, breadcrumbs } from "@/lib/seo";
import { PageHeader, Section, Card, JsonLd, Button } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { Plans } from "@/components/sections/Plans";
import { ClosingCta } from "@/components/sections/ClosingCta";

export const metadata = meta(
  "Fractional GTM Engineer Services for B2B SaaS | Get-To-Rev",
  "Three practices from one fractional GTM engineer: GTM engineering, AI marketing automation and growth engineering. Every engagement starts with an audit.",
  "/services/"
);

const TABLE = [
  ["GTM engineering", "Teams whose outbound depends on manual list-building and templates", "Outbound plan, $2,500 a month", "Healthtech case, Relay, Value-First audits"],
  ["AI marketing automation", "Teams with manual RevOps or content workflows, or invisible in AI answers", "Free audit, with an AI-search (GEO) review", "This site, tracked and published"],
  ["Growth engineering", "Teams running Meta, Google or LinkedIn with a thin creative and ops bench", "GTM + Growth Engineering plan, $7,500 a month", "Retargeting inside the healthtech case"],
];

const FAQ = [
  { q: "How is AEO different from SEO?", a: "SEO earns a ranking in search results. AEO earns a citation inside an AI-generated answer. Both reward structured, answer-first content, so most AEO work also helps SEO." },
];

export default function Services() {
  return (
    <>
      <PageHeader title="Three practices, one fractional GTM" accent="engineer." intro="Every engagement starts with an audit and ends with a system you own. Pick the practice that matches your backlog, or combine them." />
      <Section className="!pt-4">
        <div className="overflow-x-auto rounded-[var(--radius-card)] bg-white/70 shadow-soft">
          <table className="w-full min-w-[760px] text-left text-[0.95rem]">
            <thead><tr className="text-muted">{["Practice", "Best for", "First step", "Proof today"].map((h) => <th key={h} className="p-5 font-medium">{h}</th>)}</tr></thead>
            <tbody>
              {TABLE.map((r) => (
                <tr key={r[0]} className="border-t border-line align-top">
                  <th scope="row" className="p-5 font-medium">{r[0]}</th>
                  {r.slice(1).map((c) => <td key={c} className="p-5 text-ink-soft">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl">GTM engineering</h2>
            <p className="mt-3 text-ink-soft">A production multi-agent outbound system on the Claude API, built in your tech stack.</p>
            <Link href="/services/ai-outbound-engineering/" className="mt-5 inline-block font-medium text-red">Learn more →</Link>
          </Card>
          <Card>
            <h2 className="text-2xl">Growth engineering</h2>
            <p className="mt-3 text-ink-soft">The agent pattern applied to paid media on Meta, Google and LinkedIn. Flat fee, never a percentage of spend.</p>
            <Link href="/services/growth-engineering/" className="mt-5 inline-block font-medium text-red">Learn more →</Link>
          </Card>
        </div>
      </Section>
      <Section>
        <h2 className="text-[2rem] md:text-5xl">AI marketing <span className="accent">automation</span></h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
          AI marketing automation is the use of AI agents to run RevOps, content and search-visibility workflows end to end, so a small team operates at the scale of a larger one. It includes AI engine optimization (AEO or GEO): making your brand easy for AI answer engines to find, understand and cite.
        </p>
        <h3 className="mt-10 text-xl">What you get</h3>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            ["RevOps automation", "CRM workflows, lifecycle stages, lead routing and attribution reporting, built in your tech stack."],
            ["Content automation", "Briefs, drafts and repurposing run through agents and reviewed by a human before anything publishes."],
            ["AI search visibility", "A citation gap audit across ChatGPT, Perplexity, Claude and Gemini, an answer-first content plan with schema and an llms.txt file, and monthly tracking across 10+ AI engines."],
            ["Buyer detection", "AI referral traffic cross-referenced with company enrichment to surface in-market accounts."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-3xl bg-white/70 p-6 shadow-soft"><p className="font-medium">{t}</p><p className="mt-2 text-ink-soft">{d}</p></li>
          ))}
        </ul>
        <div className="mt-10"><Faq items={FAQ} /></div>
      </Section>
      <Plans />
      <ClosingCta />
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "Fractional GTM engineering", provider: { "@type": "Organization", name: "Get-To-Rev" }, areaServed: "US", serviceType: "AI marketing automation" }} />
    </>
  );
}
