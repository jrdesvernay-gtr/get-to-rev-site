# Handoff: where the project stands (2026-10-15)

Built in a Claude chat session, now continuing in Claude Code. Read `CLAUDE.md` first (stack, design rules, copy rules), then this file.

## Done
- Next.js 15 static export, Tailwind v4 tokens, all pages: Home (12 sections), Services (hub + 2), Case studies (5), How we work, Pricing, About, Book a call (Calendly), Thank you, Privacy, Blog, six `/for/[industry]` segment pages.
- SEO/AEO: metadata and canonicals, JSON-LD (Organization, WebSite, FAQPage, Person, Service, Article, BlogPosting, BreadcrumbList), sitemap.xml, robots.txt (AI crawlers allowed, staging disallow), llms.txt, RSS.
- Decap CMS config at `/admin/` (needs the OAuth proxy, see README).
- `.github/workflows/deploy.yml`: build, then FTP `out/` to Hostinger. Secrets needed: FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_DIR; variable STAGING=1 for get-to-revenue.com.
- Redirect map (`scripts/redirects.json`) with `.htaccess` generator and a Python checker.
- Client logos in `public/logos` (Manifold ink/white, Relay, TribLIVE). GTR logo PNG.

## Decisions already made (do not reopen)
- Positioning "Type G": fractional GTM engineer for hire. Plans: Outbound $2,500, GTM Engineering $4,500, GTM + Growth Engineering $7,500; 6-month term; free audit entry; $2,500 floor.
- Design: warm sand + near-black ink + ONE red accent, Inter + one italic serif word per headline, pill buttons, floating nav. Not a black site. Real photos of JR only.
- Manifold is named in the flagship case study and the logo strip. Scribeberry, Relay, TribLIVE can be named.
- Home copy is about 1,500 words; keep it that length.
- Hosting: Hostinger Cloud Professional. Build on staging (get-to-revenue.com), switch get-to-rev.com at launch (remove the WordPress site first, back it up, keep the backup 30 days).
- CMS: Decap. Repo: github.com/jrdesvernay-gtr/get-to-rev-site.

## Next steps, in order
1. **Relume layouts.** JR chose "use Relume's layouts". Export from Relume as React (Tailwind), put the unzipped export in `relume/` (do not commit secrets), then replace the layouts in `components/sections/*` with Relume's sections, one component per section, re-skinned with the tokens in `app/globals.css`. Keep copy in `lib/data.ts` and the page files. Drop anything that breaks the design rules (stock photos, a second button style, extra text).
2. Add the FTP secrets and STAGING variable in GitHub, push, confirm the deploy to get-to-revenue.com.
3. Fill the open items below.
4. Launch checklist in `README.md`.

## Open items (need JR)
- JR headshot, Get-To-Rev logo as SVG, Scribeberry wordmark; permission for each client logo.
- Calendly event URL and GTM container (`lib/site.ts`; audit the old GTM-WDS7RSN first).
- Five blog posts: bodies are TODO drafts in `content/blog`. Import from the old site (WordPress export or paste), set `draft: false`. Refresh plan for 3 of them is in `docs/copy-deck.md` (Blog migration).
- Privacy policy text, the Decap OAuth proxy (Cloudflare Worker), the CRM for form leads.

## Reference docs
- `docs/copy-deck.md`: the full Sitemap & Copy Deck (page copy, redirect map, schema table, llms.txt, build plan). The code already carries Home, Services, Case studies, About, How we work, Pricing and Book a call.
- Relume brief (prompts and sitemap): https://claude.ai/code/artifact/b546c179-71e8-4bb7-a4c1-9fe37725a370
