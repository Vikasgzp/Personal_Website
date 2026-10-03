import { education } from "@/data/education";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
export function EducationCard({ item: e }:{ item:(typeof education)[number] }) {
  return <Reveal><article className="flex flex-col gap-4 rounded-2xl border border-line bg-card p-6 md:flex-row md:items-center md:justify-between">
    <div><h3 className="font-display text-2xl font-semibold">{e.degree}</h3><p className="mt-1 text-mute">{e.institution}</p><p className="mt-1 text-sm text-mute">{e.duration}</p></div>
    <dl className="flex gap-8"><div><dt className="text-sm text-mute">CGPA</dt><dd className="font-display text-3xl">{e.cgpa}</dd></div><div><dt className="text-sm text-mute">SGPA</dt><dd className="font-display text-3xl">{e.sgpa}</dd></div></dl></article></Reveal>;
}
export default function Education() {
  return <section id="education" className="py-28"><Container><SectionHeading title="Education"/>
    <div className="space-y-5">{education.map(e => <EducationCard key={e.institution} item={e}/>)}</div></Container></section>;
}
