"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
// Desktop mouse only. Hidden on touch devices and with reduced motion.
export default function Cursor() {
  const [on, setOn] = useState(false), [big, setBig] = useState(false), [label, setLabel] = useState("");
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness:500, damping:40, mass:.4 }), sy = useSpring(y, { stiffness:500, damping:40, mass:.4 });
  useEffect(() => {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches || window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    setOn(true); document.documentElement.classList.add("has-cursor");
    const mv = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const ov = (e: MouseEvent) => { const t = e.target as HTMLElement; setLabel((t.closest("[data-cursor]") as HTMLElement | null)?.dataset.cursor || ""); setBig(!!t.closest("a,button,[data-cursor]")); };
    window.addEventListener("mousemove", mv); window.addEventListener("mouseover", ov);
    return () => { window.removeEventListener("mousemove", mv); window.removeEventListener("mouseover", ov); document.documentElement.classList.remove("has-cursor"); };
  }, [x, y]);
  if (!on) return null;
  const s = label ? 72 : big ? 34 : 10;
  return <motion.div aria-hidden style={{ x:sx, y:sy }} className="pointer-events-none fixed left-0 top-0 z-[90]">
    <motion.div animate={{ width:s, height:s }} className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-accent text-xs font-medium text-bg opacity-90">{label}</motion.div></motion.div>;
}
