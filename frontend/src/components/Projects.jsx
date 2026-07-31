import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { solarProjects, evProjects } from "../data/mock";

const getVisible = (items, active) => [0, 1, 2].map((offset) => items[(active + offset) % items.length]);

const Projects = () => {
  const [tab, setTab] = useState("solar");
  const [active, setActive] = useState(0);
  const items = tab === "solar" ? solarProjects : evProjects;
  const visible = useMemo(() => getVisible(items, active), [items, active]);
  const accent = tab === "solar" ? "#16A34A" : "#25BFAE";
  const move = (dir) => setActive((v) => (v + dir + items.length) % items.length);
  const switchTab = (next) => {
    setTab(next);
    setActive(0);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <SectionTitle eyebrow="OUR WORK" one="Completed" two="Projects" />
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 p-1 rounded-full bg-[#F5F3EC]">
              {[
                { k: "solar", l: "Solar" },
                { k: "ev", l: "EV Charging" },
              ].map((t) => (
                <button
                  key={t.k}
                  onClick={() => switchTab(t.k)}
                  className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-colors ${
                    tab === t.k ? "bg-white text-[#0F1F14] shadow-sm" : "text-[#0F1F14]/60 hover:text-[#0F1F14]"
                  }`}
                >
                  {t.l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous completed project"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-[#0F1F14]/10 text-[#0F1F14] flex items-center justify-center hover:text-white transition-colors"
            style={{ "--tw-bg-opacity": 1 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "white"; }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next completed project"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-[#0F1F14]/10 text-[#0F1F14] flex items-center justify-center hover:text-white transition-colors"
            onMouseEnter={(e) => { e.currentTarget.style.background = accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "white"; }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 px-0 md:px-8">
          {visible.map((p, i) => (
            <Link
              to="/projects"
              key={`${tab}-${p.title}-${active}-${i}`}
              className="group card-lift block"
            >
              <div className="relative aspect-[4/3] rounded-[18px] overflow-hidden bg-[#F5F3EC] shadow-lg">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover zoom-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F14]/78 via-[#0F1F14]/12 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <span className="h-mono bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[#0F1F14] font-bold">
                    {p.tag}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white/95 backdrop-blur flex items-center justify-center group-hover:text-white transition-colors" style={{ "--hover-bg": accent }}>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="h-mono text-white/85 text-[11px] font-bold tracking-[0.14em]">{p.location}</div>
                  <h3 className="h-display text-[22px] lg:text-[25px] mt-1 leading-tight">{p.title}</h3>
                  <div className="mt-1 text-white/78 text-[13px] font-semibold">{p.capacity}</div>
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>

        <div className="mt-7 flex justify-center gap-2">
          {items.map((p, i) => (
            <button
              key={`${tab}-dot-${p.title}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${p.title}`}
              className={`h-2.5 rounded-full transition-all ${i === active ? "w-8" : "w-2.5 bg-[#0F1F14]/18"}`}
              style={i === active ? { background: accent } : undefined}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="pill-btn inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full border border-[#0F1F14]/20 text-[#0F1F14] text-[15px] hover:bg-[#F5F3EC]"
          >
            View full portfolio
            <span className="w-10 h-10 rounded-full bg-[#0F1F14] flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
