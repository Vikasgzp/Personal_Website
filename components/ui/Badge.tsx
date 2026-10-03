export default function Badge({ children }:{ children:React.ReactNode }) {
  return <span className="rounded-full border border-line px-3 py-1 text-xs text-mute">{children}</span>;
}
