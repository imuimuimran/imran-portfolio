// export const skills = {
//   frontend: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Next.js",
//     "Tailwind CSS",
//     "DaisyUI",
//   ],

//   backend: [
//     "Node.js",
//     "Express.js",
//     "REST API",
//     "JWT",
//     "Firebase Auth",
//   ],

//   database: [
//     "MongoDB",
//     "Mongoose",
//   ],

//   tools: [
//     "Git",
//     "GitHub",
//     "Postman",
//     "VS Code",
//     "Vercel",
//     "Netlify",
//   ],
// };



import {
  SiHtml5,
  // SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDaisyui,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const skills = {
  frontend: [
    {
      name: "HTML",
      icon: SiHtml5,
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      name: "DaisyUI",
      icon: SiDaisyui,
    },
  ],

  backend: [
    {
      name: "Node.js",
      icon: SiNodedotjs,
    },
    {
      name: "Express.js",
      icon: SiExpress,
    },
    {
      name: "JWT",
      icon: SiJsonwebtokens,
    },
    {
      name: "Firebase Auth",
      icon: SiFirebase,
    },
  ],

  database: [
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
  ],

  tools: [
    {
      name: "Git",
      icon: SiGit,
    },
    {
      name: "GitHub",
      icon: SiGithub,
    },
    {
      name: "Postman",
      icon: SiPostman,
    },
    {
      name: "VS Code",
      icon: VscVscode,
    },
    {
      name: "Vercel",
      icon: SiVercel,
    },
    {
      name: "Netlify",
      icon: SiNetlify,
    },
  ],
};