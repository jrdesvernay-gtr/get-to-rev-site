import { Section, Button, Eyebrow } from "../ui";

export function CaseFeature() {
  return (
    <Section>
      <div className="grid items-center gap-10 rounded-[2rem] bg-white/70 p-8 shadow-soft md:grid-cols-[1.2fr_1fr] md:p-14">
        <div>
          <Eyebrow>Case study</Eyebrow>
          <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.6rem]">
            How Get-To-Rev booked 21 meetings in 16 weeks for Manifold, an AI-powered clinical research <span className="accent">platform</span>
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            The client wanted to reach biotech, biopharma, CRO and diagnostics buyers ahead of its Series A. We built an outbound and retargeting system on Clay, HubSpot and Reply.io that contacted 3,000 buyers at 1,800 companies. 21 meetings were booked and 5 became clients.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/case-studies/healthtech-ai-saas-outbound/">Read the case study</Button>
            <Button href="/case-studies/" variant="ghost">See all case studies</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[["21", "meetings"], ["16", "weeks"], ["3,000", "buyers"], ["5", "clients"]].map(([v, l]) => (
            <div key={l} className="rounded-3xl bg-sand p-6">
              <p className="text-4xl tracking-tight">{v}</p>
              <p className="mt-1 text-sm text-muted">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
