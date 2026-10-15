import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

// Staging (get-to-revenue.com) is protected by a noindex build flag; see README.
export default function robots(): MetadataRoute.Robots {
  const staging = process.env.NEXT_PUBLIC_STAGING === "1";
  if (staging) return { rules: [{ userAgent: "*", disallow: "/" }] };
  const ai = ["GPTBot", "OAI-SearchBot", "PerplexityBot", "ClaudeBot", "Google-Extended"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/thank-you/", "/admin/"] },
      ...ai.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/thank-you/"] })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
