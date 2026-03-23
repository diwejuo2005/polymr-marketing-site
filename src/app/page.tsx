// src/app/page.tsx
import Reveal from "@/components/Reveal";
import InvestorMarquee from "@/components/InvestorMarquee";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full">

      {/* ── HERO ── */}
      <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-24 text-center lg:px-8">
        <Reveal from="up" delay={0}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/50">
            Advanced MRP for manufacturers
            <span className="text-white/20">•</span>
            Messy documents → automated operations
          </div>
        </Reveal>

        <Reveal from="up" delay={0.06}>
          <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-[-0.01em] text-white md:text-7xl lg:text-[5.5rem]">
            ERP that goes live <em>fast</em>
            <br />
            <span className="text-white/55">for factory owners.</span>
          </h1>
        </Reveal>

        <Reveal from="up" delay={0.12}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/45 md:text-lg">
            We turn your existing data into a live MRP/ERP workflow — giving your team a
            conversational control layer and explainable automation from day one.
          </p>
        </Reveal>

        <Reveal from="up" delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/demo"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Free demo & consultation
            </Link>
            <Link
              href="/platform"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Explore platform
            </Link>
          </div>
        </Reveal>
      </section>


      {/* ── INVESTORS MARQUEE ── */}
      <section className="mx-auto max-w-[1440px] px-6 py-10 lg:px-8">
        <Reveal from="up" delay={0.04}>
          <p className="mb-6 text-center text-xs uppercase tracking-widest text-white/25">
            Backed by
          </p>
          <InvestorMarquee />
        </Reveal>
      </section>


      {/* ── STATS ── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-8">
        <Reveal from="up" delay={0.06}>
          <h2 className="text-center font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Traditional ERP rollouts are{" "}
            <em>too expensive</em>
            <br />
            and too slow.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px border border-white/8 bg-white/8 md:grid-cols-4">
          {[
            {
              k: "84%",
              v: "Run on manual spreadsheets",
              desc: "A major competitive disadvantage versus manufacturers with integrated systems.",
            },
            {
              k: "8–15%",
              v: "Upside from modern MRP programs",
              desc: "Measurable gains in throughput and on-time execution across benchmark samples.",
            },
            {
              k: "$40k–$10M+",
              v: "Typical implementation cost",
              desc: "Legacy rollouts require costly consultants and extended downtime.",
            },
            {
              k: "200+ hrs",
              v: "Internal staff time lost",
              desc: "Traditional projects pull operators away from production for months.",
            },
          ].map((item, i) => (
            <Reveal key={item.k} from="up" delay={0.05 + i * 0.06}>
              <div className="bg-[#050508] p-8 text-center">
                <div className="font-serif text-4xl font-bold text-white md:text-5xl">{item.k}</div>
                <div className="mt-3 text-sm font-semibold text-white/70">{item.v}</div>
                <div className="mt-2 text-xs leading-relaxed text-white/35">{item.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* ── HOW POLYMR WORKS ── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-8">
        <Reveal from="up" delay={0.06}>
          <h2 className="text-center font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            How Polymr works <em>in practice</em>
          </h2>
        </Reveal>

        {/* Operations tracking view */}
        <Reveal from="up" delay={0.12}>
          <div className="mt-10 rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl">
            <div className="text-sm font-semibold text-white/80">Operations tracking view</div>
            <div className="mt-0.5 text-xs text-white/35">
              Order queue, alerts, and material readiness in one screen
            </div>

            <div className="mt-4 rounded-xl border border-white/5 bg-black/40 p-5">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mb-3 text-xs text-white/40">Overview</div>
                  <div className="space-y-2.5">
                    {["Open orders: 128", "At risk: 11", "Critical alerts: 3"].map((t) => (
                      <div key={t} className="rounded-lg bg-black/40 px-3 py-2.5 text-xs text-white/70">
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mb-3 text-xs text-white/40">Order queue</div>
                  <div className="space-y-2.5">
                    {[78, 44, 60, 52, 66].map((w, i) => (
                      <div key={i} className="h-6 overflow-hidden rounded-lg bg-black/40">
                        <div className="h-full rounded-lg bg-violet-600/50" style={{ width: `${w}%` }} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mb-3 text-xs text-white/40">Readiness</div>
                  <div className="space-y-4">
                    {[
                      { label: "Fabric", val: 85 },
                      { label: "Trim", val: 58 },
                      { label: "Packing", val: 38 },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="w-14 text-xs text-white/50">{item.label}</div>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-black/40">
                          <div className="h-full rounded-full bg-violet-500" style={{ width: `${item.val}%` }} />
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
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <Reveal from="left" delay={0.1}>
            <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="text-sm font-semibold text-white/80">Automatic paperwork flow</div>
              <div className="mt-0.5 text-xs text-white/35">
                Email and docs auto-converted into structured ERP records
              </div>
              <div className="mt-5 rounded-xl border border-white/5 bg-black/40 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-[72px] rounded-lg bg-white/5 p-3">
                    <div className="mb-2 text-xs text-white/30">Inputs</div>
                    <div className="space-y-1.5">
                      {["Email", "PDF", "Sheet"].map((l) => (
                        <div key={l} className="rounded bg-violet-700/40 px-2 py-1 text-xs text-white/80">{l}</div>
                      ))}
                    </div>
                  </div>
                  <div className="text-white/20">→</div>
                  <div className="flex-1 rounded-lg border border-white/8 bg-white/[0.03] p-3 text-center">
                    <div className="text-xs font-semibold text-white/70">Parser</div>
                    <div className="mt-1 text-xs text-white/30">extract + map</div>
                    <div className="text-xs text-white/30">validate fields</div>
                  </div>
                  <div className="text-white/20">→</div>
                  <div className="min-w-[72px] rounded-lg bg-white/5 p-3">
                    <div className="mb-2 text-xs text-white/30">Outputs</div>
                    <div className="space-y-1.5">
                      {["RFQ", "PO", "Invoice"].map((l) => (
                        <div key={l} className="rounded bg-violet-700/40 px-2 py-1 text-xs text-white/80">{l}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal from="right" delay={0.1}>
            <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="text-sm font-semibold text-white/80">MRP planning table</div>
              <div className="mt-0.5 text-xs text-white/35">
                Demand, available stock, and planned orders by item
              </div>
              <div className="mt-5 rounded-xl border border-white/5 bg-black/40 p-4">
                <div className="mb-3 grid grid-cols-5 gap-2 px-1 text-xs text-white/25">
                  {["Item", "Demand", "On hand", "Plan", "Status"].map((h) => (
                    <div key={h}>{h}</div>
                  ))}
                </div>
                <div className="space-y-2">
                  {["bg-emerald-500", "bg-yellow-600", "bg-red-600", "bg-emerald-600"].map((color, i) => (
                    <div key={i} className="grid grid-cols-5 items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-2.5">
                      <div className="col-span-4 h-2 rounded bg-white/8" />
                      <div className={`h-4 w-8 rounded ${color}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ── FROM RAW DATA TO LIVE EXECUTION ── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-8">
        <Reveal from="up" delay={0.06}>
          <h2 className="text-center font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            From raw data to <em>live execution.</em>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px border border-white/8 bg-white/8 md:grid-cols-3">
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
              desc: "Teams act quickly while keeping full decision visibility at every step.",
              from: "right" as const,
              delay: 0.15,
            },
          ].map((item) => (
            <Reveal key={item.n} from={item.from} delay={item.delay}>
              <div className="bg-[#050508] p-8 text-center">
                <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/25 bg-violet-900/20 text-xs font-semibold text-violet-400">
                  {item.n}
                </div>
                <div className="text-sm font-semibold text-white/85">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/40">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* ── BUILT FOR REAL FACTORY WORKFLOWS ── */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-8">
        <Reveal from="up" delay={0.06}>
          <h2 className="text-center font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Built for real <em>factory workflows.</em>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
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
              <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-7 backdrop-blur-xl transition-colors hover:border-violet-500/20 hover:bg-violet-900/10">
                <div className="text-base font-semibold text-white/90">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{item.desc}</p>
                <ul className="mt-5 space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-white/55">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-block rounded-full border border-white/15 px-5 py-2 text-xs font-medium text-white/50 transition hover:border-white/30 hover:text-white/80"
                >
                  Ask about this workflow
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section>
        <div className="mx-auto max-w-[1440px] px-6 py-20 text-center lg:px-8">
          <Reveal from="up" delay={0.06}>
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to modernize your factory?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/40">
              Book a free demo and consultation. We'll review your current setup and show you exactly what's possible.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Book a demo
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Contact sales
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
