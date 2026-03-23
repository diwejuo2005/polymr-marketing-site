// src/app/login/page.tsx
"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

function IconGoogle() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303C33.722 32.91 29.29 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.047 6.053 29.205 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917Z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691 12.87 19.5C14.655 15.091 18.977 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.047 6.053 29.205 4 24 4c-7.682 0-14.357 4.334-17.694 10.691Z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.103 0 9.86-1.956 13.409-5.136l-6.191-5.238C29.192 35.09 26.715 36 24 36c-5.269 0-9.687-3.066-11.282-7.463l-6.516 5.02C9.505 39.566 16.227 44 24 44Z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.085 5.626l.003-.002 6.191 5.238C36.97 39.268 44 34 44 24c0-1.341-.138-2.651-.389-3.917Z"
      />
    </svg>
  );
}

export default function LoginPage() {
  return (
    <main className="relative min-h-[calc(100vh-88px)]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_50%_20%,rgba(139,92,246,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_450px_at_20%_80%,rgba(236,72,153,0.12),transparent_60%)]" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-14">
        {/* Card */}
        <div className="mt-10 w-full max-w-xl rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur">
          <div className="text-center text-sm font-medium text-white/60">
            Sign in to your account
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" }, { prompt: "select_account" })}
              className="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-zinc-100 shadow-sm transition hover:bg-white/15 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-violet-400/40"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 group-hover:bg-white/15">
                <IconGoogle />
              </span>
              <span className="text-base">Sign in with Google</span>
            </button>
          </div>

          <div className="pt-6 text-center text-xs text-white/55">
            By continuing, you agree to our{" "}
            <Link href="/contact" className="text-white/80 underline underline-offset-4 hover:text-white">
              terms
            </Link>
            .
          </div>
        </div>
      </div>
    </main>
  );
}
