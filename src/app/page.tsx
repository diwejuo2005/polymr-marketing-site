// src/app/page.tsx
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import InvestorMarquee from "@/components/InvestorMarquee";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 pb-24 pt-12 lg:px-16">

      {/* ── HERO ── */}
      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
        <Reveal from="left">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
              Advanced MRP for manufacturers
              <span className="text-zinc-500 dark:text-white/40">•</span>
              From messy documents → automated operations
            </div>

            <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-zinc-900 dark:text-zinc-100 md:text-6xl">
              ERP that goes live fast{" "}
              <span className="text-zinc-700 dark:text-white/70">for factory owners.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-700 dark:text-white/70 md:text-lg">
              We turn your existing data into a live MRP/ERP workflow and give your team a simple
              conversational control layer — plus explainable automation.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/demo"
                className="rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-violet-400"
              >
                Free demo and consultation
              </Link>
              <Link
                href="/platform"
                className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-white/15 dark:bg-white/5 dark:text-white/85 dark:shadow-none dark:hover:bg-white/10"
              >
                Explore platform
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal from="right" delay={0.08}>
          <Card className="p-6">
            <div className="text-sm font-semibold text-zinc-900 dark:text-white/90">
              What changes in practice
            </div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-white/75">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
                Faster onboarding from current files and team interviews
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
                MRP/ERP setup without long consultant cycles
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
                Live workflows mapped to your real production process
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
                Automated paperwork and purchasing tasks
              </li>
            </ul>
            <div className="mt-5 text-sm text-zinc-600 dark:text-white/70">
              Pricing: quote-based setup + monthly plan.
            </div>
          </Card>
        </Reveal>
      </div>

      {/* ── INVESTORS MARQUEE ── */}
      <div className="mt-10">
        <Reveal from="up" delay={0.12}>
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
            Our Investors
          </h2>
          <div className="mt-0">
            <InvestorMarquee />
          </div>
        </Reveal>
      </div>

      {/* ── HOW POLYMR WORKS IN PRACTICE ── */}
      <div className="mt-24">
        <Reveal from="up" delay={0.06}>
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
            How Polymr works in practice
          </h2>
        </Reveal>

        {/* Operations tracking view — fades up */}
        <Reveal from="up" delay={0.12}>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-sm font-bold text-white">Operations tracking view</div>
            <div className="mt-0.5 text-xs text-white/50">
              Order queue, alerts, and material readiness in one screen
            </div>

            <div className="mt-4 rounded-2xl border border-white/5 bg-black/30 p-5">
              <div className="grid grid-cols-3 gap-4">

                {/* Overview */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 text-sm text-white/60">Overview</div>
                  <div className="space-y-2.5">
                    {["Open orders: 128", "At risk: 11", "Critical alerts: 3"].map((t) => (
                      <div key={t} className="rounded-xl bg-black/30 px-4 py-3 text-sm text-white/90">
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order queue */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 text-sm text-white/60">Order queue</div>
                  <div className="space-y-2.5">
                    {[78, 44, 60, 52, 66].map((w, i) => (
                      <div key={i} className="h-7 overflow-hidden rounded-lg bg-black/30">
                        <div
                          className="h-full rounded-lg bg-violet-700/60"
                          style={{ width: `${w}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Readiness */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 text-sm text-white/60">Readiness</div>
                  <div className="space-y-4">
                    {[
                      { label: "Fabric", val: 85 },
                      { label: "Trim", val: 58 },
                      { label: "Packing", val: 38 },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="w-14 text-sm text-white/70">{item.label}</div>
                        <div className="h-3 flex-1 overflow-hidden rounded-full bg-black/30">
                          <div
                            className="h-full rounded-full bg-violet-600"
                            style={{ width: `${item.val}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom row */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">

          {/* Automatic paperwork flow — slides from left */}
          <Reveal from="left" delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-sm font-bold text-white">Automatic paperwork flow</div>
              <div className="mt-0.5 text-xs text-white/50">
                Email and docs auto-converted into structured ERP records
              </div>
              <div className="mt-5 rounded-2xl border border-white/5 bg-black/30 p-5">
                <div className="flex items-center justify-between gap-3">

                  {/* Inputs */}
                  <div className="min-w-[80px] rounded-xl bg-white/5 p-3">
                    <div className="mb-2 text-xs text-white/40">Inputs</div>
                    <div className="space-y-1.5">
                      {["Email", "PDF", "Sheet"].map((l) => (
                        <div key={l} className="rounded-md bg-violet-800/50 px-2 py-1 text-xs text-white/90">
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-white/30">→</div>

                  {/* Parser */}
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                    <div className="text-xs font-semibold text-white/90">Parser</div>
                    <div className="mt-1 text-xs text-white/40">extract + map</div>
                    <div className="text-xs text-white/40">validate fields</div>
                  </div>

                  <div className="text-white/30">→</div>

                  {/* Outputs */}
                  <div className="min-w-[80px] rounded-xl bg-white/5 p-3">
                    <div className="mb-2 text-xs text-white/40">Outputs</div>
                    <div className="space-y-1.5">
                      {["RFQ", "PO", "Invoice"].map((l) => (
                        <div key={l} className="rounded-md bg-violet-800/50 px-2 py-1 text-xs text-white/90">
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* MRP planning table — slides from right */}
          <Reveal from="right" delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-sm font-bold text-white">MRP planning table</div>
              <div className="mt-0.5 text-xs text-white/50">
                Demand, available stock, and planned orders by item
              </div>
              <div className="mt-5 rounded-2xl border border-white/5 bg-black/30 p-4">
                <div className="mb-3 grid grid-cols-5 gap-2 px-1 text-xs text-white/35">
                  {["Item", "Demand", "On hand", "Plan", "Status"].map((h) => (
                    <div key={h}>{h}</div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    "bg-emerald-500",
                    "bg-yellow-600",
                    "bg-red-700",
                    "bg-emerald-600",
                  ].map((color, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-5 items-center gap-2 rounded-lg bg-white/5 px-3 py-2.5"
                    >
                      <div className="col-span-4 h-2 rounded bg-white/10" />
                      <div className={`h-5 w-10 rounded ${color}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── TRADITIONAL ERP STATS ── */}
      <div className="mt-24">
        <Reveal from="up" delay={0.06}>
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
            Traditional ERP rollouts are too expensive
            <br />and too slow.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            {
              k: "84%",
              v: "Run on manual spreadsheets",
              desc: "This creates a major disadvantage versus larger manufacturers using integrated systems.",
            },
            {
              k: "8%–15%",
              v: "Average upside from modern MRP programs",
              desc: "Large benchmark samples show measurable gains in throughput and on-time execution.",
            },
            {
              k: "$40k–$10M+",
              v: "Typical implementation cost today",
              desc: "Legacy rollouts often require costly consultants and downtime.",
            },
            {
              k: "200+ hrs",
              v: "Internal staff time in traditional projects",
              desc: "Traditional projects often pull operators away from production.",
            },
          ].map((item, i) => (
            <Reveal key={item.k} from="up" delay={0.05 + i * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
                <div className="text-3xl font-bold text-white">{item.k}</div>
                <div className="mt-2 text-sm font-semibold text-white/80">{item.v}</div>
                <div className="mt-2 text-xs leading-relaxed text-white/45">{item.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── FROM RAW DATA TO LIVE EXECUTION ── */}
      <div className="mt-24">
        <Reveal from="up" delay={0.08}>
          <h2 className="text-center text-3xl font-semibold tracking-[-0.01em] text-zinc-900 dark:text-zinc-100 md:text-4xl">
            From raw data to live execution.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Ingest and structure your operation",
              desc: "We compile BOMs, routings, documents, and floor updates into one reliable operating model.",
              from: "left" as const,
              delay: 0.07,
            },
            {
              n: "02",
              title: "Reason over constraints and uncertainty",
              desc: "The platform checks data quality and runs what-if plans for scheduling and purchasing.",
              from: "up" as const,
              delay: 0.11,
            },
            {
              n: "03",
              title: "Execute with explainable automation",
              desc: "Teams can act quickly while keeping clear decision visibility.",
              from: "right" as const,
              delay: 0.15,
            },
          ].map((item) => (
            <Reveal key={item.n} from={item.from} delay={item.delay}>
              <Card className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/30 bg-violet-900/30 text-xs font-semibold text-violet-300">
                  {item.n}
                </div>
                <div className="text-sm font-bold text-white">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── BUILT FOR REAL FACTORY WORKFLOWS ── */}
      <div className="mt-24">
        <Reveal from="up" delay={0.06}>
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
            Built for real factory workflows.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Cut-and-sew planning and line balancing",
              desc: "Build dependable schedules at the style-color-size level and keep sewing lines aligned to real capacity and due dates.",
              bullets: [
                "Clear style-level production plans by line and shift",
                "Earlier detection of overloaded operations",
                "Fewer schedule breaks from hidden routing conflicts",
              ],
              from: "left" as const,
              delay: 0.08,
            },
            {
              title: "Fabric and trim purchasing automation",
              desc: "Convert demand into cleaner purchase decisions with vendor-aware lead times, exception alerts, and automated paperwork.",
              bullets: [
                "Faster purchase order cycles for fabric and trims",
                "Reduced production stops from missing materials",
                "Lower admin load on procurement teams",
              ],
              from: "right" as const,
              delay: 0.1,
            },
            {
              title: "QA, compliance, and shipment readiness",
              desc: "Keep inspections, documentation, and production status connected so shipments move on time with fewer handoff errors.",
              bullets: [
                "Consistent document trails for audits and customer requests",
                "Fewer missed quality or compliance tasks in peak windows",
                "Smoother handoff from floor completion to outbound shipment",
              ],
              from: "left" as const,
              delay: 0.12,
            },
            {
              title: "Vendor operations and exception management",
              desc: "Coordinate vendor performance, late deliveries, and substitutions with reasoning support instead of reactive fire-fighting.",
              bullets: [
                "Faster response to late vendor updates",
                "Better supplier prioritization under constraints",
                "More predictable inbound flow for production",
              ],
              from: "right" as const,
              delay: 0.14,
            },
          ].map((item) => (
            <Reveal key={item.title} from={item.from} delay={item.delay}>
              <Card className="p-7">
                <div className="text-base font-bold text-white">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-block rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/70 transition hover:border-white/40 hover:text-white"
                >
                  Ask about this workflow
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

    </main>
  );
}
