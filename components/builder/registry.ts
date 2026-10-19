"use client";
import type { RegisteredComponent } from "@builder.io/sdk-react";
import { Hero } from "@/components/sections/Hero";
import { Cta } from "@/components/sections/Cta";

// Sections editors can drag, reorder and edit in Builder. Add one entry per section.
// Pattern: the React component takes plain props with the live copy as defaults; `inputs` mirror those props.
export const customComponents: RegisteredComponent[] = [
  {
    component: Hero,
    name: "Hero",
    inputs: [
      { name: "eyebrow", type: "longText" },
      { name: "headlineStart", type: "string" },
      { name: "headlineAccent", type: "string", helperText: "Exactly one accent word (italic serif)." },
      { name: "headlineEnd", type: "string" },
      { name: "subhead", type: "string" },
      { name: "body", type: "longText" },
      { name: "ctaLabel", type: "string" },
      { name: "ctaHref", type: "string" },
      { name: "proofLine", type: "string" },
    ],
  },
  {
    component: Cta,
    name: "Cta",
    inputs: [
      { name: "heading", type: "string", required: true },
      { name: "sub", type: "longText" },
      { name: "buttonLabel", type: "string" },
      { name: "buttonHref", type: "string" },
    ],
  },
];
