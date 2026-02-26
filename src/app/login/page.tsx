// src/app/login/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

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

function IconMicrosoft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#F25022" d="M2 2h9v9H2z" />
      <path fill="#7FBA00" d="M13 2h9v9h-9z" />
      <path fill="#00A4EF" d="M2 13h9v9H2z" />
      <path fill="#FFB900" d="M13 13h9v9h-9z" />
    </svg>
  );
}

function IconKey() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M7.5 14.5a5.5 5.5 0 1 1 4.73-2.7L22 11.8v3.4h-3v3h-3v-3h-2.5l-1.1-1.1A5.46 5.46 0 0 1 7.5 14.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9.5h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AuthButton({
  icon,
  children,
  onClick,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-zinc-100 shadow-sm transition hover:bg-white/15 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-violet-400/40"
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-zinc-100 group-hover:bg-white/15">
        {icon}
      </span>
      <span className="text-base">{children}</span>
    </button>
  );
}

export default function LoginPage() {
  const [mode, setMode] = useState<"sso" | "email">("sso");

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

          <div className="mt-6 space-y-3">
            <AuthButton
              icon={<IconGoogle />}
              onClick={() => alert("Google sign-in not wired yet (UI only).")}
            >
              Sign in with Google
            </AuthButton>

            <AuthButton
              icon={<IconMicrosoft />}
              onClick={() => alert("Microsoft sign-in not wired yet (UI only).")}
            >
              Sign in with Microsoft
            </AuthButton>

            <AuthButton
              icon={<IconKey />}
              onClick={() => alert("SSO not wired yet (UI only).")}
            >
              Sign in with SSO
            </AuthButton>

            <div className="my-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/15" />
              <div className="text-sm font-medium text-white/60">or</div>
              <div className="h-px flex-1 bg-white/15" />
            </div>

            {mode === "sso" ? (
              <button
                type="button"
                onClick={() => setMode("email")}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3 text-base font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-violet-400/40"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-zinc-100">
                  <IconMail />
                </span>
                Sign in with email
              </button>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Email sign-in not wired yet (UI only).");
                }}
                className="space-y-3"
              >
                <div>
                  <label className="mb-1 block text-xs font-semibold text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-zinc-100 placeholder:text-white/40 outline-none transition focus:border-violet-400/40 focus:ring-2 focus:ring-violet-400/25"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-white/70">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-zinc-100 placeholder:text-white/40 outline-none transition focus:border-violet-400/40 focus:ring-2 focus:ring-violet-400/25"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-violet-500 px-4 py-3 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(139,92,246,0.35)] transition hover:bg-violet-400 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-violet-400/40"
                >
                  Continue
                </button>

                <button
                  type="button"
                  onClick={() => setMode("sso")}
                  className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
                >
                  Back to SSO options
                </button>
              </form>
            )}

            <div className="pt-5 text-center text-xs text-white/55">
              By continuing, you agree to our{" "}
              <Link href="/contact" className="text-white/80 underline underline-offset-4 hover:text-white">
                terms
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}