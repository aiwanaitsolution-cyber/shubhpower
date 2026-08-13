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
  const projectHeroImages = [
    { src: "/images/hero/projects-page-1.png", alt: "Shubh Power completed projects" },
    { src: "/images/hero/projects-page-2.png", alt: "Shubh Power solar projects" },
    { src: "/images/hero/projects-page-3.png", alt: "Shubh Power EV charging projects" },
  ];
  const heroImages =
    category === "solar"
      ? projectHeroImages.slice(0, 2)
      : category === "ev"
        ? projectHeroImages.slice(2)
        : projectHeroImages;

  return (
    <div className="site-preview-type projects-preview-type">
      <PageHero
        eyebrow="OUR PROJECTS"
        title={<>Completed Projects</>}
        subtitle="Solar Power Projects and EV CPO Projects verified from the live Shubh Power website."
        images={heroImages}
        intervalMs={2000}
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
                <Link key={p.title + i} to="/contact" className="group card-lift block project-glow-card">
                  <div className="relative rounded-[20px] overflow-hidden aspect-[16/13] bg-[#F5F3EC]">
                    <img src={p.image} alt={`${p.title} ${p.capacity}`} className="absolute inset-0 w-full h-full object-cover zoom-img" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04120C]/88 via-[#0F1F14]/24 to-transparent" />
                    <span className={`absolute top-3 left-3 h-mono text-[11px] px-2.5 py-1 rounded-full ${status === "ongoing" ? "bg-[#F58220] text-white" : "bg-white/95 text-[#0F1F14]"}`}>
                      {status === "ongoing" ? "IN PROGRESS" : p.tag}
                    </span>
                    <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center group-hover:bg-[#16A34A] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                    <div className="absolute left-3 right-3 bottom-3 project-glass-panel-dark rounded-[18px] p-4 text-white">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="h-display text-[19px] md:text-[22px] text-white leading-tight">{p.title}</h3>
                        {p.year ? <span className="text-[12px] text-white/75 shrink-0">{p.year}</span> : null}
                      </div>
                      <div className="text-white/72 mt-1 text-[12px]">{p.location}</div>
                      <div className="text-[#7DE0C3] mt-1 text-[12px] font-medium">{p.capacity}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-8 lg:py-10 bg-white">
        <div className="max-w-[920px] mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex flex-col items-center">
            <span className="h-display text-[18px] sm:text-[22px] lg:text-[26px] text-[#16A34A] leading-none tracking-[-0.02em]">
              Your Next
            </span>
            <span className="mt-3 h-[2px] w-20 rounded-full bg-[#16A34A]/35" />
          </div>
        </div>
      </section>

      <Reveal><CTABanner title="Your next project starts here" subtitle="View the completed Solar Power Projects and EV CPO Projects listed by Shubh Power Solutions." ctaLabel="Start your project" /></Reveal>
    </div>
  );
};

export default ProjectsPage;
