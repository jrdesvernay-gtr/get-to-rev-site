import Link from "next/link";
import { meta, breadcrumbs } from "@/lib/seo";
import { getEntries } from "@/lib/content";
import { PageHeader, Section, JsonLd } from "@/components/ui";
import { ClosingCta } from "@/components/sections/ClosingCta";

export const metadata = meta("Blog | Get-To-Rev", "Notes on GTM engineering, AI marketing automation and growth from a fractional GTM engineer.", "/blog/");

export default function Page() {
  const posts = getEntries("blog").filter((p) => !p.data.draft);
  return (
    <>
      <PageHeader title="The" accent="blog." intro="Notes on GTM engineering, AI marketing automation and growth." />
      <Section className="!pt-4">
        {posts.length === 0 ? (
          <p className="text-ink-soft">Posts are being migrated. Check back soon, or <a className="text-red" href="/feed.xml">subscribe by RSS</a>.</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}/`} className="rounded-[var(--radius-card)] bg-white/70 p-8 shadow-soft transition hover:-translate-y-1">
                <p className="text-xs uppercase tracking-widest text-muted">{p.data.category} · {p.data.date}</p>
                <h2 className="mt-3 text-2xl">{p.data.title}</h2>
                <p className="mt-3 text-ink-soft">{p.data.description}</p>
              </Link>
            ))}
          </div>
        )}
      </Section>
      <ClosingCta />
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }])} />
    </>
  );
}
