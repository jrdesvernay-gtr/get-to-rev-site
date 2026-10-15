import type { Metadata } from "next";
import { SITE } from "./site";

export function meta(title: string, description: string, path: string, opts: { noindex?: boolean; type?: "website" | "article" } = {}): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: false } : undefined,
    openGraph: { title, description, url, siteName: SITE.name, type: opts.type ?? "website", locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}
