import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-white/40 backdrop-blur-xl dark:bg-black/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Polymr</div>
          <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Advanced MRP for manufacturers — from messy documents to automated operations and analytics.
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Pages</div>
          <div className="mt-3 grid gap-2 text-sm">
            <Link className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="/">Home</Link>
            <Link className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="/platform">Platform</Link>
            <Link className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="/services">Services</Link>
            <Link className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="/demo">Demo</Link>
            <Link className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="/partnerships">Partnerships</Link>
            <Link className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white" href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Contact</div>
          <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            <div>naman@polymr.tech</div>
            <div>tanmay@polymr.tech</div>
          </div>

          <Link
            href="/demo"
            className="mt-5 inline-flex rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(168,85,247,0.35)] transition hover:translate-y-[-1px]"
          >
            Email demo request
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-zinc-500 dark:text-zinc-400">
          © 2026 Polymr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}