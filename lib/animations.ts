import type { Variants } from "framer-motion";
const ease = [0.22, 1, 0.36, 1] as const;
export const fadeUp: Variants = { hidden:{ opacity:0, y:24 }, show:{ opacity:1, y:0, transition:{ duration:.7, ease } } };
export const fadeIn: Variants = { hidden:{ opacity:0 }, show:{ opacity:1, transition:{ duration:.6 } } };
export const scaleIn: Variants = { hidden:{ opacity:0, scale:.96 }, show:{ opacity:1, scale:1, transition:{ duration:.6, ease } } };
export const stagger: Variants = { hidden:{}, show:{ transition:{ staggerChildren:.09, delayChildren:.15 } } };
export const textReveal: Variants = { hidden:{ y:"110%" }, show:{ y:0, transition:{ duration:.9, ease } } };
export const imageReveal: Variants = { hidden:{ opacity:0, filter:"blur(12px)", scale:1.05 }, show:{ opacity:1, filter:"blur(0px)", scale:1, transition:{ duration:1, ease } } };
