import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categoryMeta = {
  ai: { label: "AI & Automation", accent: "bg-violet-500", badge: "bg-violet-50 text-violet-700 border-violet-200" },
  fs: { label: "Full Stack", accent: "bg-indigo-500", badge: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  b:  { label: "Backend",    accent: "bg-emerald-500", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  f:  { label: "Frontend",   accent: "bg-amber-500",   badge: "bg-amber-50 text-amber-700 border-amber-200" },
};

const Card = ({ props }) => {
  const primaryTag = props.tags?.[0] ?? "fs";
  const meta = categoryMeta[primaryTag] ?? categoryMeta.fs;

  return (
    <div className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-200">
      {/* Top accent stripe */}
      <div className={`h-1 w-full ${meta.accent}`}></div>

      <div className="p-5 flex flex-col flex-1">
        {/* Category badge */}
        <span className={`self-start inline-flex px-2 py-0.5 rounded text-xs font-medium border mb-3 ${meta.badge}`}>
          {meta.label}
        </span>

        <h3 className="font-semibold text-slate-900 mb-2 leading-snug text-base">
          {props.status && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 mr-2 rounded text-xs font-medium border bg-amber-50 text-amber-700 border-amber-200 align-middle">
              🚧 {props.status}
            </span>
          )}
          {props.title}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
          {props.description}
        </p>

        {/* Tech icons */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {props.techstack.map((item, index) => (
            <span
              key={index}
              title={item.title}
              className="w-7 h-7 flex items-center justify-center rounded-md bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors"
            >
              {item.path ? (
                <img src={item.img} alt={item.title} className="w-4 h-4 object-contain" />
              ) : (
                <FontAwesomeIcon
                  icon={item.prefix ? `${item.prefix} ${item.img}` : `fa-brands ${item.img}`}
                  style={{ color: item.color }}
                  className="text-sm"
                />
              )}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex gap-2">
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" className="text-xs" />
              Code
            </a>
          )}
          {props.live && (
            <a
              href={props.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:border-slate-400 hover:text-slate-900 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </a>
          )}
          {props.socials?.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:border-slate-400 hover:text-slate-900 transition-colors"
            >
              <FontAwesomeIcon icon={s.icon} className="text-xs" />
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
