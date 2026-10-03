import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechIcon = ({ item, size = "w-4 h-4" }) => {
  if (item.path) {
    return <img src={item.img} alt="" className={`mark ${size} object-contain`} />;
  }
  if (item.svgPath) {
    return (
      <svg className={`mark ${size} shrink-0`} viewBox="0 0 24 24" fill={item.svgColor || "currentColor"} aria-hidden="true">
        <path d={item.svgPath} />
      </svg>
    );
  }
  return (
    <FontAwesomeIcon
      icon={item.prefix ? `${item.prefix} ${item.img}` : `fa-brands ${item.img}`}
      style={{ color: item.color }}
      className="mark text-sm"
    />
  );
};

export default TechIcon;
