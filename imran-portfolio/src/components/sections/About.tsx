"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div
        className="
        section-container
        max-w-5xl
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2
            className="
            text-4xl
            font-bold
            text-center
            mb-10
            "
          >
            About Me
          </h2>

          <div
            className="
            text-lg
            leading-9
            text-muted-foreground
            "
          >
            <p>
              Hello! I'm Imran Hossain, a
              passionate Full Stack Developer
              who enjoys building modern web
              applications and solving
              real-world problems through
              technology.
            </p>

            <br />

            <p>
              My journey started with HTML,
              CSS and JavaScript and gradually
              expanded into React, Tailwind,
              MongoDB, Express.js, Node.js
              and Next.js.
            </p>

            <br />

            <p>
              I enjoy designing responsive
              user interfaces, building
              secure backend systems,
              optimizing performance and
              continuously learning modern
              technologies.
            </p>

            <br />

            <p>
              Beyond programming, I enjoy
              exploring new technologies,
              helping others solve technical
              challenges and improving my
              problem-solving abilities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}