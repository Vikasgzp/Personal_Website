"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { imageReveal } from "@/lib/animations";
export default function RevealImage({ src, alt }:{ src:string; alt:string }) {
  return <motion.div variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once:true }} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
    <Image src={src} alt={alt} fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover"/></motion.div>;
}
