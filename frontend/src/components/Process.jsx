import React from "react";
import { processSteps } from "../data/mock";

const Process = () => (
  <section className="py-12 lg:py-16 bg-white">
    <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
      <div className="text-center max-w-3xl mx-auto">
        <div className="h-mono text-[#16A34A] mb-4">HOW WE WORK</div>
        <h2 className="h-display text-[40px] md:text-[56px] lg:text-[68px] text-[#0A0F1C]">
          Four steps. Zero surprises.
        </h2>
      </div>
      <div className="mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {processSteps.map((s, i) => (
          <div
            key={s.n}
            className="card-lift group rounded-[24px] bg-[#F7F7F9] p-8 min-h-[280px] flex flex-col justify-between border border-[#0A0F1C]/5"
          >
            <div className="flex items-center justify-between">
              <span className="h-mono text-[#16A34A]">{s.n}</span>
              <span className="w-10 h-10 rounded-full bg-white group-hover:bg-[#16A34A] group-hover:text-white transition-colors flex items-center justify-center border border-[#0A0F1C]/10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div>
              <h3 className="h-display text-[24px] md:text-[26px] text-[#0A0F1C]">{s.title}</h3>
              <p className="text-[#0A0F1C]/60 mt-2 text-[15px]">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
