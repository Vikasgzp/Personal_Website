import { getPosts } from "@/lib/blog";
import Container from "@/components/layout/Container";
import BlogCard from "@/components/blog/BlogCard";
export const metadata = { title:"Blog | Vikas Kushwaha" };
export default function BlogIndex() {
  return <Container className="pb-24 pt-36"><h1 className="font-display text-5xl font-semibold md:text-7xl">Blog</h1>
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{getPosts().map(p => <BlogCard key={p.slug} post={p}/>)}</div></Container>;
}
