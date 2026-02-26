// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

export const metadata: Metadata = {
  title: "Polymr",
  description: "Advanced MRP for manufacturers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}