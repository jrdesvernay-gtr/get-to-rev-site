import { meta } from "@/lib/seo";
import { PageHeader, Section, JsonLd } from "@/components/ui";
import { SITE } from "@/lib/site";
import { ClosingCta } from "@/components/sections/ClosingCta";

export const metadata = meta("About Get-To-Rev | Your Fractional GTM Engineer", "Get-To-Rev is a Seattle company that provides a fractional GTM engineer and builds AI marketing automation for SaaS teams, media agencies and publishers.", "/about/");

export default function Page() {
  return (
    <>
      <PageHeader title="A fractional GTM engineer, backed by a small" accent="team." intro="Get-To-Rev is a Seattle company that provides a fractional GTM engineer and builds AI marketing automation for SaaS teams, media agencies and publishers. We build in production, in your tech stack, and measure every system against pipeline." />
      <Section className="!pt-4">
        <div className="grid gap-10 md:grid-cols-[320px_1fr]">
          <div className="grid aspect-[4/5] place-items-center rounded-[2rem] bg-sand-deep text-6xl text-ink/30 shadow-soft">JR</div>
          <div className="prose-gtr">
            <h2 style={{ marginTop: 0 }}>Jean-Renaud Desvernay (JR), founder</h2>
            <p>15 years helping early-stage startups grow. At Airbnb he worked on agile marketing and full-funnel media buying. He is the fractional GTM engineer behind Get-To-Rev and builds go-to-market systems for US startups in healthtech and AI SaaS, combining outbound automation, paid media and CRM workflows. He also has a background in software development.</p>
            <h3>Pierre, creative director, and Ursula, content manager</h3>
            <p>Pierre and Ursula work with JR on creative and content for client engagements.</p>
            <h3>Who we build for</h3>
            <p>SaaS in healthtech, martech, wellness and edtech, plus media agencies and publishers. Healthtech has the deepest proof so far, with two proof cases and buyers who need no category education.</p>
            <p><a href={SITE.linkedin}>JR on LinkedIn</a></p>
          </div>
        </div>
      </Section>
      <ClosingCta />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", name: "About Get-To-Rev", url: `${SITE.url}/about/`, mainEntity: { "@type": "Person", name: "Jean-Renaud Desvernay", jobTitle: "Founder, fractional GTM engineer" } }} />
    </>
  );
}
