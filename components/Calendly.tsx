"use client";
import { useEffect } from "react";
import { SITE } from "@/lib/site";

// Inline Calendly embed. After a booking, Calendly posts an event; we send the visitor to /thank-you/.
export function Calendly() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
    const onMsg = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_scheduled") {
        (window as any).dataLayer?.push({ event: "calendly_booking" });
        window.location.href = "/thank-you/";
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);
  const utm = typeof window === "undefined" ? "" : window.location.search;
  return <div className="calendly-inline-widget overflow-hidden rounded-[var(--radius-card)] bg-white shadow-soft" data-url={`${SITE.calendly}${utm ? utm + "&" : "?"}hide_gdpr_banner=1`} style={{ minWidth: 320, height: 700 }} />;
}
