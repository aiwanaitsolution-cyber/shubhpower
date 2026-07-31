import React, { useEffect, useRef, useState } from "react";

// Animates a number from 0 up to `value` when scrolled into view.
// Handles values like "15", "146", "22MW" (numeric prefix + text suffix).
const CountUp = ({ value, duration = 1700, className }) => {
  const str = String(value);
  const match = str.match(/^([\d.,]+)(.*)$/);
  const numStr = match ? match[1].replace(/,/g, "") : "0";
  const target = parseFloat(numStr) || 0;
  const suffix = match ? match[2] : str;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setDisplay(target); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(target * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setDisplay(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  const shown = decimals ? display.toFixed(decimals) : Math.round(display).toString();
  return (
    <span ref={ref} className={className}>
      {shown}{suffix}
    </span>
  );
};

export default CountUp;
