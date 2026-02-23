import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import InvestorMarquee from "@/components/InvestorMarquee";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-12">
      {/* HERO */}
      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
        <Reveal from="left">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Advanced MRP for manufacturers
              <span className="text-white/40">•</span>
              From messy documents → automated operations
            </div>

            <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.02em] md:text-6xl">
              ERP that goes live fast{" "}
              <span className="text-white/70">for factory owners.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              We turn your existing data into a live MRP/ERP workflow and give your team a
              simple conversational control layer — plus explainable automation.
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
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
              >
                Explore platform
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal from="right" delay={0.08}>
          <Card className="p-6">
            <div className="text-sm font-semibold text-white/90">What changes in practice</div>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
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
            <div className="mt-5 text-sm text-white/70">
              Pricing: quote-based setup + monthly plan.
            </div>
          </Card>
        </Reveal>
      </div>

      {/* INVESTORS MARQUEE */}
      <div className="mt-10">
        <Reveal from="up" delay={0.12}>
          <div className="mb-3 text-sm font-semibold text-white/85">
            Backed by operators + technical builders
          </div>
          <div className="text-sm text-white/60">
            A rotating loop of the ecosystem behind Polymr.
          </div>
          <div className="mt-4">
            <InvestorMarquee />
          </div>
        </Reveal>
      </div>

      {/* SECTIONS */}
      <div className="mt-14">
        <Reveal from="up" delay={0.1}>
          <h2 className="text-center text-3xl font-semibold tracking-[-0.01em] md:text-4xl">
            From raw data to live execution.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Reveal from="left" delay={0.05}>
            <Card className="p-6">
              <div className="text-sm font-semibold text-white/90">
                Ingest and structure your operation
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                We compile BOMs, routings, documents, and floor updates into one reliable
                operating model.
              </p>
            </Card>
          </Reveal>

          <Reveal from="up" delay={0.09}>
            <Card className="p-6">
              <div className="text-sm font-semibold text-white/90">
                Reason over constraints and uncertainty
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                The platform checks data quality and runs what-if plans for scheduling and
                purchasing.
              </p>
            </Card>
          </Reveal>

          <Reveal from="right" delay={0.12}>
            <Card className="p-6">
              <div className="text-sm font-semibold text-white/90">
                Execute with explainable automation
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Teams act quickly while keeping clear decision visibility.
              </p>
            </Card>
          </Reveal>
        </div>
      </div>

      {/* WHY THIS MATTERS */}
      <div className="mt-14">
        <Reveal from="up" delay={0.08}>
          <Card className="p-8">
            <div className="text-sm font-semibold text-white/90">Why this matters</div>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.01em] md:text-3xl">
              Traditional ERP rollouts are too expensive and too slow.
            </h3>

            <div className="mt-6 grid gap-3 md:grid-cols-4">
              {[
                { k: "70%", v: "SMEs still enter data manually" },
                { k: "68%", v: "Analyze in spreadsheets" },
                { k: "$40k–$325k", v: "Typical implement cost" },
                { k: "200+ hrs", v: "Internal staff time" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="text-2xl font-semibold">{item.k}</div>
                  <div className="mt-1 text-sm text-white/65">{item.v}</div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </main>
  );
}