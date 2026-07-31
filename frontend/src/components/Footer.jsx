import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { company, navLinks } from "../data/mock";

const Footer = () => (
  <footer className="bg-[#0F3328] text-white border-t border-white/10 pt-16 pb-8">
    <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/12">
        <div className="lg:col-span-5">
          <div className="inline-flex rounded-2xl bg-white px-4 py-3 mb-5 shadow-lg">
            <img src="/logo.png" alt="Shubh Power" className="h-14 w-auto object-contain" />
          </div>
          <p className="text-white/66 text-[15px] max-w-sm leading-relaxed">
            Welcome to Shubh Power Solutions Private Limited established in 2010 with its office in Gurugram, Haryana, India.
          </p>
          <ul className="mt-7 space-y-3.5">
            <li>
              <a href={`mailto:${company.email}`} className="group flex items-center gap-3 text-white/80 hover:text-white">
                <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"><Mail className="w-4 h-4 text-[#7DE0C3]" /></span>
                <span className="text-[14px]">{company.email}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${company.phone}`} className="group flex items-center gap-3 text-white/80 hover:text-white">
                <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"><Phone className="w-4 h-4 text-[#7DE0C3]" /></span>
                <span className="text-[14px]">{company.phone}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/70">
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4 text-[#7DE0C3]" /></span>
              <span className="text-[14px] pt-1.5">{company.address}</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2 lg:col-start-7">
          <div className="h-mono text-[11px] tracking-wide text-[#7DE0C3] mb-4">QUICK LINKS</div>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-white/70 hover:text-white text-[14px]">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="h-mono text-[11px] tracking-wide text-[#7DE0C3] mb-4">SOLUTIONS</div>
          <ul className="space-y-2.5 text-[14px]">
            <li><Link to="/solar" className="text-white/70 hover:text-white">Solar Power Solutions</Link></li>
            <li><Link to="/solar" className="text-white/70 hover:text-white">Our Core Expertise</Link></li>
            <li><Link to="/solar" className="text-white/70 hover:text-white">Why Choose Solar Energy?</Link></li>
            <li><Link to="/ev-charging" className="text-white/70 hover:text-white">EV Charging Solutions</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="h-mono text-[11px] tracking-wide text-[#7DE0C3] mb-4">GET IN TOUCH</div>
          <p className="text-white/70 text-[14px] leading-relaxed mb-4">Need any consultations contact with us.</p>
          <Link to="/contact" className="inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-[#16A34A] text-white text-[14px] font-semibold hover:bg-[#128740] transition-colors">
            Contact Us
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center"><ArrowUpRight className="w-4 h-4 text-[#16A34A]" /></span>
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[13px] text-white/48">
        <div>Copyright (c) All Rights Reserved. GSTIN: {company.gstin}</div>
      </div>
    </div>
  </footer>
);

export default Footer;
