import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { FeatureList } from "@/components/sections/FeatureList";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { meta, faqSchema, breadcrumbs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = meta(
  "Growth Engineering for B2B SaaS | Get-To-Rev",
  "Agents and ad-platform connectors that build creative, launch campaigns and report on Meta, Google and LinkedIn. Flat fee.",
  "/services/growth-engineering/",
);

const FAQ_ITEMS = [
  {
    q: "Do you take a percentage of ad spend?",
    a: "No. The fee is flat so our incentive is results, not budget size.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Growth engineering",
  serviceType: "Paid media engineering",
  provider: { "@id": `${SITE.url}/#org` },
  description:
    "Growth engineering applies the agent pattern from outbound to paid media: ad creative, campaign builds and performance analysis across Meta, Google Ads and LinkedIn.",
};

export default function GrowthEngineering() {
  const crumbs = breadcrumbs([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Growth engineering", path: "/services/growth-engineering/" },
  ]);
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Nav />
      <main>
        <PageHeader
          eyebrow="Growth engineering"
          h1={<>Growth <span className="accent">engineering</span></>}
          intro="Growth engineering applies the agent pattern from outbound to paid media: ad creative, campaign builds and performance analysis. An orchestrator coordinates specialist agents, a memory loop learns from results, and a connector per platform does the execution on Meta, Google Ads and LinkedIn."
        />
        <FeatureList
          heading="What you get"
          features={[
            {
              name: "Account and signal targeting",
              body: "The same signal layer as outbound, used to build audiences instead of buying a separate intent feed.",
            },
            {
              name: "Creative generation and testing",
              body: "Variants produced and tested in a loop, reviewed by a human before launch.",
            },
            {
              name: "Campaign builds and audience sync",
              body: "CRM lists synced into Google RLSA, LinkedIn and Meta, as in the healthtech case.",
            },
            {
              name: "Revenue attribution",
              body: "Reporting that ties spend to pipeline.",
            },
            {
              name: "LinkedIn content engine",
              body: "Content pillars built from your ICP, ghostwriting in your voice with your approval, a publishing calendar, engagement and repurposing, and analytics tied to inbound leads.",
            },
          ]}
        />
        <section className="px-4 py-6 md:px-6">
          <div className="container-x">
            <p className="text-sm text-muted">
              Pricing: included in the GTM + Growth Engineering plan at $8,500 a month, a flat fee and never a
              percentage of spend.
            </p>
          </div>
        </section>
        <Faq items={FAQ_ITEMS} />
        <Cta heading="Add paid media to the same signal layer as your outbound." />
      </main>
      <Footer />
    </div>
  );
}
