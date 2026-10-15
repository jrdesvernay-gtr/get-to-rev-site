import { Button } from "@/components/Button";

export function Cta({
  heading,
  sub,
  buttonLabel = "Book a call",
  buttonHref = "/book-a-call/",
}: {
  heading: string;
  sub?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container-x rounded-[2rem] bg-ink px-6 py-14 text-center text-mist md:px-16 md:py-20">
        <h2 className="text-3xl md:text-4xl">{heading}</h2>
        {sub && <p className="mx-auto mt-4 max-w-xl text-mist/80">{sub}</p>}
        <div className="mt-8">
          <Button href={buttonHref}>{buttonLabel}</Button>
        </div>
      </div>
    </section>
  );
}
