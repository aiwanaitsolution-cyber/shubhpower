import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { evCategories } from "../data/mock";

const visibleCards = (items, active) => [0, 1, 2].map((offset) => items[(active + offset) % items.length]);

const EVCharging = () => {
  const [active, setActive] = useState(0);
  const cards = useMemo(() => visibleCards(evCategories, active), [active]);

  useEffect(() => {
    const id = window.setInterval(() => setActive((v) => (v + 1) % evCategories.length), 3200);
    return () => window.clearInterval(id);
  }, []);

  const move = (dir) => {
    setActive((v) => (v + dir + evCategories.length) % evCategories.length);
  };

  return (
    <section id="ev" className="py-16 lg:py-24 bg-gradient-to-br from-[#E2F8F3] via-[#F7FFFC] to-[#EAF8F4] overflow-hidden">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="OUR SOLUTIONS" one="EV Charging" two="Solutions" />
          <p className="mt-5 text-[#0F1F14]/68 text-center max-w-2xl mx-auto text-[15px] md:text-[16px] leading-relaxed">
            Fleet and Logistics, Residential Communities, Commercial Buildings, Public Infrastructure, and Retail and Hospitality.
          </p>
        </div>

        <div className="relative mt-10 lg:mt-14">
          <button
            onClick={() => move(-1)}
            aria-label="Previous EV charging solution"
            className="absolute left-1 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white text-[#0F1F14] shadow-lg flex items-center justify-center hover:bg-[#25BFAE] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => move(1)}
            aria-label="Next EV charging solution"
            className="absolute right-1 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white text-[#0F1F14] shadow-lg flex items-center justify-center hover:bg-[#25BFAE] hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 px-10 sm:px-14 lg:px-16">
            {cards.map((c, index) => (
              <Link key={`${c.id}-${active}-${index}`} to={`/ev-charging#${c.id}`} className="group block">
                <div className={`overflow-hidden rounded-[22px] bg-white shadow-xl border border-[#0F1F14]/8 transition-transform duration-500 ${index === 2 ? "md:-translate-y-3" : ""}`}>
                  <div className="relative aspect-[1.18/1] bg-white">
                    <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover zoom-img" />
                  </div>
                  <div className={`px-5 py-5 text-center ${index === 2 ? "bg-[#25BFAE] text-white" : "bg-white text-[#111D36]"}`}>
                    <h3 className="h-display text-[21px] md:text-[24px] leading-tight">{c.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {evCategories.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                aria-label={`Show ${c.title}`}
                className={`h-2.5 rounded-full transition-all ${i === active ? "w-8 bg-[#25BFAE]" : "w-2.5 bg-[#0F1F14]/18"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EVCharging;
