"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto w-full px-4 md:px-6">
      <div className="container-x">
        <div className="flex items-center justify-between gap-4 rounded-full border border-line bg-white/80 px-4 py-2 shadow-soft backdrop-blur md:px-6">
          <Link href="/" className="flex items-center gap-2 text-base font-semibold text-ink">
            {SITE.name}
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-ink-soft hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/book-a-call/"
              className="inline-flex items-center justify-center rounded-full bg-red px-5 py-2 text-sm font-medium text-mist hover:bg-red-dark"
            >
              Book a call
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
          </button>
        </div>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-3xl border border-line bg-white/95 p-4 shadow-soft lg:hidden">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-ink-soft hover:bg-sand hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book-a-call/"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-red px-5 py-2 text-sm font-medium text-mist"
            >
              Book a call
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
