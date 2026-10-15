import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { Cta } from "@/components/sections/Cta";
import { getEntries, getEntry } from "@/lib/content";
import { meta, breadcrumbs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return getEntries("blog").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry("blog", slug);
  if (!entry) return {};
  return meta(entry.data.title, entry.data.description ?? "", `/blog/${entry.slug}/`, {
    type: "article",
    noindex: !!entry.data.draft,
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry("blog", slug);
  if (!entry) return notFound();
  const { data, html } = entry;

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    datePublished: data.date,
    dateModified: data.updated ?? data.date,
    author: { "@type": "Person", name: data.author },
    publisher: { "@id": `${SITE.url}/#org` },
  };
  const crumbs = breadcrumbs([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: data.title, path: `/blog/${entry.slug}/` },
  ]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Nav />
      <main>
        <PageHeader eyebrow={data.category} h1={data.title} />
        <section className="px-4 pb-6 md:px-6">
          <div className="container-x max-w-3xl text-sm text-muted">
            {data.author} · {data.date}
            {data.updated && data.updated !== data.date ? ` · updated ${data.updated}` : ""}
          </div>
        </section>
        <section className="px-4 py-6 md:px-6">
          <div className="container-x prose-gtr max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} />
        </section>
        <Cta heading="Want this built for your pipeline?" />
      </main>
      <Footer />
    </div>
  );
}
