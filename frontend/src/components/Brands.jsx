import React from "react";
import SectionTitle from "./SectionTitle";
import { solarBrands, evBrands } from "../data/mock";

const BrandChip = ({ brand }) => (
  <div className="w-[188px] h-[104px] px-6 py-4 rounded-[18px] bg-white border border-[#0F1F14]/10 shadow-sm flex items-center justify-center shrink-0">
    <img
      src={brand.logo}
      alt={`${brand.name} logo`}
      loading="lazy"
      className="max-h-[70px] max-w-[158px] w-auto object-contain"
    />
  </div>
);

const BrandRow = ({ title, brands, reverse }) => {
  const loop = [...brands, ...brands];
  return (
    <div>
      <div className="h-mono font-semibold text-[#0F1F14]/70 mb-6 text-center tracking-[0.14em]">{title}</div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F5F3EC] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F5F3EC] to-transparent z-10" />
        <div className={`brand-marquee ${reverse ? "brand-marquee-reverse" : ""}`}>
          {loop.map((b, i) => (
            <BrandChip key={`${b.name}-${i}`} brand={b} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Brands = () => (
  <section className="py-20 lg:py-28 bg-[#F5F3EC]">
    <div className="max-w-[1680px] mx-auto px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="TRUSTED PARTNERS" one="Brands We" two="Work With" />
      </div>

      <div className="mt-12 lg:mt-14 space-y-12">
        <BrandRow title="IN SOLAR POWER SOLUTIONS" brands={solarBrands} />
        <BrandRow title="IN EV CPO SOLUTIONS" brands={evBrands} reverse />
      </div>
    </div>
  </section>
);

export default Brands;
