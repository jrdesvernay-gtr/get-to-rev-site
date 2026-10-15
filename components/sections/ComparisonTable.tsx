const COLS = ["Fractional GTM engineer", "Full-time hire", "AI SDR platform", "Agency"];

const ROWS = [
  {
    point: "Time to first results",
    values: [
      "First campaigns after a 2-3 week warmup; first system in production in about 2 months",
      "Recruit, then ramp",
      "Fast to start, limited by the platform",
      "Varies by agency",
    ],
  },
  {
    point: "Who owns the system",
    values: ["You", "You", "The vendor", "Usually the agency"],
  },
  {
    point: "How cost works",
    values: ["From $2,500 a month on a 6-month term", "Salary, benefits and tools", "A subscription", "A retainer, often for activity"],
  },
  {
    point: "Channels",
    values: ["Email, LinkedIn and paid media, built to your brief", "Whatever the hire can build and run", "Mostly email", "Depends on the agency"],
  },
  {
    point: "Risk if it does not work",
    values: [
      "A short initial term",
      "Salary and ramp already spent",
      "Subscription spent, system stays with the vendor",
      "Retainer spent, system stays with the agency",
    ],
  },
];

export function ComparisonTable() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container-x">
        <h2 className="max-w-3xl text-3xl md:text-4xl">
          A fractional GTM engineer vs a <span className="accent">full-time hire</span>, an AI SDR and an agency.
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          A fractional GTM engineer gives you senior build capacity without a full-time hire and leaves you owning
          the system; the table compares the four options on five points.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-muted">
                <th className="py-3 pr-4 font-medium"> </th>
                {COLS.map((c) => (
                  <th key={c} className="py-3 pr-4 font-medium text-ink">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.point} className="border-b border-line align-top">
                  <td className="py-4 pr-4 font-medium text-ink">{row.point}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="py-4 pr-4 text-ink-soft">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted">Our view, based on projects we have run; terms vary by vendor.</p>
      </div>
    </section>
  );
}
