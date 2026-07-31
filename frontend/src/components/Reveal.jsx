import React, { useEffect, useRef, useState } from "react";

// Scroll-into-view fade + rise. CSS transition + IntersectionObserver (no animation library).
const Reveal = ({ children, y = 20, delay = 0, duration = 0.6, className = "", amount = 0.15 }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: amount }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translateY(${y}px)`,
        transition: `opacity ${duration}s cubic-bezier(.22,1,.36,1) ${delay}s, transform ${duration}s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
