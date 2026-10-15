import Link from "next/link";
import type { ReactNode } from "react";

export function Button({ href = "/book-a-call/", children = "Book a call", variant = "primary" }: { href?: string; children?: ReactNode; variant?: "primary" | "ghost" | "light" }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-medium transition-all duration-200 whitespace-nowrap";
  const styles = {
    primary: "bg-red text-white shadow-soft hover:bg-red-dark hover:-translate-y-0.5",
    ghost: "bg-transparent text-ink ring-1 ring-ink/20 hover:ring-ink/50",
    light: "bg-sand text-ink hover:bg-white",
  }[variant];
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      {variant === "primary" && <span aria-hidden>→</span>}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[0.8rem] font-medium uppercase tracking-[0.14em] text-muted">{children}</p>;
}

export function Section({ id, children, tone = "plain", className = "" }: { id?: string; children: ReactNode; tone?: "plain" | "dark" | "card"; className?: string }) {
  const bg = tone === "dark" ? "bg-ink text-mist" : "";
  return (
    <section id={id} className={`py-16 md:py-24 ${bg} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[var(--radius-card)] bg-white/70 p-7 shadow-soft backdrop-blur-sm ${className}`}>{children}</div>;
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function PageHeader({ eyebrow, title, accent, intro }: { eyebrow?: string; title: string; accent?: string; intro?: string }) {
  return (
    <header className="container-x pt-36 pb-10 md:pt-44 md:pb-14">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className="mt-4 max-w-4xl text-[2.6rem] leading-[1.02] md:text-[4.25rem]">
        {title} {accent && <span className="accent">{accent}</span>}
      </h1>
      {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>}
    </header>
  );
}
