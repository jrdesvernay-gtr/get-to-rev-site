// All page copy that is reused in more than one place lives here.
// Source of truth for wording: the Sitemap & Copy Deck (Type G).

export const STATS = [
  { value: "21", label: "Meetings booked in 16 weeks", note: "Healthtech case" },
  { value: "3,000", label: "Buyers reached across 1,800 companies", note: "Healthtech case" },
  { value: "5", label: "Client signups (0.17% of contacts)", note: "Healthtech case" },
  { value: "22%", label: "Positive reply rate", note: "Relay" },
];

export const MORE_STATS = [
  ["11.8%", "LinkedIn reply rate", "Healthtech case"],
  ["4.1%", "Email reply rate, complex SaaS", "Healthtech case"],
  ["7%", "Trial signups from 15K contacted; 2.4% trial-to-paid", "Scribeberry"],
  ["753", "Free audits sent, 8.24% reply rate, 13 clients", "Value-First audits"],
];

export const PRACTICES = [
  {
    title: "GTM engineering",
    body: "A production multi-agent outbound system on the Claude API. It sources and enriches accounts, writes individual outreach, and builds the campaigns in your sequencer.",
    href: "/services/ai-outbound-engineering/",
    cta: "Learn more",
  },
  {
    title: "AI marketing automation",
    body: "RevOps and content workflows automated end to end, including AI search visibility (GEO).",
    href: "/services/",
    cta: "See all services",
  },
  {
    title: "Growth engineering",
    body: "The same agent pattern for paid media: creative, campaign builds and reporting across Meta, Google and LinkedIn, plus a LinkedIn content engine. Flat fee, never a percentage of spend.",
    href: "/services/growth-engineering/",
    cta: "Learn more",
  },
];

export const STALLS = [
  { title: "You bought the tools and nobody can run them.", body: "Clay, a sequencer, a CRM, and no one with capacity to build." },
  { title: "Agencies build tables, then disappear.", body: "A workflow with no monitoring, attribution or owner stops being trusted." },
  { title: "Rented pipeline leaves with the vendor.", body: "AI SDR platforms and black-box agencies keep the system. You keep the invoice." },
];

export const SEGMENTS = [
  {
    slug: "healthtech",
    name: "Healthtech SaaS",
    struggle: "A small, specific buyer list and founder-led selling",
    build: "ICP mapping, outbound, retargeting and lifecycle automation",
    proof: { label: "Healthtech case study", href: "/case-studies/healthtech-ai-saas-outbound/" },
  },
  {
    slug: "martech",
    name: "Martech SaaS",
    struggle: "A crowded category where outreach sounds like everyone else's",
    build: "Signal-based outbound with individual copy, and CRM attribution",
    proof: { label: "Book a call", href: "/book-a-call/" },
  },
  {
    slug: "wellness",
    name: "Wellness",
    struggle: "Many small buyers that are hard to reach one by one",
    build: "Outbound and paid campaigns built from the same account signals",
    proof: { label: "Book a call", href: "/book-a-call/" },
  },
  {
    slug: "edtech",
    name: "Edtech",
    struggle: "Long buying cycles with several stakeholders",
    build: "Account-based outbound and retargeting for each stakeholder",
    proof: { label: "Book a call", href: "/book-a-call/" },
  },
  {
    slug: "media-agencies",
    name: "Media agencies",
    struggle: "Delivery capacity for client accounts",
    build: "White-label GTM engineering behind your client work",
    proof: { label: "Book a call", href: "/book-a-call/" },
  },
  {
    slug: "publishers",
    name: "Publishers",
    struggle: "Selling ad and sponsorship inventory to local businesses",
    build: "Outbound that offers a free ad placement from your own inventory and tracks results",
    proof: { label: "TribLIVE", href: "/book-a-call/" },
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Audit",
    body: "A fixed-scope review of your funnel, data and stack.",
    get: "a prioritized build plan, yours whether or not we continue.",
  },
  {
    n: "02",
    title: "Build",
    body: "We build in your tech stack and document as we go. First campaigns start after a 2-3 week domain warmup; target: first system in production in month 2.",
    get: "a working system live in your stack, with its documentation.",
  },
  {
    n: "03",
    title: "Run",
    body: "We operate and improve the system.",
    get: "weekly reporting that ties spend to pipeline, and a quarterly review of what was spent against what came back.",
  },
];

