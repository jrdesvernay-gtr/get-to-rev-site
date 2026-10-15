import Link from "next/link";

const PRACTICES = [
  {
    name: "GTM engineering",
    body: "A production multi-agent outbound system on the Claude API. It sources accounts, enriches them, assembles a signal packet at send time, writes individual outreach, and builds the campaigns in your sequencer.",
    href: "/services/ai-outbound-engineering/",
    label: "Learn more",
  },
  {
    name: "AI marketing automation",
    body: "RevOps and content workflows automated end to end, including AI search visibility (GEO) so AI answer engines can find and cite you.",
    href: "/services/",
    label: "See all services",
  },
  {
    name: "Growth engineering",
    body: "The same agent pattern applied to paid media: ad creative, campaign builds and reporting across Meta, Google and LinkedIn, with audiences built from the same signals as outbound, plus a LinkedIn content engine. Flat fee, never a percentage of spend.",
    href: "/services/growth-engineering/",
    label: "Learn more",
  },
];

export function Practices() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl md:text-4xl">
          A fractional GTM engineer builds and runs the automation behind your go-to-market without a{" "}
          <span className="accent">full-time hire</span>.
        </h2>
        <p className="mt-3 text-ink-soft">Ours comes in three practices.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PRACTICES.map((p) => (
            <div key={p.name} className="flex flex-col rounded-card border border-line bg-white/60 p-6 shadow-soft">
              <h3 className="text-lg font-medium text-ink">{p.name}</h3>
              <p className="mt-3 flex-1 text-sm text-ink-soft">{p.body}</p>
              <Link href={p.href} className="mt-4 text-sm font-medium text-red">
                {p.label} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
