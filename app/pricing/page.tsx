import { meta, breadcrumbs } from "@/lib/seo";
import { PageHeader, Section, JsonLd } from "@/components/ui";
import { Plans } from "@/components/sections/Plans";
import { ClosingCta } from "@/components/sections/ClosingCta";

export const metadata = meta("Pricing | Get-To-Rev", "Three plans from $2,500 a month on a 6-month term. A fractional GTM engineer, backed by a small team, for the price of one hire.", "/pricing/");

export default function Page() {
  return (
    <>
      <PageHeader title="What engagements" accent="cost." intro="A fractional GTM engineer, backed by a small team, for the price of one hire: multi-agent outbound, growth engineering and AI marketing automation. We do not take engagements below $2,500 a month." />
      <Plans full />
      <Section className="!pt-0">
        <h2 className="text-3xl">What is not included</h2>
        <ul className="mt-5 max-w-2xl list-disc space-y-2 pl-5 text-ink-soft">
          <li>Ad spend, paid directly to the platforms and never a percentage of our fee.</li>
          <li>Tool costs (domains, mailboxes, software), which belong to you because everything runs in your tech stack.</li>
          <li>Sending infrastructure, passed through at cost.</li>
        </ul>
        <p className="mt-6 max-w-2xl text-ink-soft">Every engagement starts with a free audit, and every plan runs on a 6-month term.</p>
      </Section>
      <ClosingCta />
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing/" }])} />
    </>
  );
}
