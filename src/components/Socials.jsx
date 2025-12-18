import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import siteData from "../pages/siteData.json";

const Socials = () => {
  const { socials } = siteData;

  return (
    <div
      className="
        fixed 
        right-4
        top-1/2 
        -translate-y-1/2 
        flex 
        flex-col
        gap-4
        z-50

        max-sm:flex-row 
        max-sm:bottom-4 
        max-sm:left-1/2 
        max-sm:-translate-x-1/2 
        max-sm:translate-y-0 
        max-sm:top-auto 
        max-sm:right-auto
        max-sm:bg-white 
        max-sm:shadow-lg 
        max-sm:px-4 
        max-sm:py-2 
        max-sm:rounded-full
      "
    >
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="
            group 
            relative 
            flex 
            items-center 
            justify-center 
            w-12 
            h-12
            bg-white 
            rounded-full 
            shadow-md 
            border 
            border-gray-200
            transition-all 
            duration-300 
            hover:shadow-lg 
            hover:scale-110
          "
        >
          <FontAwesomeIcon
            icon={social.icon}
            className="
              text-xl 
              text-gray-600 
              transition-all 
              duration-300 
              group-hover:text-gray-900
            "
          />

          {/* Tooltip (hidden for mobile) */}
          <div
            className="
              absolute 
              right-full 
              mr-3 
              bg-gray-800 
              text-white 
              text-xs 
              px-3 
              py-1 
              rounded 
              whitespace-nowrap 
              opacity-0 
              pointer-events-none
              transition-all 
              duration-300 
              group-hover:opacity-100 
              group-hover:translate-x-[-4px]
              max-sm:hidden
            "
          >
            {social.label}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
