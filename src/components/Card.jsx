import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "./Tag";

const Card = ({ props }) => {
  const propImg = props.img.split("/");

  return (
    <div
      className="
        project-card 
        flex flex-col 
        rounded-xl 
        bg-white 
        border border-gray-200 
        shadow-sm 
        hover:shadow-lg 
        transition-all 
        duration-300 
        p-4 md:p-5 
      "
    >
      {/* Title */}
      <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-2">
        {props.title}
      </h3>

      {/* Description */}
      <p
        className="
          text-gray-600 
          mb-4 
          text-sm md:text-base 
          leading-relaxed
        "
      >
        {props.description}
      </p>

      {/* Tech stack tags */}
      <div
        className="
          flex 
          flex-row 
          flex-wrap 
          gap-2 
          mb-4 
        "
      >
        {props.techstack.map((item, index) => (
          <Tag key={index} props={item} />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-auto">
        {/* Github button */}
        <a
          href={props.github}
          target="_blank"
          rel="noreferrer"
          className="
            flex items-center gap-2 px-4 py-2 
            text-sm font-medium 
            bg-gray-900 
            text-white 
            rounded-md 
            hover:bg-gray-800 
            transition-all 
            duration-200 
          "
        >
          <FontAwesomeIcon icon="fa-brands fa-github" size="sm" />
          GitHub
        </a>

        {/* Live Demo button */}
        {props.live && (
          <a
            href={props.live}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2 px-4 py-2 
              text-sm font-medium 
              bg-white 
              border border-gray-300 
              text-gray-700 
              rounded-md 
              hover:bg-gray-100 
              transition-all 
              duration-200 
            "
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M228,104a12,12,0,0,1-24,0V69l-59.51,59.51a12,12,0,0,1-17-17L187,52H152a12,12,0,0,1,0-24h64a12,12,0,0,1,12,12Zm-44,24a12,12,0,0,0-12,12v64H52V84h64a12,12,0,0,0,0-24H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V140A12,12,0,0,0,184,128Z"></path>
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
