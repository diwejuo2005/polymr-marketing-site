import Section from "@/components/Section";

export default function PartnershipsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-12">
      <Section from="up">
        <h1 className="text-center text-4xl font-semibold tracking-tight md:text-5xl">
          Partner with Polymr to modernize manufacturing operations faster.
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-white/70">
          We work with factories, integration firms, and sourcing networks that need faster deployment and clearer execution.
        </p>
      </Section>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          ["Factory design partners", "Modernize operations without consultant-heavy implementations."],
          ["ERP integration firms", "White-glove deployment support and structured normalization."],
          ["Enterprise channel partners", "Consistent operating visibility across teams and sites."],
          ["Network interoperability", "Standardize lead times, capacity, and materials into a shared schema."],
        ].map(([t, b], i) => (
          <Section key={t} from={i % 2 === 0 ? "left" : "right"} delay={0.06 * i}>
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