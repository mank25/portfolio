import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tag = ({ props }) => {
  if (!props.img && !props.path) return null;

  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200 group cursor-default">
      <div className="w-8 h-8 flex items-center justify-center">
        {props.path ? (
          <img
            src={props.img}
            alt={props.title}
            className="w-6 h-6 object-contain"
          />
        ) : (
          <FontAwesomeIcon
            icon={props.prefix ? `${props.prefix} ${props.img}` : `fa-brands ${props.img}`}
            style={{ color: props.color }}
            className="text-xl"
          />
        )}
      </div>
      <span className="text-[10px] font-medium text-slate-500 text-center leading-tight group-hover:text-slate-700 transition-colors">
        {props.title}
      </span>
    </div>
  );
};

export default Tag;
