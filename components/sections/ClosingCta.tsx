import { Section, Button } from "../ui";

export function ClosingCta() {
  return (
    <Section tone="dark">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[2.2rem] leading-tight md:text-6xl">
          Tell us what your pipeline needs <span className="accent">built.</span>
        </h2>
        <p className="mt-5 text-mist/70">Engagements start at $2,500 a month.</p>
        <div className="mt-9 flex justify-center"><Button>Book a call</Button></div>
      </div>
    </Section>
  );
}
