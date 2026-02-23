export default function InvestorMarquee() {
  const items = [
    "Y Combinator",
    "Founders Fund",
    "a16z",
    "Sequoia",
    "Stripe",
    "Amazon",
    "Google",
    "Airbus",
    "Stanford",
  ];

  // Duplicate list so it loops seamlessly
  const loop = [...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee__track">
        {loop.map((name, idx) => (
          <span
            key={`${name}-${idx}`}
            className="mr-3 inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}