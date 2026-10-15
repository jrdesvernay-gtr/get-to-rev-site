import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { meta, breadcrumbs } from "@/lib/seo";

export const metadata = meta(
  "Book a Call | Get-To-Rev",
  "Tell us what your pipeline needs built, then pick a time. Engagements start at $2,500 a month.",
  "/book-a-call/",
);

export default function BookACall() {
  const crumbs = breadcrumbs([{ name: "Home", path: "/" }, { name: "Book a call", path: "/book-a-call/" }]);
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Nav />
      <main>
        <PageHeader
          h1={<>Tell us what your <span className="accent">pipeline</span> needs built.</>}
          intro="Three questions, then pick a time. We read every answer before the call: company website, funding stage and team size, and the one project your team keeps postponing."
        />
        <section className="px-4 pb-20 md:px-6">
          <div className="container-x">
            <CalendlyEmbed />
            <p className="mt-4 text-sm text-muted">Engagements start at $2,500 a month.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
