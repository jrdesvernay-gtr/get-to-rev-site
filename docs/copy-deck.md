
# get-to-rev.com — Sitemap & Copy Deck (Type G)
 · 

## Decisions and open items
The new site sells Type G only and the five blog posts migrate; every price and offer detail is a placeholder until you finalize it.
Item
 | Status
 | Note
 | 
Positioning
 | Locked
 | H1: Fractional GTM Engineer For Hire. Subline: GTM engineering, AI marketing automation and Growth Engineering. Audience: SaaS in healthtech, martech, wellness and edtech, plus media agencies and publishers. Home, Services, Case studies, About, the blog plan and the build spec are aligned to it.
 | 
Blog
 | Locked
 | All 5 posts move to /blog/ with 301s (see Redirect map).
 | 
Pricing and offer
 | Placeholder
 | Three monthly plans: Outbound $2,500, GTM Engineering $4,500, GTM + Growth Engineering $7,500. Floor is $2,500 a month. Term is 6 months and the entry offer is a free audit. Plan details are drafted from the GTM Agency and Growth Today offers (see Offer benchmark) and open to your edits.
 | 
Client naming
 | Locked
 | Name Manifold (an AI-powered clinical research platform) in the flagship case study, on Home and in the logo strip. Scribeberry and TribLIVE can be named. Logo sources are in Brand assets and logos.
 | 
"$1.2M" figure
 | Resolved
 | Keep as published on the old page: $1.2 million in revenue.
 | 
"11.8% reply"
 | Resolved
 | Keep, labeled as the LinkedIn reply rate, with the 4.1% email reply rate beside it.
 | 
Signup rate
 | Resolved
 | Use 0.17% (5 signups from 3,000 contacts), not the old page's 0.15%.
 | 
Relay "22% positive reply"
 | Resolved
 | Keep.
 | 
"Featured on" logo bar
 | Drop
 | Dropped for now. The old plans include a 350-500 word article placed on 100+ news sites, so the logos read as earned press.
 | 
Team photos
 | Keep for now
 | Revisit before launch: the Content Manager image file looks AI-generated (its filename says so).
 | 
"25+ happy clients", "30+ years combined"
 | Updated
 | The old "90+" becomes "25+". Keep "30+ years combined".
 | 
Old case studies and testimonials (Lullify, Ugonnafish, Esler, Visa Pathway)
 | Keep
 | Migrate as case studies (see Redirect map). The healthtech flagship leads the index.
 | 
Paid ads and GEO practices
 | Keep
 | Paid ads is being automated the same way as GTM engineering and is named Growth Engineering in the sitemap. GEO sits under AI marketing automation. The only proof on file is retargeting (Google RLSA, LinkedIn, Meta) inside the life-science case.
 | 
Sitemap scope
 | Resolved
 | Both pages are out. GEO sits under AI marketing automation on the services hub, and healthtech is covered by its tile on Home and the case study. Their copy is removed from this deck (it stays in the doc history).
 | 

## Sitemap
The new site is 10 static pages plus two CMS collections (a list page and a template each), small enough to build and QA inside the 10-hour budget.
URL
 | Page
 | Job of the page
 | Build type
 | 
/
 | Home
 | Say what Type G is, show proof, route to a call
 | Static
 | 
/services/
 | Services hub
 | Compare the practices, link to each
 | Static
 | 
/services/ai-outbound-engineering/
 | AI outbound engineering
 | Multi-agent outbound build and run
 | Static
 | 
/services/growth-engineering/
 | Growth engineering (paid ads)
 | Ad creative and campaign ops stack
 | Static
 | 
/case-studies/
 | Case studies index
 | Proof library
 | CMS collection list
 | 
/case-studies/[slug]
 | Case study
 | One story, metrics, stack, lessons
 | CMS template
 | 
/how-we-work/
 | How we work
 | Audit, build, run; what the client owns
 | Static
 | 
/pricing/
 | Pricing
 | Published floor and engagement shape (placeholders)
 | Static
 | 
/about/
 | About
 | Founders, background, why the vertical focus
 | Static
 | 
/blog/
 | Blog index
 | Topic hub, RSS, category filter
 | CMS collection list
 | 
/blog/[slug]
 | Blog post
 | Article with author, date, FAQ and schema
 | CMS template
 | 
/book-a-call/
 | Book a call
 | Calendly inline embed plus a short qualifier
 | Static
 | 
/thank-you/
 | Thank you
 | Post-booking confirmation, noindex
 | Static
 | 
/privacy/
 | Privacy
 | Legal
 | Static
 | 
Machine-readable files: /sitemap.xml, /robots.txt, /llms.txt, and a /rss.xml feed for the blog (confirm the exact feed path in Webflow before you publish the redirect from /feed/).
CMS collections: Case studies (title, slug, client label, industry, stage, challenge, approach, stack, 3-6 stat fields, quote, related service, published date) and Blog posts (title, slug, author, date, updated date, summary, body, category, FAQ items, related service).

## Redirect map (old to new)
Every old URL below gets a 301 before DNS cutover; the old WordPress sitemaps list 13 pages, 5 posts and 5 portfolio items.
Old URL
 | New destination
 | Note
 | 
/
 | /
 | Keep
 | 
/gtm-engineering-plan/
 | /services/ai-outbound-engineering/
 | Old $4,499 flat-rate page, replaced
 | 
/gtm-engineering/
 | /services/ai-outbound-engineering/
 | Linked from the old home page, not in the WP sitemap
 | 
/fractional-cmo-plans/
 | /services/
 | Fractional CMO offer retired
 | 
/our-plans/
 | /services/
 | Linked from the old home page, not in the WP sitemap; check it resolves today
 | 
/guest-posting-services/
 | /services/
 | Backlinks service dropped. If Search Console shows no traffic or links, use 410 instead
 | 
/order-guest-posts/
 | /services/
 | Same as above
 | 
/hire-our-growth-team/
 | /book-a-call/
 | Was the old CTA target
 | 
/our-work/
 | /case-studies/
 |  | 
/portfolio/
 | /case-studies/
 | Portfolio archive
 | 
/portfolio/life-science-saas-use-case/
 | /case-studies/healthtech-ai-saas-outbound/
 | Flagship case, rewritten below. Slug is a proposal
 | 
/portfolio/lullify/
 | /case-studies/lullify/
 | Migrated as a case study (consumer app)
 | 
/portfolio/ugonnafish/
 | /case-studies/ugonnafish/
 | Migrated as a case study (booking startup)
 | 
/portfolio/esler/
 | /case-studies/esler/
 | Migrated as a case study (ESL classes)
 | 
/portfolio/visa-pathway/
 | /case-studies/visa-pathway/
 | Migrated as a case study (immigration consulting)
 | 
/about-get-to-revenue/
 | /about/
 |  | 
/careers/
 | /about/
 | Unless you are hiring contractors; then keep a /careers/ page
 | 
/privacy-policy/
 | /privacy/
 | Or keep the old slug and skip this row
 | 
/thank-you/
 | /thank-you/
 | Keep, mark noindex
 | 
/sitemap_html/
 | /
 | Old HTML sitemap
 | 
/blog/
 | /blog/
 | Keep
 | 
/what-is-growth-marketing/
 | /blog/what-is-growth-marketing/
 | Posts moved under /blog/
 | 
/how-to-get-started-in-growth-marketing/
 | /blog/how-to-get-started-in-growth-marketing/
 |  | 
/fractional-marketing-manager-vs-in-house-marketing-manager/
 | /blog/fractional-marketing-manager-vs-in-house-marketing-manager/
 |  | 
/the-cost-effectiveness-of-hiring-a-growth-marketing-team/
 | /blog/the-cost-effectiveness-of-hiring-a-growth-marketing-team/
 |  | 
/podcast-on-fractional-cmo-insights-and-go-to-market-strategies/
 | /blog/podcast-on-fractional-cmo-insights-and-go-to-market-strategies/
 |  | 
