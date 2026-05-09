import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const pad = "clamp(1.5rem, 7vw, 9rem)";
const vPad = "clamp(4rem, 6vw, 7rem)";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.overview };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const sameType = projects.filter((p) => p.type === project.type);
  const idx = sameType.findIndex((p) => p.slug === slug);
  const nextProject = sameType[(idx + 1) % sameType.length];

  return (
    <div>

      {/* ── Dark header ─────────────────────────────────── */}
      <section
        className="grain bg-[#0d0d0d] min-h-[60vh] flex flex-col justify-end"
        style={{
          paddingLeft: pad,
          paddingRight: pad,
          paddingTop: "clamp(5rem, 8vw, 10rem)",
          paddingBottom: vPad,
        }}
      >
        <FadeIn>
          <Link
            href="/work"
            className="text-white/40 text-xs uppercase tracking-widest hover:text-white transition-colors mb-10 inline-block"
          >
            ← All Work
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-white/30">
              {project.type === "research" ? `R${idx + 1}` : String(idx + 1).padStart(2, "0")}
            </span>
            <span className="text-xs px-2 py-1 border border-white/20 text-white/40 uppercase tracking-wider">
              {project.type === "research" ? "Research" : "Industry"}
            </span>
            <span className="text-xs text-white/30">{project.year}</span>
          </div>

          <h1
            className="font-medium text-white tracking-tight leading-tight mb-4 max-w-4xl"
            style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
          >
            {project.title}
          </h1>
          <p className="text-white/40 text-sm mb-8">{project.subtitle}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 border border-white/20 text-white/50">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff3d00] text-white text-xs uppercase tracking-widest hover:bg-white hover:text-[#0d0d0d] transition-colors">
                View Live Site ↗
              </a>
            )}
            {project.figmaUiUrl && (
              <a href={project.figmaUiUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff3d00] text-white text-xs uppercase tracking-widest hover:bg-white hover:text-[#0d0d0d] transition-colors">
                View UI Design ↗
              </a>
            )}
            {project.figmaUxUrl && (
              <a href={project.figmaUxUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/40 text-white/70 text-xs uppercase tracking-widest hover:border-white hover:text-white transition-colors">
                View UX Process ↗
              </a>
            )}
            {project.caseStudyUrl && !project.figmaUiUrl && (
              <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff3d00] text-white text-xs uppercase tracking-widest hover:bg-white hover:text-[#0d0d0d] transition-colors">
                {project.type === "research" ? "View Research Document ↗" : "View Case Study ↗"}
              </a>
            )}
          </div>
        </FadeIn>
      </section>

      {/* ── Stats ───────────────────────────────────────── */}
      {project.stats && (
        <section className="bg-[#0d0d0d] border-t border-white/10">
          <FadeIn>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-12"
              style={{
                paddingLeft: pad,
                paddingRight: pad,
                paddingTop: vPad,
                paddingBottom: vPad,
              }}
            >
              {project.stats.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">
                    {value}
                  </p>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      {/* ── Cover image ─────────────────────────────────── */}
      {project.coverImage ? (
        <section className="relative bg-[#111] aspect-video md:aspect-[21/9] overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </section>
      ) : project.type === "work" ? (
        <section className="bg-[#111] aspect-video md:aspect-[21/9] flex items-center justify-center">
          <p className="text-white/20 text-sm uppercase tracking-widest">
            Project Visuals — Add Figma Screenshots Here
          </p>
        </section>
      ) : null}

      {/* ── Overview / Challenge / Impact ───────────────── */}
      <section className="bg-white">
        <FadeIn>
          <div
            className="grid md:grid-cols-3 gap-16"
            style={{
              paddingLeft: pad,
              paddingRight: pad,
              paddingTop: vPad,
              paddingBottom: vPad,
            }}
          >
            {[
              { label: "Overview", content: project.overview },
              { label: "Challenge", content: project.challenge },
              { label: "Impact & Results", content: project.impact },
            ].map(({ label, content }) => (
              <div key={label}>
                <p className="text-xs uppercase tracking-widest text-[#bbb] mb-6">{label}</p>
                <p className="text-sm leading-relaxed text-[#555]" style={{ lineHeight: 1.9 }}>{content}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Approach + Takeaway — dark split ────────────── */}
      <section className="grid md:grid-cols-2">
        <div
          className="grain bg-[#0d0d0d]"
          style={{
            paddingLeft: pad,
            paddingRight: `calc(${pad} / 2)`,
            paddingTop: vPad,
            paddingBottom: vPad,
          }}
        >
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-white/30 mb-8">
              Approach & Methodology
            </p>
            <p className="text-white/80 leading-relaxed text-base" style={{ lineHeight: 1.9 }}>
              {project.approach}
            </p>
          </FadeIn>
        </div>
        <div
          className="bg-[#fafaf8]"
          style={{
            paddingLeft: `calc(${pad} / 2)`,
            paddingRight: pad,
            paddingTop: vPad,
            paddingBottom: vPad,
          }}
        >
          <FadeIn delay={0.15}>
            <p className="text-xs uppercase tracking-widest text-[#bbb] mb-8">Key Takeaways</p>
            <p className="text-[#555] leading-relaxed text-base mb-10" style={{ lineHeight: 1.9 }}>
              {project.takeaway}
            </p>
            <div className="flex flex-wrap gap-4">
              {project.caseStudyUrl && (
                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#0d0d0d] text-white text-xs uppercase tracking-widest hover:bg-[#ff3d00] transition-colors"
                >
                  {project.type === "research" ? "View Research Document ↗" : "View Full Case Study ↗"}
                </a>
              )}
              {project.figmaUxUrl && (
                <a
                  href={project.figmaUxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-[#0d0d0d] text-[#0d0d0d] text-xs uppercase tracking-widest hover:bg-[#0d0d0d] hover:text-white transition-colors"
                >
                  View UX Process ↗
                </a>
              )}
              {project.figmaUiUrl && (
                <a
                  href={project.figmaUiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#0d0d0d] text-white text-xs uppercase tracking-widest hover:bg-[#ff3d00] transition-colors"
                >
                  View UI Design ↗
                </a>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Next Project ────────────────────────────────── */}
      <Link href={`/work/${nextProject.slug}`} className="group block bg-[#0d0d0d]">
        <div
          className="flex items-center justify-between"
          style={{
            paddingLeft: pad,
            paddingRight: pad,
            paddingTop: vPad,
            paddingBottom: vPad,
          }}
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-white/30 mb-4">Next Project</p>
            <h3
              className="font-medium text-white tracking-tight group-hover:text-[#ff3d00] transition-colors"
              style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)" }}
            >
              {nextProject.title}
            </h3>
          </div>
          <span className="text-white/40 group-hover:text-[#ff3d00] group-hover:translate-x-3 transition-all duration-300 text-3xl">
            →
          </span>
        </div>
      </Link>

    </div>
  );
}
