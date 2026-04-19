"use client";
import MiniProjectCard from "../shared/MiniProjectCard";
import { Brain, Database, LineChart } from "lucide-react";

const wipProjects = [
  {
    title: "Art and Science of Data",
    description:
      "Course-driven work focused on computational skepticism, data visualization, causal inference, generative AI, and trustworthy analysis pipelines. Covers how to evaluate data, models, and end-to-end workflows through critical reasoning and visual understanding.",
    githubUrl: "https://github.com/revapethe8/INFO_7390_Art_and_Science_of_Data",
    Icon: Brain,
  },
  {
    title: "Adaptive Analytics System",
    description:
      "Exploring dynamic dashboards that adjust insights based on user interaction, changing metrics, and evolving data patterns.",
    githubUrl: "",
    Icon: LineChart,
  },
  {
    title: "Data Pipeline Optimizer",
    description:
      "Designing automated ETL workflows with monitoring, validation, and recovery for large-scale analytical datasets.",
    githubUrl: "",
    Icon: Database,
  },
];
export default function WorkInProgressSection() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-10">

        {/* HEADER */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7f7860]">
            Laboratory
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2f2a18] md:text-5xl">
            Work in Progress
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-3">
          {wipProjects.map((project, index) => (
            <MiniProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}