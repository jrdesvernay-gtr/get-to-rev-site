import type { Metadata } from "next";
import Script from "next/script";

// Decap CMS bootstrap, served as a real Next.js route so Hostinger's
// static file server (which has no directory-index fallback for public/)
// resolves /admin/ directly instead of only /admin/index.html.
// Decap auto-discovers /admin/config.yml next to this page.
export const metadata: Metadata = { title: "Get-To-Rev content", robots: { index: false, follow: false } };

export default function Admin() {
  return (
    <>
      <Script src="https://unpkg.com/decap-cms@3.3.3/dist/decap-cms.js" strategy="afterInteractive" />
    </>
  );
}
