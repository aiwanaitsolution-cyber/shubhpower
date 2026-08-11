import Reveal from "../components/Reveal";
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import CTABanner from "../components/CTABanner";
import { solarProjects, evProjects, ongoingSolarProjects, ongoingEvProjects } from "../data/mock";

const ProjectsPage = () => {
  const [searchParams] = useSearchParams();
  const raw = (searchParams.get("category") || "all").toLowerCase();
  const category = ["solar", "ev", "all"].includes(raw) ? raw : "all";
  const [status, setStatus] = useState("completed");

  const pools = {
    solar: { completed: solarProjects, ongoing: ongoingSolarProjects },
    ev: { completed: evProjects, ongoing: ongoingEvProjects },
    all: {
      completed: [...solarProjects, ...evProjects],
      ongoing: [...ongoingSolarProjects, ...ongoingEvProjects],
    },
  };
  const source = pools[category][status];
  const accent = category === "ev" ? "#F58220" : "#16A34A";
  const catLabel = category === "solar" ? "Solar" : category === "ev" ? "EV CPO" : "All";

  return (
    <div className="site-preview-type projects-preview-type">
      <PageHero
        eyebrow="OUR PROJECTS"
        title={<>Completed Projects</>}
        subtitle="Solar Power Projects and EV CPO Projects verified from the live Shubh Power website."
        image="/images/live/solar-energy-power.jpg"
      />

      <section className="bg-[#F5F3EC] border-y border-[#0F1F14]/8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-1 p-1 rounded-full bg-white shadow-sm">
            {[
              { k: "completed", l: "Completed" },
              { k: "ongoing", l: "Ongoing" },
            ].map((t) => (
              <button
                key={t.k}
                onClick={() => setStatus(t.k)}
                className={`px-5 py-2 rounded-full text-[13px] transition-colors ${status === t.k ? "text-white" : "text-[#0F1F14]/60 hover:text-[#0F1F14]"}`}
                style={status === t.k ? { background: accent } : undefined}
              >
                {t.l}
              </button>
            ))}
          </div>
          <div className="text-[13px] text-[#0F1F14]/60">
            <span className="text-[#0F1F14] font-medium">{source.length}</span>{" "}
            {status} {catLabel === "All" ? "" : catLabel + " "}project{source.length === 1 ? "" : "s"}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {source.length === 0 ? (
            <div className="py-20 text-center text-[#0F1F14]/60">No verified ongoing projects are listed on the live website.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {source.map((p, i) => (
                <Link key={p.title + i} to="/contact" className="group card-lift block">
                  <div className="relative rounded-[16px] overflow-hidden aspect-[4/3] bg-[#F5F3EC]">
                    <img src={p.image} alt={`${p.title} ${p.capacity}`} className="absolute inset-0 w-full h-full object-cover zoom-img" />
                    <span className={`absolute top-3 left-3 h-mono text-[10px] px-2.5 py-1 rounded-full ${status === "ongoing" ? "bg-[#F58220] text-white" : "bg-white/95 text-[#0F1F14]"}`}>
                      {status === "ongoing" ? "IN PROGRESS" : p.tag}
                    </span>
                    <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center group-hover:bg-[#16A34A] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="h-display text-[20px] md:text-[22px] text-[#0F1F14] leading-tight">{p.title}</h3>
                      {p.year ? <span className="text-[11px] text-[#0F1F14]/40 shrink-0">{p.year}</span> : null}
                    </div>
                    <div className="text-[#0F1F14]/60 mt-0.5 text-[13px]">{p.location}</div>
                    <div className="text-[#16A34A] mt-1 text-[12px] font-medium">{p.capacity}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Reveal><CTABanner title="Yours next?" subtitle="View the completed Solar Power Projects and EV CPO Projects listed by Shubh Power Solutions." ctaLabel="Start your project" /></Reveal>
    </div>
  );
};

export default ProjectsPage;
