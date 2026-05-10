import Link from "next/link";
import { researchProjects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "UX research projects and academic work by Mojtaba Yazdanpanah — empirical mixed-methods research across healthcare, mental health, and marketplace design.",
};

const pad = "clamp(1.5rem, 7vw, 9rem)";
const vPad = "clamp(4rem, 6vw, 7rem)";

export default function ResearchPage() {
  return (
    <div>

      {/* Dark header */}
      <section
        className="grain bg-[#0d0d0d] flex flex-col justify-end"
        style={{
          minHeight: "55vh",
          paddingLeft: pad,
          paddingRight: pad,
          paddingTop: "clamp(5rem, 10vw, 12rem)",
          paddingBottom: vPad,
        }}
      >
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-white/30 mb-5">Academic</p>
          <h1
            className="font-medium text-white tracking-tight leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 8rem)" }}
          >
            Research
          </h1>
          <p className="text-white/40 text-base max-w-lg leading-relaxed">
            Empirical UX research and mentorship — mixed methods applied to real products
            across healthcare, mental health, and marketplace design.
          </p>
        </FadeIn>
      </section>

      {/* MSc Thesis */}
      <section className="bg-white border-b border-[#f0f0f0]">
        <FadeIn>
          <div
            className="grid md:grid-cols-3 gap-10"
            style={{ paddingLeft: pad, paddingRight: pad, paddingTop: vPad, paddingBottom: vPad }}
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-[#aaa] mb-3">MSc Thesis · 2023</p>
              <p className="text-xs text-[#bbb] leading-relaxed">Shahab Danesh University, Qom</p>
            </div>
            <div className="md:col-span-2">
              <h2
                className="font-medium tracking-tight mb-5"
                style={{ fontSize: "clamp(1.3rem, 2vw, 2rem)" }}
              >
                The Effect of Design Thinking on Service Quality
              </h2>
              <p className="text-sm text-[#555] leading-relaxed mb-6" style={{ lineHeight: 1.9, maxWidth: "52ch" }}>
                Empirical research using Structural Equation Modeling (SmartPLS 3).
                Examined how Design Thinking methodology improves service delivery in
                educational contexts — bridging academic rigour with applied UX practice.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Design Thinking", "SEM", "SmartPLS 3", "Service Quality", "Education"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 border border-[#e5e5e5] text-[#aaa]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Research Projects */}
      <section className="bg-white">
        <div style={{ paddingLeft: pad, paddingRight: pad, paddingTop: vPad, paddingBottom: "1.5rem" }}>
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[#aaa]">
              Student Research Projects
            </p>
            <p className="text-xs text-[#bbb] mt-2">Mentor &amp; Co-Researcher</p>
          </FadeIn>
        </div>
        <div className="border-t border-[#f0f0f0] mt-8">
          {researchProjects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block border-b border-[#f0f0f0] hover:bg-[#fafaf9] transition-colors"
            >
              <FadeIn delay={i * 0.05}>
                <div
                  className="grid md:grid-cols-3 gap-8 py-16"
                  style={{ paddingLeft: pad, paddingRight: pad }}
                >
                  {/* Left: number + year + tags */}
                  <div className="flex md:flex-col justify-between md:justify-start gap-4">
                    <span className="text-xs font-mono text-[#ddd]">R{i + 1}</span>
                    <span className="text-sm text-[#bbb]">{project.year}</span>
                    <div className="hidden md:flex flex-wrap gap-2 mt-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 border border-[#eee] text-[#aaa]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: title + overview + stats */}
                  <div className="md:col-span-2">
                    <h2
                      className="font-medium tracking-tight mb-4 group-hover:text-[#ff3d00] transition-colors"
                      style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.8rem)" }}
                    >
                      {project.title}
                    </h2>
                    <p className="text-sm text-[#888] leading-relaxed mb-6" style={{ lineHeight: 1.9, maxWidth: "52ch" }}>
                      {project.overview}
                    </p>
                    {project.stats && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#f5f5f5]">
                        {project.stats.map(({ label, value }) => (
                          <div key={label}>
                            <p className="text-xl font-medium tracking-tight text-[#0d0d0d]">{value}</p>
                            <p className="text-xs text-[#bbb] mt-1 uppercase tracking-widest">{label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-2 mt-8 text-xs uppercase tracking-widest text-[#ccc] group-hover:text-[#ff3d00] transition-colors">
                      <span>View Project</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </Link>
          ))}
        </div>
      </section>

      {/* Melina Design School */}
      <section
        className="grain bg-[#0d0d0d]"
        style={{ paddingLeft: pad, paddingRight: pad, paddingTop: vPad, paddingBottom: vPad }}
      >
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/30 mb-8">Design Education</p>
              <h2
                className="font-medium text-white tracking-tight leading-snug mb-6"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3.5rem)", maxWidth: "22ch" }}
              >
                Melina Design School — 6,000+ students mentored
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8" style={{ maxWidth: "44ch", lineHeight: 1.9 }}>
                Five years building a hybrid design education platform combining recorded
                modules with live mentoring — a longitudinal study in what works in design
                education for non-Western, resource-constrained contexts.
              </p>
              <a
                href="https://mojtabaui.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-white border-b border-white/20 pb-0.5 hover:text-[#ff3d00] hover:border-[#ff3d00] transition-colors"
              >
                mojtabaui.ir ↗
              </a>
            </div>
            <div className="grid grid-cols-2 gap-10 shrink-0">
              {[
                { value: "6,000+", label: "Students Mentored" },
                { value: "5 yrs", label: "Years of Iteration" },
                { value: "12+", label: "Projects Supervised" },
                { value: "Hybrid", label: "Live + Recorded" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-medium text-white tracking-tight">{value}</p>
                  <p className="text-xs text-white/30 mt-1 uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
