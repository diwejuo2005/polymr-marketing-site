"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

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

const PARTNER_TYPES = [
  {
    title: "Factory design partners",
    desc: "For factories modernizing operations without consultant-heavy implementation.",
    bullets: [
      "Fast onboarding from messy operational data",
      "MRP/ERP workflows configured around delivery and production reality",
      "Automation roadmap tied to measurable throughput gains",
    ],
    from: "left" as const,
  },
  {
    title: "ERP integration firms",
    desc: "For firms that want a stronger onboarding and decision layer for clients.",
    bullets: [
      "White-glove deployment support",
      "Structured data normalization and traceability",
      "Reasoning-driven recommendations for client operations",
    ],
    from: "up" as const,
  },
  {
    title: "Enterprise channel partners",
    desc: "For larger brands and sourcing groups that need consistent operating visibility.",
    bullets: [
      "Cross-factory context alignment",
      "Exception and risk handling with clear decision traces",
      "Scalable standards for planning and purchasing coordination",
    ],
    from: "right" as const,
  },
];

const STATS = [
  { k: "1000+", v: "Largest partner workforces", desc: "Experience across facilities from lean teams to large factory operations." },
  { k: "200+", v: "Vendor relationships in active environments", desc: "Supports vendor-heavy purchasing workflows and dynamic sourcing decisions." },
  { k: "$1M–$100M", v: "Representative revenue range", desc: "Designed for practical deployment across growing and established manufacturers." },
  { k: "Any industry", v: "Manufacturing-ready architecture", desc: "Configurable workflows can be mapped to different production models." },
];

const INTEGRATIONS = [
  { label: "Outlook", src: "/outlook-trans-logo.png" },
  { label: "Messages", src: "/imessage-logo.png" },
  { label: "Gmail", src: "/gmail-logo.png" },
  { label: "WhatsApp", src: "/whatsapp-logo.png" },
  { label: "Tally", src: "/tally-logo.png" },
  { label: "QuickBooks", src: "/quickbooks-logo.png" },
];

const CASE_STUDIES = [
  {
    company: "Baltic Cabinets",
    location: "Chattanooga, TN",
    desc: "Full-suite rollout integrated with existing software across orders, accounting, and team communications.",
    bullets: [
      "Real-time tracking modules lifted production efficiency by 16%",
      "Order-status updates reached customers and internal teams 34% faster",
      "Planner follow-up workload dropped by 2.3 hours per day",
    ],
    from: "left" as const,
  },
  {
    company: "Valson",
    location: "Mumbai, India",
    desc: "Rolled out the full platform while integrating directly into their current software tools and vendor communication channels.",
    bullets: [
      "Paperwork automation now saves more than 4 hours per day across GRN, RFQ, quote, PO, and invoice flows",
      "Procurement turnaround improved by 21% with cleaner document handoffs",
      "Exception handling is now centralized in one live operating view",
    ],
    from: "up" as const,
  },
  {
    company: "Aimwood",
    location: "Mumbai, India",
    desc: "Implemented a full MRP rollout with Polymr integrated into their existing spreadsheets, accounting workflows, and operations tools.",
    bullets: [
      "Planning and scheduling workload dropped by 10+ hours per week for the core team",
      "PO and replenishment cycle time improved by 27%",
      "End-to-end execution visibility reduced manual coordination across departments",
    ],
    from: "right" as const,
  },
];

