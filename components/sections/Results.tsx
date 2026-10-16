const STATS = [
  { stat: "Meetings booked", value: "21 in 16 weeks", note: "Healthtech case" },
  { stat: "Buyers reached", value: "3,000 across 1,800 companies", note: "Healthtech case" },
  { stat: "Client signups", value: "5 (0.17% of contacts)", note: "Healthtech case" },
  { stat: "Revenue", value: "$1.2M in revenue", note: "As published on the old page" },
  { stat: "LinkedIn reply rate", value: "11.8%", note: "Healthtech case" },
  { stat: "Email reply rate", value: "4.1%", note: "Healthtech case" },
  { stat: "Positive reply rate", value: "22%", note: "Relay" },
  { stat: "Trial signups", value: "7% of 15K contacted, 2.4% trial-to-paid", note: "Scribeberry" },
  { stat: "Free audits sent", value: "753, with an 8.24% reply rate and 13 clients", note: "Value-First audits" },
];

const LOGOS = [
  { name: "Manifold", src: "/logos/manifold-logo-ink.svg", w: 104, h: 24 },
  { name: "Relay", src: "/logos/relay-logo.svg", w: 63, h: 24 },
  { name: "TribLIVE", src: "/logos/triblive-logo.png", w: 103, h: 24 },
];

export function Results() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container-x">
        <h2 className="max-w-3xl text-3xl md:text-4xl">
          A 16-week healthtech outbound program reached 3,000 buyers across 1,800 companies, booked{" "}
          <span className="accent">21 meetings</span> and produced 5 clients.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.stat} className="rounded-card border border-line bg-white/60 p-5 shadow-soft">
              <p className="text-2xl font-medium text-ink">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-ink-soft">{s.stat}</p>
              <p className="mt-1 text-xs text-muted">{s.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-8">
          {LOGOS.map((logo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={logo.name} src={logo.src} alt={logo.name} width={logo.w} height={logo.h} loading="lazy" decoding="async" className="h-6 w-auto opacity-70" />
          ))}
        </div>
      </div>
    </section>
  );
}
