import Link from "next/link";

export type Plan = { name: string; blurb: string; price: string; term: string; highlight?: boolean };

export function PlansTable({
  heading,
  intro,
  plans,
  footerLink,
}: {
  heading: string;
  intro?: string;
  plans: Plan[];
  footerLink?: { label: string; href: string };
}) {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container-x">
        <h2 className="text-3xl md:text-4xl">
          <span className="accent">{heading}</span>
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-ink-soft">{intro}</p>}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-card border p-6 shadow-soft ${
                plan.highlight ? "border-red bg-white" : "border-line bg-white/60"
              }`}
            >
              <h3 className="text-xl font-medium text-ink">{plan.name}</h3>
              <p className="mt-3 flex-1 text-sm text-ink-soft">{plan.blurb}</p>
              <p className="mt-6 text-2xl font-medium text-ink">{plan.price}</p>
              <p className="text-sm text-muted">{plan.term}</p>
            </div>
          ))}
        </div>
        {footerLink && (
          <Link href={footerLink.href} className="mt-6 inline-block text-sm font-medium text-red">
            {footerLink.label} →
          </Link>
        )}
      </div>
    </section>
  );
}
