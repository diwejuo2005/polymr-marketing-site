"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen text-zinc-100"
      style={{
        background:
          "radial-gradient(circle at 15% 10%, rgba(124, 58, 237, 0.25), transparent 40%)," +
          "radial-gradient(circle at 85% 0%, rgba(88, 28, 135, 0.25), transparent 45%)," +
          "linear-gradient(180deg, #0b0718 0%, #070513 100%)",
      }}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
}