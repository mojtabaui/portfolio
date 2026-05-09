import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mojtaba Yazdanpanah — Senior Product Designer with 6+ years shipping enterprise, e-commerce, and platform products. Founder of Melina Design School. Open to new opportunities.",
};

const pad = "clamp(1.5rem, 7vw, 9rem)";

const experience = [
  { role: "Lead Product Designer", org: "Melina Design Agency", period: "2023 — Present", desc: "Led an 8-person team across enterprise, e-commerce, and platform projects. Managed client communications, timelines, and deliverables." },
  { role: "Founder & Instructor", org: "Melina Design School · mojtabaui.ir", period: "2022 — Present", desc: "Founded a digital product design school — 6,000+ students mentored in UI/UX across the region through structured online programmes." },
  { role: "Instructor — Digital Product Design", org: "FlashPlus", period: "2022 — Present", desc: "Teaching UI/UX to thousands of students through project-based online courses." },
  { role: "Guest Lecturer — UX Design Workshop", org: "Shahid Beheshti University", period: "2022", desc: "Delivered an online UX design workshop as part of the university's professional development programme." },
  { role: "Product Designer", org: "Freelance · Iran · Germany · Oman", period: "2021 — 2023", desc: "Independent UX/UI projects across international markets." },
  { role: "UI/UX Designer", org: "RSO Company", period: "2020 — 2021", desc: "User-centric interface design for apps and websites." },
  { role: "UI/UX Designer", org: "Agah Smart Home", period: "2019 — 2021", desc: "Intuitive interfaces for smart home automation systems." },
];

const education = [
  { degree: "MSc — Software Engineering (Design Thinking & Innovation)", org: "Shahab Danesh University, Qom", period: "2020 — 2023", desc: "Thesis: Investigating the Effect of Design Thinking on Service Quality via Structural Equation Modeling (SmartPLS 3)." },
  { degree: "BSc — Computer Engineering", org: "University of Tehran (Farabi Campus)", period: "2011 — 2015", desc: "Foundation in software engineering, algorithms, and programming." },
];

