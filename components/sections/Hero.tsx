import { Button } from "../ui";
import { PersonalizedEyebrow } from "../Personalize";

export function Hero() {
  return (
    <section className="container-x pt-36 pb-16 text-center md:pt-48 md:pb-24">
      <PersonalizedEyebrow />
      <h1 className="mx-auto mt-6 max-w-5xl text-[2.9rem] leading-[0.98] md:text-[6rem]">
        Fractional GTM Engineer For <span className="accent">Hire.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft md:text-xl">
        GTM engineering, AI marketing automation and Growth Engineering.
      </p>
      <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-soft">
        Get-To-Rev is a fractional GTM engineer for hire. We build the systems behind your pipeline, including production multi-agent outbound on the Claude API, automated paid-media engineering and CRM attribution, all built in your tech stack and owned by you.
      </p>
      <div className="mt-9 flex justify-center"><Button>Book a call</Button></div>
      <p className="mt-5 text-sm text-muted">25+ clients · 30+ years of combined experience · Seattle-based</p>
    </section>
  );
}
