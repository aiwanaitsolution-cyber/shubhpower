import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { solarSolutions } from "../data/mock";

const visibleCards = (items, active) => [0, 1, 2].map((offset) => items[(active + offset) % items.length]);
const anchors = {
  epc: "core-expertise",
  plant: "why-solar",
  panels: "how-solar",
};

const SolarSolutions = () => {
  const homeSolarSolutions = useMemo(() => solarSolutions.filter((s) => s.id !== "pv"), []);
  const [active, setActive] = useState(0);
  const cards = useMemo(() => visibleCards(homeSolarSolutions, active), [active, homeSolarSolutions]);

  useEffect(() => {
    const id = window.setInterval(() => setActive((v) => (v + 1) % homeSolarSolutions.length), 3000);
    return () => window.clearInterval(id);
  }, [homeSolarSolutions.length]);

  const move = (dir) => {
    setActive((v) => (v + dir + homeSolarSolutions.length) % homeSolarSolutions.length);
  };

  return (
    <section id="solar" className="py-20 lg:py-28 bg-[#1F252D] overflow-hidden">
      <div className="max-w-[1680px] mx-auto px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="OUR SOLUTIONS" one="Solar Power" two="Solutions" />
          <p className="mt-5 text-white/68 text-center max-w-2xl mx-auto text-[15px] md:text-[16px] leading-relaxed">
            Solar EPC, Solar Power Plant, Solar Panels, BESS and Solar Generator from the live Shubh Power portfolio.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <button
            onClick={() => move(-1)}
            aria-label="Previous solar solution"
            className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white text-[#0F1F14] shadow-lg flex items-center justify-center hover:bg-[#16A34A] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => move(1)}
            aria-label="Next solar solution"
            className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white text-[#0F1F14] shadow-lg flex items-center justify-center hover:bg-[#16A34A] hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-9 px-0 lg:px-16">
            {cards.map((s, index) => (
              <Link key={`${s.id}-${active}-${index}`} to={`/solar#${anchors[s.id] || s.id}`} className="group block">
                <div className={`overflow-hidden bg-white shadow-xl transition-transform duration-500 ${index === 1 ? "md:-translate-y-3" : ""}`}>
                  <div className="relative aspect-[1.22/1] bg-white">
                    <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover zoom-img" />
                  </div>
                  <div className={`px-6 py-6 text-center ${index === 1 ? "bg-[#25BFAE] text-white" : "bg-white text-[#111D36]"}`}>
                    <h3 className="h-display text-[24px] md:text-[26px] leading-tight">{s.title.replace("EPC Solar Solutions", "Solar EPC")}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {homeSolarSolutions.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                aria-label={`Show ${s.title}`}
                className={`h-2.5 rounded-full transition-all ${i === active ? "w-8 bg-[#25BFAE]" : "w-2.5 bg-white/35"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSolutions;
