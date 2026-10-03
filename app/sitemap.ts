import { projects } from "@/data/projects";
import { getPosts } from "@/lib/blog";
const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export default function sitemap() {
  return [base, `${base}/blog`, ...projects.map(p => `${base}/projects/${p.slug}`), ...getPosts().map(p => `${base}/blog/${p.slug}`)].map(url => ({ url }));
}
