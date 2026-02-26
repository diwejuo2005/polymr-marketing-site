// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Services", href: "/services" },
  { label: "Demo", href: "/demo" },
  { label: "Partnerships", href: "/partnerships" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#120e23]/95 px-6 py-3 shadow-lg shadow-black/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between lg:px-10">

        <Link href="/" className="flex items-center">
          <Image
            src="/polymr-correct-logo.png"
            alt="Polymr"
            width={202}
            height={80}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Nav pills */}
        <nav className="hidden items-center rounded-full bg-white/5 px-1.5 py-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-1.5 text-sm font-medium transition",
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/55 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-white/55 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:bg-violet-500"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </header>
  );
}
