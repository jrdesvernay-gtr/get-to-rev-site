"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header62() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Process</p>
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          How we work
        </h1>
        <p className="md:text-md">
          A direct process built for speed and clarity, with first results
          within 2 months.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Book">Book</Button>
          <Button title="Pricing" variant="secondary">
            Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
