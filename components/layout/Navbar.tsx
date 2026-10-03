"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { profile } from "@/data/profile";
const links = ["about","skills","projects","experience","education","blog","contact"];
export default function Navbar() {
  const [small, setSmall] = useState(false), [open, setOpen] = useState(false), [active, setActive] = useState("");
  useEffect(() => {
    const f = () => setSmall(window.scrollY > 40); f(); window.addEventListener("scroll", f, { passive:true });
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin:"-45% 0px -50% 0px" });
    links.forEach(id => { const el = document.getElementById(id); el && io.observe(el); });
    return () => { window.removeEventListener("scroll", f); io.disconnect(); };
  }, []);
  return <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
    <nav aria-label="Main" className={`flex items-center justify-between gap-6 rounded-full border border-line bg-bg/60 backdrop-blur-xl transition-all duration-500 ${small?"px-4 py-2 w-full max-w-3xl":"px-6 py-3 w-full max-w-5xl"}`}>
      <a href="/#home" className="font-display font-semibold">{profile.shortName}</a>
      <ul className="hidden lg:flex gap-1">{links.map(l => <li key={l}><a href={`/#${l}`} className={`relative rounded-full px-3 py-1.5 text-sm capitalize transition-colors hover:text-fg ${active===l?"text-fg":"text-mute"}`}>
        {active===l && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-fg/10"/>}<span className="relative">{l}</span></a></li>)}</ul>
      <div className="flex items-center gap-2">
        <ThemeToggle/><a href={profile.resume} className="hidden sm:block rounded-full bg-fg px-4 py-1.5 text-sm font-medium text-bg hover:bg-accent transition-colors">Resume</a>
        <button aria-label="Menu" className="lg:hidden p-1" onClick={() => setOpen(o => !o)}>{open?<X/>:<Menu/>}</button>
      </div>
    </nav>
    <AnimatePresence>{open && <motion.div initial={{ clipPath:"circle(0% at 90% 5%)" }} animate={{ clipPath:"circle(150% at 90% 5%)" }} exit={{ clipPath:"circle(0% at 90% 5%)" }} transition={{ duration:.6 }}
      className="fixed inset-0 -z-10 bg-bg flex flex-col justify-center gap-5 px-8 lg:hidden">
      {links.map(l => <a key={l} href={`/#${l}`} onClick={() => setOpen(false)} className="font-display text-5xl capitalize">{l}</a>)}
    </motion.div>}</AnimatePresence>
  </header>;
}
