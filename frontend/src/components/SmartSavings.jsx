import React, { useState } from "react";
import { ArrowRight, Plus, Minus, Zap, TrendingDown, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { advantages, savingsTabs } from "../data/mock";

const SmartSavings = ({
  eyebrow = "SMART SAVINGS",
  titleTop = "Why Go Solar",
  titleBottom = "With Shubh Power?",
  image = "/images/live/Smart-savings-with-shubh-power-solutions-pvt-ltd-1.png",
  imageEyebrow = "SMART SAVINGS",
  imageTitle = "The smartest and best solution for renewable energy.",
  accordionItems = advantages,
  stats = savingsTabs,
  showBanner = true,
  ctaPrimary = { label: "Contact Us", to: "/contact", accent: "#F58220" },
  ctaSecondary = { label: "Read to Reduce Your Costs", to: "/solar" },
}) => {
  const [open, setOpen] = useState(0);
  const [tab, setTab] = useState(stats[0]?.key || "");
  const active = stats.find((s) => s.key === tab) || stats[0];

  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="h-mono mb-4 text-[#F58220]">{eyebrow}</div>
          <h2 className="h-display text-[#0F1F14] text-[38px] sm:text-[52px] lg:text-[66px] leading-[0.98] tracking-tight">
            <span className="block whitespace-nowrap">{titleTop}</span>
            <span className="block text-[34px] sm:text-[48px] lg:text-[60px]">{titleBottom}</span>
          </h2>
        </div>

        <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="rounded-[24px] overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-full min-h-[440px] relative">
              <img src={image} alt={imageTitle} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F14]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="h-mono text-white/80 mb-2">{imageEyebrow}</div>
                <div className="h-display text-[28px] md:text-[32px] leading-tight">
                  {imageTitle}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-[#0F1F14]/10 border-t border-b border-[#0F1F14]/10">
              {accordionItems.map((a, i) => (
                <li key={i}>
                  <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between py-6 text-left">
                    <span className="text-[18px] md:text-[22px] font-medium text-[#0F1F14]">{a.title}</span>
                    <span className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${open === i ? "bg-[#16A34A] text-white" : "bg-[#F5F3EC] text-[#0F1F14]"}`}>
                      {open === i ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${open === i ? "max-h-40 pb-6" : "max-h-0"}`}>
                    <p className="text-[#0F1F14]/65 text-[15px] max-w-lg">{a.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {showBanner ? (
        <div className="mt-10 lg:mt-14">
          <div className="rounded-[32px] bg-gradient-to-br from-[#0E7A38] via-[#16A34A] to-[#12923F] p-8 lg:p-14 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="h-mono text-white/80 mb-4">REDUCE YOUR COSTS</div>
                <h3 className="h-display text-white text-[36px] md:text-[52px] lg:text-[60px] leading-[0.98]">
                  <span className="block whitespace-nowrap">Save the Environment,</span>
                  <span className="block">Save your Money!</span>
                </h3>
                <p className="mt-5 text-white/80 max-w-md text-[15px]">
                  Switching to solar complements your existing utility connection and helps businesses reduce monthly energy expenses.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to={ctaPrimary.to} className="pill-btn inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-white text-[#0F1F14] text-[15px] font-medium">
                    <span className="w-10 h-10 rounded-full bg-[#F58220] flex items-center justify-center">
                      <ArrowRight className="pill-icon w-4 h-4 text-white" />
                    </span>
                    {ctaPrimary.label}
                  </Link>
                  <Link to={ctaSecondary.to} className="pill-btn inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full border border-white/40 bg-white/5 hover:bg-white/15 text-white text-[15px] font-medium">
                    {ctaSecondary.label}
                    <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                      <ArrowRight className="pill-icon w-4 h-4 text-white" />
                    </span>
                  </Link>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                  {[
                    { icon: TrendingDown, v: "40-50%", l: "utility cost cut" },
                    { icon: Leaf, v: "25+", l: "year lifespan" },
                    { icon: Zap, v: "146+", l: "happy customer" },
                  ].map((it, i) => (
                    <div key={i} className="flex flex-col">
                      <it.icon className="w-5 h-5 text-white/70 mb-2" strokeWidth={1.6} />
                      <div className="h-display text-white text-[22px]">{it.v}</div>
                      <div className="text-white/60 text-[11px] uppercase tracking-wide mt-0.5">{it.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-[24px] bg-white/10 backdrop-blur-md border border-white/20 p-6 lg:p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div className="h-mono text-white/70">LIVE SITE FACTS</div>
                    <div className="flex items-center gap-2 text-white/70">
                      <span className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
                      <span className="h-mono">VERIFIED</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="h-display text-[64px] md:text-[82px] leading-none">{active.value}</span>
                    <span className="text-white/80 text-[16px]">{active.unit}</span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                    {stats.map((s) => (
                      <button key={s.key} onClick={() => setTab(s.key)} className={`py-2 rounded-full text-[12px] transition-colors ${tab === s.key ? "bg-white text-[#16A34A] font-medium" : "bg-white/10 text-white hover:bg-white/20"}`}>
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ) : null}
      </div>
    </section>
  );
};

export default SmartSavings;
