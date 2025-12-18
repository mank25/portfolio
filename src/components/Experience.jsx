import Tag from "./Tag";
import siteData from "../pages/siteData.json";

const Experience = () => {
  const { experience } = siteData;

  return (
    <section
      className="border-t border-gray-200 pt-12 md:pt-16"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className="text-gray-900 text-2xl md:text-3xl font-semibold mb-8">
        Experience
      </h2>

      {experience.map((exp, index) => (
        <article 
          key={exp.id} 
          className="experience-card p-6 md:p-8 rounded-lg mb-6 md:mb-8 border border-gray-200 bg-gray-50"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <header className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-6">
            <div className="flex-1">
              <div className="experience-title text-gray-900 text-sm md:text-base">
                {exp.position}{" "}
                <span className="text-gray-600"> at {exp.company}</span>
              </div>
              <div className="text-xs md:text-sm text-gray-500 mt-2">{exp.location}</div>
            </div>

            <div className="text-xs md:text-sm text-gray-600 px-3 py-1.5 rounded bg-gray-100 whitespace-nowrap self-start md:self-auto">
              <time dateTime={exp.startDate}>{exp.startDate}</time> – {exp.endDate}
            </div>
          </header>

          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-6">
            <div className="md:flex-1">
              <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2 md:space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="experience-highlight text-gray-600 text-sm md:text-base flex items-start">
                    <span className="text-gray-400 mr-3 mt-0.5 font-bold">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-1/3">
              <div className="text-xs md:text-sm text-gray-600 mb-3 font-semibold">Technologies</div>
              <div className="flex flex-wrap items-center gap-2">
                {exp.technologies.map((tech, idx) => (
                  <Tag key={idx} props={tech} />
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Experience;
