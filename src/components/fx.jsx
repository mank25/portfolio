import { useEffect, useRef, useState } from "react";

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Fades and lifts its children in once, the first time they scroll into view. */
export const Reveal = ({ as: Tag = "div", delay = 0, className = "", children, ...rest }) => {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} style={{ "--d": `${delay}ms` }} className={`reveal ${on ? "in" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

/** Thin bar at the top of the page showing how far you have scrolled. */
export const ScrollProgress = () => {
  const bar = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={bar}
      aria-hidden="true"
      className="fixed top-0 inset-x-0 h-px z-[60] origin-left bg-ink-subtle scale-x-0"
    />
  );
};

/**
 * One document-level pointer listener: `.spot` elements get a cursor-following glow (--mx/--my).
 */
export const PointerFx = () => {
  useEffect(() => {
    if (reduceMotion() || !window.matchMedia("(hover: hover)").matches) return;
    const onMove = (e) => {
      const spot = e.target.closest?.(".spot");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
};

/** Types and deletes a rotating list of words. Shows the first word still if motion is reduced. */
export const Rotator = ({ words }) => {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (reduceMotion()) return;
    let i = 0;
    let j = words[0].length;
    let deleting = true;
    let t;
    const tick = () => {
      const w = words[i];
      j += deleting ? -1 : 1;
      setText(w.slice(0, j));
      let d = deleting ? 35 : 70;
      if (!deleting && j === w.length) {
        deleting = true;
        d = 1700;
      } else if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % words.length;
        d = 300;
      }
      t = setTimeout(tick, d);
    };
    t = setTimeout(tick, 1800);
    return () => clearTimeout(t);
  }, [words]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true" className="text-ink">
        {text}
        <span className="caret" />
      </span>
    </>
  );
};
