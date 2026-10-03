import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost, getPosts } from "@/lib/blog";
import Container from "@/components/layout/Container";
export const generateStaticParams = () =>
  getPosts().map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  return p
    ? { title: `${p.title} | Vikas Kushwaha`, description: p.excerpt }
    : {};
}
export default function Post({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) notFound();
  return (
    <Container className="max-w-3xl pb-24 pt-36">
      <Link href="/blog" className="text-sm text-mute hover:text-fg">
        All posts
      </Link>
      <h1 className="mt-6 font-display text-4xl font-semibold md:text-6xl">
        {p.title}
      </h1>
      <p className="mt-3 text-mute">
        {p.category}, {p.date}, {p.readTime} read
      </p>
      <div className="blog-body mt-10">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{p.body}</ReactMarkdown>
      </div>
    </Container>
  );
}
