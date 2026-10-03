"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
export default function Skills() {
  return <section id="skills" className="py-28"><Container>
    <SectionHeading title="Skills" sub="Self-rated, out of 100."/>
    <div className="grid gap-10 md:grid-cols-2">{skills.map(g => <div key={g.category}>
      <h3 className="mb-4 font-display text-xl">{g.category}</h3>
      <ul className="space-y-5">{g.items.map(it => <li key={it.name}>
        <div className="mb-2 flex justify-between text-sm"><span>{it.name}</span><span className="text-mute">{it.level}</span></div>
        <div className="h-1.5 overflow-hidden rounded-full bg-fg/10"><motion.div className="h-full origin-left rounded-full bg-accent" style={{ width:`${it.level}%` }}
          initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }} transition={{ duration:1.1, ease:[0.22,1,0.36,1] }}/></div></li>)}</ul></div>)}</div>
  </Container></section>;
}
