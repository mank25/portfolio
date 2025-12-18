import React from "react";
import Card from "../components/Card";
import siteData from "./siteData.json";
import { Tab } from "@headlessui/react";

const Project = () => {
  const projects = siteData.projects;

  // remove commented objects
  const usefulProjects = projects.filter(
    (item) => !item.hasOwnProperty("_comment")
  );

  const fs = usefulProjects.filter((item) => item.tags.includes("fs"));
  const f = usefulProjects.filter((item) => item.tags.includes("f"));
  const b = usefulProjects.filter((item) => item.tags.includes("b"));
  const d = usefulProjects.filter((item) => item.tags.includes("d"));

  const TabButton = ({ selected, children }) => (
    <button
      className={`
        px-4 py-2 rounded-lg font-semibold whitespace-nowrap
        text-xs md:text-sm lg:text-base transition-all duration-300

        ${
          selected
            ? "bg-gray-900 text-white shadow-md"
            : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
        }
      `}
    >
      {children}
    </button>
  );

  return (
    <div className="border-t border-gray-200 pt-14 pb-8" id="projects">
      {/* Title */}
      <div className="text-gray-900 text-2xl md:text-3xl font-bold mb-10">
        Projects
      </div>

      <Tab.Group>
        {/* Tabs */}
        <Tab.List
          className="
            flex flex-row gap-2 md:gap-4 mb-8 
            overflow-x-auto scrollbar-hide pb-2 
            max-w-full
          "
        >
          <Tab className="focus:outline-none">
            {({ selected }) => (
              <TabButton selected={selected}>
                All ({usefulProjects.length})
              </TabButton>
            )}
          </Tab>

          <Tab className="focus:outline-none">
            {({ selected }) => (
              <TabButton selected={selected}>Full-Stack ({fs.length})</TabButton>
            )}
          </Tab>

          <Tab className="focus:outline-none">
            {({ selected }) => (
              <TabButton selected={selected}>
                Frontend ({f.length})
              </TabButton>
            )}
          </Tab>

          <Tab className="focus:outline-none">
            {({ selected }) => (
              <TabButton selected={selected}>Backend ({b.length})</TabButton>
            )}
          </Tab>

          <Tab className="focus:outline-none">
            {({ selected }) => (
              <TabButton selected={selected}>Design ({d.length})</TabButton>
            )}
          </Tab>
        </Tab.List>

        {/* Panels */}
        <Tab.Panels className="mt-6">
          {/* Master Reusable Grid */}
          {[
            usefulProjects,
            fs,
            f,
            b,
            d
          ].map((items, panelIndex) => (
            <Tab.Panel
              key={panelIndex}
              className="
                grid gap-6 
                sm:grid-cols-2 
                lg:grid-cols-3 
                animate-fadeInSlow
              "
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card props={item} />
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Project;
