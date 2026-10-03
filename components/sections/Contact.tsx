"use client";
import { useState } from "react";
import { social } from "@/data/social";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
export default function Contact() {
  const [state, setState] = useState<"idle"|"loading"|"ok"|"error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("loading");
    const body = Object.fromEntries(new FormData(e.currentTarget));
    try { const r = await fetch("/api/contact", { method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify(body) }); setState(r.ok ? "ok" : "error"); }
    catch { setState("error"); }
  }
  const f = "w-full rounded-xl border border-line bg-card px-4 py-3 outline-none focus:border-accent";
  return <section id="contact" className="py-28"><Container>
    <SectionHeading title="Have an idea? Let's build it."/>
    <div className="grid gap-12 md:grid-cols-2">
      <ul className="divide-y divide-line border-y border-line">{social.map(s => <li key={s.name}><a href={s.url} className="group flex justify-between py-4 transition-colors hover:text-accent">
        <span className="font-display text-xl">{s.name}</span><span className="text-mute group-hover:text-accent">{s.username}</span></a></li>)}</ul>
      <form onSubmit={submit} className="space-y-4">
        <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden"/>
        <input name="name" required placeholder="Name" aria-label="Name" className={f}/>
        <input name="email" type="email" required placeholder="Email" aria-label="Email" className={f}/>
        <input name="subject" required placeholder="Subject" aria-label="Subject" className={f}/>
        <textarea name="message" required minLength={10} rows={5} placeholder="Message" aria-label="Message" className={f}/>
        <button disabled={state==="loading"} className="rounded-full bg-fg px-7 py-3 font-medium text-bg transition-colors hover:bg-accent disabled:opacity-60">{state==="loading" ? "Sending..." : "Send message"}</button>
        <p role="status" className="text-sm text-mute">{state==="ok" && "Message sent. I'll reply soon."}{state==="error" && "Couldn't send. Check the fields or email me directly."}</p>
      </form></div></Container></section>;
}
