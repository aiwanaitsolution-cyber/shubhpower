import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("sps_cookie_consent")) setShow(true);
    } catch (_) {
      setShow(true);
    }
  }, []);

  const decide = (value) => {
    try { localStorage.setItem("sps_cookie_consent", value); } catch (_) {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md">
      <div className="rounded-2xl bg-white shadow-2xl border border-[#0F1F14]/10 p-5">
        <p className="text-[14px] text-[#0F1F14]/75 leading-relaxed">
          We use cookies to run this site and understand traffic. You can accept all
          cookies or continue with only the ones needed to make the site work. See our{" "}
          <Link to="/privacy" className="text-[#16A34A] underline">Privacy Policy</Link>.
        </p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => decide("all")}
            className="flex-1 rounded-full bg-[#16A34A] text-white text-[14px] font-medium py-2.5 hover:bg-[#128740] transition-colors"
          >
            Accept all
          </button>
          <button
            onClick={() => decide("essential")}
            className="flex-1 rounded-full border border-[#0F1F14]/15 text-[#0F1F14] text-[14px] font-medium py-2.5 hover:bg-[#F5F3EC] transition-colors"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
