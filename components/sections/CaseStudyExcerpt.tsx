import { Button } from "@/components/Button";

export function CaseStudyExcerpt() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container-x rounded-card border border-line bg-white/60 p-8 shadow-soft md:p-12">
        <p className="text-sm font-medium text-red">Case study</p>
        <h2 className="mt-3 max-w-2xl text-2xl md:text-3xl">
          How Get-To-Rev booked 21 meetings in 16 weeks for Manifold, an AI-powered clinical research platform
        </h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          The client wanted to reach biotech, biopharma, CRO and diagnostics buyers ahead of its Series A. We built
          an outbound and retargeting system on Clay, HubSpot and Reply.io that contacted 3,000 buyers at 1,800
          companies. 21 meetings were booked and 5 became clients.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/case-studies/healthtech-ai-saas-outbound/">Read the case study</Button>
          <Button href="/case-studies/" variant="ghost">
            See all case studies
          </Button>
        </div>
      </div>
    </section>
  );
}
