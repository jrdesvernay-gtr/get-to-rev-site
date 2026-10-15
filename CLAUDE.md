# get-to-rev-site

Marketing site for Get-To-Rev (get-to-rev.com): a fractional GTM engineer for hire, Seattle. Owner: JR (Jean-Renaud Desvernay), who codes in Python and works directly and concisely. Prefer doing the work over handing off steps.

## Stack
- Next.js 15 (App Router), TypeScript, **static export** (`output: 'export'`, `trailingSlash: true`). No server code, no API routes.
- Tailwind CSS v4. Design tokens live in `app/globals.css` under `@theme` (colors, fonts, radius, shadow). Change the look there.
- Content: Markdown with front matter in `content/blog` and `content/case-studies`, loaded by `lib/content.ts`. Edited in the browser through Decap CMS at `/admin/` (`public/admin/config.yml`).
- Shared copy blocks (stats, plans, FAQ, comparison, segments) in `lib/data.ts`. Site constants (GTM id, Calendly URL, LinkedIn) in `lib/site.ts`.
- One component per page section in `components/sections/`. Pages in `app/` only assemble sections.
- Hosting: Hostinger Cloud Professional, deployed by `.github/workflows/deploy.yml` (build, then FTP `out/`). Staging: get-to-revenue.com. Production: get-to-rev.com after cutover.

## Design rules (do not drift)
- Warm sand background `#EFE6D6` with a faint dot grid, near-black ink `#15191B`, ONE accent red `#CB3522` (buttons only; the brighter logo red is for the logo only). Off-white `#EDF5EC` on dark bands. Not a fully black site.
- Inter for text, an italic serif (Instrument Serif) for exactly ONE accent word per headline (`<span className="accent">`).
- Pill buttons, floating rounded nav, soft layered shadows, no hard borders, no gradients, no emoji, no stock photos. Real photos of people only.
- Max content width about 1,300px. Mobile first; tables scroll on a phone.
- References: appliedaisystems.io (look and feel), genesysgrowth.com (proof and results), fullbelly.ai (short, clear copy).

## Copy and SEO/AEO rules
- Plain words, short sentences, no hype. One H1 per page. The first sentence under each heading answers it.
- One call to action: "Book a call" (`/book-a-call/`). No competing button styles.
- Home copy is about 1,500 words. Keep the length. Do not add sections without removing words.
- FAQ, comparison table and plans are real HTML, not images. FAQPage schema comes from `components/Faq.tsx`.
- Title under 60 characters, meta description under 155, canonical on every page (`lib/seo.ts`).
- Every page needs the right JSON-LD: Organization and WebSite (layout), FAQPage, Person, Service, Article or BlogPosting, BreadcrumbList.
- Facts: pricing is Outbound $2,500, GTM Engineering $4,500, GTM + Growth Engineering $7,500 a month, 6-month term, free audit first, floor $2,500. Client owns everything under an MIT license. Sending infrastructure passed through at cost. Flat fee for paid media, never a percentage of spend.
- Named clients: Manifold (flagship healthtech case), Scribeberry, Relay, TribLIVE. Show only cleared logos.

## Commands
- `npm run dev` for local preview, `npm run build` for the static export into `out/`.
- `python3 scripts/make_htaccess.py` after editing `scripts/redirects.json` (writes `public/.htaccess`).
- `python3 scripts/check_redirects.py https://get-to-rev.com` after cutover (needs `requests`).
- Decap needs an OAuth proxy for the GitHub login (see README). Use `local_backend: true` plus `npx decap-server` to edit locally.

## Open items
- Real photo of JR (`components/sections/Operator.tsx`, `app/about/page.tsx`), logo as SVG (`public/logos/gtr-logo.png` is a PNG).
- Calendly event URL and GTM container (`lib/site.ts`); audit the old container GTM-WDS7RSN first.
- Blog post bodies: the 5 posts in `content/blog` are drafts with TODO bodies. Import from the old site, then set `draft: false`.
- Privacy policy text (`app/privacy/page.tsx`).
- Scribeberry wordmark (text placeholder in `components/sections/LogoStrip.tsx`); client permission for each logo.
- CRM for form leads is not chosen; Calendly handles booking for now.
