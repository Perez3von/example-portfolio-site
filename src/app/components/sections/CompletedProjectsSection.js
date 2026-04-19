"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import ProjectCard from "../shared/ProjectCard";
import ProjectModal from "../shared/ProjectModal";

const projects = [
  {
    id: "healthcare-cost-prediction",
    title: "Predictive Modeling of Healthcare Cost",
    subtitle: "ML platform for patient cost prediction and risk stratification",
    summary:
      "Machine learning platform predicting patient healthcare costs with 89% accuracy using 10,000+ records and 50+ clinical and financial features.",
    details:
      "Built an end-to-end healthcare cost prediction system that analyzes large-scale patient data to identify high-risk patients and support better resource allocation. Developed ensemble models using XGBoost and Random Forest, productionized the system with a FastAPI backend, and created an interactive Streamlit dashboard for exploration and reporting. Containerized deployment with Docker and CI/CD made the platform ready for real-world delivery.",
    heroImage: "/healthcare_image.png",
    gallery: ["/healthcare_project_img_one.jpg", "/healthcare_project_img_two.jpg"],
    outcomeValue: "89% Accuracy",
    outcomeText:
      "92% detection rate for high-risk patients with projected $8M–$15M annual savings through early intervention.",
    tools: [
      "Python",
      "FastAPI",
      "XGBoost",
      "Random Forest",
      "Docker",
      "Streamlit",
      "CI/CD",
    ],
    focus: [
      "Predictive modeling for healthcare cost estimation",
      "Risk stratification using 50+ clinical and financial features",
      "Ensemble ML models (XGBoost, Random Forest)",
      "Production FastAPI backend",
      "Interactive Streamlit dashboard",
      "Cloud-ready deployment with Docker and CI/CD",
    ],
    githubUrl: "https://github.com/revapethe/healthcare_cost_prediction",
    demoUrl: "https://healthcare-cost-prediction-project.streamlit.app/",
    date: "Jan 2026",
  },
  {
    id: "ai-payroll-analytics-platform",
    title: "AI-Powered Payroll Analytics Platform",
    subtitle: "Multi-country payroll intelligence for USA and India",
    summary:
      "End-to-end payroll analytics platform analyzing employee compensation across USA and India with AI-powered search and multi-database reporting.",
    details:
      "Built a payroll analytics platform that processes multi-country workforce data using 20+ financial and HR features to uncover salary gaps, high-cost departments, and workforce distribution patterns. Designed automated ETL workflows across CSV, SQLite, PostgreSQL, and SQL Server, and developed an AI-powered natural language search layer with dynamic SQL generation. Delivered interactive Python dashboards and structured reporting to support HR and Finance teams with faster self-service analytics.",
    heroImage: "/finance_image.png",
    gallery: ["/finance_image_one.jpg", "/finance_image_two.jpg", "/finance_image_three.jpg"],
    outcomeValue: "Self-Service Analytics",
    outcomeText:
      "Enabled HR and Finance teams to benchmark USA vs India salaries, identify overpaid or underpaid roles, and flag high-cost departments without relying on analysts for routine reporting.",
    tools: [
      "Python",
      "SQLite",
      "PostgreSQL",
      "SQL Server",
      "ETL",
      "Dynamic SQL",
      "Streamlit",
    ],
    focus: [
      "Payroll analytics across USA and India",
      "Automated ETL pipeline design",
      "Multi-database architecture",
      "AI-powered natural language search",
      "Dynamic SQL reporting",
      "Interactive dashboards for HR and Finance",
    ],
    githubUrl: "https://github.com/revapethe/finance_payroll_analytics",
    demoUrl: "https://finance-payroll.streamlit.app/",
    date: "Feb 2026",
  },
];

export default function CompletedProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);
  const showArrows = projects.length > 1;

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const scrollByAmount = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = Math.floor(container.clientWidth * 0.82);
    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <LayoutGroup>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7f7860]">
                Selected Work
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight text-[#2f2a18] md:text-5xl">
                Completed
              </h2>
            </div>

            {showArrows && (
              <div className="hidden justify-end gap-3 md:flex">
                <button
                  type="button"
                  onClick={() => scrollByAmount("left")}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#4a4632] shadow-sm transition hover:bg-white"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={() => scrollByAmount("right")}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#4a4632] shadow-sm transition hover:bg-white"
                >
                  →
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <div
              ref={scrollRef}
              className={`flex overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] ${
                projects.length <= 2 ? "gap-8 md:justify-start" : "gap-5"
              }`}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`snap-start shrink-0 ${
                    projects.length <= 2
                      ? "w-[88vw] sm:w-[78vw] md:w-[640px] lg:w-[680px]"
                      : "w-[88vw] sm:w-[78vw] md:w-[640px] lg:w-[720px] xl:w-[760px]"
                  }`}
                >
                  <ProjectCard
                    project={project}
                    onOpen={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}