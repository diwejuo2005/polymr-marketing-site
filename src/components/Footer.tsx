import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/8 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 lg:px-16 md:grid-cols-3">
        <div>
          <div className="font-serif text-sm font-semibold text-white">Polymr</div>
          <div className="mt-2 text-sm leading-relaxed text-white/40">
            Advanced MRP for manufacturers — from messy documents to automated operations and analytics.
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/30">Pages</div>
          <div className="mt-4 grid gap-2.5 text-sm">
            <Link className="text-white/45 transition hover:text-white" href="/">Home</Link>
            <Link className="text-white/45 transition hover:text-white" href="/platform">Platform</Link>
            <Link className="text-white/45 transition hover:text-white" href="/services">Services</Link>
            <Link className="text-white/45 transition hover:text-white" href="/demo">Demo</Link>
            <Link className="text-white/45 transition hover:text-white" href="/partnerships">Partnerships</Link>
            <Link className="text-white/45 transition hover:text-white" href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/30">Contact</div>
          <div className="mt-4 space-y-1.5 text-sm text-white/40">
            <div>naman@polymr.tech</div>
            <div>tanmay@polymr.tech</div>
          </div>

          <Link
            href="/demo"
            className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Book a demo →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto max-w-[1440px] px-6 py-5 lg:px-16 text-xs text-white/25">
          © 2026 Polymr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
