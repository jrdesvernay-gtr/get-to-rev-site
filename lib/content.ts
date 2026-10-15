import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Entry = {
  slug: string;
  html: string;
  data: Record<string, any>;
};

const root = path.join(process.cwd(), "content");

export function getEntries(dir: "blog" | "case-studies"): Entry[] {
  const folder = path.join(root, dir);
  if (!fs.existsSync(folder)) return [];
  return fs
    .readdirSync(folder)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(folder, file), "utf8");
      const { data, content } = matter(raw);
      const slug = (data.slug as string) || file.replace(/\.md$/, "");
      return { slug, data: normalize(data), html: marked.parse(content, { async: false }) as string };
    })
    .sort((a, b) => String(b.data.date || "").localeCompare(String(a.data.date || "")));
}

export function getEntry(dir: "blog" | "case-studies", slug: string) {
  return getEntries(dir).find((e) => e.slug === slug);
}

// gray-matter parses YAML dates into Date objects; keep everything as plain strings
function normalize(data: Record<string, any>) {
  const out: Record<string, any> = {};
  for (const [k, v] of Object.entries(data)) {
    out[k] = v instanceof Date ? v.toISOString().slice(0, 10) : v;
  }
  return out;
}
