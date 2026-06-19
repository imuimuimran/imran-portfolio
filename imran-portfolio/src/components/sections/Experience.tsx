"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const experiences = [
  {
    title:
      "Python Trainer",

    duration:
      "March 2024 - May 2024",

    description:

      "Python Programming Training across 100 'School of Future' campuses, a Government project under the ICT Division. Where teach to students programming Syntax, Control Structures, OOPs concepts, and Basic Algorithms with Python programming language.",

  },

  {
    title:
      "Self-Taught Full Stack Developer",

    duration:
      "2024 - Present",

    description:
      "Learning and building modern web applications using HTML, CSS, JavaScript, React, MongoDB, Express.js, Node.js and Next.js.",
  },

  {
    title:
      "Personal Project Development",

    duration:
      "2024 - Present",

    description:
      "Designed and developed multiple full-stack projects with authentication, CRUD functionality, role-based access control and responsive UI.",
  },

  {
    title:
      "Continuous Learning Journey",

    duration:
      "Ongoing",

    description:
      "Actively improving software engineering skills through project-based learning and modern development practices.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
    >
      <div className="section-container">

        {/* <h2
          className="
          text-4xl
          font-bold
          text-center
          mb-12
          "
        >
          Experience
        </h2> */}

        <SectionHeading
          title="Experience"
          subtitle="Professional experience and achievements"
        />

        <div
          className="
          space-y-6
          max-w-4xl
          mx-auto
          "
        >
          {experiences.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                scale: 1.02,
              }}
              className="
              border
              rounded-xl
              p-6
              "
            >
              <span
                className="
                text-blue-500
                font-medium
                "
              >
                {item.duration}
              </span>

              <h3
                className="
                text-xl
                font-bold
                mt-2
                "
              >
                {item.title}
              </h3>

              <p
                className="
                text-muted-foreground
                mt-3
                "
              >
                {item.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}