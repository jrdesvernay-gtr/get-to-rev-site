"use client";

import Script from "next/script";
import { SITE } from "@/lib/site";

export function CalendlyEmbed() {
  return (
    <>
      <div
        className="calendly-inline-widget rounded-card shadow-soft"
        data-url={SITE.calendly}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </>
  );
}
