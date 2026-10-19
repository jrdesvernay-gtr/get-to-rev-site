import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
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
          <div className="container-x grid gap-8 md:grid-cols-2">
            {entries.map((e) => (
              <CaseStudyCard
                key={e.slug}
                cs={{
                  slug: e.slug,
                  client: e.data.client,
                  oneLineResult: e.data.oneLineResult,
                  cardImage: e.data.cardImage,
                  clientLogo: e.data.clientLogo,
                  cardLogo: e.data.cardLogo,
                  channels: e.data.channels,
                }}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
