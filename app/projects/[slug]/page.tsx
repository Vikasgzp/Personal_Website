import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
export const generateStaticParams = () => projects.map(p => ({ slug: p.slug }));
export default function ProjectPage({ params }:{ params:{ slug:string } }) {
  const i = projects.findIndex(p => p.slug === params.slug); if (i < 0) notFound();
  const p = projects[i], next = projects[(i + 1) % projects.length];
  return <Container className="pb-24 pt-36"><Link href="/#projects" className="text-sm text-mute hover:text-fg">Back to projects</Link>
    <h1 className="mt-6 font-display text-5xl font-semibold md:text-7xl break-words">{p.title}</h1>
    <p className="mt-3 text-xl text-mute">{p.tagline}. {p.category}, {p.year}</p>
    <div className="mt-10 grid gap-10 md:grid-cols-3"><div className="md:col-span-2"><h2 className="font-display text-2xl">Overview</h2><p className="mt-3 text-lg text-mute">{p.description}</p>
      {(["problem","solution","architecture","challenges","results"] as const).map(k => p[k] && <div key={k}><h2 className="mt-10 font-display text-2xl capitalize">{k}</h2><p className="mt-3 text-lg text-mute">{p[k]}</p></div>)}
      <h2 className="mt-10 font-display text-2xl">Features</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-mute marker:text-accent">{p.features.map(f => <li key={f}>{f}</li>)}</ul></div>
      <aside className="md:col-start-3 md:row-start-1"><h2 className="font-display text-2xl">Tech stack</h2><div className="mt-3 flex flex-wrap gap-2">{p.tech.map(t => <Badge key={t}>{t}</Badge>)}</div>
        <div className="mt-8 flex flex-col items-start gap-3">{p.github && <Button href={p.github} external variant="ghost">GitHub</Button>}{p.live && <Button href={p.live} external>Live demo</Button>}</div></aside></div>
    <Link href={`/projects/${next.slug}`} className="mt-20 block border-t border-line pt-8 hover:text-accent"><span className="text-sm text-mute">Next project</span><p className="font-display text-3xl">{next.title}</p></Link></Container>;
}
