import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/Button";
import { meta } from "@/lib/seo";

export const metadata = meta("Thank You | Get-To-Rev", "Your call is booked. Here's what happens next.", "/thank-you/", {
  noindex: true,
});

export default function ThankYou() {
  return (
    <div>
      <Nav />
      <main>
        <PageHeader
          h1={<>You're on the <span className="accent">calendar</span>.</>}
          intro="We read your answers before the call. Look out for a calendar invite and a short confirmation email."
        />
        <section className="px-4 pb-20 md:px-6">
          <div className="container-x">
            <Button href="/">Back to home</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
