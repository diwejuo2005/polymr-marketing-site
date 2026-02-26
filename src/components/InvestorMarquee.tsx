"use client";

import Image from "next/image";

const investors = [
  { name: "Y Combinator", src: "/Y-combinator-white-logo.png" },
  { name: "Founders Fund", src: "/founders-fund-logo.png" },
  { name: "a16z", src: "/a16z-logo.png" },
  { name: "Sequoia", src: "/Sequoia-logo.png" },
  { name: "Stripe", src: "/stripe-logo.png" },
  { name: "Amazon", src: "/amazon-logo.png" },
  { name: "Google", src: "/google-logo.png" },
  { name: "Airbus", src: "/airbus.png" },
  { name: "Stanford", src: "/stanford.png" },
];

// Split into 3 columns
const col1 = [investors[0], investors[3], investors[6]];
const col2 = [investors[1], investors[4], investors[7]];
const col3 = [investors[2], investors[5], investors[8]];

// Repeat 4× then duplicate for a seamless -50% loop
function makeLoop<T>(items: T[]): T[] {
  const base = Array(4).fill(null).flatMap(() => items);
  return [...base, ...base];
}

function LogoCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex h-16 w-full items-center justify-center rounded-2xl border border-black/10 bg-white px-4 shadow-sm">
      <div className="relative h-7 w-[110px]">
        <Image
          src={src}
          alt={name}
          fill
          sizes="110px"
          className="object-contain opacity-90"
        />
      </div>
    </div>
  );
}

function ScrollColumn({
  items,
  duration,
}: {
  items: typeof investors;
  duration: number;
}) {
  const loop = makeLoop(items);
  return (
    <div
      className="flex flex-col gap-3 [will-change:transform]"
      style={{ animation: `scrollUp ${duration}s linear infinite` }}
    >
      {loop.map((inv, i) => (
        <LogoCard key={`${inv.name}-${i}`} name={inv.name} src={inv.src} />
      ))}
    </div>
  );
}

export default function InvestorMarquee() {
  return (
    <div className="relative h-80 overflow-hidden">
      {/* top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-zinc-950 to-transparent" />
      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="grid grid-cols-3 gap-3">
        <ScrollColumn items={col1} duration={16} />
        <ScrollColumn items={col2} duration={16} />
        <ScrollColumn items={col3} duration={16} />
      </div>

      <style jsx>{`
        @keyframes scrollUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
}
