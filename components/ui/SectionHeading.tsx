import Reveal from "./Reveal";
export default function SectionHeading({ title, sub }:{ title:string; sub?:string }) {
  return <Reveal className="mb-12 max-w-2xl"><h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">{title}</h2>
    {sub && <p className="mt-4 text-mute text-lg">{sub}</p>}</Reveal>;
}
