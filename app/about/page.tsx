import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { Cta } from "@/components/sections/Cta";
import { meta, breadcrumbs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = meta(
  "About Get-To-Rev | Your Fractional GTM Engineer",
  "Get-To-Rev is a Seattle company that provides a fractional GTM engineer and builds AI marketing automation for SaaS teams, media agencies and publishers.",
  "/about/",
);

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  about: { "@id": `${SITE.url}/#org` },
  mainEntity: [
    {
      "@type": "Person",
      name: "Jean-Renaud Desvernay",
      jobTitle: "Founder, Fractional GTM Engineer",
      sameAs: [SITE.linkedin],
    },
    { "@type": "Person", name: "Pierre", jobTitle: "Creative Director" },
    { "@type": "Person", name: "Ursula", jobTitle: "Content Manager" },
  ],
};

export default function About() {
  const crumbs = breadcrumbs([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]);
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Nav />
      <main>
        <PageHeader
          h1={<>A fractional GTM engineer, backed by a <span className="accent">small team</span>.</>}
          intro="Get-To-Rev is a Seattle company that provides a fractional GTM engineer and builds AI marketing automation for SaaS teams, media agencies and publishers. We build in production, in your tech stack, and measure every system against pipeline."
        />
        <section className="px-4 py-6 md:px-6">
          <div className="container-x">
            <p className="text-ink-soft">
              Who we build for: SaaS in healthtech, martech, wellness and edtech, plus media agencies and
              publishers. Healthtech has the deepest proof so far, with two proof cases and buyers who need no
              category education.
            </p>
          </div>
        </section>
        <section className="px-4 py-10 md:px-6">
          <div className="container-x grid gap-6 md:grid-cols-3">
            <div className="rounded-card border border-line bg-white/60 p-6 shadow-soft">
              {/* TODO: replace with JR's real headshot (open item, see CLAUDE.md) */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sand-deep text-lg font-medium text-ink">
                JR
              </div>
              <h3 className="font-medium text-ink">Jean-Renaud Desvernay (JR), founder</h3>
              <p className="mt-2 text-sm text-ink-soft">
                15 years helping early-stage startups grow. At Airbnb he worked on agile marketing and full-funnel
                media buying. He is the fractional GTM engineer behind Get-To-Rev and builds go-to-market systems
                for US startups in healthtech and AI SaaS, combining outbound automation, paid media and CRM
                workflows. He also has a background in software development.
              </p>
            </div>
            <div className="rounded-card border border-line bg-white/60 p-6 shadow-soft">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sand-deep text-lg font-medium text-ink">
                P
              </div>
              <h3 className="font-medium text-ink">Pierre, creative director</h3>
              <p className="mt-2 text-sm text-ink-soft">Leads the creative work behind every campaign and asset.</p>
            </div>
            <div className="rounded-card border border-line bg-white/60 p-6 shadow-soft">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sand-deep text-lg font-medium text-ink">
                U
              </div>
              <h3 className="font-medium text-ink">Ursula, content manager</h3>
              <p className="mt-2 text-sm text-ink-soft">Runs content and AI search visibility work.</p>
            </div>
          </div>
        </section>
        <Cta heading="Tell us what your pipeline needs built." />
      </main>
      <Footer />
    </div>
  );
}
