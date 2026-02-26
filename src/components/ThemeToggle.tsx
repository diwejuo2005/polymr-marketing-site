"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: "light" | "dark";
  onToggle: () => void;
}) {
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white text-zinc-900 shadow-sm transition hover:bg-zinc-50"
    >
      <Icon size={18} />
    </button>
  );
}