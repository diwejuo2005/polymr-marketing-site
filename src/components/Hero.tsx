"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 blur-3xl opacity-70">
        <div className="mx-auto mt-10 h-64 max-w-6xl rounded-[48px] bg-gradient-to-r from-fuchsia-500/30 via-violet-500/20 to-indigo-500/30" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-16 md:grid-cols-2 md:pt-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-2 text-sm text-white/70 ring-1 ring-white/10">
            Advanced MRP for manufacturers
            <span className="h-1 w-1 rounded-full bg-white/40" />
            From messy documents → automated operations
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            ERP that goes live fast for factory owners.
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
            We turn your existing data into a live MRP/ERP workflow and give your team a simple conversational
            control layer — plus explainable automation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="rounded-full bg-violet-400/90 px-6 py-3 text-sm font-semibold text-black hover:bg-violet-300 transition"
            >
              Free demo and consultation
            </Link>
            <Link
              href="/platform"
              className="rounded-full bg-white/8 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/12 hover:bg-white/12 transition"
            >
              Explore platform
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            className="rounded-3xl bg-black/20 p-6 ring-1 ring-white/10"
          >
            <div className="text-lg font-semibold">What changes in practice</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-300" /> Faster onboarding from current files and team interviews</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-300" /> MRP/ERP setup without long consultant cycles</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-300" /> Live workflows mapped to your real production process</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-300" /> Automated paperwork and purchasing tasks</li>
            </ul>
            <div className="mt-4 text-sm text-white/60">Pricing: quote-based setup + monthly plan.</div>
          </motion.div>

          {/* floating mini cards */}
          <motion.div
            className="absolute -bottom-6 -left-6 hidden w-52 rounded-2xl bg-white/6 p-4 text-sm text-white/70 ring-1 ring-white/10 md:block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="font-semibold text-white/90">On-track</div>
            <div className="mt-2 text-3xl font-semibold text-white">64%</div>
            <div className="mt-1 text-xs text-white/60">Live material readiness</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}