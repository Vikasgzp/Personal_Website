import { experience } from "@/data/experience";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ExperienceCard from "@/components/experience/ExperienceCard";
export default function Experience() {
  return <section id="experience" className="py-28"><Container>
    <SectionHeading title="Experience" sub="Open a card for details."/>
    <div className="space-y-5">{experience.map(e => <Reveal key={e.company}><ExperienceCard item={e}/></Reveal>)}</div>
  </Container></section>;
}
