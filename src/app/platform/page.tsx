"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ComparisonTable from "@/components/ComparisonTable";
import NextModulesCarousel from "@/components/NextModulesCarousel";

// Spring-pop: scales up from 0.85 with a bounce as it enters viewport
function Pop({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
    >
      {children}
    </motion.div>
  );
}

const CAPABILITIES = [
  {
    title: "Email and client channel connectivity",
    desc: "Connect operations to Outlook, Gmail, WhatsApp, and client communication threads.",
  },
  {
    title: "Agent-led onboarding interviews",
    desc: "Interview teams, map routings, and configure a working MRP/ERP quickly.",
  },
  {
    title: "Paperwork parsing and generation",
    desc: "Automate parsing and generation of GRN, RFQ, quote, PO, and invoice workflows.",
  },
  {
    title: "Vendor and item price tracking",
    desc: "Track vendor quotes and item-level pricing changes over time.",
  },
  {
    title: "Real-time execution data loop",
    desc: "Capture live execution updates and sync status through channels like WhatsApp.",
  },
  {
    title: "Advanced MRP/ERP with chatbot actions",
    desc: "Use conversational workflows to query, update, and execute planning actions.",
  },
  {
    title: "Bottleneck analysis with revisions",
    desc: "Detect constraints in real time and surface prioritized corrective actions for throughput and reliability.",
  },
  {
    title: "Transaction trust layer",
    desc: "Add auditable transaction workflows for sensitive handoffs where a stronger trust trail is required.",
  },
];

