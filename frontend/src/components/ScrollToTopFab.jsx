import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

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
      className={`scroll-top-fab fixed bottom-5 left-5 z-40 flex items-center justify-center h-14 w-14 rounded-full border border-[#0F1F14]/10 bg-white/92 shadow-[0_14px_35px_rgba(15,31,20,0.18)] backdrop-blur-xl transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5 text-[#16A34A]" />
    </button>
  );
};

export default ScrollToTopFab;
