import Link from "next/link";

export type CaseStudyCardData = {
  slug: string;
  client: string;
  oneLineResult?: string;
  cardImage?: string;
  clientLogo?: string;
  cardLogo?: string;
  channels?: string[];
};

export function CaseStudyCard({ cs }: { cs: CaseStudyCardData }) {
  return (
    <Link href={`/case-studies/${cs.slug}/`} className="group flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden rounded-card border border-line shadow-soft">
        {cs.cardImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cs.cardImage}
            alt={cs.client}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-ink">
            {cs.cardLogo || cs.clientLogo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cs.cardLogo ?? cs.clientLogo}
                alt={cs.client}
                className="h-8 w-auto"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="text-xl font-medium text-mist">{cs.client}</span>
            )}
          </div>
        )}
        {cs.channels && cs.channels.length > 0 && (
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1.5 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
            {cs.channels.slice(0, 6).map((c) => (
              <span
                key={c}
                className="rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-red"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
      {cs.oneLineResult && <p className="mt-3 text-sm text-ink-soft">{cs.oneLineResult}</p>}
    </Link>
  );
}
