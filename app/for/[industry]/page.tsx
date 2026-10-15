import { notFound } from "next/navigation";
import { meta } from "@/lib/seo";
import { SEGMENTS } from "@/lib/data";
import { PageHeader, Section, Button, Card } from "@/components/ui";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Steps } from "@/components/sections/Steps";

export function generateStaticParams() {
  return SEGMENTS.map((s) => ({ industry: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const s = SEGMENTS.find((x) => x.slug === industry);
  if (!s) return {};
  return meta(`Fractional GTM Engineer for ${s.name} | Get-To-Rev`, `${s.build}. A fractional GTM engineer for ${s.name.toLowerCase()} teams, built in your tech stack and owned by you.`, `/for/${s.slug}/`);
}

export default async function Page({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const s = SEGMENTS.find((x) => x.slug === industry);
  if (!s) notFound();
  return (
    <>
      <PageHeader eyebrow={s.name} title={`Fractional GTM engineer for`} accent={s.name.toLowerCase() + "."} intro={`${s.name} teams struggle with this: ${s.struggle.toLowerCase()}. We build ${s.build.toLowerCase()}, in your tech stack, and you own it.`} />
      <Section className="!pt-4">
        <Card className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted">Proof</p>
          <p className="mt-2 text-lg text-ink-soft">The deepest proof today is healthtech: 21 meetings in 16 weeks, 5 clients.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/case-studies/healthtech-ai-saas-outbound/" variant="ghost">Read the case study</Button>
            <Button>Book a call</Button>
          </div>
        </Card>
      </Section>
      <Steps />
      <ClosingCta />
    </>
  );
}
