export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  link?: string; // The '?' means this property is optional
}

export const education: EducationItem[] = [
  {
    degree: "Master of Arts - MA",
    institution: "Govt. B. L. College, Khulna",
    duration: "July 2008 - March 2010",
    description:
      "Master of Arts in English focusing on literary history, critical theory, and advanced textual analysis. Developed strong research capabilities, refined academic writing skills, and cultivated a deep understanding of cultural and historical contexts through rigorous coursework and independent study.",
    // No link here; the template safely skips it now
  },
  {
    degree: "CSE Fundamental with Phitron",
    link: "https://phitron.io/verification?validationNumber=PHBATCH221975801081",
    institution: "Phitron.io | online course",
    duration: "September 2022 - October 2023",
    description:
      "CSE Fundamentals with Phitron is a Computer Science Fundamentals organized by Phitron.io. The key coursework & skills they provided are: Programming & DSA: Advanced concepts in C, C++, Data Structures (Stack, Queue, Tree, Graph), and Algorithm Design. Problem Solving: Solved 500+ algorithmic problems across various online platforms and participated in competitive coding. Software Development: Object-Oriented Programming (OOP), Database Systems (SQL), and Server Management. The course Builds foundational software engineering projects utilizing modern technology and provides practical experience in backend development and server deployment.",
  },
  {
    degree: "Complete Web Development Certificate",
    link: "https://i.ibb.co.com/h1YsnwPc/imran-hossain-web-development-certificate.jpg", 
    institution: "Programming Hero",
    duration: "July 2025 - May 2026",
    description:
      "Earned after successfully graduating from Batch 12 of Programming Hero's intensive web development program. Developed robust skills in full-stack JavaScript, React, HTML5, CSS3, and modern web frameworks while building multiple production-ready portfolio projects.",
  },
];
