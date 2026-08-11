import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Link2, Check, Sun } from "lucide-react";
import CTABanner from "../components/CTABanner";
import { blogs, blogBySlug } from "../data/blogs";

const readingTime = (body) => Math.max(1, Math.round(body.split(/\s+/).length / 200));
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const AUTHOR = { name: "Shubh Power Team", role: "Solar & EV specialists", initials: "SP" };

const inline = (text) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i} className="font-semibold text-[#0F1F14]">{p.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={i}>{p}</React.Fragment>
    )
  );
};

function parseBlocks(text) {
  const lines = text.split("\n");
  const blocks = [];
  let list = null;
  const flush = () => { if (list) { blocks.push({ type: "ul", items: list }); list = null; } };
  lines.forEach((raw) => {
    const line = raw.trimEnd();
    if (!line.trim()) { flush(); return; }
    if (line.startsWith("### ")) { flush(); blocks.push({ type: "h3", text: line.slice(4) }); }
    else if (line.startsWith("## ")) { flush(); blocks.push({ type: "h2", text: line.slice(3), id: slugify(line.slice(3)) }); }
    else if (line.startsWith("> ")) { flush(); blocks.push({ type: "quote", text: line.slice(2) }); }
    else if (line.startsWith("- ")) { (list = list || []).push(line.slice(2)); }
    else { flush(); blocks.push({ type: "p", text: line }); }
  });
  flush();
  const firstP = blocks.findIndex((b) => b.type === "p");
  if (firstP >= 0) blocks[firstP].lead = true;
  return blocks;
}

const ReadingProgress = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setPct(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-[88px] left-0 right-0 h-[3px] bg-transparent z-40">
      <div className="h-full bg-[#16A34A]" style={{ width: pct + "%" }} />
    </div>
  );
};

