import "./App.css";
import Project from "./pages/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import siteData from "./pages/siteData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  faInstagram
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
  <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-slate-300 transition-colors">
    {item.path ? (
      <img src={item.img} alt={item.title} className="w-4 h-4 object-contain" />
    ) : item.svgPath ? (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill={item.svgColor || "currentColor"}>
        <path d={item.svgPath} />
      </svg>
    ) : (
      <FontAwesomeIcon
        icon={item.prefix ? `${item.prefix} ${item.img}` : `fa-brands ${item.img}`}
        style={{ color: item.color }}
        className="text-sm"
      />
    )}
    {item.title}
  </span>
);

function App() {
  const { profile } = siteData;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section
        id="about"
        className="min-h-screen flex items-center px-6 lg:px-8 pt-20 pb-24 relative overflow-hidden"
      >
        {/* Subtle dot-grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.45,
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

            {/* Left: Text */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-6 h-px bg-slate-400"></span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  New Delhi, India
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black tracking-tighter text-slate-900 leading-[0.95]">
                  {profile.name}
                </h1>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  {["Backend Systems", "REST APIs", "Data Pipelines"].map((tag, i, arr) => (
                    <span key={tag} className="flex items-center gap-3">
                      <span className="text-sm font-medium text-slate-500">{tag}</span>
                      {i < arr.length - 1 && <span className="text-slate-300 text-xs">·</span>}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-base text-slate-600 leading-[1.8] max-w-md">
                {profile.bio}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
                >
                  View Resume
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:border-slate-400 hover:text-slate-900 transition-colors"
                >
                  Get in touch
                </a>
              </div>

              <div className="pt-1 border-t border-slate-100">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 mb-3 mt-4">
                  Connect
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  {[
                    { icon: "fa-brands fa-github",   label: "GitHub",   url: "https://github.com/mank25" },
                    { icon: "fa-brands fa-linkedin",  label: "LinkedIn", url: "https://www.linkedin.com/in/mayank-sharma025/" },
                    { icon: "fa-solid fa-envelope",   label: "Email",    url: "mailto:workwithmayanksharma@gmail.com" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      <FontAwesomeIcon icon={s.icon} className="text-base" />
                      <span className="font-medium">{s.label}</span>
                    </a>
                  ))}
                  <a
                    href="https://leetcode.com/u/mank25/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                    </svg>
                    <span className="font-medium">LeetCode</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl bg-slate-100 border border-slate-200 pointer-events-none" />
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="relative w-60 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-[22rem] object-cover rounded-2xl shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Tech */}
        <section className="py-20 px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Stack</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-12">Technologies I Work With</h2>

            <div className="space-y-8">
              {techStack.map(({ category, items }) => (
                <div key={category}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <TechChip key={item.title} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Experience />
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <Project />
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