export const COMPARE_COLS = ["Fractional GTM engineer", "Full-time hire", "AI SDR platform", "Agency"];
export const COMPARE_ROWS: [string, string, string, string, string][] = [
  ["Time to first results", "First campaigns after a 2-3 week warmup; first system in production in about 2 months", "Recruit, then ramp", "Fast to start, limited by the platform", "Varies by agency"],
  ["Who owns the system", "You", "You", "The vendor", "Usually the agency"],
  ["How cost works", "From $2,500 a month on a 6-month term", "Salary, benefits and tools", "A subscription", "A retainer, often for activity"],
  ["Channels", "Email, LinkedIn and paid media, built to your brief", "Whatever the hire can build and run", "Mostly email", "Depends on the agency"],
  ["Risk if it does not work", "A short initial term", "Salary and ramp already spent", "Subscription spent, system stays with the vendor", "Retainer spent, system stays with the agency"],
];

export const PLANS = [
  {
    name: "Outbound",
    price: "$2,500",
    blurb: "For SMBs and local media agencies: target list, sending infrastructure, AI-written outreach, reply handling and weekly reporting.",
    includes: [
      "ICP and target list",
      "Domains and mailboxes set up and warmed over 2-3 weeks, under your admin",
      "AI-written individual outreach with A/B tests (email first, LinkedIn where it fits)",
      "Reply handling and meeting booking",
      "A weekly report on meetings booked and held",
    ],
    excludes: "Not included: CRM and RevOps build, scoring, paid ads.",
  },
  {
    name: "GTM Engineering",
    price: "$4,500",
    featured: true,
    blurb: "Everything in Outbound plus signal-based plays, account tiering, CRM enrichment and routing, and attribution. No paid ads.",
    includes: [
      "Signal-based plays (hiring, funding, job changes)",
      "TAM sourcing and account tiering",
      "The multi-agent outbound system: sourcer, enricher, context engine, copywriter agent, campaign agent",
      "CRM enrichment, scoring, routing and lifecycle automation",
      "Inbound lead processing",
      "An attribution dashboard and a quarterly review",
    ],
    excludes: "Not included: paid ads and demand generation.",
  },
  {
    name: "GTM + Growth Engineering",
    price: "$7,500",
    blurb: "Everything in GTM Engineering plus paid media on Meta, Google and LinkedIn with audience sync, creative testing, and a LinkedIn content engine.",
    includes: [
      "Audience sync from your CRM into Google, LinkedIn and Meta",
      "ABM and retargeting campaigns",
      "AI-assisted creative generation and testing, reviewed by a human before launch",
      "Campaign builds, budget optimization and paid attribution",
      "A LinkedIn content engine: pillars, ghostwriting in your voice with your approval, publishing calendar, analytics tied to inbound leads",
    ],
    excludes: "Ad spend is paid directly to the platforms and is not a percentage of our fee.",
  },
];

export const HOME_FAQ = [
  {
    q: "What is a fractional GTM engineer?",
    a: "A part-time go-to-market engineer who builds and runs your outbound, CRM and campaign automation without a full-time hire. Get-To-Rev provides one, backed by a small team.",
  },
  {
    q: "What is AI marketing automation?",
    a: "It is the use of AI agents and automation to run prospecting, enrichment, personalization, campaign setup and reporting, so a small team operates at the scale of a larger one.",
  },
  {
    q: "How is Get-To-Rev different from a Clay agency?",
    a: "We build production multi-agent systems on the Claude API, not Clay tables. Sequencers like Instantly are only the sending layer. You own the system and the data.",
  },
  {
    q: "How is a fractional GTM engineer different from a full-time hire?",
    a: "You get senior build capacity backed by a small team, on a 6-month term, without recruiting or ramp time. A full-time hire is one person with one backlog. You own what we build either way.",
  },
  {
    q: "Do you work with our in-house GTM engineer?",
    a: "Yes. If you have one, we take the backlog they cannot reach while they keep running campaigns. If you do not, we act as your GTM engineer.",
  },
  {
    q: "What is value-first selling?",
    a: "A value-first sales strategy prioritizes solving customer problems, educating prospects, and delivering tangible insights before pitching a product or asking for a sale. Our free audit is how we apply it.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. Everything is built in your tech stack under an MIT license.",
  },
];
