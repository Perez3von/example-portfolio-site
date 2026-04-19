"use client";

import { ExternalLink } from "lucide-react";

export default function MiniProjectCard({ title, description, githubUrl, Icon }) {
  return (
    <div className="group rounded-[24px] border border-[#d8cfab] bg-white/55 p-6 backdrop-blur-md transition hover:bg-white/70">
      
      {/* ICON */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#e6e0c2]">
        <Icon size={18} className="text-[#2f2a18]" />
      </div>

      {/* TITLE */}
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-lg font-semibold text-[#2f2a18]">
          {title}
        </h4>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7f7860] transition hover:text-[#2f2a18]"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      {/* DESCRIPTION */}
      <p className="mt-3 text-sm leading-6 text-[#5f583f]">
        {description}
      </p>
    </div>
  );
}