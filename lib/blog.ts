import fs from "fs";
import path from "path";
// Each post is a Markdown file in /content/blog. The filename (without .md) is the URL slug.
const dir = path.join(process.cwd(), "content/blog");
export type Post = { slug:string; title:string; date:string; category:string; excerpt:string; readTime:string; body:string };
function parse(file: string): Post {
  const raw = fs.readFileSync(path.join(dir, file), "utf8").replace(/\r\n/g, "\n");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta: Record<string, string> = {};
  (m ? m[1] : "").split("\n").forEach(l => { const i = l.indexOf(":"); if (i > 0) meta[l.slice(0, i).trim()] = l.slice(i + 1).trim().replace(/^["']|["']$/g, ""); });
  const body = (m ? m[2] : raw).trim();
  return { slug:file.replace(/\.md$/, ""), title:meta.title || file, date:meta.date || "", category:meta.category || "General", excerpt:meta.excerpt || "",
    readTime:meta.readTime || `${Math.max(1, Math.round(body.split(/\s+/).length / 200))} min`, body };
}
export const getPosts = (): Post[] => fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith(".md")).map(parse).sort((a, b) => b.date.localeCompare(a.date)) : [];
export const getPost = (slug: string) => getPosts().find(p => p.slug === slug);
