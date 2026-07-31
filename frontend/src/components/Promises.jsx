import React from "react";
import { Check } from "lucide-react";
import { promises } from "../data/mock";

const Promises = () => (
  <section className="py-24 lg:py-32 bg-[#F5F3EC]">
    <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="h-mono text-[#16A34A] mb-4">OUR PROMISE</div>
          <h2 className="h-display text-[40px] md:text-[56px] lg:text-[64px] text-[#0F1F14]">
            Turnkey power solutions.
          </h2>
          <p className="mt-6 text-[#0F1F14]/65 max-w-md">
            From design and installation to maintenance — we own the outcome so
            you don&apos;t have to.
          </p>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
          {promises.map((p, i) => (
            <div
              key={p.title}
              className="card-lift rounded-[24px] bg-white p-7 border border-[#0F1F14]/8"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#E6F4E9] flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#16A34A]" strokeWidth={2.5} />
                </span>
                <div className="h-mono text-[#16A34A]">{`0${i + 1}`}</div>
              </div>
              <h3 className="h-display text-[22px] md:text-[26px] mt-5 text-[#0F1F14]">{p.title}</h3>
              <p className="mt-3 text-[#0F1F14]/65 text-[14px]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Promises;
