import { meta } from "@/lib/seo";
import { PageHeader, Button } from "@/components/ui";

export const metadata = meta("Thank you | Get-To-Rev", "Your call is booked.", "/thank-you/", { noindex: true });

export default function Page() {
  return (
    <>
      <PageHeader title="You're" accent="booked." intro="We will read your answers before the call. In the meantime, see how the healthtech program ran." />
      <div className="container-x pb-24"><Button href="/case-studies/healthtech-ai-saas-outbound/">Read the case study</Button></div>
    </>
  );
}
