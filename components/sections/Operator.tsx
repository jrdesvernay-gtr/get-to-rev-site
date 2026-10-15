export function Operator() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container-x flex flex-col gap-8 rounded-card border border-line bg-white/60 p-8 shadow-soft md:flex-row md:items-center md:p-12">
        {/* TODO: replace with JR's real headshot (open item, see CLAUDE.md) */}
        <div className="flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-full bg-sand-deep text-3xl font-medium text-ink">
          JR
        </div>
        <div>
          <p className="text-sm font-medium text-red">Meet the operator</p>
          <h2 className="mt-2 text-2xl md:text-3xl">Jean-Renaud Desvernay</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Jean-Renaud Desvernay (JR) is the fractional GTM engineer behind Get-To-Rev. He has spent 15 years
            helping early-stage startups grow, including agile marketing and full-funnel media buying at Airbnb, and
            has a background in software development. He now builds go-to-market systems for US startups in
            healthtech and AI SaaS, combining outbound automation, paid media and CRM workflows with tools such as
            Clay, HubSpot and the Claude API. He works with Pierre, creative director, and Ursula, content manager.
          </p>
          <a
            href="https://www.linkedin.com/in/jrdesvernay/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-red"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
