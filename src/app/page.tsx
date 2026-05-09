import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import HeroSection from "@/components/HeroSection";
import FadeIn from "@/components/FadeIn";

/* Shared padding — scales with viewport width */
const pad = "clamp(1.5rem, 7vw, 9rem)";

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* ── About Split ─────────────────────────────────── */}
      <section className="grid md:grid-cols-2 min-h-[60vh]">
        {/* Left dark — with background GIF */}
        <div
          className="relative flex flex-col items-center justify-center overflow-hidden bg-[#0d0d0d] aspect-square"
          style={{ paddingLeft: pad, paddingRight: `calc(${pad} / 2)` }}
        >
          {/* Background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/about_me_bg.gif"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            style={{ objectFit: "contain", objectPosition: "center", opacity: 1, width: "100%", height: "100%", position: "absolute", inset: 0 }}
          />

          <FadeIn>
            <div className="relative z-10 text-center">
              {[
                { value: "6+",   label: "Years Experience" },
                { value: "6k+",  label: "Students Mentored" },
                { value: "30+",  label: "Projects Delivered" },
              ].map(({ value, label }) => (
                <div key={label} className="flex items-baseline justify-center gap-4 mb-6 last:mb-0">
                  <span className="text-[clamp(2.5rem,3.5vw,4rem)] font-medium text-white tracking-tight leading-none drop-shadow-lg">
                    {value}
                  </span>
                  <span className="text-white/70 text-xs uppercase tracking-widest">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right white */}
        <div
          className="bg-white flex flex-col justify-center"
          style={{ paddingLeft: `calc(${pad} / 2)`, paddingRight: pad, paddingTop: "clamp(3rem,5vw,6rem)", paddingBottom: "clamp(3rem,5vw,6rem)" }}
        >
          <FadeIn delay={0.12}>
            <p className="text-xs uppercase tracking-widest text-[#aaa] mb-5">About</p>
            <h2
              className="font-medium tracking-tight mb-6"
              style={{ fontSize: "clamp(1.6rem,2.2vw,2.5rem)" }}
            >
              Mojtaba Yazdanpanah
            </h2>
            <p className="text-[#555] leading-relaxed mb-5 text-[15px]" style={{ maxWidth: "38ch" }}>
              Product Designer and UX Researcher with 6+ years shipping enterprise,
              e-commerce, and platform products. MSc thesis examined Design Thinking's
              effect on service quality via Structural Equation Modeling.
            </p>
            <p className="text-[#555] leading-relaxed mb-10 text-[15px]" style={{ maxWidth: "38ch" }}>
              Founder of Melina Design School — 6,000+ students mentored. Open to senior
              Open to senior Product Designer roles and new opportunities.
            </p>
            <Link
              href="/about"
              className="text-xs uppercase tracking-widest border-b border-[#0d0d0d] pb-0.5 hover:text-[#ff3d00] hover:border-[#ff3d00] transition-colors inline-block"
            >
              Full Profile →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Selected Work ───────────────────────────────── */}
      <section className="bg-white">
        {/* Label row */}
        <div className="flex items-baseline justify-between pt-20 pb-10 border-b border-[#f0f0f0]"
          style={{ paddingLeft: pad, paddingRight: pad }}>
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[#aaa]">Selected Work</p>
          </FadeIn>
          <FadeIn>
            <Link
              href="/work"
              className="text-xs uppercase tracking-widest text-[#aaa] hover:text-[#0d0d0d] transition-colors"
            >
              All Projects →
            </Link>
          </FadeIn>
        </div>

        {/* Project rows */}
        {featuredProjects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block border-b border-[#f0f0f0] hover:bg-[#fafaf9] transition-colors duration-300"
          >
            <FadeIn delay={i * 0.07}>
              <div
                className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 py-10"
                style={{ paddingLeft: pad, paddingRight: pad }}
              >
                {/* Number */}
                <span className="text-xs font-mono text-[#ddd] w-6 shrink-0 hidden md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title + desc */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-medium tracking-tight mb-2 group-hover:text-[#ff3d00] transition-colors duration-300"
                    style={{ fontSize: "clamp(1.2rem,1.8vw,1.9rem)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed max-w-xl">
                    {project.overview}
                  </p>
                </div>

                {/* Meta */}
                <div className="shrink-0 flex items-center gap-8">
                  <div className="text-right hidden md:block">
                    <span className="text-sm text-[#ccc] block">{project.year}</span>
                    <div className="flex gap-1 flex-wrap justify-end mt-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 bg-[#f5f5f5] text-[#aaa]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-[#ddd] group-hover:text-[#ff3d00] group-hover:translate-x-1.5 transition-all duration-300 text-xl">
                    →
                  </span>
                </div>
              </div>
            </FadeIn>
          </Link>
        ))}
      </section>

      {/* ── PhD Banner ──────────────────────────────────── */}
      <section
        className="grain bg-[#0d0d0d] flex flex-col md:flex-row md:items-end justify-between gap-12 py-28 md:py-36"
        style={{ paddingLeft: pad, paddingRight: pad }}
      >
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-white/25 mb-8">Open to Opportunities</p>
          <p
            className="font-medium text-white tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(1.8rem,3.5vw,4rem)", maxWidth: "20ch" }}
          >
            Open to senior Product Designer roles — available now
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <a
            href="mailto:m.yazdanpanah.grad@gmail.com"
            className="shrink-0 flex items-center gap-3 text-white group"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff3d00] flex-shrink-0" />
            <span className="text-xs uppercase tracking-widest group-hover:text-[#ff3d00] transition-colors border-b border-white/20 pb-0.5 group-hover:border-[#ff3d00]">
              Get in Touch
            </span>
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
