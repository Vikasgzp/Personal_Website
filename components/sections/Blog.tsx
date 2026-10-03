import Link from "next/link";
import { getPosts } from "@/lib/blog";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/blog/BlogCard";
export default function Blog() {
  return <section id="blog" className="py-28"><Container><SectionHeading title="Blog" sub="Notes on AI, engineering and problem solving."/>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{getPosts().slice(0, 3).map(p => <BlogCard key={p.slug} post={p}/>)}</div>
    <Link href="/blog" className="mt-8 inline-block text-mute hover:text-accent">All posts</Link></Container></section>;
}
