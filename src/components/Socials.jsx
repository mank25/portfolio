import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import siteData from "../pages/siteData.json";

const Socials = () => {
  const { socials } = siteData;

  return (
    <div className="flex items-center gap-2">
      {socials.map((social, i) => (
        <a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-all duration-200"
        >
          <FontAwesomeIcon icon={social.icon} className="text-sm" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
