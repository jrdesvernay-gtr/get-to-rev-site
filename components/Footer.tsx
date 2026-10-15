import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 px-4 pb-10 md:px-6">
      <div className="container-x rounded-[2rem] bg-ink px-6 py-12 text-mist md:px-10 md:py-16">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div>
            <p className="text-lg font-semibold">{SITE.name}</p>
            <p className="mt-2 max-w-xs text-sm text-mist/70">{SITE.tagline}</p>
          </div>
          <nav className="grid grid-cols-2 gap-3 text-sm md:flex md:gap-8">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="text-mist/80 hover:text-mist">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 text-sm text-mist/80">
            <a href={`mailto:${SITE.email}`} className="hover:text-mist">
              {SITE.email}
            </a>
            <a href={SITE.linkedin} className="hover:text-mist" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span>{SITE.city}</span>
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-mist/15 pt-6 text-xs text-mist/60 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <Link href="/privacy/" className="hover:text-mist">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
