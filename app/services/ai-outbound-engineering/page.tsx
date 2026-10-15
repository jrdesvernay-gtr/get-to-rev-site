import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { FeatureList } from "@/components/sections/FeatureList";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { meta, faqSchema, breadcrumbs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = meta(
  "GTM Engineering and AI Outbound for B2B SaaS | Get-To-Rev",
  "A production multi-agent outbound system on the Claude API: sourcing, enrichment, signal-based copy and campaign setup.",
  "/services/ai-outbound-engineering/",
);

const FAQ_ITEMS = [
  {
    q: "How is this different from an AI SDR?",
    a: "An AI SDR platform is a rented, closed system. This is a system built for you and owned by you.",
  },
  {
    q: "Which sequencers work?",
    a: "Instantly today; Lemlist and Reply.io follow the same pattern.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GTM engineering",
  serviceType: "AI outbound engineering",
  provider: { "@id": `${SITE.url}/#org` },
  description:
    "GTM engineering is building the system behind your outbound: agents that find accounts, enrich them, write individual outreach from live signals, and set up campaigns in your sequencer.",
};

export default function AiOutboundEngineering() {
  const crumbs = breadcrumbs([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "GTM engineering", path: "/services/ai-outbound-engineering/" },
  ]);
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Nav />
      <main>
        <PageHeader
          eyebrow="GTM engineering"
          h1={<>GTM <span className="accent">engineering</span></>}
          intro="GTM engineering is building the system behind your outbound: agents that find accounts, enrich them, write individual outreach from live signals, and set up campaigns in your sequencer. A fractional GTM engineer at Get-To-Rev builds it on the Claude API with FastAPI, in your tech stack, not on Clay tables."
        />
        <FeatureList
          heading="What you get"
          features={[
            {
              name: "Sourcer and enricher",
              body: "Target accounts from firmographic and fresh hiring signals, enriched and verified before anything is sent.",
            },
            {
              name: "Context engine",
              body: "A per-account signal packet assembled at send time, not stored and left to go stale.",
            },
            {
              name: "Copywriter agent",
              body: "Individual outreach written from that packet, with retrieval over your best-performing copy.",
            },
            {
              name: "Campaign agent",
              body: "Creates and fills campaigns in Instantly, Lemlist or Reply.io from a plain-language brief. The sequencer is only the sending layer.",
            },
            {
              name: "Deliverability and attribution",
              body: "Domain setup, SPF, DKIM and DMARC, warmup, and reporting that separates meetings booked from meetings held.",
            },
          ]}
        />
        <section className="px-4 py-6 md:px-6">
          <div className="container-x">
            <p className="text-sm text-muted">
              Proof: healthtech case; Relay 22% positive reply; Scribeberry (7% trial signup from 15K contacted); the
              Value-First audit program (753 audits, 8.24% reply, 13 clients).
            </p>
          </div>
        </section>
        <Faq items={FAQ_ITEMS} />
        <Cta heading="Put a sourcer, enricher and copywriter agent behind your outbound." />
      </main>
      <Footer />
    </div>
  );
}
