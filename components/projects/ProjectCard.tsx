"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
export default function ProjectCard({ project: p, index }:{ project:Project; index:number }) {
  const ref = useRef<HTMLDivElement>(null);
  const l = "relative z-10 inline-flex items-center gap-1.5 text-sm text-mute transition-colors hover:text-accent";
  return <Reveal className={p.featured ? "md:col-span-2" : ""}>
    <div ref={ref} data-cursor="View" onMouseMove={e => { const r = ref.current!.getBoundingClientRect(); ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`); ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`); }}
      className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card transition-colors hover:border-accent/50"
      style={{ backgroundImage:"radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgb(var(--accent) / .10), transparent 60%)" }}>
      <div className={`relative overflow-hidden ${p.featured ? "h-48 sm:h-64" : "h-40 sm:h-44"} bg-gradient-to-br from-accent/20 to-transparent`}>
        {p.image && <Image src={p.image} alt={p.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105"/>}
        {!p.image && <span className="absolute bottom-4 left-5 font-display text-6xl text-fg/10">{String(index + 1).padStart(2, "0")}</span>}</div>
      <div className="p-5 sm:p-6"><div className="flex items-start justify-between gap-4"><div className="min-w-0">
        <h3 className="font-display text-2xl font-semibold"><Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0">{p.title}</Link></h3><p className="mt-1 text-mute">{p.tagline}</p></div>
        <ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"/></div>
        <div className="mt-5 flex flex-wrap gap-2">{p.tech.map(t => <Badge key={t}>{t}</Badge>)}</div>
        <div className="mt-5 flex flex-wrap gap-5">{p.github && <a href={p.github} target="_blank" rel="noreferrer" className={l}><Github size={15}/>GitHub</a>}
          {p.live && <a href={p.live} target="_blank" rel="noreferrer" className={l}><ArrowUpRight size={15}/>Live demo</a>}</div></div></div></Reveal>;
}
