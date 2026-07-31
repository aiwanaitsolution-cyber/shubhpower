import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100svh-88px)] min-h-[560px] sm:min-h-[620px] flex items-center justify-center overflow-hidden">
      <iframe
        title="Shubh Power homepage background video"
        src="https://www.youtube.com/embed/1oBWMO3TaJg?autoplay=1&mute=1&controls=0&loop=1&playlist=1oBWMO3TaJg&playsinline=1&rel=0&modestbranding=1&start=1"
        className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        allow="autoplay; encrypted-media; picture-in-picture"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/28" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/42 via-black/10 to-transparent" />

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 w-full h-full py-8 sm:py-10 text-white text-center flex flex-col">
        <div className="reveal mt-8 sm:mt-10 lg:mt-14">
          <h1 className="h-display text-white text-[34px] sm:text-[48px] md:text-[62px] lg:text-[74px] xl:text-[82px] leading-[0.96] drop-shadow-[0_8px_28px_rgba(0,0,0,0.35)]">
            Shubh Power Solutions
            <br />
            For a Brighter Future
          </h1>
        </div>

        <div className="reveal mt-auto mb-14 sm:mb-16 lg:mb-20 flex flex-col items-center gap-6 sm:gap-8">
          <p className="text-white text-[15px] sm:text-base lg:text-lg max-w-2xl leading-relaxed drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
            Welcome to Shubh Power Solutions Private Limited, established in 2010 with its office in Gurugram, Haryana, India.
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

      </div>
    </section>
  );
};

export default Hero;
