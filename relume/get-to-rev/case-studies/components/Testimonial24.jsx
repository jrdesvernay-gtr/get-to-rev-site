"use client";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-black" : "bg-neutral-light"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonial24() {
  const useCarousel = useCarousel();
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Case studies
          </h2>
          <p className="md:text-md">
            Named results from companies that turned on the automation.
          </p>
        </div>
        <Carousel
          setApi={useCarousel.setApi}
          opts={{ loop: true, align: "start" }}
        >
          <CarouselContent className="ml-0">
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-[80%] md:basis-1/2 md:pr-8 lg:basis-1/3">
              <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                <div className="mb-8 md:mb-10 lg:mb-12">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                    alt="Webflow logo 1"
                    className="max-h-12"
                  />
                </div>
                <p className="md:text-md">
                  "We went from zero pipeline to forty qualified meetings in
                  eight weeks."
                </p>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p>CEO, Medflow Health</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-8">
                  <Button
                    className="py-1"
                    title="Read case study"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Read case study
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-[80%] md:basis-1/2 md:pr-8 lg:basis-1/3">
              <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                <div className="mb-8 md:mb-10 lg:mb-12">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                    alt="Relume logo 2"
                    className="max-h-12"
                  />
                </div>
                <p className="md:text-md">
                  "We went from zero pipeline to forty qualified meetings in
                  eight weeks."
                </p>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 2"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p>CEO, Medflow Health</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-8">
                  <Button
                    className="py-1"
                    title="Read case study"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Read case study
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-[80%] md:basis-1/2 md:pr-8 lg:basis-1/3">
              <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                <div className="mb-8 md:mb-10 lg:mb-12">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                    alt="Webflow logo 1"
                    className="max-h-12"
                  />
                </div>
                <p className="md:text-md">
                  "We went from zero pipeline to forty qualified meetings in
                  eight weeks."
                </p>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p>CEO, Medflow Health</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-8">
                  <Button
                    className="py-1"
                    title="Read case study"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Read case study
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-[80%] md:basis-1/2 md:pr-8 lg:basis-1/3">
              <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                <div className="mb-8 md:mb-10 lg:mb-12">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                    alt="Relume logo 2"
                    className="max-h-12"
                  />
                </div>
                <p className="md:text-md">
                  "We went from zero pipeline to forty qualified meetings in
                  eight weeks."
                </p>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 2"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p>CEO, Medflow Health</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-8">
                  <Button
                    className="py-1"
                    title="Read case study"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Read case study
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-[80%] md:basis-1/2 md:pr-8 lg:basis-1/3">
              <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                <div className="mb-8 md:mb-10 lg:mb-12">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                    alt="Webflow logo 1"
                    className="max-h-12"
                  />
                </div>
                <p className="md:text-md">
                  "We went from zero pipeline to forty qualified meetings in
                  eight weeks."
                </p>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p>CEO, Medflow Health</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-8">
                  <Button
                    className="py-1"
                    title="Read case study"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Read case study
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-[80%] md:basis-1/2 md:pr-8 lg:basis-1/3">
              <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
                <div className="mb-8 md:mb-10 lg:mb-12">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                    alt="Relume logo 2"
                    className="max-h-12"
                  />
                </div>
                <p className="md:text-md">
                  "We went from zero pipeline to forty qualified meetings in
                  eight weeks."
                </p>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 2"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p>CEO, Medflow Health</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-8">
                  <Button
                    className="py-1"
                    title="Read case study"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Read case study
                  </Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="mt-8 flex items-center justify-between">
            <div className="mt-5 flex w-full items-start justify-start">
              <button
                onClick={useCarousel.handleDotClick(0)}
                className={useCarousel.dotClassName(0)}
              />
              <button
                onClick={useCarousel.handleDotClick(1)}
                className={useCarousel.dotClassName(1)}
              />
              <button
                onClick={useCarousel.handleDotClick(2)}
                className={useCarousel.dotClassName(2)}
              />
              <button
                onClick={useCarousel.handleDotClick(3)}
                className={useCarousel.dotClassName(3)}
              />
              <button
                onClick={useCarousel.handleDotClick(4)}
                className={useCarousel.dotClassName(4)}
              />
              <button
                onClick={useCarousel.handleDotClick(5)}
                className={useCarousel.dotClassName(5)}
              />
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
