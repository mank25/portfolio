import { useState } from "react";
import Project from "./pages/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TechIcon from "./components/TechIcon";
import Socials from "./components/Socials";
import CommandPalette from "./components/CommandPalette";
import { Reveal, ScrollProgress, PointerFx, Rotator } from "./components/fx";
import siteData from "./pages/siteData.json";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faHtml5,
  faReact,
  faNodeJs,
  faGithub,
  faCss3Alt,
  faJs,
  faJava,
  faLinkedin,
  faPython,
  faDocker,
  faLinux,
  faBitbucket,
  faYoutube,
  faInstagram,
  faMeta,
  faWhatsapp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faTwitter,
  faFontAwesome,
  faHtml5,
  faReact,
  faNodeJs,
  faGithub,
  faCss3Alt,
  faJs,
  faJava,
  faLinkedin,
  faPython,
  faDocker,
  faLinux,
  faBitbucket,
  faYoutube,
  faInstagram,
  faMeta,
  faWhatsapp,
  faGoogle
);

const techStack = [
  {
    category: "Languages & Frameworks",
    items: [
      { title: "Python",     img: "fa-python",   color: "#3776AB" },
      { title: "JavaScript", img: "fa-js",        color: "#F7DF1E" },
      { title: "TypeScript", path: true, img: "/portfolio/myTypescript.png" },
      { title: "React",      img: "fa-react",     color: "#61DAFB" },
      { title: "Node.js",    img: "fa-node-js",   color: "#84CC2B" },
      { title: "NestJS",     path: true, img: "/portfolio/myNest.png" },
      { title: "FastAPI",    path: true, img: "/portfolio/myAPI.png" },
      { title: "Django",     path: true, img: "/portfolio/myDjango.png" },
    ],
  },
  {
    category: "Databases & Storage",
    items: [
      { title: "MySQL",   path: true, img: "/portfolio/mySql.png" },
      { title: "MongoDB", path: true, img: "/portfolio/myMongo.png" },
      { title: "Redis",   img: "fa-server",      prefix: "fa-solid", color: "#DC382D" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { title: "Git",       img: "fa-code-branch", prefix: "fa-solid", color: "#F05033" },
      { title: "Docker",    img: "fa-docker",      color: "#0db7ed" },
      { title: "Azure",     svgPath: "M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684", svgColor: "#0078D4" },
      { title: "Linux",     img: "fa-linux",       color: "#FCC624" },
      { title: "Bitbucket", img: "fa-bitbucket",   color: "#0052CC" },
      { title: "Postman",   img: "fa-paper-plane", prefix: "fa-solid", color: "#FF6C37" },
    ],
  },
  {
    category: "AI & LLM Tools",
    items: [
      { title: "LangChain",        img: "fa-link",     prefix: "fa-solid", color: "#1C7C5C" },
      { title: "Hugging Face",     img: "fa-robot",    prefix: "fa-solid", color: "#FFB700" },
      { title: "RAG Pipelines",    img: "fa-brain",    prefix: "fa-solid", color: "#7C3AED" },
      { title: "Vector Databases", img: "fa-database", prefix: "fa-solid", color: "#0EA5E9" },
      { title: "Embeddings",       img: "fa-sitemap",  prefix: "fa-solid", color: "#8B5CF6" },
      { title: "Semantic Search",  img: "fa-search",   prefix: "fa-solid", color: "#10B981" },
      { title: "Pinecone",         img: "fa-database", prefix: "fa-solid", color: "#00B05B" },
      { title: "FAISS",            img: "fa-cube",     prefix: "fa-solid", color: "#0467DF" },
    ],
  },
  {
    category: "Integrations & Automation",
    items: [
      { title: "Meta APIs",                img: "fa-meta",      color: "#0668E1" },
      { title: "WhatsApp Automation",      img: "fa-whatsapp",  color: "#25D366" },
      { title: "Google OAuth",             img: "fa-google",    color: "#4285F4" },
      { title: "Google Tag Manager",       img: "fa-tags",      prefix: "fa-solid", color: "#4285F4" },
      { title: "Google Analytics 4",       img: "fa-chart-line", prefix: "fa-solid", color: "#F9AB00" },
      { title: "SMTP",                     img: "fa-envelope",  prefix: "fa-solid", color: "#8A8F98" },
      { title: "Email Automation",         img: "fa-envelope-open-text", prefix: "fa-solid", color: "#EA4335" },
    ],
  },
  {
    category: "Concepts & Skills",
    items: [
      { title: "REST API Development", img: "fa-plug",         prefix: "fa-solid", color: "#6366F1" },
      { title: "ETL Pipelines",        img: "fa-exchange-alt", prefix: "fa-solid", color: "#F59E0B" },
      { title: "Data Modeling",        img: "fa-table",        prefix: "fa-solid", color: "#06B6D4" },
      { title: "Query Optimization",   img: "fa-bolt",         prefix: "fa-solid", color: "#EAB308" },
      { title: "Auth & Authorization", img: "fa-lock",         prefix: "fa-solid", color: "#EF4444" },
      { title: "Chunking Strategies",  img: "fa-layer-group",  prefix: "fa-solid", color: "#8B5CF6" },
      { title: "Agile Methodology",    img: "fa-sync-alt",     prefix: "fa-solid", color: "#22C55E" },
    ],
  },
];

const TechChip = ({ item }) => (
  <li className="chip inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-line bg-surface-1 text-[13px] text-ink-muted hover:border-line-strong hover:text-ink transition-colors">
    <TechIcon item={item} />
    {item.title}
  </li>
);

function App() {
  const { profile } = siteData;
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-3 focus:py-2 focus:rounded-md focus:bg-accent focus:text-canvas"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <PointerFx />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />

      {/* Hero */}
      <header
        id="about"
        className="relative min-h-[100dvh] flex items-center px-6 lg:px-8 pt-28 pb-20 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[34rem] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 25% 0%, rgba(14,124,102,0.08), transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-8">
            <p className="rise inline-flex items-center gap-2.5 text-sm text-ink-subtle" style={{ "--i": 0 }}>
              <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[#27a644]" />
              Building Blookmark, a platform for readers with blogs, book reviews, and quizzes
            </p>

            <h1
              className="rise mt-7 text-[clamp(3rem,9vw,6rem)] font-semibold tracking-display leading-[0.98]"
              style={{ "--i": 1 }}
            >
              {profile.name}
            </h1>

            <p
              className="rise mt-5 text-xl sm:text-2xl text-ink-muted tracking-tight2"
              style={{ "--i": 2 }}
            >
              {profile.title}, New Delhi.
            </p>

            <p className="rise mt-3 text-base sm:text-lg text-ink-subtle" style={{ "--i": 2 }}>
              I build <Rotator words={["web apps", "REST APIs", "AI and RAG systems", "automation and integrations", "data pipelines"]} />
            </p>

            <p className="rise mt-8 max-w-[62ch] text-base sm:text-lg leading-relaxed text-ink-subtle" style={{ "--i": 3 }}>
              {profile.bio}
            </p>

            <div className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-4" style={{ "--i": 4 }}>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-accent text-canvas text-sm font-medium hover:bg-accent-hover active:scale-[0.98] transition-[background-color,transform] duration-200"
              >
                View resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-ink-muted hover:text-ink underline decoration-line-strong hover:decoration-ink-subtle transition-colors"
              >
                Get in touch
              </a>
              <Socials className="sm:ml-auto" />
            </div>
          </div>

          <div className="rise lg:col-span-4 flex lg:justify-end" style={{ "--i": 3 }}>
            <div>
              <img
                src={profile.image}
                alt={`Portrait of ${profile.name}`}
                className="w-44 h-56 sm:w-56 sm:h-72 lg:w-64 lg:h-80 object-cover rounded-2xl border border-line grayscale-[0.25] hover:grayscale-0 transition-[filter] duration-500"
              />
            </div>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Stack */}
        <section id="stack" className="px-6 lg:px-8 py-24 border-t border-line">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-x-12 gap-y-10">
            <h2 className="lg:col-span-4 text-3xl sm:text-4xl font-semibold tracking-display leading-tight lg:sticky lg:top-24 self-start">
              Tools I reach for
            </h2>

            <dl className="lg:col-span-8 divide-y divide-line">
              {techStack.map(({ category, items }, ci) => (
                <Reveal key={category} delay={ci * 70} className="py-6 first:pt-0 grid sm:grid-cols-[10rem_1fr] gap-3 sm:gap-8">
                  <dt className="text-sm text-ink-subtle pt-1.5">{category}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <TechChip key={item.title} item={item} />
                      ))}
                    </ul>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        <section className="px-6 lg:px-8 py-24 border-t border-line">
          <div className="max-w-6xl mx-auto">
            <Experience />
          </div>
        </section>

        <section className="px-6 lg:px-8 py-24 border-t border-line">
          <div className="max-w-6xl mx-auto">
            <Project />
          </div>
        </section>

        <section className="px-6 lg:px-8 pt-24 pb-12 border-t border-line">
          <div className="max-w-6xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
