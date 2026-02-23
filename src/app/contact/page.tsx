import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-12">
      <Section from="up">
        <h1 className="text-center text-4xl font-semibold tracking-tight md:text-5xl">
          Contact sales
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70">
          Tell us what you build, what tools you use today, and what you want to automate first.
        </p>
      </Section>

      <Section from="up" delay={0.1}>
        <div className="mt-10 rounded-3xl bg-white/6 p-6 ring-1 ring-white/10">
          <div className="grid gap-3">
            <input className="w-full rounded-2xl bg-black/30 px-4 py-3 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50" placeholder="Name" />
            <input className="w-full rounded-2xl bg-black/30 px-4 py-3 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50" placeholder="Work email" />
            <input className="w-full rounded-2xl bg-black/30 px-4 py-3 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50" placeholder="Company / Factory" />
            <textarea className="min-h-36 w-full rounded-2xl bg-black/30 px-4 py-3 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50" placeholder="What’s the #1 workflow you want to improve?" />
            <button className="mt-2 rounded-full bg-violet-400/90 px-6 py-3 text-sm font-semibold text-black hover:bg-violet-300 transition">
              Send message
            </button>
          </div>
          <div className="mt-4 text-xs text-white/60">
            (For now this is UI-only. Next step: wire to Formspree, Resend, or your backend.)
          </div>
        </div>
      </Section>
    </main>
  );
}