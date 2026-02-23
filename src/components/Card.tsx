export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-white/10 bg-white/5 shadow-glow",
        "backdrop-blur-xl",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}