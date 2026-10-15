import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { PracticeCompare } from "@/components/sections/PracticeCompare";
import { FeatureList } from "@/components/sections/FeatureList";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { meta, faqSchema, breadcrumbs } from "@/lib/seo";

export const metadata = meta(
  "Fractional GTM Engineer Services for B2B SaaS | Get-To-Rev",
  "Three practices from one fractional GTM engineer: GTM engineering, AI marketing automation and growth engineering, each starting with a free audit.",
  "/services/",
);

const FAQ_ITEMS = [
  {
    q: "How is AEO different from SEO?",
    a: "SEO earns a ranking in search results. AEO earns a citation inside an AI-generated answer. Both reward structured, answer-first content, so most AEO work also helps SEO.",
  },
];

export default function ServicesHub() {
  const crumbs = breadcrumbs([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]);
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }} />
      <Nav />
      <main>
        <PageHeader
          h1={<>Three practices, one fractional <span className="accent">GTM engineer</span>.</>}
          intro="Every engagement starts with an audit and ends with a system you own. Pick the practice that matches your backlog, or combine them."
        />
        <PracticeCompare />
        <section className="px-4 py-10 md:px-6">
          <div className="container-x rounded-card border border-line bg-white/60 p-8 shadow-soft">
            <h2 className="text-2xl md:text-3xl">AI marketing automation</h2>
            <p className="mt-3 text-ink-soft">
              AI marketing automation is the use of AI agents to run RevOps, content and search-visibility workflows
              end to end, so a small team operates at the scale of a larger one. It includes AI engine optimization
              (AEO or GEO): making your brand easy for AI answer engines to find, understand and cite.
            </p>
          </div>
        </section>
        <FeatureList
          heading="What you get"
          features={[
            {
              name: "RevOps automation",
              body: "CRM workflows, lifecycle stages, lead routing and attribution reporting, built in your tech stack.",
            },
            {
              name: "Content automation",
              body: "Briefs, drafts and repurposing run through agents and reviewed by a human before anything publishes.",
            },
            {
              name: "AI search visibility",
              body: "A citation gap audit across ChatGPT, Perplexity, Claude and Gemini, an answer-first content plan with schema and an llms.txt file, and monthly tracking across 10+ AI engines.",
            },
            {
              name: "Buyer detection",
              body: "AI referral traffic cross-referenced with company enrichment to surface in-market accounts.",
            },
          ]}
        />
        <Faq items={FAQ_ITEMS} />
        <Cta heading="Pick the practice that matches your backlog." sub="Every engagement starts with a free audit." />
      </main>
      <Footer />
    </div>
  );
}
