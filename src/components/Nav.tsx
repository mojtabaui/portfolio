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

  useEffect(() => {
    setIsDark(pathname === "/");
    setAtTop(true);
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

  const dark = isDark && atTop;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: dark ? "transparent" : "rgba(255,255,255,0.95)",
        backdropFilter: dark ? "none" : "blur(12px)",
        borderBottom: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #f0f0f0",
      }}
    >
      <nav
        className="h-16 flex items-center justify-between"
        style={{ paddingLeft: "clamp(1.5rem, 5vw, 7rem)", paddingRight: "clamp(1.5rem, 5vw, 7rem)" }}
      >
        <Link
          href="/"
          className="text-xs font-medium tracking-[0.15em] uppercase transition-opacity hover:opacity-60"
          style={{ color: dark ? "#fff" : "#0d0d0d" }}
        >
          Mojtaba Yazdanpanah
        </Link>

        <div className="flex items-center gap-8 md:gap-10">
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
      </nav>
    </header>
  );
}
