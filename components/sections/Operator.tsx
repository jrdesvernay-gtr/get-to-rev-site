import { Section, JsonLd } from "../ui";
import { SITE } from "@/lib/site";

export function Operator() {
  return (
    <Section>
      <div className="grid items-center gap-10 md:grid-cols-[320px_1fr]">
        {/* TODO: replace with a real photo of JR: <img src="/jr.jpg" alt="Jean-Renaud Desvernay" /> */}
        <div className="grid aspect-[4/5] place-items-center rounded-[2rem] bg-sand-deep text-6xl text-ink/30 shadow-soft">JR</div>
        <div>
          <h2 className="text-[2rem] leading-tight md:text-5xl">Meet the <span className="accent">operator</span></h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Jean-Renaud Desvernay (JR) is the fractional GTM engineer behind Get-To-Rev. He has spent 15 years helping early-stage startups grow, including agile marketing and full-funnel media buying at Airbnb, and has a background in software development. He now builds go-to-market systems for US startups in healthtech and AI SaaS, using Clay, HubSpot and the Claude API. He works with Pierre, creative director, and Ursula, content manager.
          </p>
          <a href={SITE.linkedin} rel="noopener" className="mt-5 inline-block font-medium text-red">LinkedIn →</a>
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jean-Renaud Desvernay",
          alternateName: "JR",
          jobTitle: "Fractional GTM Engineer, Founder",
          worksFor: { "@type": "Organization", name: "Get-To-Rev", url: SITE.url },
          sameAs: [SITE.linkedin],
        }}
      />
    </Section>
  );
}
