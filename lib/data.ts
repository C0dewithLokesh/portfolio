import Chat from "@/assets/portfolio/Chat-app.png";
import Dashboard from "@/assets/portfolio/dashboard.png";
import Movie from "@/assets/portfolio/Movie.png";
import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Vaish College of Enginnering",
    location: "Rohtak, Haryana",
    Workp1: "",
    workp1link: "",
    Workp2: "",
    workp2link: "",
    Workp3: "",
    workp3link: "",
    Workp4: "",
    description:
      "I am currently in my fourth year of Computer Science and Engineering with 8.00 CGPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-present",
  },

  {
    title: "Frontend Developer Intern",
    location: "Thinkgestalt.Tech (Remote)",
    Workp1:
      " 1. Developed and implemented multiple website pages using HTML, CSS, JavaScript, and React.js, resulting in improved user experience and engagement.",
    workp1link: "",
    Workp2:
      " 2. Developed frontend logic, implemented key functionalities to improve user experience on the website.",
    workp2link: "",
    Workp3:
      " 3. Built visually appealing Android apps using React Native and Ionic Framework.",
    workp3link: "",

    description:
      "My stack includes React, JavaScript, Redux, TypeScript, Tailwind, React Native and Ionic Framework.   I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "06/2023 - 12/2023",
  },
  {
    title: "FullStack Developer",
    location: "TechVastra",
    Workp1:
      " 1. As a founding member of the company, I play a pivotal role in the development of our B2B app. With a primary focus on Frontend development.",
    workp1link: "",
    Workp2:
      " 2. I've taken on the responsibility of creating a seamless and user-friendly interface. Leveraging my expertise in technologies such as ReactJS and React Native, I have successfully crafted the client-side of our application.",
    workp2link: "",
    Workp3:
      " 3. In addition to my frontend responsibilities, I've actively contributed to the Backend development using technologies like MongoDB and Express.",
    workp3link: "",

    description:
      "My stack includes React, JavaScript, Redux, TypeScript, Tailwind, React Native, Node.Js, express and MongoDb.   I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "12/2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Chat-App",
    description:
      "Developed a real-time chat application from scratch.It allows users to engage in real-time conversations and send text messages, images, as well as documents.",
    tags: ["Next.js", "React", "Javascript", "Tailwind", "Firebase"],
    imageUrl: Chat,
    live: "https://team-chat-app-eight.vercel.app/register",
    Github: "https://github.com/C0dewithLokesh/chat-app",
    Github2: "https://github.com/C0dewithLokesh/chat-app",
  },
  {
    title: "Movie App",
    description:
      "This web application is built using React.js, SCSS and connects effortlessly to an API, offering an ever-changing collection of highly praised movies. The application provides a seamless interface for accessing critically acclaimed films through its integration with an external API.",
    tags: ["React", "SCSS", "TMDB Api"],
    imageUrl: Movie,
    live: "https://movix-main-psi.vercel.app/",
    Github: "https://github.com/C0dewithLokesh/Movie_App",
    Github2: "https://github.com/C0dewithLokesh/Movie_App",
  },
  {
    title: "Finance Dashboard",
    description:
      "Developed a dynamic finance dashboard using React.js and TypeScript, offering a responsive and interactive user interface for visualizing and analyzing financial data. Integrated Material-UI to create a polished and user-friendly design, ensuring a seamless and intuitive experience for users navigating the financial dashboard.",
    tags: ["React", "recharts", "typescript", "Material-UI"],
    imageUrl: Dashboard,
    live: "https://finanseer-dashboard.vercel.app/",
    Github: "https://github.com/C0dewithLokesh/Finanseer-Dashboard/tree/main",
    Github2: "https://github.com/C0dewithLokesh/Finanseer-Dashboard/tree/main",
  },
] as const;

export const Frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Redux",
  "React Native",
  "Ionic Framework",
] as const;

export const Backend = [
  "Express",
  "Node.js",
  "MongoDB",
  "Postgres",
  "Prisma",
] as const;

export const Blockchain = [
  "Solidity",
  "Truffle",
  "HardHat",
  "Ether.js",
  "Web3.js",
] as const;
export const Tools = ["Git", "GitHub", "Postman", "npm", "VS code"] as const;
