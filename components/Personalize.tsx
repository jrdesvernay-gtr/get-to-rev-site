"use client";
import { useEffect, useState } from "react";

const DEFAULT = "For SaaS in healthtech, martech, wellness and edtech, and for media agencies and publishers.";

const BY_INDUSTRY: Record<string, string> = {
  healthtech: "For healthtech SaaS teams selling to a small, specific buyer list.",
  martech: "For martech SaaS teams in a crowded category.",
  wellness: "For wellness companies reaching many small buyers.",
  edtech: "For edtech teams with long buying cycles and several stakeholders.",
  agencies: "For media agencies that need delivery capacity behind client work.",
  "media-agencies": "For media agencies that need delivery capacity behind client work.",
  publishers: "For publishers selling ad and sponsorship inventory to local businesses.",
};

// The default text is in the HTML for crawlers. A visitor arriving with ?industry=healthtech
// (or utm_content=healthtech) sees the tailored line after hydration.
export function PersonalizedEyebrow() {
  const [text, setText] = useState(DEFAULT);
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const key = (p.get("industry") || p.get("utm_content") || "").toLowerCase();
    if (BY_INDUSTRY[key]) setText(BY_INDUSTRY[key]);
  }, []);
  return <p className="mx-auto max-w-2xl text-[0.8rem] font-medium uppercase tracking-[0.14em] text-muted">{text}</p>;
}
