import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PageHero = ({ eyebrow, title, subtitle, image, imageAlt = "Shubh Power Solutions" }) => {
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[560px] lg:min-h-[680px] flex items-center overflow-hidden">
      {image ? (
        <>
          <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover scale-[1.02]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F18]/88 via-[#0F3328]/64 to-[#0F3328]/20" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FBFAF7] via-[#FBFAF7]/30 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#EAF8F4]" />
      )}
      <div className="relative max-w-[1500px] mx-auto w-full px-5 sm:px-6 lg:px-10 py-14 lg:py-20">
        <div className={`max-w-4xl rise-in ${image ? "text-white" : "text-[#0F1F14]"}`}>
          {eyebrow && (
            <div className={`h-mono mb-5 sm:mb-6 ${image ? "text-[#7DE0C3]" : "text-[#16A34A]"}`}>
              {eyebrow}
            </div>
          )}
          <h1 className="h-display text-[40px] sm:text-[48px] md:text-[58px] lg:text-[74px] tracking-tight leading-[1.01] max-w-[11ch] sm:max-w-none">
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-5 sm:mt-6 text-[15px] sm:text-[17px] md:text-[19px] max-w-2xl leading-relaxed ${image ? "text-white/84" : "text-[#0F1F14]/70"}`}>
              {subtitle}
            </p>
          )}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className={`pill-btn inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full text-[15px] font-medium ${
                image ? "bg-white text-[#0F1F14]" : "bg-[#0F1F14] text-white"
              }`}
            >
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  image ? "bg-[#0F1F14]" : "bg-[#16A34A]"
                }`}
              >
                <ArrowRight className="pill-icon w-4 h-4 text-white" />
              </span>
              Get in touch
            </Link>
            <Link
              to="/projects"
              className={`pill-btn inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-[15px] font-medium border ${
                image
                  ? "bg-white/10 backdrop-blur border-white/40 text-white hover:bg-white/20"
                  : "border-[#0F1F14]/20 text-[#0F1F14] hover:bg-white"
              }`}
            >
              See projects
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  image ? "bg-white" : "bg-[#0F1F14]"
                }`}
              >
                <ArrowRight className={`pill-icon w-4 h-4 ${image ? "text-[#0F1F14]" : "text-white"}`} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
