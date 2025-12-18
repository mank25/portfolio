// App.js
import "./App.css";
import Tag from "./components/Tag";
import Project from "./pages/Project";
import Tech from "./pages/Tech.json";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
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
  faLinkedin
);

function App() {
  const { profile } = siteData;
  
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-600 md:px-[10%] max-sm:px-4 sm:px-6 font-[Manrope] pt-20 md:pt-24 pb-8">
        <header className="max-sm:hidden">
          <Socials />
        </header>

        <section
          className="flex md:flex-row justify-between max-sm:flex-col-reverse max-sm:pt-8 pb-12 md:pb-20 max-sm:gap-8"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="md:pt-20 md:w-2/3 text-lg max-sm:pt-6">
            
            <h1 id="about-heading" className="profile-heading">
              Hey, I am <span className="text-gray-900">{profile.name}</span><br />
              {profile.title}.
            </h1>

            <p className="bio-text text-base md:text-lg max-w-screen-sm mt-6">
              {profile.bio}
            </p>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View resume (opens in new tab)"
              className="btn-resume inline-flex items-center text-white px-6 py-3 rounded cursor-pointer max-w-fit mt-8"
            >
              <span className="text-base">View Resume</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                className="h-5 w-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
              </svg>
            </a>
          </div>

          <div className="flex justify-center items-center mb-8 md:mb-0 shrink-0">
            <img
              src={profile.image}
              alt={`${profile.name} — profile`}
              className="profile-image rounded-full w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <section aria-labelledby="tech-heading" className="py-12 md:py-16 tech-section border-t border-gray-200">
          <h2
            id="tech-heading"
            className="tech-heading flex justify-center text-center md:mb-12 max-sm:mb-8 text-xl md:text-2xl"
          >
            Technologies I Use
          </h2>

          <div className="flex flex-row flex-wrap justify-center md:mx-40 max-sm:mx-2 sm:mx-4 mb-12 gap-2 md:gap-3">
            {Tech.map((tech, index) => {
              const key = tech.id ?? tech.name ?? Math.random().toString(36).slice(2, 9);
              return <div key={key}><Tag props={tech} /></div>;
            })}
          </div>
        </section>

        <section className="py-12 md:py-16 border-t border-gray-200">
          <Experience />
        </section>

        <section className="py-12 md:py-16 border-t border-gray-200">
          <Project />
        </section>

        <section className="py-12 md:py-16 border-t border-gray-200">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
