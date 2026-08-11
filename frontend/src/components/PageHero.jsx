import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PageHero = ({ eyebrow, title, subtitle, image, images, imageAlt = "Shubh Power Solutions", intervalMs = 3000, showBottomFade = true }) => {
  const slides = images?.length ? images : image ? [{ src: image, alt: imageAlt }] : [];
  const hasImage = slides.length > 0;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, slides.length]);

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[560px] lg:min-h-[680px] flex items-center overflow-hidden">
      {hasImage ? (
        <>
          {slides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt || imageAlt}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`absolute inset-0 w-full h-full object-cover ${slide.position || "object-center"} transition-opacity duration-1000 ease-out ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B14]/76 via-[#0F3328]/44 to-[#0F3328]/10" />
          {showBottomFade && (
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FBFAF7] via-[#FBFAF7]/30 to-transparent" />
          )}
        </>
      ) : (
        <div className="absolute inset-0 bg-[#EAF8F4]" />
      )}
      <div className="relative max-w-[1500px] mx-auto w-full px-5 sm:px-6 lg:px-10 py-14 lg:py-20">
        <div className={`max-w-4xl rise-in ${hasImage ? "text-white" : "text-[#0F1F14]"}`}>
          {eyebrow && (
            <div className={`h-mono mb-5 sm:mb-6 ${hasImage ? "text-[#7DE0C3]" : "text-[#16A34A]"}`}>
              {eyebrow}
            </div>
          )}
          <h1 className="h-display text-[40px] sm:text-[48px] md:text-[58px] lg:text-[74px] tracking-tight leading-[1.01] max-w-[11ch] sm:max-w-none">
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-5 sm:mt-6 text-[15px] sm:text-[17px] md:text-[19px] max-w-2xl leading-relaxed ${hasImage ? "text-white/88" : "text-[#0F1F14]/70"}`}>
              {subtitle}
            </p>
          )}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className={`pill-btn inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full text-[15px] font-medium ${
                hasImage ? "bg-white text-[#0F1F14]" : "bg-[#0F1F14] text-white"
              }`}
            >
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  hasImage ? "bg-[#0F1F14]" : "bg-[#16A34A]"
                }`}
              >
                <ArrowRight className="pill-icon w-4 h-4 text-white" />
              </span>
              Get in touch
            </Link>
            <Link
              to="/projects"
              className={`pill-btn inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-[15px] font-medium border ${
                hasImage
                  ? "bg-white/10 backdrop-blur border-white/40 text-white hover:bg-white/20"
                  : "border-[#0F1F14]/20 text-[#0F1F14] hover:bg-white"
              }`}
            >
              See projects
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  hasImage ? "bg-white" : "bg-[#0F1F14]"
                }`}
              >
                <ArrowRight className={`pill-icon w-4 h-4 ${hasImage ? "text-[#0F1F14]" : "text-white"}`} />
              </span>
            </Link>
          </div>
        </div>
        {slides.length > 1 && (
          <div className="absolute left-5 right-5 bottom-5 flex justify-center gap-2 sm:left-6 sm:right-6 lg:left-10 lg:right-10" aria-hidden="true">
            {slides.map((slide, index) => (
              <span
                key={`${slide.src}-dot`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeSlide ? "w-8 bg-white" : "w-1.5 bg-white/45"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
