"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        if (activeImage) {
          setActiveImage(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImage, onClose]);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 overflow-y-auto bg-black/30 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.16 }}
        onClick={onClose}
      >
        <div className="min-h-screen px-4 py-6 md:px-8 md:py-10">
          <div className="mx-auto max-w-5xl">
            <motion.div
              layoutId={`project-shell-${project.id}`}
              className="relative w-full overflow-hidden rounded-[28px] bg-[#f3f3ef] text-[#3f3a22] shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
              transition={{ type: "spring", stiffness: 240, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-20 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm text-[#3f3a22] backdrop-blur transition hover:bg-white"
              >
                Close
              </button>

              <motion.div
                layoutId={`project-image-wrap-${project.id}`}
                className="relative h-[240px] overflow-hidden rounded-t-[28px] md:h-[320px]"
              >
                <motion.img
                  layoutId={`project-image-${project.id}`}
                  src={project.heroImage}
                  alt={project.title}
                  className="h-full w-full object-contain bg-[#0d0d0e]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.14 }}
                className="px-6 pb-10 pt-7 md:px-8 md:pb-12"
              >
                <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <motion.h2
                      layoutId={`project-title-${project.id}`}
                      className="max-w-[90%] text-2xl font-semibold tracking-tight md:text-4xl"
                    >
                      {project.title}
                    </motion.h2>

                    {project.subtitle && (
                      <p className="mt-3 text-sm text-[#6f694a] md:text-base">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-[#5f583f] md:text-base">
                      {project.details}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#2f2a18] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#1f1b0f] hover:-translate-y-[1px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
                        >
                          <span>Live Demo</span>
                          <span className="text-xs">↗</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[#d8cfab] bg-white/65 px-5 py-2 text-sm font-medium text-[#3f3a22] backdrop-blur transition hover:-translate-y-[1px] hover:bg-white hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                        >
                          <span>GitHub</span>
                          <span className="text-xs">↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[20px] border border-[#ddd4b2] bg-white/65 p-4 transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7f7860]">
                        Outcome
                      </p>
                      <p className="mt-2 text-xl font-semibold text-[#2f2a18]">
                        {project.outcomeValue}
                      </p>
                      <p className="mt-1 text-sm text-[#6f694a]">
                        {project.outcomeText}
                      </p>
                    </div>

                    <div className="rounded-[20px] border border-[#ddd4b2] bg-white/65 p-4 transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7f7860]">
                        Focus
                      </p>

                      <div className="mt-3 space-y-2">
                        {project.focus?.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 text-sm text-[#5f583f]"
                          >
                            <span className="mt-[7px] h-[4px] w-[4px] rounded-full bg-[#8c8462]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {!!project.tools?.length && (
                      <div className="rounded-[20px] border border-[#ddd4b2] bg-white/65 p-4 transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7f7860]">
                          Tools
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full bg-[#e6e6e0] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#6a664a] transition duration-200 hover:-translate-y-[1px] hover:bg-[#dcdcd4] hover:text-[#3f3a22] hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {!!project.gallery?.length && (
                  <div className="mt-10">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7f7860]">
                      Gallery
                    </p>

                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      {project.gallery.map((image, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setActiveImage(image)}
                          className="group overflow-hidden rounded-[20px] border border-[#ddd4b2] bg-white/65 text-left transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_12px_26px_rgba(0,0,0,0.08)]"
                        >
                          <img
                            src={image}
                            alt={`Project gallery ${index + 1}`}
                            className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-[6px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[24px] border border-white/15 bg-black/20 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.14 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-black/60"
              >
                Close
              </button>

              <div className="flex max-h-[90vh] items-center justify-center bg-black/20 p-4 md:p-6">
                <img
                  src={activeImage}
                  alt="Expanded gallery view"
                  className="max-h-[82vh] w-auto max-w-full rounded-[18px] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}