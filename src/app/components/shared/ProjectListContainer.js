"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: "healthcare-cost-prediction",

    title: "Healthcare Cost Prediction System",

    summary:
      "End-to-end machine learning system predicting patient costs using large-scale healthcare data.",

    details:
      "Built a production-ready healthcare cost prediction system processing 50K+ patient records with 50+ engineered features. Implemented ensemble models (XGBoost, Random Forest, LightGBM) achieving 89% R². Designed full ETL pipeline, deployed FastAPI service with sub-100ms latency, and built interactive dashboards.",

    heroImage: "/finance_image.png",

    gallery: [
      "/healthcare_project_img_one.jpg",
      "/healthcare_project_img_two.jpg",

    ],

    outcomeValue: "89% R²",
    outcomeText: "High-accuracy cost prediction across 50K+ records",

    // 🔥 NEW — what shows on card
    tools: [
      "Python",
      "FastAPI",
      "XGBoost",
      "LightGBM",
      "Docker",
      "Streamlit",
    ],
    focus: [
  "End-to-end ML pipeline design",
  "Large-scale feature engineering (50+ features)",
  "Ensemble modeling (XGBoost, Random Forest, LightGBM)",
  "Low-latency prediction API (<100ms)",
  "Scalable data processing (50K+ records)",
  "Production deployment with Docker and CI/CD",
],
githubUrl:"https://github.com/revapethe/healthcare_cost_prediction",
  },
];
export default function ProjectsListContainer() {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

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
    <LayoutGroup>
      <div className="relative">
        <div className="mb-5 hidden justify-end gap-3 md:flex">
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

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="snap-start shrink-0 w-[88vw] sm:w-[78vw] md:w-[640px] lg:w-[720px] xl:w-[760px]"
            >
              <ProjectCard
                project={project}
                onOpen={() => setSelectedProject(project)}
              />
            </div>
          ))}
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
  );
}