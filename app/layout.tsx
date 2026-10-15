import type { Metadata } from "next";
import "./globals.css";
import { GtmHead, GtmBody } from "@/components/Analytics";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Fractional GTM Engineer for Hire | AI Marketing Automation", template: "%s" },
  description: SITE.description,
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
  // Staging build (get-to-revenue.com) is noindex. Set the STAGING repo variable to 1.
  robots: process.env.NEXT_PUBLIC_STAGING === "1" ? { index: false, follow: false } : undefined,
};

// Site-wide Organization + WebSite schema. Page-level schema (FAQPage, Service, Article...) is added per page.
const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#org`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/logos/gtr-logo.png`,
      sameAs: [SITE.linkedin],
      address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
      description: SITE.description,
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#site`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GtmHead />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body>
        <GtmBody />
        {children}
      </body>
    </html>
  );
}
