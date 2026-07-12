import React from "react";
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
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Work</p>
      <h2 className="text-2xl font-bold text-slate-900 mb-10">Featured Projects</h2>

      <Tab.Group>
        <div className="flex mb-8">
          <Tab.List className="flex gap-1 p-1 bg-slate-100 rounded-lg">
            {tabs.map((tab) => (
              <Tab key={tab.label} as="div" className="focus:outline-none">
                {({ selected }) => (
                  <button
                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                      selected
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {tab.label}
                    <span className="ml-1.5 text-xs opacity-60">{tab.items.length}</span>
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels>
          {tabs.map((tab) => (
            <Tab.Panel key={tab.label}>
              {tab.items.length === 0 ? (
                <div className="text-center py-16 text-slate-400 text-sm">
                  No projects in this category yet.
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {tab.items.map((item, i) => (
                    <Card key={i} props={item} />
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
