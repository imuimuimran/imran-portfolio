"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="text-blue-500 font-medium">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-2">
        {title}
      </h2>
    </motion.div>
  );
}