import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";



export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  ",React, Next.js, Node, MongoDb, Tailwind, MySql, Javascript, MySql, Python, C++,";

export const PROJECTS = [
  {
    id: 1,
    title: "Full Stack Blog",
    description:
      "A simple blog platform built with full-stack technologies, enabling users to create, edit, and interact with posts through a seamless and dynamic interface.",
    imgSrc: project1,
    link: "https://github.com/mank25/FullStack-Blog",
  },
  {
    id: 2,
    title: "Mobile Showroom Management System",
    description:
      "A system to manage mobile showroom inventory, sales, and customer data using OOP principles for streamlined operations",
    imgSrc: project2,
    link: "https://github.com/mank25/mobile-showroom-management-system",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills. ",
    imgSrc: project3,
    link: "https://github.com/mank25/portfolio",
  },
  {
    id: 4,
    title: "Portfolio Maker",
    description:
      "A web-based Portfolio Maker allowing users to create and customize professional portfolios to showcase their skills and projects.",
    imgSrc: project4,
    link: "https://github.com/mank25/portfolio-maker",
  },
];

export const ABOUT =
  "Hello! I'm Mayank Sharma, a Computer Science Engineering student graduating in 2025 and a passionate software developer with experience in web and mobile development. Skilled in PHP, Python, C++, and the MERN stack. I'm also committed to improving my Data Structures and Algorithms (DSA) knowledge and actively practice on LeetCode. My experience spans data migration, building responsive websites, and optimizing algorithms. Outside of tech, I enjoy robotics, sports, and meeting new people. I’m driven to create seamless digital experiences and continually grow as a developer.";

export const EXPERIENCES = [
  {
    company: "Infomenja Services",
    role: "SDE Intern",
    year: "January 2024 – March 2024",
    description:
      "Developed a responsive, static website for seamless performance and navigation, and engineered a Python script to accelerate data transfer from Excel to MySQL, reducing insertion time by 4.5 seconds.",
  },
  {
    company: "Tresor Systems Private Limited",
    role: "SDE Intern",
    year: "July 2023 – August 2023",
    description:
      "Spearheaded the implementation of an HRM Portal to streamline statutory documentation, and resolved complex Python code issues by debugging and optimizing algorithms for enhanced performance and reliability",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/mayanksharma_0225/",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/KevlarSharma",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/mank25",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/mayank-sharma-4b330b229/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "mayanksharma.ms.0225@gmail.com",
  phone: "+91 8826004402",
};
