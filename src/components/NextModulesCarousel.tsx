"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MODULES = [
  {
    title: "Supply chain coordination",
    desc: "Coordinate material, capacity, and handoffs across connected factories.",
  },
  {
    title: "Dynamic automated revisions",
    desc: "Continuously revise plans as orders, inventory, and constraints shift.",
  },
  {
    title: "Advanced production copilot",
    desc: "Conversational operations assistant for approved planning and execution actions.",
  },
  {
    title: "Market and sourcing intelligence",
    desc: "Use external signals to guide sourcing and production strategy.",
  },
  {
    title: "Multi-site visibility layer",
    desc: "Track production status, capacity, and risk across multiple factory locations.",
  },
  {
    title: "Predictive delay detection",
    desc: "Surface schedule risks before they become line stoppages.",
  },
];

export default function NextModulesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const visible = 4;
  const max = MODULES.length - visible;

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }
  function next() {
    setIndex((i) => Math.min(max, i + 1));
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={trackRef}>
        <motion.div
          className="flex gap-4"
          animate={{ x: `calc(-${index} * (25% + 4px))` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {MODULES.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ type: "spring", stiffness: 260, damping: 22, delay: i * 0.07 }}
              className="min-w-[calc(25%-12px)] flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl"
            >
              <div className="text-sm font-bold text-white">{mod.title}</div>
              <p className="mt-2 text-xs leading-relaxed text-white/55">{mod.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Nav arrows */}
      <div className="mt-5 flex justify-center gap-3">
        <button
          onClick={prev}
          disabled={index === 0}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-white/30 hover:text-white disabled:opacity-25"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={next}
          disabled={index >= max}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-white/30 hover:text-white disabled:opacity-25"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06L7.28 11.78a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
