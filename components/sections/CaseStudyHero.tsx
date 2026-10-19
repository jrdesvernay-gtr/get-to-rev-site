import { Button } from "@/components/Button";

type Props = {
  h1: string;
  oneLineResult?: string;
  heroImage?: string;
  heroStyle?: "cover" | "cutout";
};

export function CaseStudyHero({ h1, oneLineResult, heroImage, heroStyle = "cover" }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink px-4 py-20 text-mist md:px-6 md:py-28">
      {heroImage && heroStyle === "cover" && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        </>
      )}
      {heroImage && heroStyle === "cutout" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={heroImage}
          alt=""
          className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-auto object-contain md:block"
        />
      )}
      <div className="container-x relative">
        <p className="text-sm font-medium text-red">Case study</p>
        <h1 className="mt-3 max-w-2xl text-4xl md:text-5xl">{h1}</h1>
        {oneLineResult && <p className="mt-4 max-w-xl text-lg text-mist/80">{oneLineResult}</p>}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/book-a-call/">Book a call</Button>
          <Button href="/pricing/" variant="ghost-dark">
            See plans
          </Button>
        </div>
      </div>
    </section>
  );
}
