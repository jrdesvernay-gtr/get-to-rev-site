import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GtmHead, GtmBody } from "@/components/Analytics";
import { JsonLd } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Fractional GTM Engineer for Hire | AI Marketing Automation", template: "%s" },
  description: SITE.description,
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
  // Staging build (get-to-revenue.com) is noindex. Set the STAGING repo variable to 1.
  robots: process.env.NEXT_PUBLIC_STAGING === "1" ? { index: false, follow: false } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GtmHead />
        <JsonLd
          data={{
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
          }}
        />
      </head>
      <body>
        <GtmBody />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
