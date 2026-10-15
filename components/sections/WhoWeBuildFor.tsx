const ROWS = [
  {
    segment: "Healthtech SaaS",
    struggle: "A small, specific buyer list and founder-led selling",
    build: "ICP mapping, outbound, retargeting and lifecycle automation",
    proof: "Healthtech case study",
  },
  {
    segment: "Martech SaaS",
    struggle: "A crowded category where outreach sounds like everyone else's",
    build: "Signal-based outbound with individual copy, and CRM attribution",
    proof: "Book a call",
  },
  {
    segment: "Wellness",
    struggle: "Many small buyers that are hard to reach one by one",
    build: "Outbound and paid campaigns built from the same account signals",
    proof: "Book a call",
  },
  {
    segment: "Edtech",
    struggle: "Long buying cycles with several stakeholders",
    build: "Account-based outbound and retargeting for each stakeholder",
    proof: "Book a call",
  },
  {
    segment: "Media agencies",
    struggle: "Delivery capacity for client accounts",
    build: "White-label GTM engineering behind your client work",
    proof: "Book a call",
  },
  {
    segment: "Publishers",
    struggle: "Selling ad and sponsorship inventory to local businesses",
    build: "Outbound that offers a free ad placement from your own inventory and tracks results",
    proof: "TribLIVE",
  },
];

export function WhoWeBuildFor() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl md:text-4xl">
          Who we <span className="accent">build</span> for.
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          We build for SaaS companies in healthtech, martech, wellness and edtech, and for media agencies and
          publishers.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-muted">
                <th className="py-3 pr-4 font-medium">Segment</th>
                <th className="py-3 pr-4 font-medium">What they struggle with</th>
                <th className="py-3 pr-4 font-medium">What we build</th>
                <th className="py-3 font-medium">Proof</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.segment} className="border-b border-line align-top">
                  <td className="py-4 pr-4 font-medium text-ink">{row.segment}</td>
                  <td className="py-4 pr-4 text-ink-soft">{row.struggle}</td>
                  <td className="py-4 pr-4 text-ink-soft">{row.build}</td>
                  <td className="py-4 text-ink-soft">{row.proof}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
