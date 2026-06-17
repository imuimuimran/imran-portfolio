"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  skill: string;
}

export default function SkillCard({
  skill,
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      className="
      border
      rounded-xl
      p-4
      text-center
      font-medium
      backdrop-blur
      "
    >
      {skill}
    </motion.div>
  );
}