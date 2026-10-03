import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechIcon from "./TechIcon";

const categoryLabel = {
  ai: "AI & Automation",
  fs: "Full Stack",
  b: "Backend",
  f: "Frontend",
};

const linkBase =
  "inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg text-[13px] font-medium transition-colors duration-200";

const Card = ({ props, featured = false }) => {
  const label = categoryLabel[props.tags?.[0]] ?? categoryLabel.fs;

  return (
    <article
      className={`spot group flex flex-col w-full rounded-xl bg-surface-1 border border-line p-6 hover:border-line-strong hover:bg-surface-2 transition-colors duration-200 ${
        featured ? "lg:col-span-2 lg:p-8" : ""
      }`}
    >
      <div className="flex items-center gap-3 text-xs text-ink-subtle">
        <span>{label}</span>
        {props.status && (
          <span className="px-2 py-0.5 rounded bg-accent/15 text-accent-hover">{props.status}</span>
        )}
      </div>

      <h3
        className={`mt-3 font-semibold tracking-tight2 text-ink ${
          featured ? "text-2xl sm:text-3xl" : "text-lg"
        }`}
      >
        {props.title}
      </h3>

      <p className={`mt-3 text-sm leading-relaxed text-ink-subtle flex-1 ${featured ? "max-w-[68ch] sm:text-[15px]" : ""}`}>
        {props.description}
      </p>

      <ul className="mt-6 flex flex-wrap items-center gap-3" aria-label="Tech stack">
        {props.techstack.map((item) => (
          <li key={item.title} title={item.title} className="chip inline-flex items-center gap-1.5 text-xs text-ink-subtle">
            <TechIcon item={item} />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>

      {(props.github || props.live || props.socials?.length > 0) && (
        <div className="mt-6 pt-5 border-t border-line flex flex-wrap gap-2">
          {props.live && (
            <a
              href={props.live}
              target="_blank"
              rel="noreferrer"
              className={`${linkBase} bg-ink text-canvas hover:bg-ink-muted`}
            >
              {props.live.includes("youtu") ? "Watch demo" : "Visit site"}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          )}
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              className={`${linkBase} border border-line text-ink-muted hover:text-ink hover:border-line-strong`}
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
              Source
            </a>
          )}
          {props.socials?.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className={`${linkBase} border border-line text-ink-muted hover:text-ink hover:border-line-strong`}
            >
              <FontAwesomeIcon icon={s.icon} />
              {s.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
};

export default Card;
