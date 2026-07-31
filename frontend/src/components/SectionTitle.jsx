import React from "react";

// Two-tone section title (Green + Blue) matching shubhpower.com style
const SectionTitle = ({ eyebrow, one, two, accentEyebrow = "#16A34A", className = "" }) => {
  const isLeft = className.includes("text-left") || className.includes("!text-left");
  return (
    <div className={isLeft ? className : `text-center ${className}`}>
      {eyebrow && (
        <div className="h-mono mb-4" style={{ color: accentEyebrow }}>
          {eyebrow}
        </div>
      )}
      <h2 className="h-display text-[40px] md:text-[56px] lg:text-[68px] leading-[0.98]">
        <span className="text-[#16A34A]">{one}</span>
        {two && (
          <>
            {" "}
            <span className="text-[#1E4FA3]">{two}</span>
          </>
        )}
      </h2>
    </div>
  );
};

export default SectionTitle;
