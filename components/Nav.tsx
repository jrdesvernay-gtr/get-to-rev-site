import Link from "next/link";
import { NAV } from "@/lib/site";
import { Button } from "./ui";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Get-To-Rev home">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-red text-[0.8rem] font-semibold text-white">G</span>
      <span className={`text-[1.05rem] font-semibold tracking-tight ${light ? "text-mist" : "text-ink"}`}>Get-To-Rev</span>
    </Link>
  );
}

export function Nav() {
  return (
    <div className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between rounded-full bg-white/80 px-5 py-2.5 shadow-soft ring-1 ring-ink/5 backdrop-blur-md">
        <Logo />
        <ul className="hidden items-center gap-7 text-[0.9rem] text-ink-soft lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="transition-colors hover:text-ink">{n.label}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block"><Button>Book a call</Button></div>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full px-4 py-2 text-sm font-medium ring-1 ring-ink/15">Menu</summary>
          <div className="absolute right-0 mt-3 w-64 rounded-3xl bg-white p-4 shadow-soft">
            <ul className="flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.href}><Link href={n.href} className="block rounded-xl px-3 py-2.5 hover:bg-sand">{n.label}</Link></li>
              ))}
            </ul>
            <div className="mt-3"><Button>Book a call</Button></div>
          </div>
        </details>
      </nav>
    </div>
  );
}
