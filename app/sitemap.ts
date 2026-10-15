import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getEntries } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/services/", "/services/ai-outbound-engineering/", "/services/growth-engineering/", "/case-studies/", "/how-we-work/", "/pricing/", "/about/", "/blog/", "/book-a-call/", "/privacy/"];
  const urls = [
    ...pages,
    ...getEntries("case-studies").map((e) => `/case-studies/${e.slug}/`),
    ...getEntries("blog").filter((e) => !e.data.draft).map((e) => `/blog/${e.slug}/`),
  ];
  return urls.map((u) => ({ url: `${SITE.url}${u}`, lastModified: new Date() }));
}
