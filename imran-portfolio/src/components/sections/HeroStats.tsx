"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "3+",
    label: "Major Projects",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Learning Mindset",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-10">
      {stats.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{
            scale: 1.05,
          }}
          className="border rounded-xl p-4 text-center"
        >
          <h3 className="text-2xl font-bold">
            {item.value}
          </h3>

          <p className="text-sm text-muted-foreground">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}