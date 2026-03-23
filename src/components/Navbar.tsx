// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

type DropdownItem = { label: string; href: string };

const NAV_ITEMS: {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}[] = [
  { label: "Home", href: "/" },
  {
    label: "Platform",
    href: "/platform",
    dropdown: [
      { label: "Overview", href: "/platform" },
      { label: "Capabilities", href: "/platform#capabilities" },
      { label: "Next Modules", href: "/platform#next-modules" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Implementation", href: "/services" },
      { label: "Toolkit", href: "/services#toolkit" },
      { label: "Commercial Model", href: "/services#commercial" },
    ],
  },
  { label: "Demo", href: "/demo" },
  { label: "Partnerships", href: "/partnerships" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* ── Announcement bar ── */}
      <div className="flex items-center justify-center gap-3 border-b border-white/8 bg-black/80 px-4 py-3 backdrop-blur-md">
        <span className="text-sm text-white/50">
          Polymr is now live — AI-powered ERP for manufacturers
        </span>
        <span className="text-white/20">|</span>
        <Link
          href="/demo"
          className="text-sm text-white/70 underline-offset-2 transition hover:text-white hover:underline"
        >
          Book a demo →
        </Link>
      </div>

      {/* ── Main navbar ── */}
      <header className="w-full border-b border-white/8 bg-black/75 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-[1440px] items-center px-6 py-4 lg:px-10">

          {/* Logo — left */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/polymr-logo-white.png"
                alt="Polymr"
                width={500}
                height={200}
                priority
                className="h-52 w-auto object-contain brightness-100"
              />
            </Link>
          </div>

          {/* Nav links — absolutely centered */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const hasDropdown = !!item.dropdown;

              return (
                <div
                  key={item.href}
                  className="relative pb-2"
                  onMouseEnter={() => hasDropdown && setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={[
                      "flex items-center gap-1.5 px-5 py-2 text-base transition",
                      active ? "text-white" : "text-white/45 hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                    {hasDropdown && (
                      <svg
                        className={[
                          "h-4 w-4 transition-transform",
                          openMenu === item.label ? "rotate-180" : "",
                        ].join(" ")}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown — no gap, pb-2 on parent bridges the gap */}
                  {hasDropdown && openMenu === item.label && (
                    <div className="absolute left-0 top-full min-w-[200px] overflow-hidden rounded-xl border border-white/10 bg-[#080810]/95 py-1.5 shadow-2xl shadow-black/60 backdrop-blur-xl">
                      {item.dropdown!.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-base text-white/50 transition hover:bg-white/5 hover:text-white"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Actions — right */}
          <div className="flex flex-1 items-center justify-end gap-2">
            {session ? (
              <>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="px-4 py-2 text-base text-white/45 transition hover:text-white"
                >
                  Sign out
                </button>
                <Link
                  href="/dashboard"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 text-base font-semibold text-white transition hover:bg-violet-400"
                  title={session.user?.name ?? session.user?.email ?? "Account"}
                >
                  {(session.user?.name ?? session.user?.email ?? "?")[0].toUpperCase()}
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-base text-white/45 transition hover:text-white"
                >
                  Log in
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/20 px-6 py-2.5 text-base font-medium text-white transition hover:border-white/45 hover:bg-white/5"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
