import React from "react";
import CountUp from "./CountUp";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { stats, brand } from "../data/mock";

const capabilities = [
  "Solar Engineering, Procurement and Construction - EPC",
  "Solar Power Plant, Solar Panels, BESS and generators",
  "BESS and Solar Generators",
  "Subsidies and net metering assistance",
];

const StatValue = ({ value }) => {
  const str = String(value);
  const [main, unit] = str.includes(" ") ? str.split(/\s+/, 2) : [str, ""];

  return (
    <div className="leading-none">
      <span className="block text-[38px] sm:text-[52px] lg:text-[64px] font-semibold tracking-[-0.03em] text-[#16A34A]">
        <CountUp value={main} />
      </span>
      {unit ? <span className="block mt-1 text-[18px] sm:text-[22px] font-semibold tracking-[-0.02em] text-[#16A34A]">{unit}</span> : null}
    </div>
  );
};

const About = () => (
  <section id="about" className="py-24 lg:py-32 bg-white">
    <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-8 h-[3px] rounded-full bg-[#16A34A]" />
            <span className="h-mono text-[11px] tracking-[0.18em] text-[#16A34A]">ABOUT US</span>
          </div>
          <h2 className="h-display text-[34px] md:text-[46px] lg:text-[52px] leading-[1.02] tracking-tight text-[#0F1F14]">
            Welcome to Shubh Power Solutions
          </h2>
          <p className="mt-6 text-[#0F1F14]/70 text-[17px] leading-relaxed max-w-xl">
            {brand.intro}
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {capabilities.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#E6F4E9] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                </span>
                <span className="text-[#0F1F14]/80 text-[15px] leading-snug">{c}</span>
              </li>
            ))}
          </ul>

          <Link to="/about" className="mt-10 inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full border border-[#0F1F14]/20 text-[#0F1F14] text-[15px] font-medium hover:bg-[#F5F3EC] transition-colors">
            Read More
            <span className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </Link>

        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-[#F5F3EC]">
              <img src="/images/hero/solarpr/1.png" alt="Shubh Power solar installation" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-[#F5F3EC]">
              <img src="/images/hero/solarpr/2.png" alt="Shubh Power EV charging station" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 rounded-[20px] bg-[#0F3328] text-white px-6 py-5 shadow-2xl border border-white/20">
            <div className="h-mono text-[11px] tracking-[0.16em] text-[#7DE0C3]">LIVE SOLUTIONS</div>
            <div className="h-display mt-2 text-[22px] leading-tight">Solar - BESS - EV Charging</div>
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-28 rounded-[28px] bg-[#F1EADB] px-8 sm:px-10 lg:px-16 py-12 lg:py-16 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-start">
            <StatValue value={s.value} />
            <div className="text-[#0F1F14]/55 mt-3 text-[12px] sm:text-[13px] lg:text-[14px] uppercase tracking-[0.08em]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
