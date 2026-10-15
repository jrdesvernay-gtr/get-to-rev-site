import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { Cta } from "@/components/sections/Cta";
import { getEntries, getEntry } from "@/lib/content";
import { meta, breadcrumbs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return getEntries("case-studies").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry("case-studies", slug);
  if (!entry) return {};
  return meta(entry.data.title, entry.data.summary ?? entry.data.oneLineResult ?? "", `/case-studies/${entry.slug}/`, {
    type: "article",
  });
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry("case-studies", slug);
  if (!entry) return notFound();
  const { data, html } = entry;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.h1,
    author: { "@type": "Organization", "@id": `${SITE.url}/#org` },
    datePublished: data.date,
    dateModified: data.updated ?? data.date,
    publisher: { "@id": `${SITE.url}/#org` },
  };
  const crumbs = breadcrumbs([
    { name: "Home", path: "/" },
    { name: "Case studies", path: "/case-studies/" },
    { name: data.client, path: `/case-studies/${entry.slug}/` },
  ]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Nav />
      <main>
        <PageHeader eyebrow={data.industry} h1={data.h1} intro={data.summary} />
        <section className="px-4 pb-10 md:px-6">
          <div className="container-x text-sm text-muted">
            Updated {data.updated ?? data.date}
          </div>
        </section>

        {Array.isArray(data.stats) && data.stats.length > 0 && (
          <section className="px-4 py-6 md:px-6">
            <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.stats.map((s: { label: string; value: string }) => (
                <div key={s.label} className="rounded-card border border-line bg-white/60 p-5 shadow-soft">
                  <p className="text-xl font-medium text-ink">{s.value}</p>
                  <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="px-4 py-6 md:px-6">
          <div className="container-x prose-gtr max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} />
        </section>

        {data.stack && (
          <section className="px-4 py-6 md:px-6">
            <div className="container-x max-w-3xl">
              <h2 className="text-xl font-medium text-ink">Stack</h2>
              <p className="mt-2 text-ink-soft">{data.stack}</p>
            </div>
          </section>
        )}

        {data.quote && (
          <section className="px-4 py-10 md:px-6">
            <div className="container-x max-w-3xl rounded-card border border-line bg-white/60 p-8 shadow-soft">
              <blockquote className="text-lg italic text-ink">“{data.quote}”</blockquote>
            </div>
          </section>
        )}

        <Cta heading="Book a call and we'll map the same program to your target accounts." />
      </main>
      <Footer />
    </div>
  );
}
