import Card from "../components/Card";
import siteData from "./siteData.json";
import { Tab } from "@headlessui/react";

const Project = () => {
  const projects = siteData.projects.filter((item) => !Object.hasOwn(item, "_comment"));

  const tabs = [
    { label: "All", items: projects },
    { label: "AI & Automation", items: projects.filter((p) => p.tags.includes("ai")) },
    { label: "Full Stack", items: projects.filter((p) => p.tags.includes("fs")) },
    { label: "Backend", items: projects.filter((p) => p.tags.includes("b")) },
  ];

  return (
    <section id="projects">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-display leading-tight">
          A few things I've made
        </h2>
      </div>

      <Tab.Group>
        <Tab.List className="flex flex-wrap gap-x-1 gap-y-1 mb-8 border-b border-line">
          {tabs.map((tab) => (
            <Tab
              key={tab.label}
              className={({ selected }) =>
                `relative px-3 py-2.5 -mb-px text-sm border-b-2 transition-colors outline-none focus-visible:text-ink ${
                  selected
                    ? "border-accent-hover text-ink"
                    : "border-transparent text-ink-subtle hover:text-ink-muted"
                }`
              }
            >
              {tab.label}
              <span className="ml-1.5 font-mono text-xs text-ink-subtle tabular-nums">{tab.items.length}</span>
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {tabs.map((tab) => (
            <Tab.Panel key={tab.label}>
              {tab.items.length === 0 ? (
                <p className="py-16 text-sm text-ink-subtle">Nothing in this category yet.</p>
              ) : (
                <div className="grid gap-4 lg:grid-cols-2">
                  {tab.items.map((item, i) => (
                    <div key={item.title} className={`rise flex ${i === 0 && tab.items.length > 2 ? "lg:col-span-2" : ""}`} style={{ "--i": i }}>
                      <Card props={item} featured={i === 0 && tab.items.length > 2} />
                    </div>
                  ))}
                </div>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default Project;
