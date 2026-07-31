import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Zap } from "lucide-react";

const CTABanner = ({
  title = "Ready for an electric future?",
  subtitle = "Solar, storage and EV charging designed for Shubh Power clients since 2010.",
  ctaLabel = "Contact Us",
  ctaTo = "/contact",
}) => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
      <div className="relative rounded-[32px] bg-[#0F1F14] overflow-hidden">
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#16A34A]/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#F58220]/20 blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-8 px-8 lg:px-14 py-14 lg:py-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center">
                <Sun className="w-4 h-4 text-white" strokeWidth={2} />
              </span>
              <span className="w-10 h-10 rounded-full bg-[#F58220] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2} />
              </span>
            </div>
            <h2 className="h-display text-white text-[40px] md:text-[60px] lg:text-[76px] leading-[0.98]">{title}</h2>
            <p className="mt-6 text-white/70 max-w-lg text-[16px]">{subtitle}</p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Link to={ctaTo} className="pill-btn inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-white text-[#0F1F14] text-[15px] font-medium">
              <span className="w-11 h-11 rounded-full bg-[#16A34A] flex items-center justify-center">
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
