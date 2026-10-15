import { Section } from "../ui";
import { COMPARE_COLS, COMPARE_ROWS } from "@/lib/data";

export function Comparison() {
  return (
    <Section>
      <h2 className="max-w-4xl text-[2rem] leading-tight md:text-5xl">
        Fractional GTM engineer vs full-time hire vs AI SDR vs <span className="accent">agency</span>
      </h2>
      <p className="mt-5 max-w-2xl text-lg text-ink-soft">
        A fractional GTM engineer gives you senior build capacity and leaves you owning the system. The table compares four options.
      </p>
      <div className="mt-10 overflow-x-auto rounded-[var(--radius-card)] bg-white/70 shadow-soft">
        <table className="w-full min-w-[820px] border-collapse text-left text-[0.95rem]">
          <thead>
            <tr>
              <th className="p-5" />
              {COMPARE_COLS.map((c, i) => (
                <th key={c} className={`p-5 text-base font-medium ${i === 0 ? "bg-red text-white" : ""}`}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((r) => (
              <tr key={r[0]} className="border-t border-line align-top">
                <th scope="row" className="p-5 font-medium">{r[0]}</th>
                {r.slice(1).map((c, i) => (
                  <td key={i} className={`p-5 leading-relaxed ${i === 0 ? "bg-red/5 font-medium" : "text-ink-soft"}`}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-muted">Our view, based on projects we have run; terms vary by vendor.</p>
    </Section>
  );
}
