import type { ReactNode } from "react";
import type { BuilderContent as Entry } from "@builder.io/sdk-react";

// Server component. No Builder key: code page, zero Builder JS. Published entry: render it (SSR'd into the static HTML).
// Key but no entry: code page plus a tiny gate that loads the SDK only inside the Builder editor / preview.
// Builder modules are imported lazily so pages that don't use them ship none of the SDK.
export async function BuilderPage({ urlPath, entry, children }: { urlPath: string; entry: Entry | null; children: ReactNode }) {
  // Inline env check so the build drops the Builder imports entirely when no key is set.
  if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) return <>{children}</>;
  if (entry) {
    const { default: BuilderContent } = await import("./BuilderContent");
    return <BuilderContent urlPath={urlPath} entry={entry}>{children}</BuilderContent>;
  }
  const { EditorGate } = await import("./EditorGate");
  return <EditorGate urlPath={urlPath}>{children}</EditorGate>;
}
