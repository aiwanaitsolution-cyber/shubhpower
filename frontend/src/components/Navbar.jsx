import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navGroups = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Solutions",
    to: "/solar",
    children: [
      { label: "Solar", to: "/solar" },
      { label: "EV Charging", to: "/ev-charging" },
    ],
  },
  {
    label: "Projects",
    to: "/projects",
    children: [
      { label: "All Projects", to: "/projects" },
      { label: "Solar Projects", to: "/projects?category=solar" },
      { label: "EV Projects", to: "/projects?category=ev" },
    ],
  },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", to: "/contact" },
];

const isGroupActive = (group, pathname) => {
  if (group.to === "/" && pathname === "/") return true;
  if (group.to !== "/" && pathname.startsWith(group.to)) return true;
  if (group.label === "Solutions" && ["/solar", "/ev-charging"].some((p) => pathname.startsWith(p))) return true;
  return false;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDrop(null);
    if (location.hash) {
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ block: "start" }));
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.search, location.hash]);

  return (
    <header className="fixed left-0 right-0 z-50 top-0">
      <div className={`transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-md"}`}>
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 h-[88px] flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center shrink-0">
            <img src="/logo.png" alt="Shubh Power - For a Brighter Future" className="h-16 lg:h-[68px] w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navGroups.map((g) =>
              g.children ? (
                <div key={g.label} className="relative" onMouseEnter={() => setOpenDrop(g.label)} onMouseLeave={() => setOpenDrop(null)}>
                  <button
                    onClick={() => setOpenDrop(openDrop === g.label ? null : g.label)}
                    className={`px-4 py-2 rounded-full text-[14px] font-medium flex items-center gap-1.5 transition-colors ${
                      isGroupActive(g, location.pathname)
                        ? "bg-[#16A34A] text-white"
                        : "text-[#0F1F14]/85 hover:text-[#0F1F14] hover:bg-[#F5F3EC]"
                    }`}
                    aria-expanded={openDrop === g.label}
                  >
                    {g.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDrop === g.label ? "rotate-180" : ""}`} />
                  </button>

                  {openDrop === g.label && (
                    <div className="absolute left-0 top-full pt-3 min-w-[250px]">
                      <div className="rounded-[18px] bg-white shadow-xl border border-[#0F1F14]/10 p-4">
                        {g.children.map((c) => (
                          <Link key={c.label} to={c.to} className="block px-3 py-3 text-[15px] text-[#0F1F14] rounded-xl hover:bg-[#F5F3EC]">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={g.label}
                  to={g.to}
                  end={g.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${
                      isActive ? "bg-[#16A34A] text-white" : "text-[#0F1F14]/85 hover:text-[#0F1F14] hover:bg-[#F5F3EC]"
                    }`
                  }
                >
                  {g.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="pill-btn hidden md:inline-flex items-center gap-3 pl-5 pr-2 py-1.5 rounded-full bg-[#16A34A] text-white text-[14px] font-semibold hover:bg-[#128740]">
              Contact Us
              <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <ArrowRight className="pill-icon w-4 h-4 text-[#16A34A]" />
              </span>
            </Link>
            <button className="lg:hidden p-2 text-[#0F1F14]" onClick={() => setOpen((s) => !s)} aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white shadow-xl border-t border-[#0F1F14]/10 max-h-[calc(100vh-88px)] overflow-y-auto">
          <div className="px-6 py-4">
            {navGroups.map((g) =>
              g.children ? (
                <div key={g.label} className="border-b border-[#0F1F14]/8">
                  <button onClick={() => setOpenSub(openSub === g.label ? null : g.label)} className="w-full flex items-center justify-between px-3 py-3 text-[17px] font-semibold text-[#0F1F14]" aria-expanded={openSub === g.label}>
                    {g.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openSub === g.label ? "rotate-180" : ""}`} />
                  </button>
                  {openSub === g.label && (
                    <div className="pb-2">
                      {g.children.map((c) => (
                        <Link key={c.label} to={c.to} onClick={() => setOpen(false)} className="block pl-6 pr-3 py-2.5 text-[15px] text-[#0F1F14]/75 hover:text-[#16A34A]">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={g.label} to={g.to} onClick={() => setOpen(false)} className="block px-3 py-3 text-[17px] font-semibold text-[#0F1F14] border-b border-[#0F1F14]/8">
                  {g.label}
                </Link>
              )
            )}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 flex items-center justify-between px-4 py-3 rounded-full bg-[#16A34A] text-white font-semibold">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
