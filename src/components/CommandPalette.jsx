import { useEffect, useMemo, useRef, useState } from "react";
import siteData from "../pages/siteData.json";

const EMAIL = "workwithmayanksharma@gmail.com";

const goTo = (hash) => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });

/** Cmd/Ctrl+K (or "/") opens a quick-jump menu. `open` and `setOpen` are owned by the parent so the navbar can open it too. */
const CommandPalette = ({ open, setOpen }) => {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState("");
  const listRef = useRef(null);

  const items = useMemo(() => {
    const social = (name) => siteData.socials.find((s) => s.platform === name)?.url;
    return [
      { label: "Go to About", hint: "Section", run: () => goTo("#about") },
      { label: "Go to Tech stack", hint: "Section", run: () => goTo("#stack") },
      { label: "Go to Experience", hint: "Section", run: () => goTo("#experience") },
      { label: "Go to Projects", hint: "Section", run: () => goTo("#projects") },
      { label: "Go to Contact", hint: "Section", run: () => goTo("#contact") },
      {
        label: "Copy email address",
        hint: "Action",
        run: () => {
          navigator.clipboard?.writeText(EMAIL);
          setToast("Email copied to clipboard");
        },
      },
      { label: "Open resume", hint: "Link", run: () => window.open(siteData.profile.resumeUrl, "_blank") },
      { label: "Open GitHub", hint: "Link", run: () => window.open(social("github"), "_blank") },
      { label: "Open LinkedIn", hint: "Link", run: () => window.open(social("linkedin"), "_blank") },
    ];
  }, []);

  const shown = items.filter((i) => i.label.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    const onKey = (e) => {
      const typing = /input|textarea|select/i.test(e.target.tagName) || e.target.isContentEditable;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "/" && !typing) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
    }
  }, [open]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    listRef.current?.children[index]?.scrollIntoView({ block: "nearest" });
  }, [index]);

  const run = (item) => {
    setOpen(false);
    item?.run();
  };

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => (shown.length ? (i + 1) % shown.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => (shown.length ? (i - 1 + shown.length) % shown.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(shown[index]);
    }
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[14vh] bg-black/30 backdrop-blur-sm"
          onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            className="rise w-full max-w-[34rem] rounded-xl border border-line bg-surface-1 shadow-2xl shadow-black/15 overflow-hidden"
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIndex(0);
              }}
              onKeyDown={onInputKey}
              placeholder="Jump to a section or run an action..."
              aria-label="Search commands"
              className="w-full px-5 py-4 bg-transparent text-[15px] text-ink placeholder:text-ink-subtle border-b border-line focus:outline-none"
            />
            <ul ref={listRef} className="max-h-[50vh] overflow-y-auto p-2">
              {shown.length === 0 && <li className="px-3 py-6 text-center text-sm text-ink-subtle">No match.</li>}
              {shown.map((item, i) => (
                <li key={item.label}>
                  <button
                    onMouseEnter={() => setIndex(i)}
                    onClick={() => run(item)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
                      i === index ? "bg-surface-3 text-ink" : "text-ink-muted"
                    }`}
                  >
                    {item.label}
                    <span className="font-mono text-xs text-ink-subtle">{item.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="px-5 py-2.5 border-t border-line font-mono text-xs text-ink-subtle">
              Up and down to move, Enter to select, Esc to close
            </p>
          </div>
        </div>
      )}

      <p
        role="status"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] px-4 py-2 rounded-lg border border-line bg-surface-2 text-sm text-ink shadow-lg transition-all duration-300 ${
          toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {toast}
      </p>
    </>
  );
};

export default CommandPalette;
