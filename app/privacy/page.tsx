import { meta } from "@/lib/seo";
import { PageHeader, Section } from "@/components/ui";

export const metadata = meta("Privacy | Get-To-Rev", "How Get-To-Rev handles data collected through this website.", "/privacy/");

export default function Page() {
  return (
    <>
      <PageHeader title="Privacy" />
      <Section className="!pt-0">
        <div className="prose-gtr max-w-3xl">
          {/* TODO: migrate the text from the existing /privacy-policy/ page before launch. */}
          <p>This page will carry the privacy policy migrated from the current get-to-rev.com site.</p>
        </div>
      </Section>
    </>
  );
}
