import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mojtaba Yazdanpanah — Product Designer and UX Researcher. Available for product design roles and freelance projects.",
};

const pad = "clamp(1.5rem, 7vw, 9rem)";

const links = [
  {
    label: "Email",
    value: "m.yazdanpanah.grad@gmail.com",
    href: "mailto:m.yazdanpanah.grad@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mojtabayazdanpanah",
    href: "https://linkedin.com/in/mojtabayazdanpanah",
  },
  {
    label: "School",
    value: "mojtabaui.ir",
    href: "https://mojtabaui.ir",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Dark hero */}
      <section
        className="grain bg-[#0d0d0d] min-h-[50vh] flex flex-col justify-end"
        style={{ padding: pad, paddingTop: "clamp(5rem, 8vw, 10rem)" }}
      >
        <p className="text-xs uppercase tracking-widest text-white/30 mb-6">Contact</p>
        <h1
          className="font-medium text-white tracking-tight leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
        >
          Let&apos;s work together
        </h1>
      </section>

      {/* Links */}
      <section className="bg-white">
        <div style={{ paddingLeft: pad, paddingRight: pad }}>
          {links.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-10 border-b border-[#f0f0f0] group hover:opacity-60 transition-opacity"
            >
              <span className="text-xs uppercase tracking-widest text-[#aaa] w-28 shrink-0">
                {label}
              </span>
              <span
                className="font-medium tracking-tight flex-1"
                style={{ fontSize: "clamp(1.2rem, 2vw, 2rem)" }}
              >
                {value}
              </span>
              <span className="text-[#ccc] group-hover:translate-x-2 group-hover:text-[#ff3d00] transition-all duration-300 text-xl">
                →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="grain bg-[#0d0d0d]"
        style={{ padding: pad, paddingTop: "clamp(4rem,6vw,7rem)", paddingBottom: "clamp(4rem,6vw,7rem)" }}
      >
        <p className="text-xs uppercase tracking-widest text-white/30 mb-6">Availability</p>
        <p
          className="font-medium text-white tracking-tight leading-snug"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.8rem)", maxWidth: "24ch" }}
        >
          Open to senior Product Designer roles — available for new opportunities.
        </p>
      </section>
    </div>
  );
}
