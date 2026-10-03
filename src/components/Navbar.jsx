import { useState, useEffect } from "react";
import siteData from "../pages/siteData.json";

const Navbar = ({ onOpenPalette }) => {
  const { navigation } = siteData;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Highlight the section currently in view
    const targets = navigation
      .map((n) => document.querySelector(n.href))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    targets.forEach((t) => io.observe(t));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, [navigation]);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300 border-b ${
        scrolled || menuOpen
          ? "bg-canvas/85 backdrop-blur-md border-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#about" className="text-sm font-semibold tracking-tight2 text-ink">
          Mayank Sharma
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                active === item.href
                  ? "text-ink bg-surface-2"
                  : "text-ink-subtle hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
        <button
          onClick={onOpenPalette}
          aria-label="Open command menu"
          className="inline-flex h-9 items-center gap-2 px-3 rounded-lg border border-line text-sm text-ink-subtle hover:text-ink hover:border-line-strong transition-colors"
        >
          Jump to
          <kbd className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-surface-2 border border-line">Ctrl K</kbd>
        </button>
        <a
          href="#contact"
          className="inline-flex h-9 items-center px-4 rounded-lg bg-ink text-canvas text-sm font-medium hover:bg-ink-muted active:scale-[0.98] transition-[background-color,transform] duration-200"
        >
          Let&apos;s talk
        </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-ink-muted"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-line px-6 py-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base text-ink-muted hover:bg-surface-2 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block text-center px-4 py-3 rounded-lg bg-accent text-canvas text-sm font-medium"
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
