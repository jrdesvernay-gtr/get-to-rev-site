"use client";
import { useEffect, useState, type ReactNode } from "react";
import { Content, fetchOneEntry, isEditing, isPreviewing, type BuilderContent } from "@builder.io/sdk-react";
import { BUILDER_API_KEY, BUILDER_MODEL } from "@/lib/builder-config";
import { customComponents } from "./registry";

// Heavy part (Builder SDK). Only loaded when a published entry exists or the Builder editor/preview is open.
export default function BuilderContent({
  urlPath,
  entry,
  children,
}: {
  urlPath: string;
  entry: BuilderContent | null;
  children: ReactNode;
}) {
  const [content, setContent] = useState<BuilderContent | null>(entry);
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (!BUILDER_API_KEY || !(isEditing() || isPreviewing())) return;
    setLive(true);
    fetchOneEntry({ model: BUILDER_MODEL, apiKey: BUILDER_API_KEY, userAttributes: { urlPath } })
      .then(setContent)
      .catch(() => {});
  }, [urlPath]);

  if (BUILDER_API_KEY && (content || live)) {
    return (
      <Content
        content={content ?? undefined}
        model={BUILDER_MODEL}
        apiKey={BUILDER_API_KEY}
        customComponents={customComponents}
      />
    );
  }
  return <>{children}</>;
}
