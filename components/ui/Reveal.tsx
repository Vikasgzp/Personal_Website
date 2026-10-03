"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
export default function Reveal({ children, className }:{ children:React.ReactNode; className?:string }) {
  return <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-60px" }}>{children}</motion.div>;
}
