import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
export default function Projects() {
  const sorted = [...projects]
    .filter((p) => !p.unlisted)
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionHeading
          title="Projects"
          sub="Click any project for the full story."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {sorted.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
