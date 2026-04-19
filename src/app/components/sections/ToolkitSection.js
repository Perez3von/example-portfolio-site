"use client";

import ToolkitCard from "../shared/ToolkitCard";

const engineeringItems = [
  "SQL",
  "Python",
  "R",
  "JavaScript",
  "Java",
  "HTML",
  "CSS",
];

const toolsItems = [
  "Power BI",
  "Tableau",
  "Excel",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Scikit-learn",
  "Plotly",
  "Jupyter",
  "MySQL",
  "PostgreSQL",
  "Snowflake",
  "MongoDB",
  "AWS",
  "Docker",
  "Databricks",
  "Airflow",
];

export default function ToolkitSection() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-10">

          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7f7860]">
              Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2f2a18] md:text-5xl">
              The Toolkit
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ToolkitCard
              title="Engineering Languages"
              items={engineeringItems}
              type="engineering"
            />

            <ToolkitCard
              title="Tools & Platforms"
              items={toolsItems}
              type="tools"
            />
          </div>

        </div>
      </div>
    </section>
  );
}