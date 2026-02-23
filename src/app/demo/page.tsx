import Section from "@/components/Section";
import Link from "next/link";

export default function DemoPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-12">
      <Section from="up">
        <h1 className="text-center text-4xl font-semibold tracking-tight md:text-5xl">
          See Polymr run a manufacturing workflow end-to-end.
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-white/70">
          Watch the walkthrough, then share your setup so we can tailor the session to your constraints.
        </p>
      </Section>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Section from="left">
          <div className="rounded-3xl bg-white/6 p-6 ring-1 ring-white/10">
            <div className="text-xl font-semibold">Product demo video</div>
            <div className="mt-4 aspect-video overflow-hidden rounded-2xl bg-black/30 ring-1 ring-white/10">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/6k8P18U9GfI"
                title="Polymr Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Section>

        <Section from="right">
          <div className="rounded-3xl bg-white/6 p-6 ring-1 ring-white/10">
            <div className="text-xl font-semibold">Free demo and consultation</div>
            <p className="mt-2 text-sm text-white/70">
              Share your details and we’ll schedule a walkthrough focused on your workflows.
            </p>

            <div className="mt-5 space-y-3">
              <input className="w-full rounded-2xl bg-black/30 px-4 py-3 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50" placeholder="Name and company" />
              <input className="w-full rounded-2xl bg-black/30 px-4 py-3 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50" placeholder="Best work email" />
              <textarea className="min-h-28 w-full rounded-2xl bg-black/30 px-4 py-3 text-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50" placeholder="Main workflow you want to improve" />
            </div>

            <div className="mt-5 flex gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-violet-400/90 px-5 py-3 text-sm font-semibold text-black hover:bg-violet-300 transition"
              >
                Email demo request
              </Link>
              <span className="self-center text-xs text-white/60">
                Routed to naman@polymr.tech
              </span>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}