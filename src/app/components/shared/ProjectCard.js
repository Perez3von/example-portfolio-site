"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      type="button"
      layoutId={`project-shell-${project.id}`}
      onClick={onOpen}
      className="group block w-full max-w-[620px] mx-auto overflow-hidden rounded-[26px] bg-[#f3f3ef] text-left text-[#3f3a22] shadow-[0_8px_24px_rgba(0,0,0,0.07)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d8cfab]"
      transition={{ type: "spring", stiffness: 180, damping: 24 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        layoutId={`project-image-wrap-${project.id}`}
        className="relative h-[220px] w-full overflow-hidden rounded-t-[26px]"
      >
        <motion.img
          layoutId={`project-image-${project.id}`}
          src={project.heroImage}
          alt={project.title}
          className="h-full w-full object-cover"
        />

        {/* subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition duration-200 group-hover:bg-black/5" />

        {/* more noticeable arrow */}
        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#2f2a18] shadow-sm transition group-hover:bg-white">
          <span className="text-lg font-semibold">↗</span>
        </div>
      </motion.div>

      <div className="relative px-6 pb-6 pt-6 md:px-7">
        <motion.h2
          layoutId={`project-title-${project.id}`}
          className="max-w-[85%] text-xl font-semibold tracking-tight md:text-2xl"
        >
          {project.title}
        </motion.h2>

        <p className="mt-3 max-w-[500px] text-[14px] leading-6 text-[#6f694a]">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools?.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-[#e6e6e0] px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#6a664a]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}