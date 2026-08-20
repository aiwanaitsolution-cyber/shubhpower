import Reveal from "../components/Reveal";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import SmartSavings from "../components/SmartSavings";
import Brands from "../components/Brands";
import CTABanner from "../components/CTABanner";
import FAQ from "../components/FAQ";
import { solarSolutions } from "../data/mock";

const solarAnchors = {
  epc: "core-expertise",
  plant: "why-solar",
  panels: "how-solar",
  pv: "reduce-costs",
};

const SolarPage = () => (
  <div className="solar-preview-type">
    <PageHero
      eyebrow="SOLAR POWER SOLUTIONS"
      title={<>Solar Power<br />Solutions</>}
      subtitle="In today's fast-paced world, more housing societies, commercial blocks, manufacturing plants and factories are looking for sustainable energy solutions."
      images={[
        { src: "/images/hero/solar1/ab.png", alt: "Solar power plant" },
        { src: "/images/hero/solar1/bc.png", alt: "Solar installation" },
        { src: "/images/hero/solar1/cd.png", alt: "Solar energy project" },
      ]}
      intervalMs={2000}
    />

    <section className="py-12 sm:py-14 lg:py-16 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8 sm:space-y-10 lg:space-y-12">
        {solarSolutions.filter((s) => s.id !== "pv").map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <div id={solarAnchors[s.id] || s.id} key={s.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 lg:gap-10 items-center rounded-[24px] sm:rounded-[28px] bg-white border border-[#0F1F14]/8 p-4 sm:p-5 lg:p-8 shadow-[0_18px_50px_rgba(15,31,20,0.07)]">
              <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
                <div className="tex-water rounded-[18px] sm:rounded-[22px] overflow-hidden aspect-[4/3] sm:aspect-square relative shadow-md max-h-[420px] lg:max-h-none" style={{ backgroundColor: s.bg }}>
                  <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="h-mono text-[#16A34A] mb-3 font-bold">{s.tag}</div>
                <h2 className="h-display text-[40px] md:text-[56px] lg:text-[68px] leading-[0.98] text-[#0A0F1C]">
                  {s.title}
                </h2>
                <p className="mt-5 text-[#0A0F1C]/70 text-[16px] max-w-2xl leading-relaxed">{s.description}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#16A34A] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-[#0A0F1C]/82 text-[15px] leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="pill-btn mt-7 inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full border border-[#0A0F1C]/20 text-[#0A0F1C] text-[15px] font-semibold hover:bg-[#F5F5F7]">
                  Enquire about {s.title}
                  <span className="w-10 h-10 rounded-full bg-[#0A0F1C] flex items-center justify-center">
                    <ArrowRight className="pill-icon w-4 h-4 text-white" />
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    <Reveal><SmartSavings /></Reveal>
    <Reveal><Brands /></Reveal>
    <Reveal><FAQ /></Reveal>
    <Reveal><CTABanner title="Save the Environment, Save your Money!" ctaLabel="Get a free site audit" /></Reveal>
  </div>
);

export default SolarPage;
