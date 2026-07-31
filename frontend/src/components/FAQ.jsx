import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../data/mock";

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 lg:py-36 bg-white">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="h-mono text-[#16A34A] mb-4">FAQ</div>
          <h2 className="h-display text-[40px] md:text-[56px] lg:text-[64px] text-[#0A0F1C]">
            Answers to the questions we hear most.
          </h2>
          <p className="mt-6 text-[#0A0F1C]/60 max-w-md">
            Still curious? Drop us a line and we&apos;ll get a real engineer
            (not a call‑centre) on the phone with you.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ul className="divide-y divide-[#0A0F1C]/10 border-t border-b border-[#0A0F1C]/10">
            {faqs.map((f, i) => (
              <li key={i}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-4"
                >
                  <span className="text-[18px] md:text-[20px] font-medium text-[#0A0F1C]">
                    {f.q}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                      open === i ? "bg-[#16A34A] text-white" : "bg-[#F0F2F7] text-[#0A0F1C]"
                    }`}
                  >
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    open === i ? "max-h-52 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-[#0A0F1C]/60 text-[15px] max-w-xl">{f.a}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
