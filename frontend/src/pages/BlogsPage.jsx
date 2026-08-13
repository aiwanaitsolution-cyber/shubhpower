import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock, Search } from "lucide-react";
import Reveal from "../components/Reveal";
import CTABanner from "../components/CTABanner";
import { blogs } from "../data/blogs";

const readingTime = (body) => Math.max(1, Math.round(body.split(/\s+/).length / 200));

const BlogsPage = () => {
  const sorted = useMemo(() => [...blogs].sort((a, b) => b.sort - a.sort), []);
  const categories = useMemo(() => ["All", ...Array.from(new Set(sorted.map((b) => b.category)))], [sorted]);
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = sorted.filter((b) => {
    const okCat = active === "All" || b.category === active;
    const q = query.trim().toLowerCase();
    const okQ = !q || b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q);
    return okCat && okQ;
  });
  const showLead = active === "All" && !query.trim() && filtered.length > 3;
  const lead = showLead ? filtered[0] : null;
  const rest = showLead ? filtered.slice(1) : filtered;
  const countFor = (c) => (c === "All" ? sorted.length : sorted.filter((b) => b.category === c).length);

  return (
    <div className="site-preview-type blogs-preview-type">
      {/* Masthead */}
      <section className="relative overflow-hidden pt-16 lg:pt-24 pb-10 lg:pb-12 bg-[linear-gradient(135deg,#EAF8F4_0%,#FBFAF7_55%,#F1EADB_120%)]">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#16A34A]/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#F58220]/10 blur-3xl" />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="rise-in rounded-[30px] bg-white/80 backdrop-blur-xl border border-[#0F1F14]/8 p-6 md:p-10 shadow-[0_18px_50px_rgba(15,31,20,0.08)]">
            <div className="h-mono text-[12px] tracking-[0.2em] text-[#16A34A] mb-4">THE SHUBH POWER JOURNAL</div>
            <h1 className="h-display text-[46px] md:text-[68px] lg:text-[80px] leading-[0.95] tracking-tight text-[#0F1F14]">Notes from the field.</h1>
            <p className="mt-6 text-[17px] md:text-[19px] text-[#0F1F14]/60 leading-relaxed max-w-[56ch]">
              Practical insight on solar economics, rooftop systems, subsidies and India's clean-energy shift, written by the people who build it.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-[88px] z-30 bg-[#FBFAF7]/90 backdrop-blur-md border-y border-[#0F1F14]/8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-1 p-1 rounded-full bg-white border border-[#0F1F14]/10 shadow-sm overflow-x-auto max-w-full">
            {categories.map((c) => (
              <button key={c} onClick={() => setActive(c)}
                className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${active === c ? "bg-[#16A34A] text-white" : "text-[#0F1F14]/60 hover:text-[#0F1F14] hover:bg-[#0F1F14]/5"}`}>
                {c}<span className={`ml-1.5 ${active === c ? "text-white/65" : "text-[#0F1F14]/35"}`}>{countFor(c)}</span>
              </button>
            ))}
          </div>
          <div className="relative md:w-60">
            <Search className="w-4 h-4 text-[#0F1F14]/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles"
              className="w-full bg-white border border-[#0F1F14]/10 rounded-full pl-10 pr-4 py-2.5 text-[14px] outline-none focus:border-[#16A34A]" />
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <div className="py-24 text-center text-[#0F1F14]/50">No articles match your search.</div>
          ) : (
            <>
              {/* Lead article — horizontal */}
              {lead && (
                <div className="mb-14 lg:mb-20 rise-in">
                  <Link to={`/blogs/${lead.slug}`} className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="relative overflow-hidden rounded-[22px] aspect-[16/11]">
                      <img src={lead.image} alt={lead.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]" />
                      <span className="absolute top-4 left-4 h-mono text-[13px] tracking-wide bg-white/95 backdrop-blur text-[#0F1F14] px-3.5 py-1.5 rounded-full">{lead.category.toUpperCase()}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="w-8 h-[3px] rounded-full bg-[#16A34A]" />
                        <span className="h-mono text-[13px] tracking-[0.15em] text-[#16A34A]">LATEST</span>
                      </div>
                      <h2 className="h-display text-[30px] md:text-[44px] leading-[1.03] tracking-tight text-[#0F1F14] group-hover:text-[#16A34A] transition-colors">{lead.title}</h2>
                      <p className="mt-4 text-[16px] md:text-[17px] text-[#0F1F14]/60 leading-relaxed max-w-[56ch] line-clamp-3">{lead.excerpt}</p>
                      <div className="mt-6 flex items-center gap-4 text-[13px] text-[#0F1F14]/50">
                        <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#16A34A]" />{lead.date}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#16A34A]" />{readingTime(lead.body)} min read</span>
                      </div>
                      <span className="mt-7 inline-flex items-center gap-2 h-mono text-[14px] tracking-wide text-[#0F1F14] font-medium">
                        READ THE ARTICLE
                        <span className="w-9 h-9 rounded-full bg-[#16A34A] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </span>
                      </span>
                    </div>
                  </Link>
                </div>
              )}

              {/* Uniform grid */}
              <div key={active + query} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
                {rest.map((p, i) => (
                  <Reveal key={p.slug} delay={Math.min((i % 3) * 0.08, 0.24)}>
                    <Link to={`/blogs/${p.slug}`} className="group block">
                      <div className="relative aspect-[16/11] rounded-[16px] overflow-hidden bg-[#F5F3EC]">
                        <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
                        <span className="absolute top-3 left-3 h-mono text-[12px] bg-white/95 backdrop-blur px-2.5 py-1 rounded-full text-[#0F1F14]">{p.category.toUpperCase()}</span>
                      </div>
                      <div className="mt-5">
                        <div className="flex items-center gap-2 text-[13px] text-[#0F1F14]/45 mb-2">
                          <span>{p.date}</span><span className="w-1 h-1 rounded-full bg-[#0F1F14]/25" /><span>{readingTime(p.body)} min read</span>
                        </div>
                        <h3 className="h-display text-[22px] md:text-[23px] text-[#0F1F14] leading-[1.12] tracking-tight group-hover:text-[#16A34A] transition-colors">{p.title}</h3>
                        <p className="mt-2.5 text-[15px] text-[#0F1F14]/60 leading-relaxed line-clamp-2">{p.excerpt}</p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CTABanner title="Get insights straight to your inbox." ctaLabel="Talk to us" />
    </div>
  );
};

export default BlogsPage;
