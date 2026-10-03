import { Reveal } from "./fx";
import siteData from "../pages/siteData.json";

const Experience = () => {
  const { experience } = siteData;

  return (
    <section id="experience" className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
      <h2 className="lg:col-span-4 text-3xl sm:text-4xl font-semibold tracking-display leading-tight lg:sticky lg:top-24 self-start">
        Where I&apos;ve worked
      </h2>

      <ol className="lg:col-span-8 relative pl-7 border-l border-line space-y-10">
        {experience.map((exp, i) => (
          <Reveal as="li" key={exp.id} delay={i * 80} className="relative">
            <span aria-hidden="true" className="dot absolute -left-[33px] top-2 w-2.5 h-2.5 rounded-full" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
              <h3 className="text-xl font-medium tracking-tight2">
                {exp.position}
                <span className="text-ink-subtle"> · {exp.company}</span>
              </h3>
              <p className="font-mono text-xs text-ink-subtle whitespace-nowrap tabular-nums">
                {exp.startDate} – {exp.endDate}
              </p>
            </div>
            {exp.location && <p className="mt-1 text-sm text-ink-subtle">{exp.location}</p>}

            <ul className="mt-5 space-y-3">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-muted">
                  <span aria-hidden="true" className="mt-[0.7em] w-1 h-1 rounded-full bg-ink-subtle shrink-0" />
                  <span className="max-w-[68ch]">{h}</span>
                </li>
              ))}
            </ul>

            {exp.technologies?.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-ink-subtle">
                {exp.technologies.map((t) => (
                  <li key={t.title}>{t.title}</li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
