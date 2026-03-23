"use client";

import Image from "next/image";

const investors = [
  { name: "Y Combinator", src: "/ycombinator.png", w: "w-52", h: "h-16" },
  { name: "Founders Fund", src: "/founders-fund-logo.png", w: "w-52", h: "h-16" },
  { name: "a16z", src: "/a16z-logo.png", w: "w-24", h: "h-7" },
  { name: "Sequoia", src: "/sequoia-logos.png", w: "w-72", h: "h-20" },
  { name: "Stripe", src: "/stripe-logo.png", w: "w-24", h: "h-7" },
  { name: "Amazon", src: "/amazon-logo.png", w: "w-28", h: "h-8" },
  { name: "Google", src: "/google-logo.png", w: "w-24", h: "h-7" },
  { name: "Airbus", src: "/airbus.png", w: "w-36", h: "h-10" },
  { name: "Stanford", src: "/stanford.png", w: "w-36", h: "h-10" },
];

// Duplicate for seamless loop
const loopItems = [...investors, ...investors];

export default function InvestorMarquee() {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#08040f] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#08040f] to-transparent" />

      <div
        className="flex animate-marquee-x items-center gap-14 [will-change:transform]"
        style={{ width: "max-content" }}
      >
        {loopItems.map((inv, i) => (
          <div
            key={`${inv.name}-${i}`}
            className={`relative flex-shrink-0 ${inv.h} ${inv.w}`}
          >
            <Image
              src={inv.src}
              alt={inv.name}
              fill
              sizes="160px"
              className="object-contain opacity-100 grayscale brightness-150 transition duration-300 hover:brightness-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
