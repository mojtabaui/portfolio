import Link from "next/link";
import { researchProjects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "UX research projects and academic work by Mojtaba Yazdanpanah — Mental Health UX, Healthcare AI, Marketplace UX. MSc thesis on Design Thinking and Service Quality.",
};

export default function ResearchPage() {
  return (
    <div className="pt-14">
      <section className="max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <p className="text-xs tracking-widest uppercase text-[#6b6b6b] mb-6">Academic</p>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Research</h1>
        <p className="text-lg text-[#6b6b6b] max-w-xl leading-relaxed">
          Empirical UX research and academic mentorship — applying mixed methods to real products
          across healthcare, mental health, and marketplace design.
        </p>
      </section>

      {/* MSc Thesis */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-16">
        <div className="border border-[#e5e5e5] p-8 md:p-12">
          <p className="text-xs uppercase tracking-widest text-[#6b6b6b] mb-4">MSc Thesis · 2023</p>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 max-w-2xl">
            The Effect of Design Thinking on Service Quality
          </h2>
          <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-xl mb-6">
            Empirical research using Structural Equation Modeling (SmartPLS 3). Examined how
            Design Thinking methodology improves service delivery in educational contexts.
            Shahab Danesh University, Qom.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Design Thinking", "SEM", "SmartPLS 3", "Service Quality", "Education"].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 border border-[#e5e5e5] text-[#6b6b6b]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <p className="text-xs uppercase tracking-widest text-[#6b6b6b] mb-8">
          Student Research Projects (Mentor & Co-Researcher)
        </p>
        <div className="space-y-0">
          {researchProjects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex flex-col md:flex-row md:items-start gap-4 py-10 border-t border-[#e5e5e5] hover:opacity-70 transition-opacity"
            >
              <span className="text-xs text-[#6b6b6b] font-mono w-8 pt-1 shrink-0">
                R{i + 1}
              </span>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-[#6b6b6b] mb-4 max-w-2xl leading-relaxed">
                  {project.overview}
                </p>
                {project.stats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
                    {project.stats.map(({ label, value }) => (
                      <div key={label}>
                        <p className="text-xl font-medium tracking-tight">{value}</p>
                        <p className="text-xs text-[#6b6b6b] mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-[#e5e5e5] text-[#6b6b6b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-sm text-[#6b6b6b] shrink-0 md:pt-1">{project.year}</span>
            </Link>
          ))}
          <div className="border-t border-[#e5e5e5]" />
        </div>
      </section>

      {/* Melina Design School */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid md:grid-cols-2 gap-px bg-[#e5e5e5] border border-[#e5e5e5]">
          <div className="bg-[#fafaf8] px-8 py-10 md:px-12">
            <p className="text-xs uppercase tracking-widest text-[#6b6b6b] mb-4">
              Melina Design School · 2020 — Present
            </p>
            <h2 className="text-2xl font-medium tracking-tight mb-4">
              Design Education as Applied Research
            </h2>
            <p className="text-sm leading-relaxed text-[#0f0f0f]/70 mb-6">
              Five years of iteration on a hybrid design education platform combining recorded
              modules with live mentoring — providing longitudinal data on what works in design
              education for non-Western, resource-constrained contexts.
            </p>
            <a
              href="https://mojtabaui.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm link-underline"
            >
              mojtabaui.ir ↗
            </a>
          </div>
          <div className="bg-[#fafaf8] px-8 py-10 md:px-12">
            <p className="text-xs uppercase tracking-widest text-[#6b6b6b] mb-8">Impact</p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "6,000+", label: "Students Mentored" },
                { value: "5", label: "Years of Iteration" },
                { value: "12+", label: "Student Projects Supervised" },
                { value: "Hybrid", label: "Recorded + Live Model" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-medium tracking-tight mb-1">{value}</p>
                  <p className="text-xs text-[#6b6b6b]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