const ShareRow = ({ title }) => {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const copy = useCallback(() => {
    try { navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch (_) {}
  }, [url]);
  const btn = "w-9 h-9 rounded-full border border-[#0F1F14]/12 flex items-center justify-center text-[#0F1F14]/70 hover:text-[#0F1F14] hover:border-[#0F1F14]/30 transition-colors";
  return (
    <div className="flex items-center gap-2">
      <a className={btn} aria-label="Share on WhatsApp" target="_blank" rel="noopener noreferrer" href={`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`}>
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.9 9.9 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.86 9.86 0 019.88 9.89c0 5.45-4.43 9.88-9.88 9.88M20.46 3.49A11.8 11.8 0 0012.05 0C5.5 0 .16 5.33.16 11.9c0 2.09.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.9 11.9 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.41"/></svg>
      </a>
      <a className={btn} aria-label="Share on LinkedIn" target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}>
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
      </a>
      <a className={btn} aria-label="Share on X" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}>
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65z"/></svg>
      </a>
      <button className={btn} aria-label="Copy link" onClick={copy}>
        {copied ? <Check className="w-3.5 h-3.5 text-[#16A34A]" /> : <Link2 className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};

const ArticleBody = ({ blocks }) => (
  <div className="article-body">
    {blocks.map((b, i) => {
      if (b.type === "h2")
        return (
          <h2 key={i} id={b.id} className="scroll-mt-[120px] mt-14 mb-5">
            <span className="block w-9 h-1 rounded-full bg-[#16A34A] mb-4" />
            <span className="h-display text-[26px] md:text-[32px] text-[#0F1F14] tracking-tight leading-tight">{b.text}</span>
          </h2>
        );
      if (b.type === "h3")
        return <h3 key={i} className="h-display text-[20px] md:text-[23px] text-[#0F1F14] mt-10 mb-3 tracking-tight">{b.text}</h3>;
      if (b.type === "quote")
        return (
          <figure key={i} className="my-9 pl-6 border-l-[3px] border-[#16A34A]">
            <blockquote className="h-display text-[22px] md:text-[26px] leading-snug text-[#0F1F14]">{inline(b.text)}</blockquote>
          </figure>
        );
      if (b.type === "ul")
        return (
          <ul key={i} className="my-6 space-y-3">
            {b.items.map((it, j) => (
              <li key={j} className="flex gap-3.5 text-[17px] md:text-[18px] leading-relaxed text-[#3A443E]">
                <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                <span>{inline(it)}</span>
              </li>
            ))}
          </ul>
        );
      return (
        <p key={i}
           className={`my-5 text-[17px] md:text-[18px] leading-[1.8] text-[#3A443E] ${
             b.lead ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:h-display first-letter:text-[56px] first-letter:leading-[0.75] first-letter:text-[#16A34A]" : ""
           }`}>
          {inline(b.text)}
        </p>
      );
    })}
  </div>
);

const MiniCard = ({ p }) => (
  <Link to={`/blogs/${p.slug}`} className="group flex gap-4 items-start">
    <div className="relative w-24 h-20 rounded-xl overflow-hidden shrink-0 bg-[#F5F3EC]">
      <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="min-w-0">
      <div className="h-mono text-[10px] tracking-wide text-[#16A34A] mb-1">{p.category.toUpperCase()}</div>
      <h4 className="h-display text-[15px] leading-snug text-[#0F1F14] line-clamp-2 group-hover:text-[#16A34A] transition-colors">{p.title}</h4>
      <div className="flex items-center gap-1.5 text-[11px] text-[#0F1F14]/45 mt-1.5"><Calendar className="w-3 h-3" />{p.date}</div>
    </div>
  </Link>
);

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogBySlug(slug);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [slug]);
  const blocks = useMemo(() => (post ? parseBlocks(post.body) : []), [post]);
  if (!post) return <Navigate to="/blogs" replace />;
  const others = blogs.filter((b) => b.slug !== slug).sort((a, b) => b.sort - a.sort).slice(0, 4);

  return (
    <div className="site-preview-type blog-post-preview-type">
      <ReadingProgress />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 pt-8 lg:pt-12 pb-16 lg:pb-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13px] text-[#0F1F14]/45 mb-7">
          <Link to="/blogs" className="hover:text-[#0F1F14] inline-flex items-center gap-1.5"><ArrowLeft className="w-3.5 h-3.5" /> Journal</Link>
          <span>/</span>
          <span className="text-[#16A34A]">{post.category}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
          {/* MAIN */}
          <article>
            {/* Cover with category tag */}
            <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] bg-[#F5F3EC]">
              <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
              <span className="absolute top-4 left-4 h-mono text-[11px] tracking-wide bg-white/95 backdrop-blur text-[#0F1F14] px-3.5 py-1.5 rounded-full">
                {post.category.toUpperCase()}
              </span>
            </div>

            {/* Title + deck */}
            <h1 className="h-display text-[32px] md:text-[46px] leading-[1.04] tracking-tight text-[#0F1F14] mt-8">{post.title}</h1>
            <p className="mt-4 text-[18px] md:text-[20px] leading-relaxed text-[#0F1F14]/60">{post.excerpt}</p>

            {/* Meta + share */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#0F1F14]/12">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#16A34A] text-white flex items-center justify-center h-mono text-[12px]">{AUTHOR.initials}</div>
                  <span className="text-[13px] font-semibold text-[#0F1F14]">{AUTHOR.name}</span>
                </div>
                <span className="hidden sm:inline w-px h-4 bg-[#0F1F14]/15" />
                <span className="inline-flex items-center gap-1.5 h-mono text-[12px] text-[#0F1F14]/55"><Calendar className="w-3.5 h-3.5 text-[#16A34A]" />{post.date}</span>
                <span className="inline-flex items-center gap-1.5 h-mono text-[12px] text-[#0F1F14]/55"><Clock className="w-3.5 h-3.5 text-[#16A34A]" />{readingTime(post.body)} MIN READ</span>
              </div>
              <ShareRow title={post.title} />
            </div>

            {/* Body */}
            <div className="mt-8">
              <ArticleBody blocks={blocks} />
            </div>

            {/* Author card */}
            <div className="mt-12 rounded-[20px] bg-[#F5F3EC] p-6 md:p-7 flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-[#16A34A] text-white flex items-center justify-center h-display text-[18px] shrink-0">{AUTHOR.initials}</div>
              <div>
                <div className="h-display text-[18px] text-[#0F1F14]">{AUTHOR.name}</div>
                <div className="text-[13px] text-[#0F1F14]/50 mb-2">{AUTHOR.role}</div>
                <p className="text-[15px] text-[#0F1F14]/70 leading-relaxed">Since 2010 we've engineered solar and EV charging across Delhi-NCR and pan-India. We write to make clean energy simple to choose.</p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 mt-3 text-[#16A34A] text-[14px] font-medium">Get a free consultation <ArrowUpRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="mt-14 lg:mt-0">
            <div className="lg:sticky lg:top-[110px] space-y-8">
              {/* You may also like */}
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-1 h-5 rounded-full bg-[#16A34A]" />
                  <h3 className="h-display text-[20px] text-[#0F1F14]">You may also like</h3>
                </div>
                <div className="space-y-6">
                  {others.slice(0, 3).map((p) => <MiniCard key={p.slug} p={p} />)}
                </div>
              </div>

              {/* CTA box */}
              <div className="rounded-[20px] bg-[#0F1F14] text-white p-7 text-center overflow-hidden relative">
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#16A34A]/20 blur-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#16A34A] flex items-center justify-center mx-auto mb-4">
                    <Sun className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="h-display text-[22px] mb-2">Plan your clean-energy project</h3>
                  <p className="text-white/65 text-[14px] leading-relaxed mb-6">Get a free site survey and a savings estimate from our team, no obligation.</p>
                  <Link to="/contact" className="block w-full bg-white text-[#0F1F14] h-mono text-[13px] tracking-wide font-medium py-3.5 rounded-full hover:bg-[#16A34A] hover:text-white transition-colors">
                    GET A FREE QUOTE
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <CTABanner title="Get insights straight to your inbox." ctaLabel="Talk to us" />
    </div>
  );
};

export default BlogPostPage;
