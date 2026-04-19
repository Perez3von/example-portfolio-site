"use client";

export default function BackgroundSection() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="md:col-span-7 space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7f7860]">
              Background
            </p>

            <div className="rounded-[28px] border border-[#d8cfab] bg-white/55 p-8 md:p-10 backdrop-blur-md">
              <p className="text-[15px] leading-8 text-[#5f583f] md:text-base">
                I’m a data analyst focused on transforming complex datasets into clear,
                actionable business insights. I work across SQL, Python, Power BI, and
                modern analytics workflows to support KPI reporting, trend analysis, and
                data-driven decision-making.
              </p>

              <p className="mt-6 text-[15px] leading-8 text-[#5f583f] md:text-base">
                I’m currently pursuing a Master’s in Information Systems at Northeastern
                University, where I’m building a strong foundation in data management,
                database design, business analytics, application engineering, web design,
                algorithms, and data science.
              </p>

              <p className="mt-6 text-[15px] leading-8 text-[#5f583f] md:text-base">
                My experience includes developing ETL pipelines, building predictive
                analytics models, and creating dashboards and reporting systems that
                improve efficiency and enable faster, more informed decisions.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:col-span-5 flex justify-center md:block">
            
            {/* 🔥 KEY: relative wrapper around IMAGE ONLY */}
            <div className="relative w-[78%] max-w-[320px] md:w-auto md:max-w-none">
              
              {/* IMAGE CONTAINER */}
              <div className="aspect-square rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] bg-[#e6e0c2] md:rotate-2 md:hover:rotate-0 md:transition-transform md:duration-700">
                <img
                  src="/example_profile_picture.png"
                  alt="Profile"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 🔥 ATTACHED MS CARD (now sticks to image corner) */}
              <div className="absolute -bottom-3 -left-3 
                              w-20 h-20 rounded-[16px] 
                              border border-[#d8cfab] bg-white/70 backdrop-blur-md 
                              flex items-center justify-center shadow-md
                              sm:-bottom-4 sm:-left-4 sm:w-24 sm:h-24 sm:rounded-[18px]
                              md:-bottom-6 md:-left-6 md:w-28 md:h-28 md:rounded-[20px]">
                <div className="text-center">
                  <span className="block text-lg sm:text-xl md:text-2xl font-semibold text-[#2f2a18]">
                    MS
                  </span>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-[#7f7860]">
                    Student
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}