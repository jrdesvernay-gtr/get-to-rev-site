import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { meta, breadcrumbs } from "@/lib/seo";
import { getEntries } from "@/lib/content";

export const metadata = meta(
  "Case Studies | Get-To-Rev",
  "Proof library: outbound, retargeting and growth results for SaaS and consumer clients, from a fractional GTM engineer.",
  "/case-studies/",
);

export default function CaseStudies() {
  const entries = getEntries("case-studies");
  const crumbs = breadcrumbs([{ name: "Home", path: "/" }, { name: "Case studies", path: "/case-studies/" }]);
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Nav />
      <main>
        <PageHeader
          h1={<>Proof <span className="accent">library</span>.</>}
          intro="Every case study uses one structure: summary, challenge, approach, stack, results and lessons."
        />
        <section className="px-4 pb-20 md:px-6">
          <div className="container-x grid gap-6 md:grid-cols-2">
            {entries.map((e) => (
              <Link
                key={e.slug}
                href={`/case-studies/${e.slug}/`}
                className="flex flex-col rounded-card border border-line bg-white/60 p-6 shadow-soft hover:border-ink"
              >
                <p className="text-sm font-medium text-red">{e.data.industry}</p>
                <h2 className="mt-2 text-xl font-medium text-ink">{e.data.client}</h2>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{e.data.oneLineResult}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
