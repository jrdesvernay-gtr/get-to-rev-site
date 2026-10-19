export function CaseStudyChannels({ channels }: { channels: string[] }) {
  return (
    <section className="px-4 pb-4 md:px-6">
      <div className="container-x">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">Channels</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {channels.map((c) => (
            <span
              key={c}
              className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-mist transition-colors hover:bg-red"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
