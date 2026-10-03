import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import type { Post } from "@/lib/blog";
export default function BlogCard({ post: p }:{ post:Post }) {
  return <Reveal className="h-full"><Link href={`/blog/${p.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent/60">
    <div className="flex items-center gap-3 text-sm text-mute"><Badge>{p.category}</Badge><span>{p.readTime} read</span></div>
    <h3 className="mt-4 font-display text-2xl font-semibold group-hover:text-accent">{p.title}</h3><p className="mt-2 text-mute">{p.excerpt}</p>
    <time className="mt-auto pt-6 text-sm text-mute">{p.date}</time></Link></Reveal>;
}
