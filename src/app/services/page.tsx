import Section from "@/components/Section";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-12">
      <Section from="up">
        <h1 className="text-center text-4xl font-semibold tracking-tight md:text-5xl">
          Practical services that help factories run better, faster.
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-white/70">
          Fast implementation, simpler daily operations, and automation that saves real time.
        </p>
      </Section>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          ["Document automation", "RFQ → Quote → PO → GRN → Invoice with auto-routing."],
          ["Vendor matrix", "Cost, lead time, and risk scored for each supplier."],
          ["Real-time channels", "Email + chat updates flow into an action queue."],
        ].map(([t, b], i) => (
          <Section key={t} from={i === 0 ? "left" : i === 1 ? "up" : "right"} delay={0.06 * i}>
            <div className="rounded-3xl bg-white/6 p-6 ring-1 ring-white/10">
              <div className="text-lg font-semibold">{t}</div>
              <div className="mt-2 text-sm text-white/70">{b}</div>
            </div>
          </Section>
        ))}
      </div>
    </main>
  );
}