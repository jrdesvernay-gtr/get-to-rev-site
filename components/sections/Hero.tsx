import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="px-4 pt-16 pb-20 text-center md:px-6 md:pt-24 md:pb-28">
      <div className="container-x">
        <p className="text-sm font-medium text-muted">
          For SaaS in healthtech, martech, wellness and edtech, and for media agencies and publishers.
        </p>
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl md:text-6xl">
          Fractional GTM <span className="accent">Engineer</span> For Hire.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
          GTM engineering, AI marketing automation and Growth Engineering.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-ink-soft">
          Get-To-Rev is a fractional GTM engineer for hire. We build the systems behind your pipeline, including
          production multi-agent outbound on the Claude API, automated paid-media engineering and CRM attribution,
          all built in your tech stack and owned by you.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/book-a-call/">Book a call</Button>
        </div>
        <p className="mt-4 text-sm text-muted">25+ clients · 30+ years of combined experience · Seattle-based</p>
      </div>
    </section>
  );
}
