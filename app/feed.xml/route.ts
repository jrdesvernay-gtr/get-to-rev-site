import { getEntries } from "@/lib/content";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const posts = getEntries("blog").filter((p) => !p.data.draft);
  const items = posts
    .map((p) => `<item><title>${esc(p.data.title)}</title><link>${SITE.url}/blog/${p.slug}/</link><guid>${SITE.url}/blog/${p.slug}/</guid><pubDate>${new Date(p.data.date).toUTCString()}</pubDate><description>${esc(p.data.description || "")}</description></item>`)
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Get-To-Rev Blog</title><link>${SITE.url}/blog/</link><description>${esc(SITE.description)}</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
