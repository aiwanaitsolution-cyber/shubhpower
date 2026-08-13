import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const heroSlides = [
  {
    src: "/images/hero/home-hero-x.png",
    alt: "Solar panels across a clean energy landscape at sunrise",
    position: "object-[62%_50%]",
  },
  {
    src: "/images/hero/home-hero-y.png",
    alt: "Large solar power plant with blue panels under clear sky",
    position: "object-[58%_50%]",
  },
  {
    src: "/images/hero/home-hero-z.png",
    alt: "Solar energy field showing clean power infrastructure",
    position: "object-[55%_50%]",
  },
  {
    src: "/images/hero/home-hero-w.png",
    alt: "Modern solar panels arranged across open land",
    position: "object-[60%_50%]",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[calc(100svh-88px)] min-h-[560px] sm:min-h-[620px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#06160f]">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover ${slide.position} transition-opacity duration-1000 ease-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/34" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/58 via-black/18 to-transparent" />

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 w-full h-full py-8 sm:py-10 text-white text-center flex flex-col">
        <div className="reveal mt-8 sm:mt-10 lg:mt-14">
          <h1 className="h-display text-white text-[34px] sm:text-[48px] md:text-[62px] lg:text-[74px] xl:text-[82px] drop-shadow-[0_8px_28px_rgba(0,0,0,0.35)]">
            Shubh Power Solutions
            <br />
            For a Brighter Future
          </h1>
        </div>

        <div className="reveal mt-auto mb-14 sm:mb-16 lg:mb-20 flex flex-col items-center gap-6 sm:gap-8">
          <p className="text-white text-[15px] sm:text-base lg:text-lg max-w-2xl leading-relaxed drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
            Shubh Power Solutions Pvt Ltd is incorporated with a clear vision - engineer India's transition to clean energy. Shubh Power Solutions started with Solar Energy Solutions and gradually progressed to include Turnkey Solutions in EV Charging Infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-3 justify-center">
            <Link
              to="/solar"
              className="pill-btn inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-white text-[#0F1F14] text-[15px] font-medium"
            >
              <span className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center">
                <ArrowRight className="pill-icon w-4 h-4 text-white" />
              </span>
              Solar Power Solutions
            </Link>
            <Link
              to="/ev-charging"
              className="pill-btn inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#0F3328]/40 backdrop-blur border border-white/45 text-white text-[15px] font-medium hover:bg-[#0F3328]/55"
            >
              EV Charging Solutions
              <span className="w-10 h-10 rounded-full bg-[#F58220] flex items-center justify-center">
                <ArrowRight className="pill-icon w-4 h-4 text-white" />
              </span>
            </Link>
          </div>

          <div className="md:hidden h-mono text-white/70 text-[11px] tracking-wide pt-1">
            SINCE 2010 - GURUGRAM - SOLAR - BESS - EV
          </div>
        </div>

        <div className="hidden md:flex absolute left-6 lg:left-10 bottom-6 items-center gap-2 text-white/80">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="h-mono">SINCE 2010 - GURUGRAM, INDIA</span>
        </div>
        <div className="hidden md:block absolute right-6 lg:right-10 bottom-6 text-white/80 h-mono">
          SOLAR - BESS - EV CHARGING
        </div>

        <div className="absolute left-1/2 bottom-3 flex -translate-x-1/2 items-center gap-2" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <span
              key={`${slide.src}-dot`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeSlide ? "w-8 bg-white" : "w-1.5 bg-white/45"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
