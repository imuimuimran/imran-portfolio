"use client";

import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "Started Web Development",
    description:
      "Began learning HTML, CSS and JavaScript.",
  },

  {
    year: "2024",
    title: "Frontend Development",
    description:
      "Learned React, Tailwind CSS and modern UI development.",
  },

  {
    year: "2025",
    title: "Backend Development",
    description:
      "Built APIs with Node.js, Express and MongoDB.",
  },

  {
    year: "2026",
    title: "Next.js Journey",
    description:
      "Building production-ready full-stack applications using Next.js.",
  },
];

export default function Journey() {
  return (
    <section className="py-24">
      <div className="section-container">

        <h2
          className="
          text-4xl
          font-bold
          text-center
          mb-12
          "
        >
          My Learning Journey
        </h2>

        <div
          className="
          max-w-4xl
          mx-auto
          space-y-6
          "
        >
          {journey.map((item) => (
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
                font-bold
                "
              >
                {item.year}
              </span>

              <h3
                className="
                text-xl
                font-semibold
                mt-2
                "
              >
                {item.title}
              </h3>

              <p
                className="
                text-muted-foreground
                mt-2
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