import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { PlansTable } from "@/components/sections/PlansTable";
import { Cta } from "@/components/sections/Cta";
import { meta, breadcrumbs } from "@/lib/seo";

export const metadata = meta(
  "Pricing | Get-To-Rev",
  "What a fractional GTM engineer costs: three monthly plans from $2,500, each on a 6-month term, starting with a free audit.",
  "/pricing/",
);

export default function Pricing() {
  const crumbs = breadcrumbs([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing/" }]);
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Nav />
      <main>
        <PageHeader
          h1={<>What engagements <span className="accent">cost</span>.</>}
          intro="We do not take engagements below $2,500 a month."
        />
        <PlansTable
          heading="Plans"
          plans={[
            {
              name: "Outbound",
              blurb:
                "For SMBs and local media agencies that do not need an extensive motion. ICP and target list; domains and mailboxes set up and warmed over 2-3 weeks, under your admin; AI-written individual outreach with A/B tests (email first, LinkedIn where it fits); reply handling and meeting booking; a weekly report on meetings booked and held. Not included: CRM and RevOps build, scoring, paid ads.",
              price: "$2,500/mo",
              term: "6-month term",
            },
            {
              name: "GTM Engineering",
              blurb:
                "The full motion, stopping at outbound and RevOps. Everything in Outbound, plus: signal-based plays (hiring, funding, job changes); TAM sourcing and account tiering; the multi-agent outbound system (sourcer, enricher, context engine, copywriter agent, campaign agent); CRM enrichment, scoring, routing and lifecycle automation; inbound lead processing; an attribution dashboard and a quarterly review. Not included: paid ads and demand generation.",
              price: "$5,500/mo",
              term: "6-month term",
              highlight: true,
            },
            {
              name: "GTM + Growth Engineering",
              blurb:
                "The GTM Engineering plan plus paid acquisition. Adds: audience sync from your CRM into Google, LinkedIn and Meta; ABM and retargeting campaigns; AI-assisted creative generation and testing, reviewed by a human before launch; campaign builds, budget optimization and paid attribution; a LinkedIn content engine with content pillars, ghostwriting in your voice with your approval, a publishing calendar, engagement and analytics tied to inbound leads. Media spend is paid directly to the platforms and is not a percentage of our fee.",
              price: "$8,500/mo",
              term: "6-month term",
            },
          ]}
        />
        <section className="px-4 py-6 md:px-6">
          <div className="container-x">
            <p className="text-ink-soft">
              A fractional GTM engineer, backed by a small team, for the price of one hire: multi-agent outbound,
              growth engineering and AI marketing automation.
            </p>
          </div>
        </section>
        <Cta heading="Start with a free audit." sub="Engagements start at $2,500 a month." />
      </main>
      <Footer />
    </div>
  );
}
