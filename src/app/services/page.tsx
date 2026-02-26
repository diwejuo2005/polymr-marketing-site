"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import SlideCarousel from "@/components/SlideCarousel";

function Pop({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
    >
      {children}
    </motion.div>
  );
}

const VALUE_ITEMS = [
  {
    title: "Connect your current software",
    desc: "Keep your current stack and avoid rip-and-replace projects.",
  },
  {
    title: "Automate operational documents",
    desc: "Read and generate GRN, RFQ, quote, PO, and invoice workflows.",
  },
  {
    title: "Compare vendor pricing quickly",
    desc: "Track item pricing and choose vendors by cost, timing, and risk.",
  },
  {
    title: "Track operations in real time",
    desc: "Get updates through channels your team already uses, including WhatsApp and email.",
  },
  {
    title: "Reduce manual data entry",
    desc: "Parse incoming documents automatically and push structured data into your records.",
  },
];

const TOOLKIT_ITEMS = [
  {
    desc: "Connect to email channels and client communication threads (Outlook, Gmail, WhatsApp, Messages).",
  },
  {
    desc: "Automate parsing and generation of core paperwork: GRN, RFQ, quote, PO, and invoice.",
  },
  {
    desc: "Process incoming tech packs and generate AI-assisted tech pack drafts for review.",
  },
  {
    desc: "Track vendor quotes and item-level pricing with historical change visibility.",
  },
  {
    desc: "Sync production floor updates to your planning system via channel messages.",
  },
];

const HANDLE_CARDS = [
  {
    title: "Fast onboarding without consultants",
    desc: "Share your files and process. We set up your system with your team, not a long consultant project.",
    bullets: ["Go live faster", "Keep production running during setup", "Faster time to value"],
    from: "left" as const,
  },
  {
    title: "Day-to-day ERP/MRP operations in one place",
    desc: "Run inventory, purchasing, planning, and orders in one workspace.",
    bullets: ["Materials and schedule visibility", "Fewer shortages and handoff misses", "Faster team decisions"],
    from: "up" as const,
  },
  {
    title: "Simple workspace your whole team can use",
    desc: "Use a chatbot-style interface for questions, updates, and exports.",
    bullets: ["Less training time", "Fewer clicks on common tasks", "Quicker response to urgent changes"],
    from: "up" as const,
  },
  {
    title: "Bottleneck alerts with clear next steps",
    desc: "Catch slowdowns early with prioritized fixes.",
    bullets: ["Actionable priorities, not passive dashboards", "Higher throughput with fewer delays", "Stronger planning under pressure"],
    from: "right" as const,
  },
];

