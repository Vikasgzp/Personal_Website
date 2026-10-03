import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
 theme:{extend:{colors:{bg:"rgb(var(--bg) / <alpha-value>)",fg:"rgb(var(--fg) / <alpha-value>)",mute:"rgb(var(--mute) / <alpha-value>)",line:"rgb(var(--fg) / 0.1)",accent:"rgb(var(--accent) / <alpha-value>)",card:"rgb(var(--card) / <alpha-value>)"},
 fontFamily:{display:["var(--font-display)"],sans:["var(--font-body)"]}}},plugins:[]} satisfies Config;
