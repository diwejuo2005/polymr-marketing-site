"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
};

// ─── Knowledge base ────────────────────────────────────────────────────────────
const INTENTS: { keywords: string[]; response: string }[] = [
  {
    keywords: ["what", "polymr", "is", "does", "about", "company", "explain", "tell"],
    response:
      "Polymr is an advanced MRP/ERP platform built for factory owners and manufacturers. We turn your existing data — spreadsheets, PDFs, emails, BOMs — into a live production workflow with a simple conversational control layer and explainable automation. ERP goes live in days, not months.",
  },
  {
    keywords: ["fast", "live", "long", "time", "days", "weeks", "onboard", "quick", "speed", "launch", "setup"],
    response:
      "Polymr onboards from your current files and team interviews — no long consultant cycles. Traditional ERP rollouts take months and cost $40k–$10M+, pulling 200+ hours of internal staff time. With Polymr, you go live fast without the overhead.",
  },
  {
    keywords: ["integrat", "connect", "system", "software", "erp", "quickbooks", "netsuite", "sap", "oracle", "odoo", "xero", "dynamics", "epicor", "plex"],
    response:
      "Polymr works with your current stack — no rip-and-replace needed. Supported integrations include QuickBooks, NetSuite, SAP, Microsoft Dynamics, Xero, Odoo, Oracle, Epicor, Infor, Plex, QAD, BlueYonder, and Microsoft Dynamics 365.",
  },
  {
    keywords: ["price", "pricing", "cost", "plan", "pay", "subscription", "fee", "charge", "how much"],
    response:
      "Pricing is quote-based: a one-time setup fee tailored to your factory's complexity, plus a monthly subscription. Reach out at naman@polymr.tech or visit /contact for a custom quote.",
  },
  {
    keywords: ["demo", "see", "watch", "video", "show", "look", "preview", "trial"],
    response:
      "You can watch a product demo and submit a demo request at /demo. Our team will walk you through exactly how Polymr maps to your operation.",
  },
  {
    keywords: ["contact", "reach", "talk", "speak", "email", "sales", "team", "human", "person", "naman", "tanmay"],
    response:
      "You can reach the Polymr team at:\n• Naman: naman@polymr.tech\n• Tanmay: tanmay@polymr.tech\n\nOr fill out the contact form at /contact and we'll get back to you quickly.",
  },
  {
    keywords: ["service", "offer", "provide", "document", "automat", "vendor", "paperwork", "invoice", "po", "rfq"],
    response:
      "Polymr offers three core services:\n1. Document automation — RFQ → Quote → PO → GRN → Invoice, all handled automatically\n2. Vendor matrix — cost, lead time, and risk scoring across suppliers\n3. Real-time channels — email and chat integration for live ops visibility",
  },
  {
    keywords: ["platform", "feature", "capabilit", "technology", "how it work", "works", "engine", "intelligence"],
    response:
      "The Polymr platform ingests messy docs and turns them into a structured production model. It reasons over constraints, checks data quality, runs what-if plans, and executes with explainable automation — so your team always knows why a decision was made. See full details at /platform.",
  },
  {
    keywords: ["workflow", "factory", "manufactur", "cut", "sew", "fabric", "trim", "qa", "compliance", "shipment", "vendor", "exception"],
    response:
      "Polymr is built for real factory workflows:\n• Cut-and-sew planning and line balancing\n• Fabric and trim purchasing automation\n• QA, compliance, and shipment readiness\n• Vendor operations and exception management\n\nEach workflow is mapped to your real production process.",
  },
  {
    keywords: ["investor", "backed", "fund", "vc", "sequoia", "a16z", "founders", "yc", "combinator", "stanford", "airbus", "amazon", "google", "stripe"],
    response:
      "Polymr is backed by a strong ecosystem of operators and technical builders including Y Combinator, Founders Fund, a16z, Sequoia, Stripe, Amazon, Google, Airbus, and Stanford.",
  },
  {
    keywords: ["partner", "partnership", "resell", "channel", "integrat", "firm", "enterprise"],
    response:
      "Polymr works with four types of partners:\n• Factory design partners\n• ERP integration firms\n• Enterprise channel partners\n• Network interoperability partners\n\nLearn more at /partnerships.",
  },
  {
    keywords: ["login", "log in", "sign in", "account", "access", "dashboard"],
    response:
      "You can log in to the Polymr platform at /login. If you don't have an account yet, request a demo at /demo and we'll get you set up.",
  },
  {
    keywords: ["mrp", "erp", "planning", "schedule", "material", "bom", "routing", "order", "production"],
    response:
      "Polymr combines MRP and ERP into one fast-to-deploy system. It handles production scheduling, BOM and routing ingestion, order queue management, material readiness tracking, and purchasing — all from your existing data.",
  },
  {
    keywords: ["stat", "number", "data", "84", "percent", "spreadsheet", "manual", "expensive", "slow"],
    response:
      "84% of SMEs still run on manual spreadsheets — putting them at a major disadvantage. Modern MRP programs show 8–15% throughput gains. Traditional ERP implementations cost $40k–$10M+ and consume 200+ hours of staff time. Polymr is built to close that gap fast.",
  },
];

