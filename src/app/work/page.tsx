import Link from "next/link";
import { workProjects, researchProjects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected UX/product design projects by Mojtaba Yazdanpanah.",
};

const pad = "clamp(1.5rem, 7vw, 9rem)";

export default function WorkPage() {
  return (
    <div>
      {/* Dark header */}
      <section
        className="grain bg-[#0d0d0d] flex flex-col justify-end"
        style={{
          minHeight: "55vh",
          padding: pad,
          paddingTop: "clamp(5rem, 10vw, 12rem)",
        }}
      >
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-white/30 mb-5">Portfolio</p>
          <h1
            className="font-medium text-white tracking-tight leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 8rem)" }}
          >
            Work
          </h1>
          <p className="text-white/40 text-base max-w-lg leading-relaxed">
            8 industry projects spanning enterprise UX, luxury e-commerce, cultural institutions,
            and B2B platforms — each grounded in research with measurable outcomes.
          </p>
        </FadeIn>
      </section>

      {/* Industry Projects */}
      <section className="bg-white">
        <div
          className="pt-16 pb-6"
          style={{ paddingLeft: pad, paddingRight: pad }}
        >
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[#aaa]">Industry Projects</p>
          </FadeIn>
        </div>
        <div className="border-t border-[#f0f0f0]">
          {workProjects.map((project, i) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="group block border-b border-[#f0f0f0] hover:bg-[#fafaf9] transition-colors">
              <FadeIn delay={i * 0.05}>
                <div
                  className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10 py-14"
                  style={{ paddingLeft: pad, paddingRight: pad }}
                >
                  <span className="text-xs font-mono text-[#ddd] w-6 shrink-0 hidden md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h2
                      className="font-medium tracking-tight mb-2 group-hover:text-[#ff3d00] transition-colors"
                      style={{ fontSize: "clamp(1.2rem,1.8vw,1.9rem)" }}
                    >
                      {project.title}
                    </h2>
                    <p className="text-[#888] text-sm leading-relaxed max-w-xl">{project.overview}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-0.5 bg-[#f5f5f5] text-[#aaa]">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-6">
                    <div className="text-right">
                      <span className="text-sm text-[#ccc] block">{project.year}</span>
                      {project.live && <span className="text-xs text-[#ff3d00]">↗ Live</span>}
                    </div>
                    <span className="text-[#ddd] group-hover:text-[#ff3d00] group-hover:translate-x-1 transition-all duration-300 text-xl">→</span>
                  </div>
                </div>
              </FadeIn>
            </Link>
          ))}
        </div>
      </section>

      {/* Research Projects */}
      <section className="bg-[#fafaf8]" style={{ marginTop: "clamp(3rem, 6vw, 7rem)" }}>
        <div className="pt-16 pb-6" style={{ paddingLeft: pad, paddingRight: pad }}>
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[#aaa]">Academic Research</p>
            <p className="text-xs text-[#bbb] mt-2">Projects conducted as research mentor</p>
          </FadeIn>
        </div>
        <div className="border-t border-[#eee]">
          {researchProjects.map((project, i) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="group block border-b border-[#eee] hover:bg-white transition-colors">
              <FadeIn delay={i * 0.05}>
                <div
                  className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10 py-14"
                  style={{ paddingLeft: pad, paddingRight: pad }}
                >
                  <span className="text-xs font-mono text-[#ddd] w-6 shrink-0 hidden md:block">
                    R{i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h2
                      className="font-medium tracking-tight mb-2 group-hover:text-[#ff3d00] transition-colors"
                      style={{ fontSize: "clamp(1.2rem,1.8vw,1.9rem)" }}
                    >
                      {project.title}
                    </h2>
                    <p className="text-[#888] text-sm leading-relaxed max-w-xl">{project.overview}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-0.5 border border-[#eee] text-[#aaa]">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-6">
                    <span className="text-sm text-[#ccc]">{project.year}</span>
                    <span className="text-[#ddd] group-hover:text-[#ff3d00] group-hover:translate-x-1 transition-all duration-300 text-xl">→</span>
                  </div>
                </div>
              </FadeIn>
            </Link>
          ))}
        </div>
        <div className="py-16" />
      </section>
    </div>
  );
}
