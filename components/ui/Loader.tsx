"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";
export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    let seen = false; try { seen = !!sessionStorage.getItem("seen"); } catch {}
    if (seen) { setShow(false); return; }
    const id = setTimeout(() => { setShow(false); try { sessionStorage.setItem("seen", "1"); } catch {} }, 1300);
    return () => clearTimeout(id);
  }, []);
  return <AnimatePresence>{show && <motion.div key="l" aria-hidden exit={{ y:"-100%" }} transition={{ duration:.7, ease:[0.76,0,0.24,1] }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg">
    <motion.span initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="font-display text-7xl font-semibold">V</motion.span>
    <motion.span initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.3 }} className="mt-3 text-sm text-mute">{profile.name}</motion.span>
    <motion.div className="mt-6 h-px w-40 origin-left bg-accent" initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:1.1 }}/></motion.div>}</AnimatePresence>;
}
