"use client";

import { TypeAnimation } from "react-type-animation";

export default function AnimatedText() {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        2000,
        "MERN Stack Developer",
        2000,
        "Next.js Developer",
        2000,
        "Problem Solver",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-blue-500"
    />
  );
}