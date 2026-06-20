import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,

    slug: "scholar-stream",

    title: "Scholar Stream",

    image: "/projects/scholar-stream.png",

    description:
      "A scholarship management platform helping students discover and apply for scholarship opportunities.",

    overview:
      "Scholar Stream is a full-stack scholarship management platform where students can discover, apply for, and manage scholarship opportunities. The platform also provides administrative tools for managing applications, reviews, and scholarship data.",

    features: [
      "User Authentication with Firebase",
      "Role-Based Dashboard",
      "Scholarship Search and Filtering",
      "Scholarship Application System",
      "Review and Rating System",
      "Admin Scholarship Management",
      "JWT Protected Routes",
      "Responsive Design",
    ],

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
      "Implementing role-based authentication",
      "Managing secure JWT authorization",
      "Complex scholarship filtering",
      "Building a scalable application workflow",
    ],

    futurePlans: [
      "Payment Gateway Integration",
      "AI Scholarship Recommendation System",
      "Advanced Analytics Dashboard",
      "Email Notification System",
    ],
  },

  {
    id: 2,

    slug: "skillhub-academy",

    title: "SkillHub Academy",

    image: "/projects/skillhub-academy.png",

    description:
      "A course management platform designed for students and instructors.",

    overview:
      "SkillHub Academy is a learning management system that allows instructors to create courses and students to browse, enroll, and manage their learning journey through a modern educational platform.",

    features: [
      "Course Creation & Management",
      "Student Enrollment System",
      "Role-Based Dashboard",
      "Authentication & Authorization",
      "Protected Routes",
      "Course Details Page",
      "Responsive User Interface",
      "Modern Next.js Architecture",
    ],

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
      "Designing scalable dashboard architecture",
      "Managing authentication flows",
      "Course enrollment workflow",
      "Database relationship management",
    ],

    futurePlans: [
      "Video Learning Support",
      "Course Certificates",
      "Live Classes",
      "Instructor Analytics Dashboard",
    ],
  },

  {
    id: 3,

    slug: "food-lovers-network",

    title: "Local Food Lovers Network",

    image: "/projects/food-lovers.png",

    description:
      "A community platform connecting local food enthusiasts.",

    overview:
      "Local Food Lovers Network is a community-driven web application where food enthusiasts can share food experiences, discover local food events, and connect with people who share similar interests.",

    features: [
      "Community-Based Platform",
      "Food Experience Sharing",
      "Event Discovery",
      "User Authentication",
      "Responsive Design",
      "CRUD Operations",
      "Interactive UI",
      "Dynamic Content Management",
    ],

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
      "Managing user-generated content",
      "Ensuring responsive layouts",
      "Building community interaction features",
    ],

    futurePlans: [
      "Food Recommendation Engine",
      "Community Groups",
      "Event Management System",
      "Social Networking Features",
    ],
  },
];