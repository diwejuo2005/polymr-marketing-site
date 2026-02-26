// src/components/Button.tsx
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-violet-500/90 hover:bg-violet-500 text-black font-medium shadow-[0_10px_30px_rgba(140,90,255,0.25)]",
  secondary:
    "border border-black/10 bg-white text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:shadow-none",
  ghost:
    "bg-transparent text-zinc-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm transition",
        styles[variant],
      ].join(" ")}
    >
      {children}
    </Link>
  );
}