/category/* and /tag/*
 | /blog/
 | WordPress taxonomy archives exist in the old sitemap
 | 
/feed/
 | New blog RSS URL
 | Keep subscribers; confirm the Webflow feed path first
 | 
/wp-sitemap.xml
 | /sitemap.xml
 |  | 
After cutover, loop this table with a script and assert each old URL returns a 301 and the destination returns a 200.

## Reuse vs rewrite
Almost all of the old copy is written for the "affordable fractional CMO" offer; what carries over is the life-science case study, the four consumer case studies, the stack-ownership idea, all three bios and the Vimeo video.
Old element
 | Decision
 | How
 | 
H1 "Fractional CMO For Hire", "unlimited tasks", "starting at $4,499/mo"
 | Rewrite
 | New H1 is "Fractional GTM Engineer For Hire" (see Decisions). The Home section still needs aligning to it
 | 
SEO title "Affordable Fractional CMO Service"
 | Rewrite
 | New title follows the Fractional GTM Engineer positioning. The Home section still needs aligning to it
 | 
Plan table (Growth, Launch, Discover, GTM $4,499), 5-day and 2-day trials
 | Drop
 | Replaced by the three plans on /pricing/
 | 
"Featured on" logo bar
 | Drop
 | See Decisions
 | 
25+ growth-marketing tasks (ASO, push notifications, display RTB, influencer, backlinks)
 | Drop
 | Off-positioning
 | 
GTM engineering capability list (ICP, sourcing and enrichment, sequencing, CRM and attribution, audience sync)
 | Reuse
 | Becomes the deliverables list on the practice pages
 | 
"Keep your tech stack, we'll just plug in"
 | Reuse the idea
 | Reworded as "built in your tech stack, owned by you"
 | 
"How it works" (book a call, roadmap, launch)
 | Rewrite
 | Audit, build, run (How we work)
 | 
Life-science SaaS case study
 | Reuse, rewrite
 | Flagship case. Its three lessons (model cost, company verification, founder involvement) reuse almost verbatim
 | 
Lullify, Ugonnafish, Esler, Visa Pathway cases and testimonials
 | Keep
 | Migrate as case studies (see Redirect map). The healthtech flagship leads the index
 | 
"Up to 70% less than an in-house team"
 | Replace
 | "A team for the price of one hire" plus the backlog the hire cannot reach
 | 
"Call us 24/7", "all-day live chat"
 | Drop
 | Replaced by a weekly working session and a shared channel
 | 
Jean bio (Airbnb, 15 years, healthtech and AI SaaS, Clay, HubSpot)
 | Reuse, tighten
 | About section
 | 
Pierre and Ursula bios
 | Keep
 | Keep both. Photos per Decisions
 | 
"25+ happy clients", "30+ years combined"
 | Keep
 | "90+" updated to "25+"
 | 
Vimeo video labeled "B2B-SaaS"
 | Keep
 | Placement to be set in the Home section
 | 
Footer "Fractional Marketing Team ... ultracompetitive costs", copyright 2024
 | Rewrite
 | One-line Type G descriptor, 2026
 | 
Discord and Wellfound links
 | Replace
 | Replace with a Slack channel link and LinkedIn
 | 
5 blog posts
 | Migrate
 | Decisions in the blog section
 | 

## Homepage structure
The homepage runs in 12 sections, in the order below, with proof right under the hero and every section opening with an answer a search or AI engine can quote.

### Sections
Titles are written as the question or claim a buyer would search, not "Why us" or "Our services". The system diagram, client quotes and blog strip from the first proposal are not on the home page; client quotes stay with the case studies.
#
 | Section title
 | What it says
 | Pattern borrowed from
 | 
1
 | Hero: Fractional GTM Engineer For Hire
 | H1, a subline with the three practices, an audience eyebrow, one Book a call button, and a trust line under it. The opening paragraph states what you build, for whom, and that the client owns it.
 | fullbelly (audience eyebrow), Outbound Catalyst (audience line, one CTA)
 | 
2
 | Results from the work
 | Stat tiles right under the hero: 21 meetings in 16 weeks, 3,000 buyers reached, 5 clients, $1.2M in revenue, reply rates.
 | Outbound Catalyst (big numbers), Telescope (stats under hero)
 | 
3
 | What a fractional GTM engineer builds
 | Three cards: GTM engineering, AI marketing automation, Growth Engineering, each linked.
 | Applied AI (one card per offering)
 | 
4
 | Why most AI marketing stacks stall
 | Three pains in one line each: tools nobody can run, agencies that build tables and vanish, rented pipeline.
 | fullbelly ("The gap"), Applied AI (problem statement)
 | 
5
 | Healthtech case study
 | An excerpt in the old site's format: label, headline, short summary, and a Read the case study button.
 | Old get-to-rev.com case study block
 | 
6
 | Who we build for
 | Six tiles: healthtech, martech, wellness, edtech, media agencies, publishers.
 | Outbound Catalyst (pick-your-situation)
 | 
7
 | Audit, build, run
 | Three steps, each ending in a "You get:" line.
 | Applied AI ("You get"), fullbelly ("You walk out with")
 | 
8
 | Fractional GTM engineer vs full-time hire vs AI SDR vs agency
 | A comparison table on five points, written as our view.
 | Outbound Catalyst ("The honest comparison"), fullbelly
 | 
9
 | Plans
 | Audit, Build and Run, with a published floor. All figures are tokens until finalized.
 | Outbound Catalyst (floor in the FAQ), fullbelly (price in the hero)
 | 
10
 | Meet the operator
 | Photo, short bio, LinkedIn link, Person schema.
 | fullbelly (founder section)
 | 
11
 | FAQ
 | 10 questions, answer in the first sentence, FAQPage schema.
 | Outbound Catalyst and fullbelly FAQs
 | 
12
 | Closing call to action
 | "Tell us what your pipeline needs built." One button and the floor line.
 | Telescope and Outbound Catalyst (repeat the single CTA)
 | 
Header: logo, five links (Services, Case studies, Pricing, Blog, About) and one button (Book a call). Footer: the same links, the three service pages, contact, LinkedIn and Slack, privacy, 2026 copyright.

### SEO and AEO rules for the homepage
Eight rules, all aimed at making every section quotable on its own and the page clearly about one entity. The conversion figures below come from vendor blogs, so treat them as directional.
Lead each section with the answer. Put the answer in the first sentence under the heading, and make every block read correctly if an engine lifts it out alone (Lean Labs, AirOps).

Write headings as the questions buyers ask, and do not rotate synonyms for the same term. Name the entity in full on first reference: "Get-To-Rev", not "we" (AirOps, SearchBloom).

Keep answers in the visible page HTML. Avoid answers that exist only behind an unexpanded accordion (Lean Labs).

Treat the homepage as an entity declaration. Organization schema on the homepage, Person schema for the operator, and identical facts (name, services, price floor) on the site and LinkedIn, because conflicting facts make engines distrust all of them (Gupta).

Mark up the FAQ, but keep expectations modest. FAQ markup must match visible text and carry complete answers (Superblog). One source reports Google removed FAQ rich results on May 7, 2026, while Bing, Perplexity and ChatGPT can still parse the markup (AI Growth Agent); verify before you rely on it. Schema helps pages that are already retrievable; it does not make a page retrievable.

Use a comparison table for "vs" and "best" queries, so engines have rows to lift (Gupta).

One primary call to action, a short nav, proof under the button. Keep nav under five links and one button color, with named testimonials or stats directly beneath the hero CTA; one analysis reports a 68% conversion lift for proof placed there (SaaS Hero).

Keep headings and schema consistent. AirOps reports pages with a clean heading hierarchy and aligned schema earned 2.8 times more AI citations than poorly structured ones (AirOps).


### What the four reference sites do
Outbound Catalyst and fullbelly are the closest models for copy structure; Applied AI is the closest in shape; Telescope is a software product, so borrow its proof placement, not its offer.
Site
 | Hero formula
 | Section order
 | Copy this
 | Skip this
 | 
Outbound Catalyst
 | Outcome headline ("Revenue systems built for scale."), an audience line (B2B tech companies selling into Europe), and a "Book a 20-min call" button
 | Client logo strip, two-question selector, market map, five-step process, quote scoping, three big-number case cards, founder quotes with metrics, honest comparison table, partner badges, FAQ, CEO quote, closing call
 | Comparison table against an SDR hire, an AI SDR, a cold-email agency and DIY; the price floor stated in the FAQ ("usually start at 4K euros per month"); "live in 15 days" as time to value
 | Partner badges, which only work if you hold the partnerships; page is dense for a first visit
 | 
fullbelly
 | "The fractional CMO that ships like a full marketing team", an audience eyebrow (Series A to C tech) and the price range in the hero
 | Operator track record, by-the-numbers, "The gap" (three pains), four services, how it works, comparison table, 49-agent roster, founder bio, sample deliverables, four phases, 11-question FAQ, closing form
 | Price in the hero; "The gap" section; phases that each end in "You walk out with"; an FAQ that handles objections such as data safety and what if you outgrow it
 | The long agent roster, which pushes proof far down the page
 | 
Applied AI Systems
 | "Intelligent Systems, Applied with Purpose" with an ask-anything chat box
 | Problem statement, tools wired into one system, five offerings with their own pages, anonymized projects, four-step engagement, short closing call
 | Four steps with a concrete "You get:" line each; the stance on anonymized projects ("no names, no logos, no invented numbers"); the site itself as the demo
 | An abstract headline that names no audience or outcome; no numbers or pricing
 | 
Telescope
 | "Put Outreach on Auto-Pilot" with "instant access, free trial, no credit card" under the buttons
 | Chat box, backed-by stats (20,000+ companies, 4.9 on G2), testimonial carousel, clickable dashboard demo, feature grid, data-coverage stats, more testimonials, closing line
 | Named testimonials with role and company from the first scroll; the line "without becoming another AI SDR"; a closer built on one outcome ("5 mins once a week")
 | Free-trial and G2 proof, which do not transfer to a services offer; very long page; footer still shows 2023
 | 
Design cues. I read page text and markup, not screenshots. What shows through: fullbelly declares a near-black theme color (#0A0A0A) with light and dark logo variants; Telescope uses a yellow accent and clickable product panels; Applied AI and Outbound Catalyst lean on diagrams, a logo marquee and interactive selectors. I can screenshot each in the browser pane for a visual teardown if you want one.
Sources: the four sites above, fetched 2026-10-13.

### Design direction (reference: appliedaisystems.io)
This feeds the Relume Style Guide step, before wireframes. Read from the live site on 2026-10-14. Copy the system, not the pixels: same feel, our own palette, type pairing and content.
Element
 | What the reference does
 | Our brief
 | 
Background
 | Warm sand (#EFE6D6) with a faint dot-and-line grid in dark green at 4-10% opacity
 | Warm neutral base with a subtle grid texture; reads as engineered, not corporate blue
 | 
Text and accent
 | Near-black ink (#15191B); deep green accent (#012520)
 | Ink plus one deep accent colour (green or a brand colour of ours); one accent only
 | 
Type
 | Inter at regular weight, 52px hero, tight tracking (-1.3px), 1.08 line height; one italic serif word per headline ("Purpose", "apply")
 | Inter (or similar grotesque) plus an italic serif for one emphasised word per headline. Light weights, large sizes, tight tracking
 | 
Hero
 | Headline, one line of subcopy, a pill chat input, three suggested prompts
 | Headline, one line, one Book a call button. A chat input is optional and out of scope for the 10 hours
 | 
Surfaces
 | Pill-shaped inputs and buttons with layered soft shadows and a glassy highlight; floating rounded nav bar
 | Pill buttons, floating nav, soft layered shadows; no hard borders
 | 
Layout
 | Container up to 1,344px, 9 sections, lots of white space, short sections
 | Same width and rhythm. Our 12 home sections stay, each kept short
 | 
Voice
 | "Or just scroll. This site is a working demo of what we build."
 | Show the work: the site itself carries proof (results strip, case study, live stack diagram)
 | 
Content blocks
 | Offerings, anonymised projects, 4-step engagement with a "You get:" line, short closing CTA
 | Matches our Audit, Build, Run section and the closing CTA
 | 
Relume prompt (paste into the Style Guide Builder): Modern, calm, editorial B2B site for a fractional GTM engineer. Warm sand background with a subtle grid texture, near-black text, one deep green accent. Inter at regular weight for headings and body, large headings with tight tracking, plus an italic serif for a single emphasised word per headline. Pill-shaped buttons, a floating rounded navigation bar, soft layered shadows, generous white space, 1,300px max container. No stock photos and no gradients. Reference: appliedaisystems.io.
Do not copy: the chat-box hero (a build and cost risk), the site's logo and wordmark, or its copy. Colours above are for reference; swap in our brand colours when JR sends them.
Still needed from JR: 2-3 more reference sites (this one covers feel, so ask for one with a strong proof and results layout), logo and brand colours, and whether to use real photos of JR.

#### Second reference: genesysgrowth.com (for the results and proof layout)
Read on 2026-10-14. It is a dark, solo-consultant site, so use it for how proof is placed, not for its look. Our palette stays with the first reference.
Pattern
 | What they do
 | Use on get-to-rev.com
 | 
Proof in the hero
 | Badge ("8x founding marketer, 100+ launches") and "Trusted by 60+ founders" over a row of headshots, directly under the CTAs
 | Add one proof line under our Book a call button: the 11.8% reply rate with its channel label, plus client count
 | 
Logo wall
 | Dense marquee of 30+ client logos, each linking to a case study; repeated in the closing CTA band
 | Logo strip right under the hero, each logo linking to its case study (our Results section). Only logos we have permission to show
 | 
Proof cards
 | Two cards: client logo, quote, name and title, two large metrics ("15 days", "12+ landing pages")
 | Our Results section: 3 cards, each with one big number, one line of context, a Read more link to the case study page
 | 
Stats row
 | Three big figures (startups worked with, years, launches)
 | Three figures only; each must be one we can source
 | 
Closing result band
 | One result ("3x signups") plus the logo marquee in the final CTA
 | End the page with one result, then the CTA
 | 
Depth
 | Homepage shows headline metrics only; full case studies on separate pages
 | Same: the flagship at /case-studies/healthtech-ai-saas-outbound/ carries the detail
 | 
Type and buttons
 | General Sans at weight 500, 50px hero; pill buttons (white primary, translucent secondary)
 | Matches the pill-button direction. Keep Inter plus italic serif
 | 
Two cautions. Their logo labels and links don't always match (an "ethena" logo links to Strapi), so check every logo-to-case-study link on ours. And the claims shown are theirs, not benchmarks for ours.

#### Third reference: fullbelly.ai (for content clarity and length)
Measured 2026-10-14. The page runs about 2,900 words, but 49 agent profiles make up roughly 1,450 of them. Without that block it is about 1,450 words across 13 sections. The old get-to-rev.com home page is about 800 words in the copy I captured (a lower bound; the live page has more counters and card text). Target for the new home: 1,000 to 1,300 words, so close to the old page and under Fullbelly's real length.
What makes Fullbelly clear, and what we copy:
Same pattern in every section: short label, punchy headline, one-line explanation. We use it on all 12 home sections.

Short sentences: mostly 3 to 8 words. Long sentences only in the FAQ and About.

Named audience in the first lines, repeated. Ours: SaaS in healthtech, martech, wellness, edtech, media and publishers.

One CTA wording everywhere ("Book a strategy call"). Ours stays "Book a call".

Numbers stated plainly: price range, years, counts.

A comparison table against named alternatives. We have this in section 8.

A four-step process with the order spelled out. We have Audit, Build, Run.

Objection-led FAQ. Theirs runs 10+ questions (about 760 words); ours should stay at 8 to 10.

Word budget for the home page
Section
 | Words
 | 
1. Hero
 | 40 to 60
 | 
2. Results
 | 80 to 120
 | 
3. What a fractional GTM engineer builds
 | 100 to 130
 | 
4. Why most AI marketing stacks stall
 | 80 to 100
 | 
5. Healthtech case study excerpt
 | 90 to 120
 | 
6. Who we build for (6 tiles)
 | 70 to 100
 | 
7. Audit, Build, Run
 | 100 to 130
 | 
8. Comparison table
 | 100 to 130
 | 
9. Plans (3 cards)
 | 90 to 130
 | 
10. Meet the operator
 | 80 to 100
 | 
11. FAQ (8 to 10 questions)
 | 300 to 400
 | 
12. Closing CTA
 | 20 to 40
 | 
Total
 | about 1,150 to 1,560
 | 
The top of that range runs over the 1,300 target. If the Home copy comes in above budget, cut the FAQ first (move extra questions to the Pricing and Services pages), then trim sections 3, 4 and 8. Detail lives on the inner pages, as on the old site.
Do not copy: the 49-agent roster block (our offer is one operator, not an agent catalogue), or the mock-metrics sample deliverables.

#### Brand assets and logos
Our brand (from the logo JR sent and the old site, read 2026-10-14):
Item
 | Value
 | 
Logo
 | Two red figures helping each other up, "GTR" wordmark in off-white with a red arrow square. Supplied as a black-background square. Needs a transparent or vector version for the site
 | 
Brand red
 | Logo red is a bright orange-red; the old site's buttons use #CB3522
 | 
Dark
 | Black background on the old site; ink #15191B works for text on light
 | 
Off-white
 | #EDF5EC (old site text colour on dark)
 | 
Old accents
 | Green #61CE70 (price highlight) and dark teal #223D3B
 | 
Heading font
 | League Spartan on the old site; the new direction is Inter plus an italic serif
 | 
Decision for JR: our red replaces the reference site's green as the single accent, on a warm sand base with near-black ink. The logo is red on black, so it sits on a dark nav and footer, or we get a version for light backgrounds. The old green drops out. Say if you would rather keep a black site.
Client logos:
Client
 | Source found
 | Status
 | 
Scribeberry
 | scribeberry.com/img/sb-pixel-logo.png (header logo, PNG)
 | Can be named. Use after a check on size and background
 | 
Relay
 | run-relay.com/relay-logo.svg (vector)
 | Own client work; use the SVG
 | 
Case study logos
 | Old site images at get-to-rev.com/wp-content/uploads/2024/09/work_001.webp onward
 | Reuse as in the old case studies
 | 
Manifold
 | manifold.ai, header logo SVG
 | Resolved: JR approved naming Manifold. White SVG made for dark backgrounds: cdn.prod.website-files.com/65ca178be80b55e2f8606935/69f362c683d6ec8356f91fe3_manifold-logo-white.svg (from manifold.ai, an AI platform for life sciences)
 | 
Press logos (The Next Web, TechCrunch, etc.)
 | Old site images, for example wp-content/uploads/2024/08/tech-crunch.png
 | Keep only if the "featured on" claim still holds
 | 
Logos stay pinned to a case study link, as on the Genesys layout. Only logos with permission go on the site.
Our logo: requirements
Item
 | Requirement
 | 
Tagline
 | "GTM Engineer For Hire" (replaces "Growth team for hire")
 | 
Light-background version
 | Transparent PNG, near-black wordmark (#15191B), red figures and arrow square. Made 2026-10-14 (about 1144 x 1447 px)
 | 
Dark-background version
 | Original white-text version, for the footer band and any dark section
 | 
Nav and favicon
 | Use the short GTR mark (figures, "GTR", arrow square), not the full lockup with tagline
 | 
Footer and About
 | Full lockup with tagline
 | 
Format
 | Current files are raster. Get an SVG redraw (Pierre or a trace) before launch so the logo stays sharp on retina screens
 | 
Tagline font
 | Rebuilt in Poppins Bold, so it is not the original typeface. Check it, or have it set in the final vector
 | 
Clear space and size
 | Keep clear space of at least the height of the "G" on every side. Minimum width 120 px for the full lockup, 32 px for the short mark
 | 
Alt text
 | "Get To Revenue, GTM engineer for hire"
 | 

## Offer benchmark: GTM Agency and Growth Today
Neither agency publishes a price, and both sell to B2B teams with $1M or more in revenue, build inside the client's stack and hand over ownership. Your plans differ by being tiered by motion, priced publicly, and open to SMBs and local media.
 | GTM Agency (gtmagency.ai)
 | Growth Today
 | Get-To-Rev
 | 
Who it is for
 | Sales-led SaaS with $1M+ ARR
 | B2B teams with $1M+ revenue; most clients are SaaS at $10M-$50M ARR
 | SaaS in healthtech, martech, wellness and edtech; media agencies; publishers; SMBs and local media on the entry plan
 | 
What they sell
 | One done-for-you engine across outbound, LinkedIn content and LinkedIn ads
 | Three engines (content, outbound, ABM ads) sold alone or together, plus add-ons (TAM Radar, Intelligence Engine, Inbound Activator, REX reply agent) and a managed GTM engineering service
 | Three plans: Outbound; GTM Engineering (outbound and RevOps); GTM + Growth Engineering (adds paid media and a LinkedIn content engine)
 | 
Model and term
 | 45-day sprint, no retainer, then handover
 | 90-day pilot with a Day-90 review, then managed service
 | Monthly plans on a 6-month term
 | 
Time to value
 | First demos in weeks; ownership transfers at day 45
 | First content, ads and outreach live by Day 21; 2-3 weeks to set up and warm email infrastructure
 | First system in production in month 2
 | 
Ownership
 | Every asset transfers to the client
 | Built in the client's CRM and stack; client owns accounts, licenses, data, workflows and documentation and pays for its own tools
 | Built in your tech stack under an MIT license; tool costs are yours
 | 
Price
 | Not published ("fixed sprint")
 | Not published
 | $2,500, $4,500 and $7,500 a month, published
 | 
Proof shown
 | Partner case studies (AirOps $7.8M qualified pipeline, Teikametrics $360K annualized contract, Aircall 3,655 new accounts), presented as companies using the same systems
 | 130+ B2B teams; 12 case studies (ActiveCampaign, Ramp, Stord, Cavalry and others)
 | One flagship case (21 meetings in 16 weeks), Scribeberry, Relay, TribLIVE
 | 
AI search visibility
 | Not offered
 | Not offered
 | Under AI marketing automation
 | 
What this means for the plans:
Ownership is not a differentiator. Both promise it. Your MIT license is the more explicit version, so state it plainly.

Published prices are a differentiator, since neither competitor shows one.

Both include a LinkedIn content engine, and now so does your top plan. It is part of GTM + Growth Engineering.

Their stated speed is faster than month 2 (Day 21 and day 45). We close the gap by stating that first campaigns start after a 2-3 week domain warmup, with the month-2 target unchanged.

Neither serves SMBs or local media. The Outbound plan is the only entry point built for them.

Sources: GTM Agency, Growth Today, Growth Today managed GTM engineering, all read 2026-10-14.

## Copy: Home
The home page runs in 12 sections, in the order below, and each one opens with an answer a search or AI engine can quote.

### SEO
Title (58 characters): Fractional GTM Engineer for Hire | AI Marketing Automation

Meta description (147 characters): Hire a fractional GTM engineer to build AI marketing automation you own: multi-agent outbound, growth engineering and CRM attribution for B2B SaaS.


### 1. Hero
Eyebrow: For SaaS in healthtech, martech, wellness and edtech, and for media agencies and publishers.

H1: Fractional GTM Engineer For Hire.

Subline: GTM engineering, AI marketing automation and Growth Engineering.

Opening paragraph: Get-To-Rev is a fractional GTM engineer for hire. We build the systems behind your pipeline, including production multi-agent outbound on the Claude API, automated paid-media engineering and CRM attribution, all built in your tech stack and owned by you.

Button (the only one): Book a call (to /book-a-call/)

Trust line under the button: 25+ clients · 30+ years of combined experience · Seattle-based


### 2. Results from the work
A 16-week healthtech outbound program reached 3,000 buyers across 1,800 companies, booked 21 meetings and produced 5 clients.
Stat
 | Value
 | Note
 | 
Meetings booked
 | 21 in 16 weeks
 | Healthtech case
 | 
Buyers reached
 | 3,000 across 1,800 companies
 | Healthtech case
 | 
Client signups
 | 5 (0.17% of contacts)
 | Healthtech case
 | 
Revenue
 | $1.2M in revenue
 | As published on the old page
 | 
LinkedIn reply rate
 | 11.8%
 | Healthtech case
 | 
Email reply rate
 | 4.1%
 | Healthtech case
 | 
Positive reply rate
 | 22%
 | Relay
 | 
Trial signups
 | 7% of 15K contacted, 2.4% trial-to-paid
 | Scribeberry
 | 
Free audits sent
 | 753, with an 8.24% reply rate and 13 clients
 | Value-First audits
 | 
Client logos: show only clients cleared to appear; Manifold, Scribeberry and Relay can be named. The Value-First audits are on the page as a tile and defined in the FAQ.

### 3. What a fractional GTM engineer builds
A fractional GTM engineer builds and runs the automation behind your go-to-market without a full-time hire. Ours comes in three practices.
GTM engineering. A production multi-agent outbound system on the Claude API. It sources accounts, enriches them, assembles a signal packet at send time, writes individual outreach, and builds the campaigns in your sequencer. Learn more

AI marketing automation. RevOps and content workflows automated end to end, including AI search visibility (GEO) so AI answer engines can find and cite you. See all services

Growth engineering. The same agent pattern applied to paid media: ad creative, campaign builds and reporting across Meta, Google and LinkedIn, with audiences built from the same signals as outbound, plus a LinkedIn content engine. Flat fee, never a percentage of spend. Learn more


### 4. Why most AI marketing stacks stall
Most AI marketing stacks stall because nobody owns the build.
You bought the tools and nobody can run them. Clay, a sequencer, a CRM. With no dedicated GTM engineer, or one already at capacity, the build backlog never moves.

Agencies build tables, then disappear. A workflow handed over with no monitoring, no attribution and no owner stops being trusted.

Rented pipeline leaves with the vendor. AI SDR platforms and black-box agencies keep the system. You keep the invoice.


### 5. Healthtech case study (excerpt, in the old site's format)
Label: Case study

Headline: How Get-To-Rev booked 21 meetings in 16 weeks for Manifold, an AI-powered clinical research platform

Excerpt: The client wanted to reach biotech, biopharma, CRO and diagnostics buyers ahead of its Series A. We built an outbound and retargeting system on Clay, HubSpot and Reply.io that contacted 3,000 buyers at 1,800 companies. 21 meetings were booked and 5 became clients.

Buttons: Read the case study (to /case-studies/healthtech-ai-saas-outbound/) · See all case studies (to /case-studies/)


### 6. Who we build for
We build for SaaS companies in healthtech, martech, wellness and edtech, and for media agencies and publishers.
Segment
 | What they struggle with
 | What we build
 | Proof
 | 
Healthtech SaaS
 | A small, specific buyer list and founder-led selling
 | ICP mapping, outbound, retargeting and lifecycle automation
 | Healthtech case study
 | 
Martech SaaS
 | A crowded category where outreach sounds like everyone else's
 | Signal-based outbound with individual copy, and CRM attribution
 | Book a call
 | 
Wellness
 | Many small buyers that are hard to reach one by one
 | Outbound and paid campaigns built from the same account signals
 | Book a call
 | 
Edtech
 | Long buying cycles with several stakeholders
 | Account-based outbound and retargeting for each stakeholder
 | Book a call
 | 
Media agencies
 | Delivery capacity for client accounts
 | White-label GTM engineering behind your client work
 | Book a call
 | 
Publishers
 | Selling ad and sponsorship inventory to local businesses
 | Outbound that offers a free ad placement from your own inventory and tracks results
 | TribLIVE
 | 
Draft note: the struggles for martech, wellness and edtech are assumptions to confirm; healthtech and publishers rest on existing work.

### 7. Audit, build, run
Every engagement runs in three steps, and each ends in something you keep.
Audit. A fixed-scope review of your funnel, data and stack. You get: a prioritized build plan, yours whether or not we continue. The audit is free: we show value before we pitch.

Build. We build in your tech stack, alongside your team, and document as we go. First campaigns start after a 2-3 week domain warmup; target: first system in production in month 2. You get: a working system live in your stack, with its documentation.

Run. We operate and improve the system. You get: weekly reporting that ties spend to pipeline, and a quarterly review of what was spent against what came back.


### 8. Fractional GTM engineer vs full-time hire vs AI SDR vs agency
A fractional GTM engineer gives you senior build capacity without a full-time hire and leaves you owning the system; the table compares the four options on five points.
 | Fractional GTM engineer
 | Full-time hire
 | AI SDR platform
 | Agency
 | 
Time to first results
 | First campaigns after a 2-3 week warmup; first system in production in about 2 months
 | Recruit, then ramp
 | Fast to start, limited by the platform
 | Varies by agency
 | 
Who owns the system
 | You
 | You
 | The vendor
 | Usually the agency
 | 
How cost works
 | From $2,500 a month on a 6-month term
 | Salary, benefits and tools
 | A subscription
 | A retainer, often for activity
 | 
Channels
 | Email, LinkedIn and paid media, built to your brief
 | Whatever the hire can build and run
 | Mostly email
 | Depends on the agency
 | 
Risk if it does not work
 | A short initial term
 | Salary and ramp already spent
 | Subscription spent, system stays with the vendor
 | Retainer spent, system stays with the agency
 | 
Our view, based on projects we have run; terms vary by vendor.

### 9. Plans
There are three monthly plans, from $2,500 a month: Outbound, GTM Engineering, and GTM + Growth Engineering. We do not take engagements below $2,500 a month, and every plan runs on a 6-month term. Every engagement starts with a free audit.
Plan
 | Includes
 | Price
 | Term
 | 
Outbound
 | For SMBs and local media agencies that need steady outbound without a full motion: target list, sending infrastructure, AI-written outreach, reply handling and weekly reporting.
 | $2,500 a month
 | 6 months
 | 
GTM Engineering
 | The full GTM motion, stopping at outbound and RevOps: everything in Outbound plus signal-based plays, account tiering, CRM enrichment and routing, and attribution. No paid ads.
 | $4,500 a month
 | 6 months
 | 
GTM + Growth Engineering
 | Everything in GTM Engineering plus growth engineering: paid media on Meta, Google and LinkedIn with audience sync, creative testing and optimization, plus a LinkedIn content engine. Ad spend is paid to the platforms.
 | $7,500 a month
 | 6 months
 | 
See full pricing. The old Discover, Launch and Growth plans are retired.

### 10. Meet the operator
Jean-Renaud Desvernay (JR) is the fractional GTM engineer behind Get-To-Rev. He has spent 15 years helping early-stage startups grow, including agile marketing and full-funnel media buying at Airbnb, and has a background in software development. He now builds go-to-market systems for US startups in healthtech and AI SaaS, combining outbound automation, paid media and CRM workflows with tools such as Clay, HubSpot and the Claude API. He works with Pierre, creative director, and Ursula, content manager.
Photo of JR [add]. LinkedIn. Mark up with Person schema.

### 11. FAQ (add FAQPage schema)
What is a fractional GTM engineer? A part-time go-to-market engineer who builds and runs your outbound, CRM and campaign automation without a full-time hire. Get-To-Rev provides one, backed by a small team.
What is AI marketing automation? It is the use of AI agents and automation to run marketing and sales workflows such as prospecting, enrichment, personalization, campaign setup and reporting, so a small team operates at the scale of a larger one.
How is Get-To-Rev different from a Clay agency? We build production multi-agent systems on the Claude API, not Clay tables. Sequencers like Instantly are only the sending layer. You own the system and the data.
How is a fractional GTM engineer different from a full-time hire? You get senior build capacity backed by a small team, on a 6-month term, without recruiting or ramp time. A full-time hire is one person with one backlog. You own what we build either way.
Do you work with our in-house GTM engineer? Yes. If you have one, we take the backlog they cannot reach while they keep running campaigns. If you do not, we act as your GTM engineer.
Which industries do you work with? SaaS companies in healthtech, martech, wellness and edtech, plus media agencies and publishers.
How fast does something go live? First campaigns start after a 2-3 week domain warmup, and the target is a first system in production in month 2. The audit comes first and sets the scope.
What is value-first selling? A value-first sales strategy is a methodology that prioritizes solving customer problems, educating prospects, and delivering tangible insights before ever pitching a product or asking for a sale. Our free audit is how we apply it.
Who owns what you build? You do. Everything is built in your tech stack under an MIT license.
What does it cost? Engagements start at $2,500 a month on a 6-month term. See the plans above and the pricing page.

### 12. Closing call to action
Tell us what your pipeline needs built. Book a call. Engagements start at $2,500 a month. (Button to /book-a-call/)

## Copy: Services
The hub presents three practices from one fractional GTM engineer. GTM engineering and Growth engineering have their own pages; AI marketing automation, including AI search visibility, sits on the hub. Each opens with a one-paragraph definition so AI answer engines can quote it.

### Services hub (/services/)
Title (58 characters): Fractional GTM Engineer Services for B2B SaaS | Get-To-Rev

H1: Three practices, one fractional GTM engineer.

Intro: Every engagement starts with an audit and ends with a system you own. Pick the practice that matches your backlog, or combine them.

Practice
 | Best for
 | First step
 | Proof today
 | 
GTM engineering
 | Teams whose outbound depends on manual list-building and templates
 | Outbound plan, $2,500 a month
 | Healthtech case, Relay, Value-First audits
 | 
AI marketing automation
 | Teams with manual RevOps or content workflows, or invisible in AI answers
 | Free audit, with an AI-search (GEO) review
 | This site, tracked and published
 | 
Growth engineering
 | Teams running Meta, Google or LinkedIn with a thin creative and ops bench
 | GTM + Growth Engineering plan, $7,500 a month
 | Retargeting inside the healthtech case
 | 
AI marketing automation (on the hub). AI marketing automation is the use of AI agents to run RevOps, content and search-visibility workflows end to end, so a small team operates at the scale of a larger one. It includes AI engine optimization (AEO or GEO): making your brand easy for AI answer engines to find, understand and cite.
What you get:
RevOps automation. CRM workflows, lifecycle stages, lead routing and attribution reporting, built in your tech stack.

Content automation. Briefs, drafts and repurposing run through agents and reviewed by a human before anything publishes.

AI search visibility. A citation gap audit across ChatGPT, Perplexity, Claude and Gemini, an answer-first content plan with schema and an llms.txt file, and monthly tracking across 10+ AI engines.

Buyer detection. AI referral traffic cross-referenced with company enrichment to surface in-market accounts.

FAQ. How is AEO different from SEO? SEO earns a ranking in search results. AEO earns a citation inside an AI-generated answer. Both reward structured, answer-first content, so most AEO work also helps SEO.
Build note (not for publishing): this site is the demo. Publish its citation results after 30 days of tracking.


### GTM engineering (/services/ai-outbound-engineering/)
Title (57 characters): GTM Engineering and AI Outbound for B2B SaaS | Get-To-Rev

Meta: A production multi-agent outbound system on the Claude API: sourcing, enrichment, signal-based copy and campaign setup.

H1: GTM engineering

Definition: GTM engineering is building the system behind your outbound: agents that find accounts, enrich them, write individual outreach from live signals, and set up campaigns in your sequencer. A fractional GTM engineer at Get-To-Rev builds it on the Claude API with FastAPI, in your tech stack, not on Clay tables.

What you get:
Sourcer and enricher. Target accounts from firmographic and fresh hiring signals, enriched and verified before anything is sent.

Context engine. A per-account signal packet assembled at send time, not stored and left to go stale.

Copywriter agent. Individual outreach written from that packet, with retrieval over your best-performing copy.

Campaign agent. Creates and fills campaigns in Instantly, Lemlist or Reply.io from a plain-language brief. The sequencer is only the sending layer.

Deliverability and attribution. Domain setup, SPF, DKIM and DMARC, warmup, and reporting that separates meetings booked from meetings held.

Proof: healthtech case; Relay 22% positive reply; Scribeberry (7% trial signup from 15K contacted); the Value-First audit program (753 audits, 8.24% reply, 13 clients).
FAQ. How is this different from an AI SDR? An AI SDR platform is a rented, closed system. This is a system built for you and owned by you. Which sequencers work? Instantly today; Lemlist and Reply.io follow the same pattern.

### Growth engineering (/services/growth-engineering/)
Title (44 characters): Growth Engineering for B2B SaaS | Get-To-Rev

Meta: Agents and ad-platform connectors that build creative, launch campaigns and report on Meta, Google and LinkedIn. Flat fee.

H1: Growth engineering

Definition: Growth engineering applies the agent pattern from outbound to paid media: ad creative, campaign builds and performance analysis. An orchestrator coordinates specialist agents, a memory loop learns from results, and a connector per platform does the execution on Meta, Google Ads and LinkedIn.

What you get:
Account and signal targeting. The same signal layer as outbound, used to build audiences instead of buying a separate intent feed.

Creative generation and testing. Variants produced and tested in a loop, reviewed by a human before launch.

Campaign builds and audience sync. CRM lists synced into Google RLSA, LinkedIn and Meta, as in the healthtech case.

Revenue attribution. Reporting that ties spend to pipeline.

LinkedIn content engine. Content pillars built from your ICP, ghostwriting in your voice with your approval, a publishing calendar, engagement and repurposing, and analytics tied to inbound leads.

Pricing: included in the GTM + Growth Engineering plan at $7,500 a month, a flat fee and never a percentage of spend.
FAQ. Do you take a percentage of ad spend? No. The fee is flat so our incentive is results, not budget size.
Build note (not for publishing): there is no standalone growth-engineering case study yet. Scope one pilot, or lead with the retargeting results inside the healthtech case.


## Copy: Case studies
Every case study uses one structure (summary, challenge, approach, stack, results, lessons, quote, call to action), and the summary is written so it can be quoted on its own. Fields are in the Sitemap section.

### Flagship: healthtech AI SaaS outbound
URL: /case-studies/healthtech-ai-saas-outbound/

Title: Healthtech AI SaaS Outbound Case Study: 21 Meetings in 16 Weeks | Get-To-Rev

H1: 21 meetings in 16 weeks: AI-driven outbound for a clinical research platform.

Summary. Manifold, an AI-powered clinical research platform, wanted to reach biotech, biopharma, CRO and diagnostics buyers ahead of its Series A. In 16 weeks Get-To-Rev built an outbound and retargeting system on Clay, HubSpot and Reply.io. It contacted 3,000 buyers at 1,800 companies and booked 21 meetings. Five became clients.
Challenge. The client needed to speed up partnership and client acquisition before its Series A and cut the manual work in sales, with outreach that was personalized and scalable.

### Approach
Weeks 1-4: foundation. Sourcing, ICP mapping and messaging. The first 200 leads built and personalized in Clay across all target segments, with lead scoring set up in HubSpot.

Weeks 5-9: outreach automation. LinkedIn connection growth to 20 a day, Reply.io campaigns live, and engagement synced automatically into HubSpot lifecycle stages.

Weeks 10-13: segmentation and retargeting. Solution and webinar campaigns, LinkedIn and Facebook video ads, retargeting on every platform, and automated progression from lead to MQL, SQL, engaged and opportunity.

Weeks 14-16: optimization and handoff. RLSA switched to direct targeting, and sales handoff automation added with instant rep alerts and SDR or AE assignment.


### Stack
Clay for lead research and enrichment, LinkedIn Sales Navigator for ICP targeting, Reply.io for cold outreach and sequencing, Zapier for workflow automation, HubSpot for CRM, scoring and lifecycle. Retargeting on Google Search (RLSA), LinkedIn Ads and Meta.

### Results
Metric
 | Value
 | 
Buyers contacted
 | 3,000 across 1,800 companies
 | 
LinkedIn connections
 | 1,200+ (12% connect rate)
 | 
LinkedIn reply rate
 | 11.8%
 | 
Email open rate
 | 32%
 | 
Email reply rate
 | 4.1% (complex SaaS, healthcare)
 | 
Meetings booked
 | 21 (0.7% of contacts)
 | 
Client signups
 | 5 (0.17% of contacts)
 | 
Revenue
 | $1.2M in revenue (as published)
 | 

### What we learned
Model cost. AI classification across thousands of records gets expensive. Clients create their own OpenAI and Gemini API keys, which costs less than Clay's built-in AI. A cheaper model screens first and a stronger model analyzes only low-confidence records.

Company verification. Enrichment includes companies that have defaulted or been acquired, so each company's website is checked before outreach.

Founder involvement. LinkedIn connection and reply rates improved when a founder took part in the outreach personally.

Client quote: [request one from the client]
Call to action: Book a call and we will map the same program to your target accounts.
Build note (not for publishing): the old page names no client. Manifold is named (decided Oct 14). Scribeberry can be named; consider it as a second healthtech case in the same template.


### Migrated case studies
The four older cases move into the same template and sit below the healthtech flagship in the index. They are consumer-side and from 2024, so each is labeled by industry.
Case (URL)
 | Result, from the old site
 | Quote kept
 | 
Lullify (/case-studies/lullify/)
 | Downloads up 150% through App Store, Facebook and native ads
 | None on file
 | 
Ugonnafish (/case-studies/ugonnafish/)
 | Analytics setup and trip-page conversion work on the Launch package; cost per acquisition fell within 6 weeks
 | "Choosing Get To Revenue was the best decision we made for our fishing booking startup." Josh, Director of Marketing
 | 
Esler (/case-studies/esler/)
 | A Discovery plan produced a roadmap to the first student, then more learners and higher conversion
 | "Their expertise and speed made all the difference." Rebecca, Founder and CEO
 | 
Visa Pathway (/case-studies/visa-pathway/)
 | Campaigns moved from Google to LinkedIn and the landing page was redesigned; client base up 150% in six months
 | "...our client base grew by 150% in just six months." Nathan, Marketing Manager
 | 

## Copy: About, How we work, Pricing, Book a call
These four pages carry the trust and qualification work; pricing and term lines are placeholders throughout.

### About (/about/)
Title: About Get-To-Rev | Your Fractional GTM Engineer

H1: A fractional GTM engineer, backed by a small team.

Intro: Get-To-Rev is a Seattle company that provides a fractional GTM engineer and builds AI marketing automation for SaaS teams, media agencies and publishers. We build in production, in your tech stack, and measure every system against pipeline.

Who we build for: SaaS in healthtech, martech, wellness and edtech, plus media agencies and publishers. Healthtech has the deepest proof so far, with two proof cases and buyers who need no category education.

Jean-Renaud Desvernay (JR), founder. 15 years helping early-stage startups grow. At Airbnb he worked on agile marketing and full-funnel media buying. He is the fractional GTM engineer behind Get-To-Rev and builds go-to-market systems for US startups in healthtech and AI SaaS, combining outbound automation, paid media and CRM workflows. He also has a background in software development.
Pierre, creative director and Ursula, content manager Both bios stay. Photos stay for now; revisit before launch.

### How we work (/how-we-work/)
Title: How We Work: Audit, Build, Run | Get-To-Rev

H1: Audit, build, run.

Audit. We review your funnel, data, stack and backlog. You get: a prioritized build plan, yours whether or not we continue.

Build. We build the highest-value system first, in your tech stack, alongside your team, with documentation as we go. First campaigns start after a 2-3 week domain warmup; target: first system in production in month 2. You get: a working system live in your stack, with its documentation.

Run. We operate and improve it. You get: weekly reporting that ties spend to pipeline, and a quarterly review of what was spent against what came back.

Who does what (if you have no in-house GTM engineer, Get-To-Rev also runs live campaigns in the Run plan):
Task
 | Your team or in-house GTM engineer
 | Get-To-Rev
 | 
Run live campaigns and handle replies
 | Yes
 |  | 
Build the multi-agent outbound system
 |  | Yes
 | 
Growth engineering
 |  | Yes
 | 
AI marketing automation, including AI search
 |  | Yes
 | 
CRM setup and attribution
 | Shared
 | Shared
 | 
Weekly reporting and monitoring
 | Reviews
 | Yes
 | 
Final say on targets and messaging
 | Yes
 |  | 
What you own: the system, the data and the tech stack it runs in, all under an MIT license. Term: 6 months. Tool costs (domains, mailboxes, software) belong to you, since everything runs in your tech stack. We optimize them to keep the cost down.

### Pricing (/pricing/)
Title: Pricing | Get-To-Rev

H1: What engagements cost.

Published floor: We do not take engagements below $2,500 a month.

Plan
 | What it is
 | Price
 | Term
 | 
Outbound
 | For SMBs and local media agencies that do not need an extensive motion. ICP and target list; domains and mailboxes set up and warmed over 2-3 weeks, under your admin; AI-written individual outreach with A/B tests (email first, LinkedIn where it fits); reply handling and meeting booking; a weekly report on meetings booked and held. Not included: CRM and RevOps build, scoring, paid ads.
 | $2,500 a month
 | 6 months
 | 
GTM Engineering
 | The full motion, stopping at outbound and RevOps. Everything in Outbound, plus: signal-based plays (hiring, funding, job changes); TAM sourcing and account tiering; the multi-agent outbound system (sourcer, enricher, context engine, copywriter agent, campaign agent); CRM enrichment, scoring, routing and lifecycle automation; inbound lead processing; an attribution dashboard and a quarterly review. Not included: paid ads and demand generation.
 | $4,500 a month
 | 6 months
 | 
GTM + Growth Engineering
 | The GTM Engineering plan plus paid acquisition. Adds: audience sync from your CRM into Google, LinkedIn and Meta; ABM and retargeting campaigns; AI-assisted creative generation and testing, reviewed by a human before launch; campaign builds, budget optimization and paid attribution; a LinkedIn content engine with content pillars, ghostwriting in your voice with your approval, a publishing calendar, engagement and analytics tied to inbound leads. Media spend is paid directly to the platforms and is not a percentage of our fee.
 | $7,500 a month
 | 6 months
 | 
Value line: A fractional GTM engineer, backed by a small team, for the price of one hire: multi-agent outbound, growth engineering and AI marketing automation.
Build note (not for publishing): the Type G research puts a loaded GTM engineer at roughly $135K-$152K a year (median $135K, posted $150K, Seattle $152K). Cite the original survey before using any salary number on the page. Billing terms from the research (net-15, first month upfront) are unconfirmed.


### Book a call (/book-a-call/)
Title: Book a Call | Get-To-Rev

H1: Tell us what your pipeline needs built.

Intro: Three questions, then pick a time. We read every answer before the call.

Qualifier fields: company website; funding stage and team size; the one project your team keeps postponing.

Below the form: Calendly inline embed, then redirect to /thank-you/ (noindex).

Pre-qualifier line: Engagements start at $2,500 a month.


## Blog migration and content plan
All 5 existing posts migrate to /blog/ so their URLs keep their value, and 3 of them get a Type G refresh. I read the post URLs and dates from the old sitemap, not the post bodies (the blog index timed out), so these calls are provisional until you check traffic in Search Console.
Post (old slug)
 | Last modified
 | Decision
 | Action
 | 
what-is-growth-marketing
 | Apr 2025
 | Migrate, refresh
 | Bridge the intro to AI marketing automation, add FAQ block, link to /services/
 | 
how-to-get-started-in-growth-marketing
 | Apr 2025
 | Migrate as is
 | Written for aspiring marketers, not buyers. If traffic is negligible, 301 it to the post above
 | 
fractional-marketing-manager-vs-in-house-marketing-manager
 | Apr 2025
 | Migrate, refresh
 | Reframe as a fractional GTM engineer versus a full-time hire
 | 
the-cost-effectiveness-of-hiring-a-growth-marketing-team
 | Apr 2025
 | Migrate, refresh
 | Supports the "price of one hire" argument; update numbers and cite sources
 | 
podcast-on-fractional-cmo-insights-and-go-to-market-strategies
 | Aug 2025
 | Migrate as is
 | Episode post; keep the embed and add a dated note
 | 

### First six new posts
Each is answer-first and built on a first-party asset, which is what AI engines tend to cite.
Working title
 | Question it answers
 | First-party asset
 | 
What is AI marketing automation?
 | Definition, examples, what it costs
 | The three practices
 | 
AI SDR vs a system you own
 | What you keep when you stop paying
 | Build model and handover
 | 
What a GTM engineer costs, and when a fractional one beats a hire
 | Salary versus team economics
 | Salary data (cite the survey)
 | 
What 3,000 healthtech outreach contacts taught us
 | What works in life-science outbound
 | Flagship case metrics
 | 
Cutting Clay AI costs with a two-model cascade
 | How to screen records cheaply
 | Lesson from the flagship case
 | 
GEO audit checklist for B2B SaaS
 | How to get cited in AI answers
 | This site's own tracking
 | 

### Post template rules
First 50 words answer the headline question.

H2s phrased as the questions buyers ask.

Visible author, published date and updated date.

An FAQ block of 3-5 items, marked up with FAQPage schema.

Every statistic links to its source; anything unsourced is cut.

Link to the matching service page and one related case study.


## AEO, SEO and build spec
The site is built for two readers, search crawlers and AI answer engines, so every page has one answer-first paragraph, visible dates, structured data and a clean URL.

### Page rules
One H1 per page, unique title under 60 characters, meta description under 155, canonical URL, descriptive alt text on every image.

First paragraph of every page answers its own question in plain words, so it can be quoted alone.

Facts that AI engines can lift (definitions, steps, metrics) live in short paragraphs, lists and tables, not in images or sliders.

Visible author and updated date on blog and case study pages.


### Schema by page type
Page
 | Schema
 | Notes
 | 
Site-wide
 | Organization, WebSite
 | Name, logo, LinkedIn in sameAs, Seattle address
 | 
Home
 | FAQPage, Person (operator)
 | FAQ mirrors the page word for word; Person covers the Meet the operator section
 | 
Service pages
 | Service, FAQPage, BreadcrumbList
 | Provider is the Organization
 | 
Case study
 | Article
 | Author and datePublished from CMS fields. No Review schema
 | 
Blog post
 | BlogPosting, FAQPage, Person (author)
 | Built once in the CMS template from CMS fields
 | 
About
 | AboutPage, Person (founders)
 |  | 
In Webflow, put the JSON-LD in an embed inside each CMS template so it fills from CMS fields, then validate a sample of each type.

### llms.txt
Upload through Webflow's llms.txt setting. If your plan does not offer it, host the file and map /llms.txt to it with a redirect. Draft:
 Get-To-Rev provides a fractional GTM engineer: AI marketing automation, multi-agent outbound and growth engineering for SaaS companies in healthtech, martech, wellness and edtech, and for media agencies and publishers.

## Services
- [GTM engineering](https://get-to-rev.com/services/ai-outbound-engineering/): production multi-agent outbound on the Claude API
- [Growth engineering](https://get-to-rev.com/services/growth-engineering/): agents and connectors for paid media on Meta, Google and LinkedIn
- [All services, including AI marketing automation](https://get-to-rev.com/services/): RevOps and content automation, AI search visibility

## Proof
- [Healthtech AI SaaS outbound case study](https://get-to-rev.com/case-studies/healthtech-ai-saas-outbound/): 21 meetings in 16 weeks
- [All case studies](https://get-to-rev.com/case-studies/)

## Company
- [How we work](https://get-to-rev.com/how-we-work/)
- [Pricing](https://get-to-rev.com/pricing/)
- [About](https://get-to-rev.com/about/)
- [Blog](https://get-to-rev.com/blog/)
- [Book a call](https://get-to-rev.com/book-a-call/)]]>

### Crawlers
Allow the AI crawlers in robots.txt (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended); the goal is to be cited. Block /thank-you/ only.

### Integrations
Tool
 | How
 | Confirm
 | 
Google Tag Manager and GA4
 | GTM snippet in site-wide custom code; fire events on form submit and Calendly booking
 | Reuse the old container GTM-WDS7RSN after auditing its tags, or start a new one
 | 
Calendly
 | Inline embed on /book-a-call/, redirect to /thank-you/ after booking, pass UTM parameters
 | Which Calendly event type
 | 
Forms
 | Webflow form posts to a webhook that creates the lead in your CRM
 | Pipedrive or HubSpot
 | 
RSS
 | Blog collection feed, with a 301 from /feed/
 | Exact feed path in Webflow
 | 
Search Console and Bing Webmaster
 | Verify the domain, submit /sitemap.xml, watch the redirect report for two weeks
 |  | 
Product analytics (optional)
 | PostHog snippet via GTM for funnel and session data
 | Whether you want it
 | 
Cookie consent
 | Banner only if analytics or ad pixels require it
 | Needed for your audience
 | 

### Build plan (10 hours)
1h: Review this doc, review the plan details, resolve the Decisions table.

1.5h: Relume sitemap, style guide and visual direction. Pick 2-3 reference sites you admire first.

1.5h: Wireframes into Webflow through the Relume app.

2h: Brand and polish pass in the Designer: logo, type pairing, real imagery, proof screenshots. This is the pass that separates a professional site from a template.

2h: CMS collections, migrate the 5 posts, schema, llms.txt, integrations, redirects (Claude can run the CMS and metadata work through the Webflow MCP).

1.5h: QA and DNS cutover.

0.5h: Buffer.


### Pre-launch checklist
Every page checked at 375 px width and desktop

One H1, unique title and meta on every page

Schema validated for one page of each type

/llms.txt, /sitemap.xml, /robots.txt and the RSS feed load

Every row of the Redirect map returns a 301 to a page that returns 200

/thank-you/ is noindex

Form submit reaches the CRM, Calendly booking fires the GA4 event

All placeholder tokens removed

Team photos reviewed (kept for now); "featured on" logos removed

404 page, favicon and social share image set

Sitemap submitted in Search Console and Bing Webmaster


### Redirect checker
Run after cutover; paste the full Redirect map into REDIRECTS.
 new path, copied from the Redirect map
    "/gtm-engineering-plan/": "/services/ai-outbound-engineering/",
    "/our-work/": "/case-studies/",
}

for old, new in REDIRECTS.items():
    first = requests.get(BASE + old, allow_redirects=False, timeout=10)
    final = requests.get(BASE + old, timeout=10)
    moved = first.status_code == 301 and first.headers.get("Location", "").rstrip("/").endswith(new.rstrip("/"))
    print("OK  " if moved and final.status_code == 200 else "FAIL", old, first.status_code, final.status_code)]]>

### Still opeN
Which Webflow plan, and whether it includes the llms.txt setting.

Who controls DNS for get-to-rev.com.

Which CRM receives form leads.


### Sources
Old home page, old life-science case study, old WordPress sitemap, all read 2026-10-13

TYPE G Notion page, fetched 2026-10-13

Webflow AI SEO and AEO updates

Webflow MCP for Claude Code

