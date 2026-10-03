// "use client";
// import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
// import { profile } from "@/data/profile";
// import { stagger, textReveal, fadeUp } from "@/lib/animations";
// import Button from "@/components/ui/Button";
// import Container from "@/components/layout/Container";
// export default function Hero() {
//   const x = useMotionValue(60), y = useMotionValue(30);
//   const bg = useMotionTemplate`radial-gradient(650px circle at ${x}% ${y}%, rgb(var(--accent) / .2), transparent 60%)`;
//   return <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden"
//     onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width * 100); y.set((e.clientY - r.top) / r.height * 100); }}>
//     <motion.div aria-hidden style={{ backgroundImage: bg }} className="absolute inset-0"/>
//     <Container className="relative pt-28">
//       <motion.div variants={stagger} initial="hidden" animate="show">
//         <motion.p variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm text-mute">
//           <span className="h-2 w-2 rounded-full bg-accent"/>{profile.status}</motion.p>
//         <h1 className="font-display text-[13vw] font-semibold leading-[.95] tracking-tight md:text-8xl">
//           {profile.headline.split(" ").map((w, i) => <span key={i} className="mr-[.25em] inline-block overflow-hidden align-bottom"><motion.span variants={textReveal} className="inline-block">{w}</motion.span></span>)}</h1>
//         <motion.p variants={fadeUp} className="mt-8 font-display text-xl text-fg md:text-2xl">{profile.name}, {profile.roles.join(" and ")}</motion.p>
//         <motion.p variants={fadeUp} className="mt-4 max-w-xl text-lg text-mute">{profile.intro}</motion.p>
//         <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
//           <Button href="#projects">View my work</Button><Button href="#contact" variant="ghost">Let's connect</Button></motion.div>
//       </motion.div>
//     </Container>
//   </section>;
// }
"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { profile } from "@/data/profile";
import { stagger, textReveal, fadeUp } from "@/lib/animations";
import Button from "@/components/ui/Button";
import RevealImage from "@/components/ui/RevealImage";
import Container from "@/components/layout/Container";
export default function Hero() {
  const x = useMotionValue(60),
    y = useMotionValue(30);
  const bg = useMotionTemplate`radial-gradient(650px circle at ${x}% ${y}%, rgb(var(--accent) / .2), transparent 60%)`;
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width) * 100);
        y.set(((e.clientY - r.top) / r.height) * 100);
      }}
    >
      <motion.div
        aria-hidden
        style={{ backgroundImage: bg }}
        className="absolute inset-0"
      />
      <Container className="relative grid items-center gap-10 pb-16 pt-28 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-7"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm text-mute"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            {profile.status}
          </motion.p>
          <h1 className="font-display text-[13vw] font-semibold leading-[.95] tracking-tight md:text-7xl xl:text-8xl">
            {profile.headline.split(" ").map((w, i) => (
              <span
                key={i}
                className="mr-[.25em] inline-block overflow-hidden align-bottom"
              >
                <motion.span variants={textReveal} className="inline-block">
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 font-display text-xl text-fg md:text-2xl"
          >
            {profile.name}, {profile.roles.join(" and ")}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-lg text-mute"
          >
            {profile.intro}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <Button href="#projects">View my work</Button>
            <Button href="#contact" variant="ghost">
              Let's connect
            </Button>
          </motion.div>
        </motion.div>
        {profile.photo && (
          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:col-span-5 lg:ml-auto lg:max-w-md">
            <RevealImage src={profile.photo} alt={profile.name} />
          </div>
        )}
      </Container>
    </section>
  );
}
