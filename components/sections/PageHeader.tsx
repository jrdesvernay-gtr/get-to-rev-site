import type { ReactNode } from "react";

export function PageHeader({ eyebrow, h1, intro }: { eyebrow?: string; h1: ReactNode; intro?: ReactNode }) {
  return (
    <section className="px-4 pt-16 pb-10 md:px-6 md:pt-24">
      <div className="container-x">
        {eyebrow && <p className="text-sm font-medium text-red">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">{h1}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-ink-soft">{intro}</p>}
      </div>
    </section>
  );
}
