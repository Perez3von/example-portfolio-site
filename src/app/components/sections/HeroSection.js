"use client";

import { useState } from "react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Copy failed");
    }
  };

  return (
    <section className="px-6 pt-24 pb-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">

          {/* NAME */}
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-[#2f2a18] md:text-7xl lg:text-8xl">
            Reva Pethe
          </h1>

          {/* SUBTITLE */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6c654a] md:text-lg">
            Data Analyst transforming complex datasets into actionable insights
            through SQL, Python, and Power BI — enabling smarter, data-driven
            decision-making.
          </p>

          {/* TAGS */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#cfc5a2] bg-white/50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#5f583f] backdrop-blur">
              Data Analysis
            </span>
            <span className="rounded-full border border-[#cfc5a2] bg-white/50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#5f583f] backdrop-blur">
              Business Intelligence
            </span>
            <span className="rounded-full border border-[#cfc5a2] bg-white/50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#5f583f] backdrop-blur">
              Data Visualization
            </span>
            <span className="rounded-full border border-[#cfc5a2] bg-white/50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#5f583f] backdrop-blur">
              ETL Pipelines
            </span>
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-wrap items-center gap-4">

            <a
              href="/Reva_Pethe_Data_Analytics.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#2f2a18] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f1b0f]"
            >
              View Resume
            </a>

            <a
              href="https://github.com/revapethe"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#cfc5a2] bg-white/60 px-6 py-3 text-sm font-medium text-[#3f3a22] backdrop-blur transition hover:bg-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/reva-pethe/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#cfc5a2] bg-white/60 px-6 py-3 text-sm font-medium text-[#3f3a22] backdrop-blur transition hover:bg-white"
            >
              LinkedIn
            </a>

            {/* COPY SITE */}
            <button
              onClick={handleCopy}
              className="rounded-full border border-[#cfc5a2] bg-white/60 px-6 py-3 text-sm font-medium text-[#3f3a22] backdrop-blur transition hover:bg-white"
            >
              {copied ? "Copied!" : "Share Site"}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}