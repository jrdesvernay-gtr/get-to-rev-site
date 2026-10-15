import { meta, breadcrumbs } from "@/lib/seo";
import { PageHeader, Section, JsonLd, Card } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";

export const metadata = meta(
  "GTM Engineering and AI Outbound for B2B SaaS | Get-To-Rev",
  "A production multi-agent outbound system on the Claude API: sourcing, enrichment, signal-based copy and campaign setup.",
  "/services/ai-outbound-engineering/"
);

const GET = [
  ["Sourcer and enricher", "Target accounts from firmographic and fresh hiring signals, enriched and verified before anything is sent."],
  ["Context engine", "A per-account signal packet assembled at send time, not stored and left to go stale."],
  ["Copywriter agent", "Individual outreach written from that packet, with retrieval over your best-performing copy."],
  ["Campaign agent", "Creates and fills campaigns in Instantly, Lemlist or Reply.io from a plain-language brief. The sequencer is only the sending layer."],
  ["Deliverability and attribution", "Domain setup, SPF, DKIM and DMARC, warmup, and reporting that separates meetings booked from meetings held."],
];
const FAQ = [
  { q: "How is this different from an AI SDR?", a: "An AI SDR platform is a rented, closed system. This is a system built for you and owned by you." },
  { q: "Which sequencers work?", a: "Instantly today; Lemlist and Reply.io follow the same pattern." },
];

export default function Page() {
  return (
    <>
      <PageHeader title="GTM" accent="engineering" intro="GTM engineering is building the system behind your outbound: agents that find accounts, enrich them, write individual outreach from live signals, and set up campaigns in your sequencer. A fractional GTM engineer at Get-To-Rev builds it on the Claude API with FastAPI, in your tech stack, not on Clay tables." />
      <Section className="!pt-4">
        <h2 className="text-3xl md:text-4xl">What you get</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {GET.map(([t, d]) => <Card key={t}><h3 className="text-lg">{t}</h3><p className="mt-2 text-ink-soft">{d}</p></Card>)}
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl md:text-4xl">Proof</h2>
        <ul className="mt-6 space-y-3 text-lg text-ink-soft">
          <li>Healthtech case: 21 meetings in 16 weeks for Manifold.</li>
          <li>Relay: 22% positive reply rate.</li>
          <li>Scribeberry: 7% trial signup from 15K contacted.</li>
          <li>Value-First audit program: 753 audits, 8.24% reply rate, 13 clients.</li>
        </ul>
        <div className="mt-10"><Faq items={FAQ} /></div>
      </Section>
      <ClosingCta />
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }, { name: "GTM engineering", path: "/services/ai-outbound-engineering/" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "GTM engineering", provider: { "@type": "Organization", name: "Get-To-Rev" }, description: "Production multi-agent outbound on the Claude API." }} />
    </>
  );
}
