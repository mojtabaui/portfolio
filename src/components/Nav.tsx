"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(pathname === "/");
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(pathname === "/");
    setAtTop(true);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const onScroll = () => {
      const threshold = window.innerHeight * 0.9;
      setAtTop(window.scrollY < threshold);
      setIsDark(window.scrollY < threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const dark = isDark && atTop && !menuOpen;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: dark ? "transparent" : "rgba(255,255,255,0.97)",
          backdropFilter: dark ? "none" : "blur(12px)",
          borderBottom: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #f0f0f0",
        }}
      >
        <nav
          className="h-16 flex items-center justify-between"
          style={{ paddingLeft: "clamp(1.5rem, 5vw, 7rem)", paddingRight: "clamp(1.5rem, 5vw, 7rem)" }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-xs font-medium tracking-[0.15em] uppercase transition-opacity hover:opacity-60 shrink-0"
            style={{ color: dark ? "#fff" : "#0d0d0d" }}
          >
            <span className="hidden sm:inline">Mojtaba Yazdanpanah</span>
            <span className="sm:hidden">M.Y.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 md:gap-10">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs tracking-[0.1em] uppercase transition-opacity hover:opacity-60"
                style={{
                  color: dark ? "#fff" : "#0d0d0d",
                  opacity: pathname.startsWith(href) ? 1 : 0.45,
                }}
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:m.yazdanpanah.grad@gmail.com"
              className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase transition-opacity hover:opacity-60"
              style={{ color: dark ? "#fff" : "#0d0d0d" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#ff3d00] flex-shrink-0" />
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-px transition-all duration-300 origin-center"
              style={{
                background: dark ? "#fff" : "#0d0d0d",
                transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-5 h-px transition-all duration-300"
              style={{
                background: dark ? "#fff" : "#0d0d0d",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-px transition-all duration-300 origin-center"
              style={{
                background: dark ? "#fff" : "#0d0d0d",
                transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className="fixed inset-0 z-40 bg-white md:hidden flex flex-col transition-all duration-300"
        style={{
          paddingTop: "4rem",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col" style={{ padding: "clamp(2rem, 8vw, 4rem)" }}>
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className="block py-5 border-b border-[#f0f0f0] text-3xl font-medium tracking-tight text-[#0d0d0d] hover:text-[#ff3d00] transition-colors"
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:m.yazdanpanah.grad@gmail.com"
            className="flex items-center gap-3 py-5 text-3xl font-medium tracking-tight text-[#0d0d0d] hover:text-[#ff3d00] transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff3d00] shrink-0" />
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
