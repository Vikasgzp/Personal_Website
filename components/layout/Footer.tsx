import { profile } from "@/data/profile";
import { social } from "@/data/social";
import Container from "./Container";
export default function Footer() {
  return <footer className="border-t border-line py-12"><Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
    <div><p className="font-display text-xl font-semibold">{profile.name}</p>
      <p className="mt-1 flex items-center gap-2 text-sm text-mute"><span className="h-2 w-2 animate-pulse rounded-full bg-accent"/>Designed and built with Next.js</p></div>
    <ul className="flex flex-wrap gap-5 text-sm text-mute">{social.map(s => <li key={s.name}><a className="hover:text-fg" href={s.url}>{s.name}</a></li>)}<li><a className="hover:text-fg" href={profile.resume}>Resume</a></li></ul>
    <p className="text-sm text-mute">© {new Date().getFullYear()} {profile.name}</p></Container></footer>;
}
