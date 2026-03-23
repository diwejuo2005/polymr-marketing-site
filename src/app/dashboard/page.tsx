"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-[calc(100vh-88px)] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-violet-500" />
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;

  return (
    <main className="relative min-h-[calc(100vh-88px)]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_500px_at_60%_10%,rgba(139,92,246,0.15),transparent_55%)]" />

      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name ?? "User"}
                width={52}
                height={52}
                className="rounded-full ring-2 ring-violet-500/30"
              />
            ) : (
              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-violet-500/20 text-lg font-semibold text-violet-300">
                {user?.name?.[0] ?? user?.email?.[0] ?? "?"}
              </div>
            )}
            <div>
              <h1 className="text-xl font-semibold text-white">
                Welcome back{user?.name ? `, ${user.name.split(" ")[0]}` : ""}
              </h1>
              <p className="text-sm text-white/45">{user?.email}</p>
            </div>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
          >
            Sign out
          </button>
        </div>

        {/* Placeholder content */}
        <div className="grid gap-4 sm:grid-cols-3">
          {["Production Orders", "Inventory", "Reports"].map((label) => (
            <div
              key={label}
              className="rounded-2xl border border-white/8 bg-white/4 p-6"
            >
              <p className="text-sm font-medium text-white/50">{label}</p>
              <p className="mt-2 text-3xl font-semibold text-white">—</p>
              <p className="mt-1 text-xs text-white/30">Coming soon</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/8 bg-white/4 p-8 text-center">
          <p className="text-sm text-white/40">
            Your Polymr workspace is being set up. Our team will be in touch shortly.
          </p>
        </div>
      </div>
    </main>
  );
}