export default function AboutPage() {
  return (
    <div>

      {/* ── Hero — Melanie-style: image left / white right ── */}
      <section className="grid md:grid-cols-2 min-h-screen">

        {/* Left: full-height image */}
        <div className="relative bg-[#0d0d0d] min-h-[55vw] md:min-h-screen overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/about_single.gif"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Right: white, generous padding, vertically centered */}
        <div
          className="bg-white flex flex-col justify-center"
          style={{
            paddingLeft: "clamp(3rem, 8vw, 12rem)",
            paddingRight: "clamp(3rem, 8vw, 12rem)",
            paddingTop: "clamp(5rem, 8vw, 10rem)",
            paddingBottom: "clamp(5rem, 8vw, 10rem)",
          }}
        >
          <FadeIn>
            <h1
              className="font-medium tracking-tight mb-10"
              style={{ fontSize: "clamp(1.8rem, 2.8vw, 3rem)", lineHeight: 1.15 }}
            >
              Mojtaba Yazdanpanah
            </h1>
            <p
              className="text-[#555] leading-relaxed mb-6"
              style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", maxWidth: "48ch", lineHeight: 1.8 }}
            >
              Product Designer with 6+ years shipping enterprise, e-commerce, and platform
              products across international markets. I work where research meets execution —
              from structured discovery through to design systems and handoff.
            </p>
            <p
              className="text-[#555] leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", maxWidth: "48ch", lineHeight: 1.8 }}
            >
              Founder of Melina Design School (mojtabaui.ir) — 6,000+ students mentored in
              UI/UX across the region. Currently open to senior Product Designer roles and
              available to start immediately.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────── */}
      <section className="bg-white">
        <div style={{ paddingLeft: pad, paddingRight: pad, paddingTop: "clamp(4rem,6vw,7rem)", paddingBottom: "1.5rem" }}>
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[#aaa]">Experience</p>
          </FadeIn>
        </div>
        <div className="divide-y divide-[#f0f0f0] border-t border-[#f0f0f0] mt-8">
          {experience.map((item, i) => (
            <FadeIn key={item.role} delay={i * 0.05}>
              <div
                className="grid md:grid-cols-3 gap-6 py-12"
                style={{ paddingLeft: pad, paddingRight: pad }}
              >
                <div className="md:col-span-2">
                  <h3 className="text-base font-medium mb-1">{item.role}</h3>
                  <p className="text-sm text-[#ff3d00] mb-3">{item.org}</p>
                  <p className="text-sm text-[#888] leading-relaxed">{item.desc}</p>
                </div>
                <p className="text-sm text-[#bbb]">{item.period}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Education ────────────────────────────────────── */}
      <section className="bg-[#fafaf8]">
        <div style={{ paddingLeft: pad, paddingRight: pad, paddingTop: "clamp(4rem,6vw,7rem)", paddingBottom: "1.5rem" }}>
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[#aaa]">Education</p>
          </FadeIn>
        </div>
        <div className="divide-y divide-[#eeeeee] border-t border-[#eeeeee] mt-8">
          {education.map((item, i) => (
            <FadeIn key={item.degree} delay={i * 0.05}>
              <div
                className="grid md:grid-cols-3 gap-6 py-12"
                style={{ paddingLeft: pad, paddingRight: pad }}
              >
                <div className="md:col-span-2">
                  <h3 className="text-base font-medium mb-1">{item.degree}</h3>
                  <p className="text-sm text-[#ff3d00] mb-3">{item.org}</p>
                  <p className="text-sm text-[#888] leading-relaxed">{item.desc}</p>
                </div>
                <p className="text-sm text-[#bbb]">{item.period}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────── */}
      <section className="bg-white">
        <div style={{ paddingLeft: pad, paddingRight: pad, paddingTop: "clamp(4rem,6vw,7rem)", paddingBottom: "clamp(4rem,6vw,7rem)" }}>
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[#aaa] mb-16">Skills & Tools</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
              {Object.entries({
                Design: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
                Research: ["SmartPLS", "SEM", "Qualitative Methods", "A/B Testing"],
                Dev: ["HTML / CSS", "Phaser.js", "Vite"],
                Methods: ["Design Thinking", "Agile", "Double Diamond", "Usability Testing"],
              }).map(([cat, items]) => (
                <div key={cat}>
                  <p className="text-xs uppercase tracking-widest text-[#ccc] mb-5">{cat}</p>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="text-sm text-[#555]">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Research Interests ───────────────────────────── */}
      <section className="bg-[#fafaf8]">
        <div style={{ paddingLeft: pad, paddingRight: pad, paddingTop: "clamp(4rem,6vw,7rem)", paddingBottom: "clamp(4rem,6vw,7rem)" }}>
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[#aaa] mb-8">Research Interests</p>
            <div className="flex flex-wrap gap-3">
              {["Design Thinking", "Human-Computer Interaction (HCI)", "Service Design", "UX in EdTech", "Structural Equation Modeling", "Design Education", "Design Literacy"].map((i) => (
                <span key={i} className="text-sm px-4 py-2 border border-[#e5e5e5] text-[#555]">{i}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA — dark ───────────────────────────────────── */}
      <section
        className="grain bg-[#0d0d0d]"
        style={{ padding: pad, paddingTop: "clamp(4rem,6vw,7rem)", paddingBottom: "clamp(4rem,6vw,7rem)" }}
      >
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/30 mb-6">Open to Opportunities</p>
              <p
                className="font-medium text-white tracking-tight leading-snug"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 4rem)", maxWidth: "22ch" }}
              >
                Open to senior Product Designer roles — available now
              </p>
            </div>
            <a
              href="mailto:m.yazdanpanah.grad@gmail.com"
              className="shrink-0 flex items-center gap-3 text-white group"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff3d00]" />
              <span className="text-sm uppercase tracking-widest group-hover:text-[#ff3d00] transition-colors border-b border-white/20 pb-1 group-hover:border-[#ff3d00]">
                Get in Touch
              </span>
            </a>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
