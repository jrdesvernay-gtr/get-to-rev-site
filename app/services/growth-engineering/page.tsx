import { meta, breadcrumbs } from "@/lib/seo";
import { PageHeader, Section, JsonLd, Card } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";

export const metadata = meta(
  "Growth Engineering for B2B SaaS | Get-To-Rev",
  "Agents and ad-platform connectors that build creative, launch campaigns and report on Meta, Google and LinkedIn. Flat fee.",
  "/services/growth-engineering/"
);

const GET = [
  ["Account and signal targeting", "The same signal layer as outbound, used to build audiences instead of buying a separate intent feed."],
  ["Creative generation and testing", "Variants produced and tested in a loop, reviewed by a human before launch."],
  ["Campaign builds and audience sync", "CRM lists synced into Google RLSA, LinkedIn and Meta, as in the healthtech case."],
  ["Revenue attribution", "Reporting that ties spend to pipeline."],
  ["LinkedIn content engine", "Content pillars built from your ICP, ghostwriting in your voice with your approval, a publishing calendar, engagement and repurposing, and analytics tied to inbound leads."],
];
const FAQ = [{ q: "Do you take a percentage of ad spend?", a: "No. The fee is flat so our incentive is results, not budget size." }];

export default function Page() {
  return (
    <>
      <PageHeader title="Growth" accent="engineering" intro="Growth engineering applies the agent pattern from outbound to paid media: ad creative, campaign builds and performance analysis. An orchestrator coordinates specialist agents, a memory loop learns from results, and a connector per platform does the execution on Meta, Google Ads and LinkedIn." />
      <Section className="!pt-4">
        <h2 className="text-3xl md:text-4xl">What you get</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {GET.map(([t, d]) => <Card key={t}><h3 className="text-lg">{t}</h3><p className="mt-2 text-ink-soft">{d}</p></Card>)}
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl md:text-4xl">Pricing</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">Included in the GTM + Growth Engineering plan at $7,500 a month. A flat fee, never a percentage of spend.</p>
        <div className="mt-10"><Faq items={FAQ} /></div>
      </Section>
      <ClosingCta />
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "Growth engineering", path: "/services/growth-engineering/" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "Growth engineering", provider: { "@type": "Organization", name: "Get-To-Rev" } }} />
    </>
  );
}
