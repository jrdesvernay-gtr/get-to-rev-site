"use client";
import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";
import type { BuilderContent as Entry } from "@builder.io/sdk-react";

// ssr:false keeps the Builder SDK out of the page's initial JS; it loads only inside the Builder editor / preview.
const BuilderContent = dynamic(() => import("./BuilderContent"), { ssr: false });

export function EditorGate({ urlPath, children }: { urlPath: string; children: ReactNode }) {
  const [inEditor, setInEditor] = useState(false);
  useEffect(() => {
    if (window.location.search.includes("builder")) setInEditor(true);
  }, []);
  if (inEditor) return <BuilderContent urlPath={urlPath} entry={null as Entry | null}>{children}</BuilderContent>;
  return <>{children}</>;
}
