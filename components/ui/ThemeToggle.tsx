"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle() {
  const [t, setT] = useState("dark");
  useEffect(() => setT(document.documentElement.dataset.theme || "dark"), []);
  function flip() { const n = t === "dark" ? "light" : "dark"; setT(n); document.documentElement.dataset.theme = n; try { localStorage.setItem("theme", n); } catch {} }
  return <button aria-label="Toggle theme" onClick={flip} className="rounded-full border border-line p-2 transition-colors hover:border-accent">{t === "dark" ? <Sun size={16}/> : <Moon size={16}/>}</button>;
}
