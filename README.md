# get-to-rev-site

Website for [Get-To-Rev](https://get-to-rev.com). Next.js (static export) + Tailwind + Markdown content + Decap CMS, deployed to Hostinger from GitHub.

## Run it locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Edit things
| What | Where |
|---|---|
| Colors, fonts, radius | `app/globals.css` (`@theme`) |
| Page sections | `components/sections/*.tsx` (rebuilt from the Relume export) |
| Page copy | `docs/copy-deck.md` |
| GTM id, Calendly, LinkedIn | `lib/site.ts` |
| Blog posts, case studies | `content/` (or `/admin/` once Decap is set up) |
| Redirects from the old site | `scripts/redirects.json`, then `python3 scripts/make_htaccess.py` |

## Deploy (Hostinger)
Every push to `main` runs `.github/workflows/deploy.yml`: build, then FTP `out/` to Hostinger.

Add these in GitHub, Settings, Secrets and variables, Actions:

| Name | Type | Value |
|---|---|---|
| `FTP_HOST` | secret | FTP hostname from Hostinger (hPanel, Files, FTP Accounts) |
| `FTP_USER` | secret | FTP username |
| `FTP_PASSWORD` | secret | FTP password |
| `FTP_DIR` | secret | Folder for the domain, for example `/domains/get-to-revenue.com/public_html/` |
| `STAGING` | variable | `1` for get-to-revenue.com (noindex). Set to `0` at launch |

### Launch checklist
1. Staging looks right on phone and desktop at get-to-revenue.com.
2. Back up the WordPress site on get-to-rev.com. Remove it from the domain in Hostinger, point the new site's FTP folder at get-to-rev.com.
3. Set `STAGING` to `0` and push. Run `python3 scripts/check_redirects.py https://get-to-rev.com`.
4. Submit `/sitemap.xml` in Google Search Console and Bing Webmaster. Watch the redirect report for two weeks.
5. Keep the WordPress backup for 30 days.

## Decap setup (browser editing at /admin/)
Decap's GitHub login needs a small OAuth proxy. Hostinger static hosting cannot run one, so use a free serverless function (a Cloudflare Worker works).
1. GitHub, Settings, Developer settings, OAuth Apps: create an app with the callback URL `https://<your-proxy>/callback`.
2. Deploy the proxy with the app's client id and secret.
3. Put the proxy address in `public/admin/config.yml` (`base_url`).
4. Open `/admin/`, log in with GitHub. Each save is a commit and triggers a deploy.

Until then, edit the Markdown in `content/` directly, or run `npx decap-server` with `local_backend: true`.
