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
            <p>Last updated: October 19, 2026.</p>
            <h2>What we collect</h2>
            <p>
              When you book a call or contact us, we collect what you give us directly: your name, email, company
              and anything you tell us about your project. We also use cookies and similar technology for
              analytics and advertising: PostHog for product analytics, and, loaded through Google Tag Manager,
              Google Analytics, the Meta (Facebook) Pixel, the LinkedIn Insight Tag, Microsoft Advertising (Bing)
              tracking and Hotjar session analytics. These collect standard usage data such as pages viewed,
              referrer, approximate location from IP, and device and browser information.
            </p>
            <h2>How we use it</h2>
            <p>
              We use this information to respond to your inquiry, schedule and prepare for calls, understand how
              the site is used so we can improve it, and measure and retarget advertising on Google, Meta,
              LinkedIn and Microsoft. We do not sell your information for money.
            </p>
            <h2>Third parties</h2>
            <p>
              We use Calendly to schedule calls, PostHog for product analytics, and the advertising vendors named
              above, the latter loaded through Google Tag Manager. Each operates under its own privacy policy and
              may set its own cookies.
            </p>
            <h2>Your choices</h2>
            <p>
              Most browsers let you block or delete cookies in their settings, and each advertising vendor above
              offers its own opt-out (for example, Meta's ad preferences and Google's Ads Settings). Email{" "}
              {SITE.email} to ask what we hold about you or to have it deleted.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
