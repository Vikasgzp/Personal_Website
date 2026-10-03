import { ArrowUpRight } from "lucide-react";
export default function Button({ href, children, variant="primary", external }:{ href:string; children:React.ReactNode; variant?:"primary"|"ghost"; external?:boolean }) {
  const s = variant==="primary" ? "bg-fg text-bg hover:bg-accent" : "border border-line hover:border-accent hover:text-accent";
  return <a href={href} {...(external?{target:"_blank",rel:"noreferrer"}:{})} className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${s}`}>
    {children}<ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a>;
}
