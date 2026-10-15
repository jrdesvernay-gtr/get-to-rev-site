import Link from "next/link";

export function LogoStrip() {
  return (
    <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
      <Link href="/case-studies/healthtech-ai-saas-outbound/" aria-label="Manifold case study">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/manifold-logo-ink.svg" alt="Manifold" className="h-7 w-auto" />
      </Link>
      <span className="text-lg font-semibold tracking-tight text-ink/70">Scribeberry</span>
      <span className="flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/relay-logo.svg" alt="Relay" className="h-7 w-auto grayscale" />
      </span>
      <span className="flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/triblive-logo.png" alt="TribLIVE" className="h-7 w-auto grayscale" />
      </span>
    </div>
  );
}
