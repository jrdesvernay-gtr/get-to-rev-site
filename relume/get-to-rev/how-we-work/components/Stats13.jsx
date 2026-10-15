"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Proof</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              The numbers that matter
            </h2>
            <p className="md:text-md">
              We measure our work in results, not activity. Here is what we
              deliver.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary">Book</Button>
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Pricing
              </Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-8 lg:gap-y-12">
            <div className="w-full border-l-2 border-border-primary pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                2
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Months to first results
              </h3>
            </div>
            <div className="w-full border-l-2 border-border-primary pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                100%
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                In your stack
              </h3>
            </div>
            <div className="w-full border-l-2 border-border-primary pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                3
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Core services
              </h3>
            </div>
            <div className="w-full border-l-2 border-border-primary pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                50+
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Campaigns launched
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
