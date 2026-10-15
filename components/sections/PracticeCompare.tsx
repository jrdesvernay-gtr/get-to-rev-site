import Link from "next/link";

const ROWS = [
  {
    name: "GTM engineering",
    best: "Teams whose outbound depends on manual list-building and templates",
    first: "Outbound plan, $2,500/mo",
    proof: "Healthtech case, Relay, Value-First audits",
    href: "/services/ai-outbound-engineering/",
  },
  {
    name: "AI marketing automation",
    best: "Teams with manual RevOps or content workflows, or invisible in AI answers",
    first: "Free audit, with an AI-search (GEO) review",
    proof: "This site, tracked and published",
    href: "/book-a-call/",
  },
  {
    name: "Growth engineering",
    best: "Teams running Meta, Google or LinkedIn with a thin creative and ops bench",
    first: "GTM + Growth Engineering plan, $8,500/mo",
    proof: "Retargeting inside the healthtech case",
    href: "/services/growth-engineering/",
  },
];

export function PracticeCompare() {
  return (
    <section className="px-4 py-10 md:px-6">
      <div className="container-x overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line text-muted">
              <th className="py-3 pr-4 font-medium">Practice</th>
              <th className="py-3 pr-4 font-medium">Best for</th>
              <th className="py-3 pr-4 font-medium">First step</th>
              <th className="py-3 font-medium">Proof today</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.name} className="border-b border-line align-top">
                <td className="py-4 pr-4 font-medium text-ink">
                  <Link href={r.href} className="hover:text-red">
                    {r.name}
                  </Link>
                </td>
                <td className="py-4 pr-4 text-ink-soft">{r.best}</td>
                <td className="py-4 pr-4 text-ink-soft">{r.first}</td>
                <td className="py-4 text-ink-soft">{r.proof}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
