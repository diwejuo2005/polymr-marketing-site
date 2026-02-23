import Section from "@/components/Section";

export default function PlatformPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-12">
      <Section from="up">
        <h1 className="text-center text-4xl font-semibold tracking-tight md:text-5xl">
          Advanced manufacturing system layer built for small and mid-sized factories.
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/70">
          Turn fragmented data into a live operating model for planning, purchasing, scheduling, and execution.
        </p>
      </Section>

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
          <Section key={c.title} from={i % 2 === 0 ? "left" : "right"} delay={0.05 * i}>
            <div className="rounded-3xl bg-white/6 p-6 ring-1 ring-white/10">
              <div className="text-lg font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-white/70">{c.body}</div>
            </div>
          </Section>
        ))}
      </div>
    </main>
  );
}