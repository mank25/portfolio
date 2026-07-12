import siteData from "../pages/siteData.json";

const Experience = () => {
  const { experience } = siteData;

  return (
    <section id="experience">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
        Career
      </p>
      <h2 className="text-2xl font-bold text-slate-900 mb-10">Work Experience</h2>

      <div className="relative space-y-5">
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-slate-200 hidden sm:block"></div>

        {experience.map((exp) => (
          <div key={exp.id} className="relative sm:pl-8">
            {/* Timeline dot */}
            <div className="absolute left-0 top-5 w-3.5 h-3.5 rounded-full border-2 border-slate-300 bg-white hidden sm:block"></div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-sm transition-all duration-200">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-semibold text-slate-900 text-base">{exp.position}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {exp.company}
                    {exp.location && (
                      <span className="text-slate-400"> · {exp.location}</span>
                    )}
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600 whitespace-nowrap shrink-0">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-2 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
                    {h}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
