"use client";

import { Code2, Database } from "lucide-react";

export default function ToolkitCard({ title, items, type = "engineering" }) {
  const isEngineering = type === "engineering";
  const Icon = isEngineering ? Code2 : Database;

  return (
    <div className="rounded-[28px] border border-[#d8cfab] bg-white/55 p-7 backdrop-blur-md">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e6e0c2]">
          <Icon size={20} className="text-[#2f2a18]" />
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7f7860]">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#ddd4b2] bg-white/65 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#5f583f]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}