import { fetchOneEntry, type BuilderContent } from "@builder.io/sdk-react";

import { BUILDER_API_KEY, BUILDER_MODEL } from "./builder-config";

// Build-time fetch. Returns null when Builder is not configured, has no published entry for the path,
// or is unreachable, so the code-built page always renders as the fallback.
export async function fetchBuilderPage(urlPath: string): Promise<BuilderContent | null> {
  if (!BUILDER_API_KEY) return null;
  try {
    return await fetchOneEntry({
      model: BUILDER_MODEL,
      apiKey: BUILDER_API_KEY,
      userAttributes: { urlPath },
    });
  } catch {
    return null;
  }
}
