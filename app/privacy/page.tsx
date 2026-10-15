import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { meta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = meta("Privacy | Get-To-Rev", "How Get-To-Rev collects, uses and protects your information.", "/privacy/");

// TODO: have legal review this draft before launch (open item, see CLAUDE.md).
export default function Privacy() {
  return (
    <div>
      <Nav />
      <main>
        <PageHeader h1="Privacy policy" />
        <section className="px-4 pb-20 md:px-6">
          <div className="container-x prose-gtr max-w-3xl">
            <p>Last updated: October 15, 2026.</p>
            <h2>What we collect</h2>
            <p>
              When you book a call or contact us, we collect what you give us directly: your name, email, company
              and anything you tell us about your project. Our site analytics collect standard usage data (pages
              viewed, referrer, approximate location from IP) through Google Tag Manager.
            </p>
            <h2>How we use it</h2>
            <p>
              We use this information to respond to your inquiry, schedule and prepare for calls, and understand
              how the site is used so we can improve it. We do not sell your information.
            </p>
            <h2>Third parties</h2>
            <p>
              We use Calendly to schedule calls and Google Tag Manager for analytics. Each operates under its own
              privacy policy.
            </p>
            <h2>Your choices</h2>
            <p>
              Email {SITE.email} to ask what we hold about you or to have it deleted.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
