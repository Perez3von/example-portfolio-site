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

          {/* RIGHT IMAGE (placeholder like reference layout) */}
          <div className="md:col-span-5 relative">
            
            {/* image container */}
            <div className="aspect-square rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] rotate-2 hover:rotate-0 transition-transform duration-700 bg-[#e6e0c2]">
              {/* placeholder image */}
            <img
                    src="/example_profile_picture.png"  // put your image in /public
                    alt="Profile"
                    className="w-full h-full object-contain"
                    />
              {/* replace above div with <img src="/your-image.png" /> later */}
            </div>

            {/* floating stat card */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-[20px] border border-[#d8cfab] bg-white/70 backdrop-blur-md flex items-center justify-center shadow-md">
              <div className="text-center">
                <span className="block text-2xl font-semibold text-[#2f2a18]">
                  MS
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#7f7860]">
                  Student
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}