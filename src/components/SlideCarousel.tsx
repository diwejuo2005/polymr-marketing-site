"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Item = { title?: string; desc: string };

export default function SlideCarousel({
  items,
  cols = 4,
}: {
  items: Item[];
  cols?: number;
}) {
  const [index, setIndex] = useState(0);
  const max = Math.max(0, items.length - cols);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: `calc(-${index} * (${100 / cols}% + 4px))` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                delay: i * 0.06,
              }}
              style={{ minWidth: `calc(${100 / cols}% - ${(cols - 1) * 16 / cols}px)` }}
              className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              {item.title && (
                <div className="mb-2 text-sm font-bold text-white">{item.title}</div>
              )}
              <p className="text-sm leading-relaxed text-white/55">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {max > 0 && (
        <div className="mt-5 flex justify-center gap-3">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-white/30 hover:text-white disabled:opacity-25"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={() => setIndex((i) => Math.min(max, i + 1))}
            disabled={index >= max}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-white/30 hover:text-white disabled:opacity-25"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06L7.28 11.78a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
