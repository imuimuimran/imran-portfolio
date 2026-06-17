import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,

    slug: "scholar-stream",

    title: "Scholar Stream",

    image:
      "/projects/scholar-stream.png",

    description:
      "A scholarship management platform helping students discover and apply for scholarship opportunities.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "JWT",
    ],

    liveLink:
      "https://scholar-stream-e2d14.web.app/",

    githubLink:
      "https://github.com/imuimuimran/scholar-stream-client",

    challenges: [
      "Role-based authentication",

      "Secure JWT implementation",

      "Complex scholarship filtering",

      "Application management workflow",
    ],

    futurePlans: [
      "Payment gateway integration",

      "AI scholarship suggestions",

      "Analytics dashboard",
    ],
  },

  {
    id: 2,

    slug: "skillhub-academy",

    title: "SkillHub Academy",

    image:
      "/projects/skillhub-academy.png",

    description:
      "Course management platform for students and instructors.",

    technologies: [
      "Next.js",
      "MongoDB",
      "Firebase",
      "Node.js",
      "Express",
    ],

    liveLink:
      "https://skillhub-academy-iota.vercel.app/",

    githubLink:
      "https://github.com/imuimuimran/skillhub-academy",

    challenges: [
      "Dashboard architecture",

      "Authentication system",

      "Course enrollment workflow",

      "Database relationships",
    ],

    futurePlans: [
      "Certificates",

      "Video courses",

      "Live classes",
    ],
  },

  {
    id: 3,

    slug: "food-lovers-network",

    title:
      "Local Food Lovers Network",

    image:
      "/projects/food-lovers.png",

    description:
      "Community platform connecting food enthusiasts and local food lovers.",

    technologies: [
      "React",
      "MongoDB",
      "Express",
      "Firebase",
    ],

    liveLink:
      "https://food-lovers-b-12-a-10.netlify.app/",

    githubLink:
      "https://github.com/imuimuimran/local-food-lovers-network-client",

    challenges: [
      "User-generated content",

      "Responsive design",

      "Community interactions",
    ],

    futurePlans: [
      "Food recommendation engine",

      "Community groups",

      "Event management",
    ],
  },
];