"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-[#08040f] text-zinc-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </SessionProvider>
  );
}
