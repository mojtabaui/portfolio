import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10">
      <div
        className="py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        style={{ paddingLeft: "clamp(1.5rem, 7vw, 9rem)", paddingRight: "clamp(1.5rem, 7vw, 9rem)" }}
      >
        <div>
          <p className="text-white text-sm font-medium tracking-tight">Mojtaba Yazdanpanah</p>
          <p className="text-white/30 text-xs mt-1 uppercase tracking-widest">
            Product Designer · UX Researcher · Design Educator
          </p>
        </div>

        <div className="flex items-center gap-8">
          {[
            { label: "Email", href: "mailto:m.yazdanpanah.grad@gmail.com" },
            { label: "LinkedIn", href: "https://linkedin.com/in/mojtabayazdanpanah" },
            { label: "School", href: "https://mojtabaui.ir" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-white/30 text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="text-white/20 text-xs">© 2026</p>
      </div>
    </footer>
  );
}
