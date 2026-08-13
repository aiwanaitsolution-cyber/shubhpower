import React from "react";
import { Coins, Zap, Leaf, ShieldCheck } from "lucide-react";
import { smartBenefits } from "../data/mock";

const icons = [Coins, Zap, Leaf, ShieldCheck];

const SmartBenefits = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
      <div className="text-center max-w-3xl mx-auto">
        <div className="h-mono text-[#F58220] mb-4">SMART SAVINGS</div>
        <h2 className="h-display text-[40px] md:text-[56px] lg:text-[64px] text-[#0F1F14]">
          The smartest solution for renewable energy.
        </h2>
      </div>
      <div className="mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {smartBenefits.map((b, i) => {
          const Icon = icons[i];
          return (
            <div
              key={b.title}
              className="card-lift rounded-[24px] bg-[#F5F3EC] p-7 min-h-[220px] flex flex-col justify-between border border-[#0F1F14]/5"
            >
              <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#16A34A]" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="h-display text-[24px] text-[#0F1F14]">{b.title}</h3>
                <p className="mt-2 text-[#0F1F14]/60 text-[14px]">{b.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SmartBenefits;
