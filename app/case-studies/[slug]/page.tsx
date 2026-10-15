import { notFound } from "next/navigation";
import Link from "next/link";
import { meta, breadcrumbs } from "@/lib/seo";
import { getEntries, getEntry } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Section, JsonLd, Eyebrow, Button } from "@/components/ui";
import { ClosingCta } from "@/components/sections/ClosingCta";

export function generateStaticParams() {
  return getEntries("case-studies").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getEntry("case-studies", slug);
  if (!e) return {};
  return meta(e.data.title, e.data.summary, `/case-studies/${slug}/`, { type: "article" });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getEntry("case-studies", slug);
  if (!e) notFound();
  const d = e.data;
  return (
    <>
      <header className="container-x pt-36 pb-10 md:pt-44">
        <Eyebrow>Case study · {d.industry}</Eyebrow>
        <h1 className="mt-4 max-w-4xl text-[2.3rem] leading-[1.05] md:text-6xl">{d.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">{d.summary}</p>
        <p className="mt-4 text-sm text-muted">By Jean-Renaud Desvernay · Updated {d.updated}</p>
      </header>
      <Section className="!pt-4">
        {d.stats?.length > 0 && (
          <div className="mb-14 overflow-hidden rounded-[var(--radius-card)] bg-white/70 shadow-soft">
            <table className="w-full text-left text-[0.95rem]">
              <caption className="p-5 text-left text-sm font-medium text-muted">Results</caption>
              <tbody>
                {d.stats.map((s: { label: string; value: string }) => (
                  <tr key={s.label} className="border-t border-line"><th scope="row" className="p-4 pl-6 font-medium">{s.label}</th><td className="p-4 pr-6 text-ink-soft">{s.value}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="prose-gtr max-w-3xl" dangerouslySetInnerHTML={{ __html: e.html }} />
        {d.stack && (<div className="prose-gtr mt-8 max-w-3xl"><h2>Stack</h2><p>{d.stack}</p></div>)}
        {d.quote && <blockquote className="prose-gtr mt-8 max-w-3xl"><p>{d.quote}</p></blockquote>}
        <div className="mt-12 flex gap-3">
          <Button>Book a call</Button>
          <Button href={d.relatedService || "/services/"} variant="ghost">Related service</Button>
        </div>
        <p className="mt-6 text-ink-soft">Book a call and we will map the same program to your target accounts. <Link href="/case-studies/" className="text-red">All case studies</Link></p>
      </Section>
      <ClosingCta />
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Case studies", path: "/case-studies/" }, { name: d.client, path: `/case-studies/${slug}/` }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: d.h1, description: d.summary, datePublished: d.date, dateModified: d.updated, author: { "@type": "Person", name: "Jean-Renaud Desvernay" }, publisher: { "@type": "Organization", name: "Get-To-Rev", url: SITE.url }, mainEntityOfPage: `${SITE.url}/case-studies/${slug}/` }} />
    </>
  );
}
