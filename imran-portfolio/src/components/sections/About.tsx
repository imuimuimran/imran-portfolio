"use client";

import SectionHeading from "@/components/shared/SectionHeading";
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
          {/* <h2
            className="
            text-4xl
            font-bold
            text-center
            mb-10
            "
          >
            About Me
          </h2> */}

          <SectionHeading
            title="About Me"
            subtitle="Get to know me"
          />

          <div
            className="
            grid
            lg:grid-cols-3
            gap-10
            items-start
            "
          >
            {/* <p>
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
            </p> */}
            {/* Personal Card */}
            <div
              className="
              border
              rounded-2xl
              p-6
              bg-card
              "
            >
              <h3
                className="
                text-2xl
                font-bold
                mb-6
                "
              >
                Imran Hossain
              </h3>

              <div className="space-y-4">

                <div>
                  <p className="font-medium">
                    Location
                  </p>

                  <p className="text-muted-foreground">
                    Bangladesh
                  </p>
                </div>

                <div>
                  <p className="font-medium">
                    Education
                  </p>

                  <p className="text-muted-foreground">
                    Masters in English (MA)
                  </p>
                </div>

                <div>
                  <p className="font-medium">
                    Course
                  </p>

                  <p className="text-muted-foreground">
                    CSE Fundamental with Phitron
                  </p>
                </div>

                <div>
                  <p className="font-medium">
                    Focus
                  </p>

                  <p className="text-muted-foreground">
                    Full Stack Development
                  </p>
                </div>

                <div>
                  <p className="font-medium">
                    Status
                  </p>

                  <p className="text-green-500">
                    Open to Opportunities
                  </p>
                </div>

              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-2">
              <div className="space-y-8">

                <div>
                  <h3
                    className="
                    text-2xl
                    font-semibold
                    mb-4
                    "
                  >
                    My Journey
                  </h3>

                  <p
                    className="
                    text-muted-foreground
                    leading-8
                    "
                  >
                    My journey into web development
                    began with a curiosity about how
                    modern websites work behind the
                    scenes. While pursuing my Diploma
                    in Agriculture, I discovered a
                    strong passion for technology and
                    software development.
                  </p>
                </div>

                <div>
                  <p
                    className="
                    text-muted-foreground
                    leading-8
                    "
                  >
                    I started with HTML, CSS, and
                    JavaScript, gradually moving into
                    React, Tailwind CSS, Firebase,
                    MongoDB, Express.js, Node.js, and
                    Next.js. Every project teaches me
                    something new about problem-solving,
                    user experience, and application
                    architecture.
                  </p>
                </div>

                <div>
                  <p
                    className="
                    text-muted-foreground
                    leading-8
                    "
                  >
                    What excites me most is transforming
                    ideas into functional digital
                    products. Whether it's a scholarship
                    management platform, course
                    management system, or community
                    application, I enjoy solving
                    real-world problems through
                    technology.
                  </p>
                </div>

              </div>
            </div>

            

          </div>


              <div
              className="
              grid
              md:grid-cols-3
              gap-6
              mt-12
              "
            >
              <motion.div
                whileHover={{
                scale: 1.02,
              }}
              >
              <div
                className="
                border
                rounded-xl
                p-5
                "
              >
                <h4 className="font-semibold">
                  Passion
                </h4>

                <p className="text-muted-foreground mt-2">
                  Building modern web applications
                  and learning new technologies.
                </p>
              </div>
              </motion.div>

              <motion.div
                whileHover={{
                scale: 1.02,
              }}
              >
              <div
                className="
                border
                rounded-xl
                p-5
                "
              >
                <h4 className="font-semibold">
                  Interests
                </h4>

                <p className="text-muted-foreground mt-2">
                  Software engineering, UI/UX,
                  system design, and open-source.
                </p>
              </div>
              </motion.div>

              <motion.div
                whileHover={{
                scale: 1.02,
              }}
              >
              <div
                className="
                border
                rounded-xl
                p-5
                "
              >
                <h4 className="font-semibold">
                  Goal
                </h4>

                <p className="text-muted-foreground mt-2">
                  Become a highly skilled software
                  engineer building impactful
                  applications.
                </p>
              </div>
              </motion.div>

              
            </div>



        </motion.div>
      </div>
    </section>
  );
}