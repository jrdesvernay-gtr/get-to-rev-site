# Builder.io (visual page editing)

Decap stays for blog and case studies. Builder edits page sections visually (edit text in place, reorder, add or remove sections).

## Status
Code is in the repo but NOT wired into `app/page.tsx` yet: with the SDK on a page, the homepage JS grew from 110 kB to 179 kB in a test build. Wire it in only after Builder is connected so the cost can be measured and reduced.

- `lib/builder.ts`, `lib/builder-config.ts`: build-time fetch, public key from `NEXT_PUBLIC_BUILDER_API_KEY`.
- `components/builder/`: `BuilderPage` (server), `BuilderContent` (SDK), `EditorGate`, `registry.ts` (sections editors can use: Hero, Cta so far).
- `workers/decap-oauth/index.js`: `/builder-publish` webhook. It commits `.builder-publish`, so the normal push deploy rebuilds the static site.

## Setup (JR)
1. Create a Builder.io space. Copy the Public API Key.
2. Models: create a Page model named `page`. Set its Preview URL to `https://get-to-revenue.com/`.
3. Add `NEXT_PUBLIC_BUILDER_API_KEY=<key>` to `.env.production`.
4. Cloudflare Worker (`gtr-decap-oauth`): add secrets `WEBHOOK_SECRET` (random string) and `GITHUB_TOKEN` (fine-grained PAT, Contents read/write on this repo), then `npx wrangler deploy` in `workers/decap-oauth`.
5. Builder, Settings, Webhooks: on publish, POST to `https://<worker>/builder-publish?secret=<WEBHOOK_SECRET>`.

## Wire a page (Claude Code does this)
In `app/<page>/page.tsx`: `const entry = await fetchBuilderPage("/<path>/")`, then wrap the section list in `<BuilderPage urlPath="/<path>/" entry={entry}>`. Keep metadata and JSON-LD in code. The code layout renders whenever Builder has no published entry for the path.

## Open questions to settle when wiring
- Measure JS cost (target: homepage stays near 110 kB; consider the RSC-friendly Builder SDK).
- FAQPage schema: if the FAQ is edited in Builder, generate the schema from the same data.
- Staging stays noindex; Builder publishes only rebuild the site.
