import "./globals.css";
import type { Metadata } from "next";
import ClientShell from "@/components/ClientShell";

export const metadata: Metadata = {
  title: "Polymr",
  description:
    "Advanced MRP for manufacturers — from messy documents to automated operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}