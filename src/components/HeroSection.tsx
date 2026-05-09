"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const statement = "Product design, for me, is the discipline of translating uncertainty into usable structure.";
  const words = statement.split(" ");

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };
  const word = {
    hidden: { y: "110%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };
  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 1.5 } },
  };

  return (
    <section className="relative min-h-screen bg-[#0d0d0d] overflow-hidden flex flex-col justify-center">

      {/* Background GIF — full cover */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/hero_bg.gif"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={{ opacity: 0.50, objectFit: "cover", objectPosition: "center" }}
      />

      {/* Gradient overlay so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.1) 60%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-between min-h-screen"
        style={{ padding: "clamp(1.5rem, 7vw, 9rem)", paddingTop: "clamp(5rem, 8vw, 10rem)" }}
      >
        {/* Empty top spacer */}
        <div />

        {/* Main statement — center of page */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          aria-label={statement}
          style={{
            fontSize: "clamp(1.6rem, 3vw, 3.8rem)",
            lineHeight: 1.12,
            maxWidth: "55vw",
            marginLeft: "clamp(2rem, 12vw, 18rem)",
          }}
          className="font-medium text-white tracking-tight"
        >
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden" style={{ marginRight: "0.3em", paddingBottom: "0.12em", marginBottom: "-0.12em" }}>
              <motion.span variants={word} className="inline-block">{w}</motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Bottom bar */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-16"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-white/40 text-xs tracking-widest uppercase" style={{ lineHeight: 1.8 }}>
            <span>Senior Product Designer</span>
            <span>·</span>
            <span>6+ Years Experience</span>
            <span>·</span>
            <span>Available Now</span>
          </div>
          <a
            href="mailto:m.yazdanpanah.grad@gmail.com"
            className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff3d00] flex-shrink-0" />
            m.yazdanpanah.grad@gmail.com
          </a>
        </motion.div>
      </div>

    </section>
  );
}
