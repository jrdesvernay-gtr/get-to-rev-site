const ROWS = [
  { task: "Run live campaigns and handle replies", team: "Yes", gtr: "" },
  { task: "Build the multi-agent outbound system", team: "", gtr: "Yes" },
  { task: "Growth engineering", team: "", gtr: "Yes" },
  { task: "AI marketing automation, including AI search", team: "", gtr: "Yes" },
  { task: "CRM setup and attribution", team: "Shared", gtr: "Shared" },
  { task: "Weekly reporting and monitoring", team: "Reviews", gtr: "Yes" },
  { task: "Final say on targets and messaging", team: "Yes", gtr: "" },
];

export function WhoDoesWhat() {
  return (
    <section className="px-4 py-10 md:px-6">
      <div className="container-x">
        <h2 className="text-2xl md:text-3xl">Who does what</h2>
        <p className="mt-2 text-sm text-ink-soft">
          If you have no in-house GTM engineer, Get-To-Rev also runs live campaigns in the Run plan.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-muted">
                <th className="py-3 pr-4 font-medium">Task</th>
                <th className="py-3 pr-4 font-medium">Your team or in-house GTM engineer</th>
                <th className="py-3 font-medium">Get-To-Rev</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.task} className="border-b border-line align-top">
                  <td className="py-4 pr-4 font-medium text-ink">{r.task}</td>
                  <td className="py-4 pr-4 text-ink-soft">{r.team}</td>
                  <td className="py-4 text-ink-soft">{r.gtr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
