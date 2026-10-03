import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
// @ts-expect-error Next.js resolves global CSS imports at build time.
import "./globals.css";
import { profile } from "@/data/profile";
import Providers from "@/components/ui/Providers";
import Cursor from "@/components/ui/Cursor";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const d = Bricolage_Grotesque({ subsets:["latin"], variable:"--font-display" });
const b = Instrument_Sans({ subsets:["latin"], variable:"--font-body" });
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title:`${profile.name} | ${profile.roles.join(" & ")}`,
  description:profile.summary,
  openGraph:{ title:profile.name, description:profile.summary, type:"website" },
  twitter:{ card:"summary_large_image", title:profile.name, description:profile.summary },
};
export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning className={`${d.variable} ${b.variable}`}><head><script dangerouslySetInnerHTML={{ __html:`try{document.documentElement.dataset.theme=localStorage.getItem("theme")||"dark"}catch(e){document.documentElement.dataset.theme="dark"}` }}/></head><body>
    <Providers><Cursor/><Loader/><Navbar/><main>{children}</main><Footer/></Providers></body></html>;
}
