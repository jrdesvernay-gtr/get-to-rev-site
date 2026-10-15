export type Feature = { name: string; body: string };

export function FeatureList({ heading, features }: { heading?: string; features: Feature[] }) {
  return (
    <section className="px-4 py-10 md:px-6">
      <div className="container-x">
        {heading && <h2 className="text-2xl md:text-3xl">{heading}</h2>}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.name} className="rounded-card border border-line bg-white/60 p-6 shadow-soft">
              <h3 className="font-medium text-ink">{f.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
