import Reveal from "../components/Reveal";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import Process from "../components/Process";
import SmartSavings from "../components/SmartSavings";
import Brands from "../components/Brands";
import CTABanner from "../components/CTABanner";
import FAQ from "../components/FAQ";
import { evCategories } from "../data/mock";

const evSavingsAccordion = [
  {
    title: "Why choose EV charging?",
    body: "EV charging infrastructure helps homes, businesses, and fleets charge reliably while preparing for a cleaner transport future.",
  },
  {
    title: "How does EV charging stay efficient?",
    body: "Smart load management balances power across connected chargers so operations stay efficient and downtime stays low.",
  },
  {
    title: "Where can EV chargers be installed?",
    body: "EV chargers can be installed at homes, offices, commercial buildings, fleets, hotels, retail spaces, and public locations.",
  },
  {
    title: "How can I contact Shubh Power?",
    body: "Use phone number 7836992555 or email info@shubhpower.com to discuss EV charging solutions and site requirements.",
  },
];

const evSavingsTabs = [
  { key: "chargers", label: "Chargers", value: "100+", unit: "EV chargers installed" },
  { key: "categories", label: "Categories", value: "4+", unit: "site categories covered" },
  { key: "monitoring", label: "Monitoring", value: "24/7", unit: "remote visibility" },
  { key: "coverage", label: "Coverage", value: "100%", unit: "smart charging focus" },
];

const EVPage = () => (
  <div className="ev-preview-type">
    <PageHero
      eyebrow="EV CHARGING SOLUTIONS"
      title={<>EV Charging<br />Solutions</>}
      subtitle="Shubh Power Solutions delivers smart EV charging infrastructure for Fleet and Logistics, Residential Communities, Commercial Buildings, Public Infrastructure, and Retail and Hospitality."
      images={[
        {
          src: "/images/hero/evp/public_infra.png",
          alt: "Shubh Power EV charging infrastructure for real sites",
          position: "object-[58%_50%]",
        },
        {
          src: "/images/hero/evp/residential_communities.jpeg",
          alt: "EV charging banner for Shubh Power CPO solutions",
          position: "object-[54%_50%]",
        },
        {
          src: "/images/hero/evp/commercial_building.jpeg",
          alt: "Shubh Power EV charging solutions for commercial buildings",
          position: "object-[56%_50%]",
        },
      ]}
    />

    <section className="py-10 lg:py-14 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 space-y-10 lg:space-y-12">
        {evCategories.map((c, i) => {
          const flip = i % 2 === 1;
          return (
            <div id={c.id} key={c.id} className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center rounded-[28px] bg-white/78 border border-[#0F1F14]/8 p-5 lg:p-8 shadow-sm">
              <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
                <div className="tex-water rounded-[22px] overflow-hidden aspect-square relative shadow-md" style={{ backgroundColor: c.bg }}>
                  <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="h-mono text-[13px] text-[#16A34A] mb-3 font-bold">{c.tag}</div>
                <h2 className="h-display text-[40px] md:text-[56px] lg:text-[68px] leading-[0.98] text-[#0A0F1C]">
                  {c.title}
                </h2>
                <p className="text-[#0A0F1C]/60 mt-2 text-[15px] md:text-[16px] font-medium">{c.subtitle}</p>
                <p className="mt-5 text-[#0A0F1C]/70 text-[16px] max-w-2xl leading-relaxed">{c.description}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#16A34A] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-[#0A0F1C]/82 text-[15px] leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="pill-btn mt-7 inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full border border-[#0A0F1C]/20 text-[#0A0F1C] text-[15px] font-semibold hover:bg-[#F5F5F7]">
                  Enquire about {c.title}
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

    <Reveal><Process /></Reveal>
    <Reveal>
      <SmartSavings
        eyebrow="EV CHARGING"
        titleTop="Why Go Electric"
        titleBottom="With Shubh Power?"
        image="/images/hero/evp/public_infra.png"
        imageEyebrow="EV CHARGING"
        imageTitle="Smart charging for fleets, businesses, and communities."
        accordionItems={evSavingsAccordion}
        stats={evSavingsTabs}
        ctaPrimary={{ label: "Contact Us", to: "/contact" }}
        ctaSecondary={{ label: "Explore EV Solutions", to: "/ev-charging" }}
      />
    </Reveal>
    <Reveal><Brands /></Reveal>
    <Reveal><FAQ /></Reveal>
    <Reveal>
      <CTABanner
        title="View EV Completed Projects"
        titleClassName="font-semibold tracking-[-0.02em]"
        showTitleUnderline
        compact
        subtitle="Book a site visit for live EV charging installations and completed CPO projects from Shubh Power."
        ctaLabel="Book a site visit"
      />
    </Reveal>
  </div>
);

export default EVPage;
