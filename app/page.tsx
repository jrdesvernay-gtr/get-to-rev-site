import { meta } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { Results } from "@/components/sections/Results";
import { Practices } from "@/components/sections/Practices";
import { Stalls } from "@/components/sections/Stalls";
import { CaseFeature } from "@/components/sections/CaseFeature";
import { Segments } from "@/components/sections/Segments";
import { Steps } from "@/components/sections/Steps";
import { Comparison } from "@/components/sections/Comparison";
import { Plans } from "@/components/sections/Plans";
import { Operator } from "@/components/sections/Operator";
import { Faq } from "@/components/Faq";
import { Section } from "@/components/ui";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { HOME_FAQ } from "@/lib/data";

export const metadata = meta(
  "Fractional GTM Engineer for Hire | AI Marketing Automation",
  "Hire a fractional GTM engineer to build AI marketing automation you own: multi-agent outbound, growth engineering and CRM attribution for B2B SaaS.",
  "/"
);

export default function Home() {
  return (
    <>
      <Hero />
      <Results />
      <Practices />
      <Stalls />
      <CaseFeature />
      <Segments />
      <Steps />
      <Comparison />
      <Plans />
      <Operator />
      <Section>
        <h2 className="max-w-3xl text-[2rem] leading-tight md:text-5xl">Frequently asked <span className="accent">questions</span></h2>
        <div className="mt-10"><Faq items={HOME_FAQ} /></div>
      </Section>
      <ClosingCta />
    </>
  );
}
