"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing20() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Pricing</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pricing plans
          </h1>
          <p className="md:text-md">
            Billed monthly with first results within two months
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Simple outbound
            </h2>
            <p>For early outbound motion</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              $2,500
            </h3>
            <p>per month</p>
            <div className="mt-6 md:mt-8">
              <Button title="Book now" className="w-full">
                Book now
              </Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Multi-agent outbound engine</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Built in your stack</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Free audit first</p>
              </div>
            </div>
          </div>
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              GTM engineering
            </h2>
            <p>For scaling revenue operations</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              $5,500
            </h3>
            <p>per month</p>
            <div className="mt-6 md:mt-8">
              <Button title="Book now" className="w-full">
                Book now
              </Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Multi-agent outbound engine</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Paid ads automation</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>RevOps foundation</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Free audit first</p>
              </div>
            </div>
          </div>
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Full funnel GTM
            </h2>
            <p>For complete growth engineering</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              $8,500
            </h3>
            <p>per month</p>
            <div className="mt-6 md:mt-8">
              <Button title="Book now" className="w-full">
                Book now
              </Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Multi-agent outbound engine</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Paid ads automation</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Full RevOps build</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Growth engineering</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Free audit first</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
