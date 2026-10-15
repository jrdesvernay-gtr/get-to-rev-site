import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Results } from "@/components/sections/Results";
import { Practices } from "@/components/sections/Practices";
import { WhyStall } from "@/components/sections/WhyStall";
import { CaseStudyExcerpt } from "@/components/sections/CaseStudyExcerpt";
import { WhoWeBuildFor } from "@/components/sections/WhoWeBuildFor";
import { AuditBuildRun } from "@/components/sections/AuditBuildRun";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { PlansTable } from "@/components/sections/PlansTable";
import { Operator } from "@/components/sections/Operator";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { meta, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = meta(
  "Fractional GTM Engineer for Hire | AI Marketing Automation",
  "Hire a fractional GTM engineer to build AI marketing automation you own: multi-agent outbound, growth engineering and CRM attribution for B2B SaaS.",
  "/",
);

const FAQ_ITEMS = [
  {
    q: "What is a fractional GTM engineer?",
    a: "A part-time go-to-market engineer who builds and runs your outbound, CRM and campaign automation without a full-time hire. Get-To-Rev provides one, backed by a small team.",
  },
  {
    q: "What is AI marketing automation?",
    a: "It is the use of AI agents and automation to run marketing and sales workflows such as prospecting, enrichment, personalization, campaign setup and reporting, so a small team operates at the scale of a larger one.",
  },
  {
    q: "How is Get-To-Rev different from a Clay agency?",
    a: "We build production multi-agent systems on the Claude API, not Clay tables. Sequencers like Instantly are only the sending layer. You own the system and the data.",
  },
  {
    q: "How is a fractional GTM engineer different from a full-time hire?",
    a: "You get senior build capacity backed by a small team, on a 6-month term, without recruiting or ramp time. A full-time hire is one person with one backlog. You own what we build either way.",
  },
  {
    q: "Do you work with our in-house GTM engineer?",
    a: "Yes. If you have one, we take the backlog they cannot reach while they keep running campaigns. If you do not, we act as your GTM engineer.",
  },
  {
    q: "Which industries do you work with?",
    a: "SaaS companies in healthtech, martech, wellness and edtech, plus media agencies and publishers.",
  },
  {
    q: "How fast does something go live?",
    a: "First campaigns start after a 2-3 week domain warmup, and the target is a first system in production in month 2. The audit comes first and sets the scope.",
  },
  {
    q: "What is value-first selling?",
    a: "A value-first sales strategy is a methodology that prioritizes solving customer problems, educating prospects, and delivering tangible insights before ever pitching a product or asking for a sale. Our free audit is how we apply it.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. Everything is built in your tech stack under an MIT license.",
  },
  {
    q: "What does it cost?",
    a: "Engagements start at $2,500 a month on a 6-month term. See the plans above and the pricing page.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jean-Renaud Desvernay",
  jobTitle: "Founder, Fractional GTM Engineer",
  worksFor: { "@id": `${SITE.url}/#org` },
  sameAs: [SITE.linkedin],
};

export default function Home() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Nav />
      <main>
        <Hero />
        <Results />
        <Practices />
        <WhyStall />
        <CaseStudyExcerpt />
        <WhoWeBuildFor />
        <AuditBuildRun />
        <ComparisonTable />
        <PlansTable
          heading="Plans"
          intro="There are three monthly plans, from $2,500 a month: Outbound, GTM Engineering, and GTM + Growth Engineering. We do not take engagements below $2,500 a month, and every plan runs on a 6-month term. Every engagement starts with a free audit."
          plans={[
            {
              name: "Outbound",
              blurb:
                "For SMBs and local media agencies that need steady outbound without a full motion: target list, sending infrastructure, AI-written outreach, reply handling and weekly reporting.",
              price: "$2,500/mo",
              term: "6-month term",
            },
            {
              name: "GTM Engineering",
              blurb:
                "The full GTM motion, stopping at outbound and RevOps: everything in Outbound plus signal-based plays, account tiering, CRM enrichment and routing, and attribution. No paid ads.",
              price: "$5,500/mo",
              term: "6-month term",
              highlight: true,
            },
            {
              name: "GTM + Growth Engineering",
              blurb:
                "Everything in GTM Engineering plus growth engineering: paid media on Meta, Google and LinkedIn with audience sync, creative testing and optimization, plus a LinkedIn content engine. Ad spend is paid to the platforms.",
              price: "$8,500/mo",
              term: "6-month term",
            },
          ]}
          footerLink={{ label: "See full pricing", href: "/pricing/" }}
        />
        <Operator />
        <Faq items={FAQ_ITEMS} />
        <Cta heading="Tell us what your pipeline needs built." sub="Engagements start at $2,500 a month." />
      </main>
      <Footer />
    </div>
  );
}
