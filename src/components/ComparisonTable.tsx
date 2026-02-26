"use client";

import { useState } from "react";

const COMPETITORS = [
  "NetSuite",
  "Dynamics 365",
  "Katana",
  "MRPeasy",
  "Fishbowl",
  "Odoo",
  "FDM4",
  "Aptean",
];

const ROWS = [
  "Setup approach",
  "Best fit",
  "Automation depth",
  "Operational flexibility",
  "Implementation model",
  "Pricing structure",
];

const POLYMR_COL = [
  "Fast onboarding from files, email, and interviews with less manual setup.",
  "Built for small and mid-sized factories, while still deployable in larger enterprise environments.",
  "Built-in automation for paperwork, channel updates, and execution workflows.",
  "Operational logic updates quickly as routing, demand, and constraints change.",
  "Implementation path focused on practical rollout speed and minimal disruption.",
  "Quote-based setup + monthly subscription aligned to scope, with clear rollout planning.",
];

const COMPETITOR_DATA: Record<string, string[]> = {
  "NetSuite": [
    "Structured cloud ERP implementation with role, workflow, and reporting setup.",
    "Mid-market firms needing finance-first ERP with manufacturing modules.",
    "Good workflow tools, but advanced operations automation usually needs custom design.",
    "Broad suite coverage; change management can require dedicated admins.",
    "Commonly delivered via certified partners and phased rollouts.",
    "Annual subscription, module tiers, and implementation services are typically separate.",
  ],
  "Dynamics 365": [
    "Enterprise-grade ERP/CRM with structured onboarding, certifications, and implementation partners.",
    "Larger enterprises needing deep Microsoft ecosystem integration and finance-first workflows.",
    "Power Automate integration for custom workflows; manufacturing modules add complexity.",
    "Highly customizable but requires skilled admins and change control for modifications.",
    "Typically 6–18 month implementations via Microsoft-certified partners.",
    "Per-user licensing with add-on modules; implementation costs are typically separate.",
  ],
  "Katana": [
    "Cloud-based MRP with guided setup, focused on product-based manufacturers.",
    "Small manufacturers with product-centric workflows and relatively simple BOMs.",
    "Good for basic purchase and production orders; limited for advanced execution automation.",
    "Simple interface but limited customization for non-standard or complex workflows.",
    "Self-serve setup with support docs and onboarding calls.",
    "Monthly subscription by plan tier; advanced features locked to higher tiers.",
  ],
  "MRPeasy": [
    "Self-service cloud MRP with guided configuration designed for small manufacturers.",
    "Small manufacturers needing affordable MRP without heavy IT or implementation overhead.",
    "Basic automation for production scheduling and inventory; limited channel integration.",
    "Straightforward but limited configurability for edge cases and complex routing.",
    "Self-onboarding with video guides and support tickets.",
    "Tiered monthly plans based on users and feature access.",
  ],
  "Fishbowl": [
    "QuickBooks-adjacent inventory and manufacturing software with partner-led setup.",
    "Small businesses already on QuickBooks needing basic manufacturing management.",
    "Basic work orders and inventory tracking; limited advanced or channel-based automation.",
    "Tight coupling to QuickBooks limits flexibility for standalone factory operations.",
    "Partner-led installation with training packages.",
    "One-time license fee plus annual maintenance; implementation is typically separate.",
  ],
  "Odoo": [
    "Modular open-source ERP with community and enterprise editions; setup varies widely.",
    "Companies wanting a broad, customizable ERP suite across sales, inventory, and manufacturing.",
    "Powerful when customized; automation typically requires developer resources to build.",
    "Highly flexible but customization creates maintenance overhead over time.",
    "Community self-hosting or enterprise partner implementations.",
    "Free community edition; enterprise pricing per user with per-app module fees.",
  ],
  "FDM4": [
    "Fashion and apparel ERP with industry-specific configuration and partner deployment.",
    "Larger apparel brands needing integrated ERP across design, production, and retail.",
    "Industry-specific automation for style management and production orders.",
    "Deep apparel-specific features but limited outside that vertical.",
    "Enterprise-led implementation with longer onboarding timelines.",
    "Enterprise pricing; implementation and licensing typically bundled.",
  ],
  "Aptean": [
    "Industry-specific ERP solutions with professional services-led implementation.",
    "Mid-to-large manufacturers in process and discrete manufacturing verticals.",
    "Strong industry-specific workflows; customization typically requires professional services.",
    "Industry templates reduce flexibility for non-standard operations.",
    "Professional services-led with structured project plans.",
    "Per-module enterprise licensing with separate implementation fees.",
  ],
};

export default function ComparisonTable() {
  const [selected, setSelected] = useState("NetSuite");
  const compData = COMPETITOR_DATA[selected];

  return (
    <div>
      {/* Competitor tabs */}
      <div className="flex flex-wrap gap-2">
        {COMPETITORS.map((c) => (
          <button
            key={c}
            onClick={() => setSelected(c)}
            className={[
              "rounded-full px-4 py-1.5 text-sm font-medium transition",
              selected === c
                ? "bg-violet-600 text-white"
                : "border border-white/10 bg-white/5 text-white/60 hover:border-violet-500/40 hover:text-white",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
        {/* Header */}
        <div className="grid grid-cols-3 border-b border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-white/50">
          <div>Category</div>
          <div>{selected}</div>
          <div className="text-violet-400">Polymr</div>
        </div>

        {/* Rows */}
        {ROWS.map((row, i) => (
          <div
            key={row}
            className={[
              "grid grid-cols-3 gap-4 px-4 py-4 text-sm",
              i < ROWS.length - 1 ? "border-b border-white/5" : "",
            ].join(" ")}
          >
            <div className="font-medium text-white/80">{row}</div>
            <div className="text-white/55 leading-relaxed">{compData[i]}</div>
            <div className="text-white/80 leading-relaxed">{POLYMR_COL[i]}</div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-white/30">
        Select a competitor above to compare setup, fit, and pricing model side by side. Pricing notes reflect common public packaging patterns and project structures; exact quotes vary by scope.
      </p>
    </div>
  );
}
