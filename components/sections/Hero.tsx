import { Button } from "@/components/Button";

// Props default to the live copy so the code-built page is unchanged; Builder overrides them.
export function Hero({
  eyebrow = "For SaaS in healthtech, martech, wellness and edtech, and for media agencies and publishers.",
  headlineStart = "Fractional GTM",
  headlineAccent = "Engineer",
  headlineEnd = "For Hire.",
  subhead = "GTM engineering, AI marketing automation and Growth Engineering.",
  body = "Get-To-Rev is a fractional GTM engineer for hire. We build the systems behind your pipeline, including production multi-agent outbound on the Claude API, automated paid-media engineering and CRM attribution, all built in your tech stack and owned by you.",
  ctaLabel = "Book a call",
  ctaHref = "/book-a-call/",
  proofLine = "25+ clients · 30+ years of combined experience · Seattle-based",
}: {
  eyebrow?: string;
  headlineStart?: string;
  headlineAccent?: string;
  headlineEnd?: string;
  subhead?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  proofLine?: string;
}) {
  return (
    <section className="px-4 pt-16 pb-20 text-center md:px-6 md:pt-24 md:pb-28">
      <div className="container-x">
        <p className="text-sm font-medium text-muted">{eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl md:text-6xl">
          {headlineStart} <span className="accent">{headlineAccent}</span> {headlineEnd}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">{subhead}</p>
        <p className="mx-auto mt-6 max-w-2xl text-ink-soft">{body}</p>
        <div className="mt-8 flex justify-center">
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>
        <p className="mt-4 text-sm text-muted">{proofLine}</p>
      </div>
    </section>
  );
}
