"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import AnimatedText from "./AnimatedText";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center"
    >
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="text-blue-500 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-3">
            Imran Hossain
          </h1>

          <h2 className="text-2xl mt-5 font-semibold">
            <AnimatedText />
          </h2>

          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            Passionate Full Stack Developer
            specializing in MERN Stack and
            Next.js. I enjoy creating modern,
            responsive and scalable web
            applications while continuously
            improving my skills.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/resume.pdf"
              download
              target="_blank"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-5 mt-8 text-2xl">

            <a
              href="https://github.com/imuimuimran"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mohd-imran-hossain/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>

          <HeroStats />
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex justify-center"
        >
          <div className="relative">

            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-blue-500/20
              blur-3xl
              "
            />

            <Image
              src="/images/imran.jpg"
              alt="Imran Hossain"
              width={350}
              height={350}
              className="
              rounded-full
              border-4
              border-blue-500
              object-cover
              relative
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}