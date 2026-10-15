import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { FeatureList } from "@/components/sections/FeatureList";
import { WhoDoesWhat } from "@/components/sections/WhoDoesWhat";
import { Cta } from "@/components/sections/Cta";
import { meta, breadcrumbs } from "@/lib/seo";

export const metadata = meta(
  "How We Work: Audit, Build, Run | Get-To-Rev",
  "Audit, build, run: how a fractional GTM engineer at Get-To-Rev reviews your stack, builds in production and keeps running it.",
  "/how-we-work/",
);

export default function HowWeWork() {
  const crumbs = breadcrumbs([{ name: "Home", path: "/" }, { name: "How we work", path: "/how-we-work/" }]);
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Nav />
      <main>
        <PageHeader h1={<>Audit, <span className="accent">build</span>, run.</>} />
        <FeatureList
          features={[
            {
              name: "Audit",
              body: "We review your funnel, data, stack and backlog. You get: a prioritized build plan, yours whether or not we continue.",
            },
            {
              name: "Build",
              body: "We build the highest-value system first, in your tech stack, alongside your team, with documentation as we go. First campaigns start after a 2-3 week domain warmup; target: first system in production in month 2. You get: a working system live in your stack, with its documentation.",
            },
            {
              name: "Run",
              body: "We operate and improve it. You get: weekly reporting that ties spend to pipeline, and a quarterly review of what was spent against what came back.",
            },
          ]}
        />
        <WhoDoesWhat />
        <section className="px-4 py-10 md:px-6">
          <div className="container-x rounded-card border border-line bg-white/60 p-6 shadow-soft">
            <p className="text-ink-soft">
              What you own: the system, the data and the tech stack it runs in, all under an MIT license. Term: 6
              months. Tool costs (domains, mailboxes, software) belong to you, since everything runs in your tech
              stack. We optimize them to keep the cost down.
            </p>
          </div>
        </section>
        <Cta heading="Start with a free audit." sub="You keep the plan whether or not we continue." />
      </main>
      <Footer />
    </div>
  );
}
