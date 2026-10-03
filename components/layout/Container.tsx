export default function Container({ children, className="" }:{ children:React.ReactNode; className?:string }) {
  return <div className={`mx-auto w-full max-w-6xl 2xl:max-w-7xl px-6 ${className}`}>{children}</div>;
}
