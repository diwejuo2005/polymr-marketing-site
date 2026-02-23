"use client";

import { motion } from "framer-motion";

export default function Section({
  children,
  from = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  from?: "left" | "right" | "up" | "down";
  delay?: number;
}) {
  const offset =
    from === "left"
      ? { x: -40, y: 0 }
      : from === "right"
      ? { x: 40, y: 0 }
      : from === "down"
      ? { x: 0, y: 40 }
      : { x: 0, y: -40 };

  return (
    <motion.section
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}