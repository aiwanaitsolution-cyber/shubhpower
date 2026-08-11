import React, { useEffect, useState } from "react";
import { ArrowUp, MousePointer2 } from "lucide-react";

const ScrollToTopFab = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={`scroll-top-fab fixed bottom-5 left-5 z-40 flex items-center gap-3 rounded-full border border-[#0F1F14]/10 bg-white/92 px-3 py-2 shadow-[0_14px_35px_rgba(15,31,20,0.18)] backdrop-blur-xl transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="hidden sm:inline-flex items-center gap-2 text-[13px] font-medium text-[#0F1F14]/70">
        <MousePointer2 className="w-4 h-4 text-[#16A34A]" />
        Back to top
      </span>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16A34A] text-white">
        <ArrowUp className="h-4 w-4" />
      </span>
    </button>
  );
};

export default ScrollToTopFab;
