"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Badge from "@/components/ui/Badge";
type Exp = { company:string; role:string; duration:string; mode:string; summary:string; achievements:string[]; tech:string[]; project?:string; certificate?:string; github?:string; live?:string };
export default function ExperienceCard({ item: e }:{ item:Exp }) {
  const [open, setOpen] = useState(false);
  return <article className="rounded-2xl border border-line bg-card">
    <button onClick={() => setOpen(o => !o)} aria-expanded={open} className="flex w-full items-start justify-between gap-4 p-6 text-left">
      <div><h3 className="font-display text-2xl font-semibold">{e.role}</h3>
        <p className="mt-1">{e.company}</p><p className="mt-1 text-sm text-mute">{e.duration}, {e.mode}</p>
        <p className="mt-4 max-w-2xl text-mute">{e.summary}</p></div>
      <ChevronDown className={`mt-1 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}/></button>
    <AnimatePresence initial={false}>{open && <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="overflow-hidden">
      <div className="border-t border-line p-6 pt-5">
        <ul className="list-disc space-y-2 pl-5 text-mute marker:text-accent">{e.achievements.map(a => <li key={a}>{a}</li>)}</ul>
        <div className="mt-5 flex flex-wrap gap-2">{e.tech.map(t => <Badge key={t}>{t}</Badge>)}</div>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">{e.github && <a className="rounded-full border border-line px-4 py-2 hover:border-accent" href={e.github} target="_blank" rel="noreferrer">GitHub</a>}
          {e.live && <a className="rounded-full border border-line px-4 py-2 hover:border-accent" href={e.live} target="_blank" rel="noreferrer">Live demo</a>}
          {e.project && <a className="rounded-full border border-line px-4 py-2 hover:border-accent" href={e.project}>View project</a>}
          {e.certificate && <a className="rounded-full border border-line px-4 py-2 hover:border-accent" href={e.certificate}>View certificate</a>}</div>
      </div></motion.div>}</AnimatePresence></article>;
}