const FALLBACK =
  "I don't have enough details to answer that confidently. For anything specific, reach out to the team directly at naman@polymr.tech or visit /contact — they respond quickly.";

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  let best = { score: 0, response: FALLBACK };

  for (const intent of INTENTS) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (lower.includes(kw)) score++;
    }
    if (score > best.score) {
      best = { score, response: intent.response };
    }
  }

  return best.response;
}

// ─── Icons ─────────────────────────────────────────────────────────────────────
function SendIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M3.105 3.105a.75.75 0 0 1 .967-.12l12.5 7.5a.75.75 0 0 1 0 1.03l-12.5 7.5a.75.75 0 0 1-1.087-.838L4.5 10 2.985 3.923a.75.75 0 0 1 .12-.818Z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path
        fillRule="evenodd"
        d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-white/40"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

const QUICK_PROMPTS = [
  "What does Polymr do?",
  "How fast can I go live?",
  "What integrations do you support?",
  "How do I get a demo?",
];

// ─── Widget ─────────────────────────────────────────────────────────────────────
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 150);
  }, [isOpen]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setIsTyping(true);

    // Simulate a short thinking delay
    await new Promise((r) => setTimeout(r, 600 + Math.random() * 400));

    const response = getResponse(trimmed);
    setIsTyping(false);
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex h-[500px] w-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f0e1a] shadow-2xl shadow-black/60"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/8 bg-white/3 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600">
                  <ChatIcon />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Polymr AI</div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-white/40">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-white/40 transition hover:bg-white/5 hover:text-white"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.length === 0 && !isTyping ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-900/40 text-violet-400">
                    <ChatIcon />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Ask me anything about Polymr
                    </div>
                    <div className="mt-1 text-xs text-white/40">
                      I can answer questions and point you in the right direction.
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 pt-1">
                    {QUICK_PROMPTS.map((q) => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition hover:border-violet-500/40 hover:bg-violet-900/20 hover:text-white"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={[
                          "max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                          msg.role === "user"
                            ? "rounded-br-sm bg-violet-600 text-white"
                            : "rounded-bl-sm bg-white/8 text-white/90",
                        ].join(" ")}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="rounded-2xl rounded-bl-sm bg-white/8 px-3.5 py-2.5">
                        <TypingDots />
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-white/8 px-3 py-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 focus-within:border-violet-500/50"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question…"
                  disabled={isTyping}
                  className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white transition hover:bg-violet-500 disabled:opacity-30"
                >
                  <SendIcon />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-900/50 transition hover:bg-violet-500"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <CloseIcon />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <ChatIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
