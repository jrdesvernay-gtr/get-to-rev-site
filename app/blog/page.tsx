import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { meta, breadcrumbs } from "@/lib/seo";
import { getEntries } from "@/lib/content";

export const metadata = meta(
  "Blog | Get-To-Rev",
  "GTM engineering, AI marketing automation and growth engineering, written by a fractional GTM engineer.",
  "/blog/",
);

export default function Blog() {
  const entries = getEntries("blog").filter((e) => !e.data.draft);
  const crumbs = breadcrumbs([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }]);
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Nav />
      <main>
        <PageHeader h1={<>From the <span className="accent">build</span>.</>} />
        <section className="px-4 pb-20 md:px-6">
          <div className="container-x grid gap-6 md:grid-cols-2">
            {entries.length === 0 && <p className="text-ink-soft">No posts published yet.</p>}
            {entries.map((e) => (
              <Link
                key={e.slug}
                href={`/blog/${e.slug}/`}
                className="flex flex-col rounded-card border border-line bg-white/60 p-6 shadow-soft hover:border-ink"
              >
                <p className="text-sm font-medium text-red">{e.data.category}</p>
                <h2 className="mt-2 text-xl font-medium text-ink">{e.data.title}</h2>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{e.data.description}</p>
                <p className="mt-4 text-xs text-muted">{e.data.date}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