const ROLLOUT_STEPS = [
  { n: 1, title: "Kickoff call", desc: "We review your process and current tools" },
  { n: 2, title: "Clear quote", desc: "Scope, timeline, and monthly plan" },
  { n: 3, title: "Setup and go-live", desc: "We connect tools and automate paperwork" },
  { n: 4, title: "Ongoing support", desc: "Updates, fixes, and optimization" },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 pb-24 pt-12 lg:px-16">

      {/* ── HERO ── */}
      <Section from="up">
        <h1 className="text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
          Practical services that help factories run better, faster.
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/60">
          Fast implementation, simpler daily operations, and automation that saves real time.
        </p>
      </Section>

      {/* ── WHAT THIS SERVICE LAYER HANDLES ── */}
      <div className="mt-20">
        <Reveal from="up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            What this service layer handles
          </h2>
        </Reveal>

        {/* Document automation lane — full width, pop from above */}
        <Pop delay={0.1}>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-sm font-bold text-white">Document automation lane</div>
            <div className="mt-0.5 text-xs text-white/40">
              RFQ → Quote → PO → GRN → Invoice with auto-routing
            </div>

            <div className="mt-4 rounded-2xl border border-white/5 bg-black/30 p-6">
              {/* Flow row: RFQ → Quote → PO → GRN → Invoice */}
              <div className="flex items-center justify-between gap-2">
                {["RFQ", "Quote", "PO", "GRN", "Invoice"].map((step, i) => (
                  <div key={step} className="flex flex-1 items-center gap-2">
                    <motion.div
                      className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center text-sm font-medium text-white"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                    >
                      {step}
                    </motion.div>
                    {i < 4 && (
                      <motion.span
                        className="text-white/30 text-lg flex-shrink-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.1 }}
                      >
                        →
                      </motion.span>
                    )}
                  </div>
                ))}
              </div>

              {/* Action stage pills */}
              <div className="mt-4 flex items-center gap-3">
                {["Parse", "Validate", "Generate", "Track"].map((action, i) => (
                  <motion.div
                    key={action}
                    className="flex-1 rounded-full bg-violet-800/50 py-2.5 text-center text-sm font-medium text-white/80"
                    initial={{ opacity: 0, scaleX: 0.7 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 260, damping: 20 }}
                  >
                    {action}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Pop>

        {/* Bottom row: Vendor matrix + Real-time channels */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">

          {/* Vendor matrix — slides from left, rows stagger in */}
          <Reveal from="left" delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-sm font-bold text-white">Vendor matrix</div>
              <div className="mt-0.5 text-xs text-white/40">Cost, lead, and risk scored for each supplier</div>
              <div className="mt-5 rounded-2xl border border-white/5 bg-black/30 p-4">
                <div className="mb-3 grid grid-cols-5 gap-2 px-1 text-xs text-white/35">
                  {["Vendor", "Cost", "Lead", "Risk", "Score"].map((h) => (
                    <div key={h}>{h}</div>
                  ))}
                </div>
                <div className="space-y-2">
                  {["bg-emerald-500", "bg-amber-500", "bg-red-600"].map((color, i) => (
                    <motion.div
                      key={i}
                      className="grid grid-cols-5 items-center gap-2 rounded-lg bg-white/5 px-3 py-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    >
                      <div className="col-span-4 h-2 rounded bg-white/10" />
                      <div className={`h-5 w-10 rounded ${color}`} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Real-time channels — slides from right, items stagger */}
          <Reveal from="right" delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-sm font-bold text-white">Real-time channels</div>
              <div className="mt-0.5 text-xs text-white/40">Email and chat updates flowing into action queue</div>
              <div className="mt-5 rounded-2xl border border-white/5 bg-black/30 p-5">
                <div className="flex items-center gap-3">
                  {[
                    { label: "Sources", color: "bg-white/8" },
                    { label: "Queue", color: "bg-violet-900/40" },
                    { label: "Actions", color: "bg-violet-700/30" },
                  ].map((col, ci) => (
                    <div key={col.label} className="flex flex-1 flex-col items-center gap-2">
                      <div className="mb-1 text-xs text-white/35">{col.label}</div>
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className={`h-7 w-full rounded-lg ${col.color}`}
                          initial={{ opacity: 0, scaleY: 0.5 }}
                          whileInView={{ opacity: 1, scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + ci * 0.12 + i * 0.07, type: "spring", stiffness: 300, damping: 24 }}
                          style={{ originY: "center" }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── WHAT TEAMS VALUE MOST ── */}
      <div className="mt-24">
        <Reveal from="up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            What teams value most
          </h2>
        </Reveal>
        <div className="mt-8">
          <SlideCarousel items={VALUE_ITEMS} cols={4} />
        </div>
      </div>

      {/* ── WHAT WE HANDLE ── */}
      <div className="mt-24">
        <Reveal from="up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            What we handle
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {HANDLE_CARDS.map((card, i) => (
            <Pop key={card.title} delay={0.05 * i}>
              <Reveal from={card.from} delay={0.05 + i * 0.06}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-violet-500/30 hover:bg-violet-900/10">
                  <div className="text-base font-bold text-white">{card.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{card.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {card.bullets.map((b, bi) => (
                      <motion.li
                        key={b}
                        className="flex items-center gap-2 text-sm text-white/65"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + bi * 0.08 }}
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Pop>
          ))}
        </div>
      </div>

      {/* ── OPERATIONAL TOOLKIT ── */}
      <div className="mt-24">
        <Reveal from="up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Operational toolkit
          </h2>
        </Reveal>
        <div className="mt-8">
          <SlideCarousel items={TOOLKIT_ITEMS} cols={4} />
        </div>
      </div>

      {/* ── COMMERCIAL MODEL ── */}
      <div className="mt-24">
        <Reveal from="up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Commercial model
          </h2>
        </Reveal>

        {/* Two pricing cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Reveal from="left" delay={0.08}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-base font-bold text-white">Quoted setup + monthly subscription</div>
              <p className="mt-2 text-sm text-white/50">Pricing matches your workflows and rollout scope.</p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Scope-based onboarding quote",
                  "Monthly software + support",
                  "Add modules as you scale",
                ].map((b, i) => (
                  <motion.li
                    key={b}
                    className="flex items-center gap-2 text-sm text-white/70"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.09 }}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal from="right" delay={0.08}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-base font-bold text-white">Built to work with your current stack</div>
              <p className="mt-2 text-sm text-white/50">
                Connect operational and financial systems while production keeps moving.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Connect with APIs, email, and files",
                  "Read mixed document and spreadsheet formats",
                  "Roll out by workflow area",
                ].map((b, i) => (
                  <motion.li
                    key={b}
                    className="flex items-center gap-2 text-sm text-white/70"
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.09 }}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Rollout at a glance */}
        <Pop delay={0.1}>
          <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="mb-5 text-center text-sm font-semibold text-white/70">
              Rollout at a glance
            </div>
            <div className="flex items-start gap-2">
              {ROLLOUT_STEPS.map((step, i) => (
                <div key={step.n} className="flex flex-1 items-start gap-2">
                  <motion.div
                    className="flex-1 rounded-2xl border border-white/10 bg-black/30 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.1 + i * 0.12 }}
                  >
                    <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-full border border-violet-500/40 bg-violet-900/40 text-xs font-bold text-violet-300">
                      {step.n}
                    </div>
                    <div className="text-sm font-semibold text-white">{step.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-white/50">{step.desc}</p>
                  </motion.div>
                  {i < ROLLOUT_STEPS.length - 1 && (
                    <motion.span
                      className="mt-8 shrink-0 text-white/25"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + i * 0.12 }}
                    >
                      →
                    </motion.span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Pop>
      </div>

    </main>
  );
}
