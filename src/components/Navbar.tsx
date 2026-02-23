"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/80 px-4 py-3 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10">
              {/* zoomed-out so the logo is visible */}
              <Image
                src="/polymr-logo.jpeg"
                alt="polymr"
                width={96}
                height={96}
                className="h-full w-full object-contain p-2"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                polymr
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400">
                Advanced MRP for manufacturers
              </div>
            </div>
          </Link>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-2 rounded-2xl bg-black/5 p-1 dark:bg-white/10">
            {[
              ["Home", "/"],
              ["Platform", "/platform"],
              ["Services", "/services"],
              ["Demo", "/demo"],
              ["Partnerships", "/partnerships"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-white/70 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-900/60 dark:hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:bg-zinc-900/60"
            >
              Login
            </Link>

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:bg-zinc-900/60"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link
              href="/contact"
              className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}