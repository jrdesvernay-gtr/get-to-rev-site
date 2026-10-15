export const dynamic = "force-static";

const BODY = `# Get-To-Rev

> Get-To-Rev provides a fractional GTM engineer: AI marketing automation, multi-agent outbound and growth engineering for SaaS companies in healthtech, martech, wellness and edtech, and for media agencies and publishers.

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
- [Book a call](https://get-to-rev.com/book-a-call/)
`;

export function GET() {
  return new Response(BODY, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
