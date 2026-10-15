import { meta } from "@/lib/seo";
import { PageHeader, Section } from "@/components/ui";
import { Calendly } from "@/components/Calendly";

export const metadata = meta("Book a Call | Get-To-Rev", "Tell us what your pipeline needs built. Three questions, then pick a time. Engagements start at $2,500 a month.", "/book-a-call/");

export default function Page() {
  return (
    <>
      <PageHeader title="Tell us what your pipeline needs" accent="built." intro="Three questions, then pick a time. We read every answer before the call. Engagements start at $2,500 a month." />
      <Section className="!pt-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          <div className="rounded-[var(--radius-card)] bg-white/70 p-7 shadow-soft">
            <h2 className="text-xl">What to bring</h2>
            <ul className="mt-4 space-y-3 text-ink-soft">
              <li>Your company website</li>
              <li>Your funding stage and team size</li>
              <li>The one project your team keeps postponing</li>
            </ul>
            <h2 className="mt-8 text-xl">What happens next</h2>
            <p className="mt-3 text-ink-soft">You pick a time. We review your answers. On the call we map the work to your funnel and tell you whether we are a fit.</p>
          </div>
          <Calendly />
        </div>
      </Section>
    </>
  );
}
