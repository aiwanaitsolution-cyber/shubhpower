import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Instagram, Youtube } from "lucide-react";
import { company, navLinks } from "../data/mock";

const Footer = () => (
  <footer className="bg-[#F5F3EC] text-[#0F1F14] border-t border-[#0F1F14]/10 pt-16 pb-8">
    <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#0F1F14]/12">
        <div className="lg:col-span-5">
          <img src="/images/live/footer_logo.png" alt="Shubh Power" className="h-20 lg:h-[84px] w-auto object-contain mb-5" />
          <p className="text-[#0F1F14]/68 text-[15px] max-w-sm leading-relaxed">
            Shubh Power Solutions Pvt Ltd is incorporated with a clear vision - engineer India's transition to clean energy.
          </p>
          <ul className="mt-7 space-y-3.5">
            <li>
              <a href={`mailto:${company.email}`} className="group flex items-center gap-3 text-[#0F1F14]/78 hover:text-[#16A34A]">
                <span className="w-9 h-9 rounded-full bg-white border border-[#0F1F14]/10 flex items-center justify-center"><Mail className="w-4 h-4 text-[#16A34A]" /></span>
                <span className="text-[14px]">{company.email}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${company.phone}`} className="group flex items-center gap-3 text-[#0F1F14]/78 hover:text-[#16A34A]">
                <span className="w-9 h-9 rounded-full bg-white border border-[#0F1F14]/10 flex items-center justify-center"><Phone className="w-4 h-4 text-[#16A34A]" /></span>
                <span className="text-[14px]">{company.phone}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-[#0F1F14]/70">
              <span className="w-9 h-9 rounded-full bg-white border border-[#0F1F14]/10 flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4 text-[#16A34A]" /></span>
              <span className="text-[14px] pt-1.5">{company.address}</span>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-2.5" aria-label="Social media">
            {[Linkedin, Instagram, Youtube].map((Icon, index) => (
              <span key={index} className="w-9 h-9 rounded-full bg-white border border-[#0F1F14]/10 text-[#0F1F14] flex items-center justify-center shadow-sm">
                <Icon className="w-4 h-4" />
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-7">
          <div className="h-mono text-[13px] tracking-wide text-[#16A34A] mb-4">QUICK LINKS</div>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-[#0F1F14]/70 hover:text-[#16A34A] text-[14px]">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="h-mono text-[13px] tracking-wide text-[#16A34A] mb-4">SOLUTIONS</div>
          <ul className="space-y-2.5 text-[14px]">
            <li><Link to="/solar" className="text-[#0F1F14]/70 hover:text-[#16A34A]">Solar Power Solutions</Link></li>
            <li><Link to="/solar" className="text-[#0F1F14]/70 hover:text-[#16A34A]">Our Core Expertise</Link></li>
            <li><Link to="/solar" className="text-[#0F1F14]/70 hover:text-[#16A34A]">Why Choose Solar Energy?</Link></li>
            <li><Link to="/ev-charging" className="text-[#0F1F14]/70 hover:text-[#16A34A]">EV Charging Solutions</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="h-mono text-[13px] tracking-wide text-[#16A34A] mb-4">GET IN TOUCH</div>
          <p className="text-[#0F1F14]/70 text-[14px] leading-relaxed mb-4">Need any consultations contact with us.</p>
          <Link to="/contact" className="inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-[#16A34A] text-white text-[14px] font-semibold hover:bg-[#128740] transition-colors">
            Contact Us
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center"><ArrowUpRight className="w-4 h-4 text-[#16A34A]" /></span>
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[13px] text-[#0F1F14]/48">
        <div>Copyright (c) All Rights Reserved. GSTIN: {company.gstin}</div>
      </div>
    </div>
  </footer>
);

export default Footer;
