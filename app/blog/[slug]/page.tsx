import { notFound } from "next/navigation";
import { meta, breadcrumbs } from "@/lib/seo";
import { getEntries, getEntry } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Section, JsonLd, Eyebrow, Button } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { ClosingCta } from "@/components/sections/ClosingCta";

export function generateStaticParams() {
  return getEntries("blog").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getEntry("blog", slug);
  if (!e) return {};
  return meta(`${e.data.title} | Get-To-Rev`, e.data.description, `/blog/${slug}/`, { type: "article", noindex: !!e.data.draft });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getEntry("blog", slug);
  if (!e) notFound();
  const d = e.data;
  return (
    <>
      <header className="container-x pt-36 pb-8 md:pt-44">
        <Eyebrow>{d.category}</Eyebrow>
        <h1 className="mt-4 max-w-4xl text-[2.3rem] leading-[1.05] md:text-6xl">{d.title}</h1>
        <p className="mt-5 text-sm text-muted">By {d.author} · Published {d.date} · Updated {d.updated}</p>
      </header>
      <Section className="!pt-4">
        {d.shortAnswer && <div className="mb-10 max-w-3xl rounded-3xl bg-white/70 p-6 shadow-soft"><p className="text-xs uppercase tracking-widest text-muted">Short answer</p><p className="mt-2 text-lg">{d.shortAnswer}</p></div>}
        <div className="prose-gtr max-w-3xl" dangerouslySetInnerHTML={{ __html: e.html }} />
        {Array.isArray(d.faq) && d.faq.length > 0 && <div className="mt-12 max-w-3xl"><Faq items={d.faq} /></div>}
        <div className="mt-12"><Button>Book a call</Button></div>
      </Section>
      <ClosingCta />
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: d.title, path: `/blog/${slug}/` }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: d.title, description: d.description, datePublished: d.date, dateModified: d.updated, author: { "@type": "Person", name: d.author }, publisher: { "@type": "Organization", name: "Get-To-Rev", url: SITE.url }, mainEntityOfPage: `${SITE.url}/blog/${slug}/` }} />
    </>
  );
}
