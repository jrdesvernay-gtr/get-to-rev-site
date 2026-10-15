import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./Nav";

export function Footer() {
  return (
    <footer className="bg-ink text-mist">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-[0.95rem] text-mist/70">
            A fractional GTM engineer for hire. AI marketing automation you own, built in your tech stack.
          </p>
          <p className="mt-6 text-sm text-mist/50">{SITE.city}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-mist/50">Pages</p>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {NAV.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>)}
            <li><Link href="/book-a-call/" className="hover:text-white">Book a call</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-mist/50">Elsewhere</p>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            <li><a href={SITE.linkedin} className="hover:text-white" rel="noopener">LinkedIn</a></li>
            <li><a href="/feed.xml" className="hover:text-white">Blog RSS</a></li>
            <li><a href="/llms.txt" className="hover:text-white">llms.txt</a></li>
            <li><Link href="/privacy/" className="hover:text-white">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-sm text-mist/50">© {new Date().getFullYear()} Get-To-Rev. Built to be cited.</div>
      </div>
    </footer>
  );
}
