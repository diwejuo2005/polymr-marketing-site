"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
  from = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  from?: "left" | "right" | "up" | "down";
  delay?: number;
}) {
  const offset = 24;
  const initial =
    from === "left"
      ? { x: -offset, y: 0, opacity: 0 }
      : from === "right"
      ? { x: offset, y: 0, opacity: 0 }
      : from === "down"
      ? { x: 0, y: offset, opacity: 0 }
      : { x: 0, y: -offset, opacity: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}