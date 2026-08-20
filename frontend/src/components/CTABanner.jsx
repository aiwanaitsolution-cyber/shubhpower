import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Zap } from "lucide-react";

const CTABanner = ({
  title = "Ready for a sustainable future?",
  subtitle = "Solar, storage and EV charging designed for Shubh Power clients since 2020.",
  ctaLabel = "Contact Us",
  ctaTo = "/contact",
  titleClassName = "",
  showTitleUnderline = false,
  compact = false,
}) => (
  <section className={`${compact ? "py-8 lg:py-10" : "py-12 lg:py-16"} bg-white`}>
    <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
      <div className="relative rounded-[32px] bg-[#0F1F14] overflow-hidden">
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#16A34A]/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#F58220]/20 blur-3xl" />

        <div className={`relative grid grid-cols-1 lg:grid-cols-12 items-center gap-6 ${compact ? "px-8 lg:px-12 py-8 lg:py-10" : "px-8 lg:px-14 py-12 lg:py-16"}`}>
          <div className="lg:col-span-9">
            <div className={`flex items-center gap-3 ${compact ? "mb-4" : "mb-6"}`}>
              <span className={`${compact ? "w-9 h-9" : "w-10 h-10"} rounded-full bg-[#16A34A] flex items-center justify-center`}>
                <Sun className={`${compact ? "w-3.5 h-3.5" : "w-4 h-4"} text-white`} strokeWidth={2} />
              </span>
              <span className={`${compact ? "w-9 h-9" : "w-10 h-10"} rounded-full bg-[#F58220] flex items-center justify-center`}>
                <Zap className={`${compact ? "w-3.5 h-3.5" : "w-4 h-4"} text-white`} strokeWidth={2} />
              </span>
            </div>
            <h2 className={`text-white ${compact ? "text-[30px] md:text-[40px] lg:text-[52px]" : "text-[36px] md:text-[50px] lg:text-[64px]"} leading-[0.98] max-w-[14ch] text-balance ${titleClassName}`}>
              {title}
            </h2>
            {showTitleUnderline ? <div className={`${compact ? "mt-3" : "mt-4"} h-[2px] w-24 rounded-full bg-white/30`} /> : null}
            <p className={`${compact ? "mt-4 max-w-xl text-[14px] md:text-[15px]" : "mt-6 max-w-lg text-[15px] md:text-[16px]"} text-white/70`}>{subtitle}</p>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <Link to={ctaTo} className={`pill-btn inline-flex items-center gap-3 ${compact ? "pl-2 pr-5 py-2" : "pl-2 pr-6 py-2"} rounded-full bg-white text-[#0F1F14] text-[15px] font-medium`}>
              <span className={`${compact ? "w-10 h-10" : "w-11 h-11"} rounded-full bg-[#16A34A] flex items-center justify-center`}>
                <ArrowRight className="pill-icon w-4 h-4 text-white" />
              </span>
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
