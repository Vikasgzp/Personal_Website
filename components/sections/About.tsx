import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { coding } from "@/data/coding";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
export default function About() {
  return (
    <section id="about" className="py-28">
      <Container>
        <SectionHeading title="About" />
        <div className="grid gap-12 md:grid-cols-5">
          <div className="space-y-5 text-lg text-mute md:col-span-3">
            {profile.about.map((p, i) => (
              <Reveal key={i}>
                <p>{p}</p>
              </Reveal>
            ))}
            <Reveal>
              <blockquote className="border-l-2 border-accent pl-5 font-display text-2xl text-fg">
                {profile.quote}
              </blockquote>
            </Reveal>
          </div>
          <div className="space-y-5 md:col-span-2">
            <Reveal>
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                {coding.map((c) => (
                  <div key={c.platform} className="bg-card p-5 sm:p-6">
                    <dd className="font-display text-2xl font-semibold sm:text-3xl">
                      {c.rank}
                    </dd>
                    <dd className="font-display text-xl text-accent">
                      {c.rating}
                    </dd>
                    <dt className="mt-1 text-sm text-mute">{c.platform}</dt>
                    <dd>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm hover:text-accent"
                      >
                        Profile <ArrowUpRight size={14} />
                      </a>
                    </dd>
                  </div>
                ))}
                {profile.stats.map((s) => (
                  <div key={s.label} className="bg-card p-6">
                    <dd className="font-display text-3xl font-semibold">
                      {s.value}
                    </dd>
                    <dt className="mt-1 text-sm text-mute">{s.label}</dt>
                  </div>
                ))}
                <div className="col-span-2 bg-card p-6">
                  <dt className="text-sm text-mute">Current focus</dt>
                  <dd className="mt-1">{profile.focus}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