export default function PartnershipsPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 pb-24 pt-12 lg:px-16">

      {/* ── HERO ── */}
      <Section from="up">
        <h1 className="text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
          Partner with Polymr to modernize manufacturing operations faster.
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/60">
          We work with factories, integration firms, and sourcing networks that need faster deployment and clearer execution.
        </p>
      </Section>

      {/* ── PARTNERSHIP ROLLOUT VISUALS ── */}
      <div className="mt-20">
        <Reveal from="up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Partnership rollout visuals
          </h2>
        </Reveal>

        {/* Network visibility panel */}
        <Pop delay={0.1}>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-sm font-bold text-white">Network visibility panel</div>
            <div className="mt-0.5 text-xs text-white/40">Factory + partner + operator visibility on one shared board</div>

            <div className="mt-4 rounded-2xl border border-white/5 bg-black/30 p-6">
              <div className="flex items-stretch gap-3">

                {/* Factories column */}
                <div className="flex w-44 flex-col rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 text-xs text-white/50">Factories</div>
                  <div className="flex flex-1 flex-col justify-around gap-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="h-8 rounded-lg bg-white/8"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Arrows left */}
                <div className="flex flex-col items-center justify-around py-8">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="text-white/25"
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >→</motion.span>
                  ))}
                </div>

                {/* Shared visibility */}
                <div className="flex flex-1 flex-col rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 text-xs text-white/50">Shared visibility</div>
                  <div className="flex flex-1 flex-col gap-2.5">
                    {[
                      "Orders, delays, and readiness in real time",
                      "Vendor and paperwork status synced",
                      "Single source of truth for all teams",
                    ].map((item, i) => (
                      <motion.div
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white/70"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.3 + i * 0.12 }}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Arrows right */}
                <div className="flex flex-col items-center justify-around py-8">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="text-white/25"
                      initial={{ opacity: 0, x: 6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >→</motion.span>
                  ))}
                </div>

                {/* Partners column */}
                <div className="flex w-44 flex-col rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 text-xs text-white/50">Partners</div>
                  <div className="flex flex-1 flex-col justify-around gap-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="h-8 rounded-lg bg-violet-900/40"
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Pop>
      </div>

      {/* ── FREE CONFIG CALLOUT ── */}
      <div className="mt-8">
        <Pop delay={0.08}>
          <div className="rounded-3xl border border-violet-500/20 bg-violet-900/15 p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Free configuration, a free trial period, and referral credit options.
            </h3>
            <p className="mt-3 text-sm text-white/50">
              Contact us to review eligibility for your factory or client portfolio.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Get in touch
            </Link>
          </div>
        </Pop>
      </div>

      {/* ── DEPLOYMENT RANGE ── */}
      <div className="mt-20">
        <Reveal from="up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Deployment range across factory sizes.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Pop key={stat.k} delay={0.05 + i * 0.07}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
                <motion.div
                  className="text-3xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 280, damping: 18, delay: 0.1 + i * 0.07 }}
                >
                  {stat.k}
                </motion.div>
                <div className="mt-2 text-sm font-semibold text-white/75">{stat.v}</div>
                <p className="mt-1.5 text-xs leading-relaxed text-white/45">{stat.desc}</p>
              </div>
            </Pop>
          ))}
        </div>
      </div>

      {/* ── PARTNER TYPES ── */}
      <div className="mt-20">
        <div className="grid gap-4 md:grid-cols-3">
          {PARTNER_TYPES.map((p, i) => (
            <Reveal key={p.title} from={p.from} delay={0.06 * i}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-violet-500/30 hover:bg-violet-900/10">
                <div className="text-base font-bold text-white">{p.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.bullets.map((b, bi) => (
                    <motion.li
                      key={b}
                      className="flex items-start gap-2 text-sm text-white/65"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + bi * 0.09 }}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── INTEGRATIONS ── */}
      <div className="mt-20">
        <Reveal from="up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Integrations
          </h2>
          <p className="mt-2 text-center text-sm text-white/45">
            Need another tool? We can integrate with any software you request.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {INTEGRATIONS.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex w-[120px] flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.8, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, borderColor: "rgba(139,92,246,0.4)" }}
              transition={{ type: "spring", stiffness: 280, damping: 20, delay: i * 0.07 }}
            >
              <div className="relative h-8 w-16">
                <Image src={item.src} alt={item.label} fill className="object-contain" />
              </div>
              <span className="text-xs text-white/65">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CASE STUDIES ── */}
      <div className="mt-20">
        <Reveal from="up">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Case studies from active factory deployments.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.company} from={cs.from} delay={0.07 * i}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="text-base font-bold text-white">{cs.company}</div>
                <div className="mt-0.5 text-xs text-white/40">{cs.location}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{cs.desc}</p>
                <ul className="mt-4 space-y-2">
                  {cs.bullets.map((b, bi) => (
                    <motion.li
                      key={b}
                      className="flex items-start gap-2 text-sm text-white/65"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + bi * 0.09 }}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── PARTNERSHIP INQUIRY ── */}
      <div className="mt-20">
        <div className="grid gap-4 md:grid-cols-2">

          {/* Inquiry card — pops from left */}
          <Reveal from="left" delay={0.08}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <div className="text-xl font-bold text-white">Partnership inquiry</div>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Email your organization details and goals. We will respond with a recommended structure.
              </p>
              <ul className="mt-5 space-y-2">
                {["Name and organization", "Partnership type", "Scope summary and goals"].map((b, i) => (
                  <motion.li
                    key={b}
                    className="flex items-center gap-2 text-sm text-white/65"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.09 }}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {b}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-7">
                <motion.a
                  href="mailto:naman@polymr.tech?subject=Partnership inquiry"
                  className="inline-block rounded-full bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:bg-violet-500"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Email partnership request
                </motion.a>
                <p className="mt-3 text-xs text-white/30">
                  All partnership inquiries are routed via{" "}
                  <a href="mailto:naman@polymr.tech" className="underline underline-offset-2 hover:text-white/60">
                    naman@polymr.tech
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Helpful info card — pops from right */}
          <Reveal from="right" delay={0.08}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <div className="text-xl font-bold text-white">Helpful info for faster qualification.</div>
              <ul className="mt-5 space-y-3">
                {[
                  "Factory count and country footprint",
                  "Current ERP/MRP or integration environment",
                  "Priority workflows and timeline targets",
                ].map((b, i) => (
                  <motion.li
                    key={b}
                    className="flex items-start gap-2 text-sm text-white/65"
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.09 }}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

    </main>
  );
}
