import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/mock";

const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((n) => (n + 1) % testimonials.length);
  const prev = () => setI((n) => (n - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-36 bg-white">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="h-mono text-[#16A34A] mb-4">TESTIMONIALS</div>
            <h2 className="h-display text-[34px] md:text-[48px] lg:text-[56px] text-[#0F1F14]">
              What people say?
            </h2>
            <div className="mt-8 flex items-center gap-2">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-[#F0EEE8] hover:bg-[#16A34A] hover:text-white transition-colors flex items-center justify-center"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-[#F0EEE8] hover:bg-[#16A34A] hover:text-white transition-colors flex items-center justify-center"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="ml-3 h-mono text-[#0F1F14]/60">
                {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="tex-water rounded-[28px] p-8 lg:p-12 bg-[#E6F4E9] min-h-[320px] flex flex-col justify-between">
              <Quote className="w-10 h-10 text-[#16A34A]" />
              <blockquote className="h-display text-[23px] md:text-[30px] lg:text-[36px] text-[#0F1F14] leading-[1.16] mt-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-10 pt-6 border-t border-[#0F1F14]/15">
                <div className="font-semibold text-[#0F1F14] text-[17px]">{t.name}</div>
                <div className="h-mono text-[#0F1F14]/60 mt-1">{t.role}</div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
