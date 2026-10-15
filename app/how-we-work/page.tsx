import { meta, breadcrumbs } from "@/lib/seo";
import { PageHeader, Section, JsonLd } from "@/components/ui";
import { Steps } from "@/components/sections/Steps";
import { ClosingCta } from "@/components/sections/ClosingCta";

export const metadata = meta("How We Work: Audit, Build, Run | Get-To-Rev", "Audit, build, run: how a fractional GTM engineer works with your team, who does what, and what you own at the end.", "/how-we-work/");

const ROWS: [string, string, string][] = [
  ["Run live campaigns and handle replies", "Yes", ""],
  ["Build the multi-agent outbound system", "", "Yes"],
  ["Growth engineering", "", "Yes"],
  ["AI marketing automation, including AI search", "", "Yes"],
  ["CRM setup and attribution", "Shared", "Shared"],
  ["Weekly reporting and monitoring", "Reviews", "Yes"],
  ["Final say on targets and messaging", "Yes", ""],
];

export default function Page() {
  return (
    <>
      <PageHeader title="Audit, build," accent="run." intro="We review your funnel, data, stack and backlog, build the highest-value system first in your tech stack, then operate and improve it." />
      <Steps />
      <Section>
        <h2 className="text-3xl md:text-5xl">Who does <span className="accent">what</span></h2>
        <p className="mt-4 max-w-2xl text-ink-soft">If you have no in-house GTM engineer, Get-To-Rev also runs live campaigns in the Run plan.</p>
        <div className="mt-8 overflow-x-auto rounded-[var(--radius-card)] bg-white/70 shadow-soft">
          <table className="w-full min-w-[600px] text-left text-[0.95rem]">
            <thead><tr className="text-muted"><th className="p-5 font-medium">Task</th><th className="p-5 font-medium">Your team or in-house GTM engineer</th><th className="p-5 font-medium">Get-To-Rev</th></tr></thead>
            <tbody>{ROWS.map((r) => <tr key={r[0]} className="border-t border-line"><th scope="row" className="p-5 font-medium">{r[0]}</th><td className="p-5 text-ink-soft">{r[1]}</td><td className="p-5 text-ink-soft">{r[2]}</td></tr>)}</tbody>
          </table>
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl md:text-5xl">What you <span className="accent">own</span></h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">The system, the data and the tech stack it runs in, all under an MIT license. The term is 6 months. Tool costs (domains, mailboxes, software) belong to you, since everything runs in your tech stack. We optimize them to keep the cost down.</p>
      </Section>
      <ClosingCta />
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "How we work", path: "/how-we-work/" }])} />
    </>
  );
}