export default function PlatformPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 pb-24 pt-12 lg:px-16">

      {/* ── HERO ── */}
      <Section from="up">
        <h1 className="text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
          Advanced manufacturing system layer built for small and mid-sized factories.
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/60">
          Turn fragmented data into a live operating model for planning, purchasing, scheduling, and execution.
        </p>
      </Section>

      {/* ── 4 FEATURE CARDS — spring-pop ── */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Messy docs → structured production model",
            body: "Convert BOMs, routings, spreadsheets, PDFs, and operator knowledge into a live map of parts, machines, labor, and constraints.",
          },
          {
            title: "Explainable intelligence",
            body: "Continuously simulate production flows to identify capacity limits, scheduling conflicts, and material shortages.",
          },
          {
            title: "Works with your current systems",
            body: "Connect through APIs, uploads, and automated email ingestion. Normalize inconsistent data into one traceable model.",
          },
          {
            title: "Internal automations",
            body: "Generate purchase orders, flag late vendors, process docs, and prepare paperwork with rule-based, optimized execution.",
          },
        ].map((c, i) => (
          <Pop key={c.title} delay={0.05 * i}>
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-lg font-semibold text-white">{c.title}</div>
              <div className="mt-2 text-sm text-white/65">{c.body}</div>
            </div>
          </Pop>
        ))}
      </div>

      {/* ── PLATFORM PLANNING VISUALS ── */}
      <div className="mt-24">
        <Reveal from="up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Platform planning visuals
          </h2>
        </Reveal>

        {/* Real-time execution board */}
        <Pop delay={0.1}>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-sm font-bold text-white">Real-time execution board</div>
            <div className="mt-0.5 text-xs text-white/40">Live line status, event feed, and throughput panels</div>

            <div className="mt-4 rounded-2xl border border-white/5 bg-black/30 p-5">
              <div className="grid grid-cols-3 gap-4">

                {/* Line status — bars animate width */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 text-sm text-white/60">Line status</div>
                  <div className="space-y-2.5">
                    {[
                      { w: 88, color: "bg-emerald-500" },
                      { w: 62, color: "bg-amber-500" },
                      { w: 45, color: "bg-red-500" },
                      { w: 30, color: "bg-white/20" },
                      { w: 20, color: "bg-white/20" },
                    ].map((row, i) => (
                      <div key={i} className="h-6 overflow-hidden rounded-lg bg-black/30">
                        <motion.div
                          className={`h-full rounded-lg ${row.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.w}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Throughput — bars animate width */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 text-sm text-white/60">Throughput</div>
                  <div className="space-y-4">
                    {[
                      { label: "Cut", val: 90 },
                      { label: "Sew", val: 74 },
                      { label: "Pack", val: 62 },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="w-8 text-sm text-white/60">{item.label}</div>
                        <div className="h-3 flex-1 overflow-hidden rounded-full bg-black/30">
                          <motion.div
                            className="h-full rounded-full bg-violet-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.val}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event feed — items slide in from right */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 text-sm text-white/60">Event feed</div>
                  <div className="space-y-2.5">
                    {[80, 60, 90, 55, 70].map((w, i) => (
                      <motion.div
                        key={i}
                        className="h-6 rounded-lg bg-white/8"
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.09, duration: 0.35 }}
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Pop>

        {/* Bottom row */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">

          {/* MRP table — slides from left, rows stagger in */}
          <Reveal from="left" delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-sm font-bold text-white">MRP table view</div>
              <div className="mt-0.5 text-xs text-white/40">Weekly plan by item with shortage visibility</div>
              <div className="mt-5 rounded-2xl border border-white/5 bg-black/30 p-4">
                <div className="mb-3 grid grid-cols-6 gap-1 px-1 text-xs text-white/35">
                  {["Item", "W1", "W2", "W3", "W4", "Risk"].map((h) => (
                    <div key={h}>{h}</div>
                  ))}
                </div>
                <div className="space-y-2">
                  {["bg-emerald-500", "bg-amber-500", "bg-red-600", "bg-amber-600"].map(
                    (color, i) => (
                      <motion.div
                        key={i}
                        className="grid grid-cols-6 items-center gap-1 rounded-lg bg-white/5 px-3 py-2.5"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 + i * 0.09, duration: 0.4 }}
                      >
                        <div className="col-span-5 h-2 rounded bg-white/10" />
                        <div className={`h-5 w-8 rounded ${color}`} />
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Live signal board — slides from right, items scale in */}
          <Reveal from="right" delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-sm font-bold text-white">Live signal board</div>
              <div className="mt-0.5 text-xs text-white/40">Incoming updates mapped to action queue in real time</div>
              <div className="mt-5 rounded-2xl border border-white/5 bg-black/30 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="mb-2 text-xs text-white/35">Incoming</div>
                    <div className="space-y-2.5">
                      {[70, 55, 80].map((w, i) => (
                        <motion.div
                          key={i}
                          className="h-7 rounded-lg bg-white/8"
                          initial={{ opacity: 0, scaleX: 0.4 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                          style={{ originX: 0, width: `${w}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 px-2">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="text-white/30"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        →
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 text-xs text-white/35">Action queue</div>
                    <div className="space-y-2.5">
                      {[85, 65, 75].map((w, i) => (
                        <motion.div
                          key={i}
                          className="h-7 rounded-lg bg-violet-900/40"
                          initial={{ opacity: 0, scaleX: 0.4 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.55 + i * 0.1, duration: 0.4 }}
                          style={{ originX: 0, width: `${w}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── ENTERPRISE CALLOUT ── */}
      <div className="mt-12">
        <Pop delay={0.05}>
          <div className="rounded-3xl border border-violet-500/20 bg-violet-900/15 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Built for small and mid-sized factories, and ready for enterprise-scale deployments.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Built for lean teams first, with support for larger organizations and multi-site operations.
            </p>
          </div>
        </Pop>
      </div>

      {/* ── CAPABILITIES IN PRODUCTION TODAY ── */}
      <div className="mt-24">
        <Reveal from="up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Capabilities in production today.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <Pop key={cap.title} delay={0.04 * i}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-colors hover:border-violet-500/30 hover:bg-violet-900/10">
                <div className="text-sm font-bold text-white">{cap.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">{cap.desc}</p>
              </div>
            </Pop>
          ))}
        </div>
      </div>

      {/* ── NEXT MODULES ── */}
      <div className="mt-24">
        <Reveal from="up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Next modules.
          </h2>
        </Reveal>
        <div className="mt-8">
          <NextModulesCarousel />
        </div>
      </div>

      {/* ── COMPETITOR COMPARISON ── */}
      <div className="mt-24">
        <Reveal from="up">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Most alternatives still depend on manual setup.
          </h2>
          <p className="mt-2 text-sm text-white/45">
            Many systems still require heavy manual configuration, which is costly for smaller teams.
          </p>
        </Reveal>
        <div className="mt-8">
          <Pop delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <ComparisonTable />
            </div>
          </Pop>
        </div>
      </div>

    </main>
  );
}
