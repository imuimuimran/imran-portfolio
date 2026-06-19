// "use client";

// import { motion } from "framer-motion";

// interface SkillCardProps {
//   skill: string;
// }

// export default function SkillCard({
//   skill,
// }: SkillCardProps) {
//   return (
//     <motion.div
//       whileHover={{
//         scale: 1.05,
//         y: -5,
//       }}
//       className="
//       border
//       rounded-xl
//       p-4
//       text-center
//       font-medium
//       backdrop-blur
//       "
//     >
//       {skill}
//     </motion.div>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillCardProps {
  skill: {
    name: string;
    icon: IconType;
  };
}

export default function SkillCard({
  skill,
}: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      className="
      border
      rounded-xl
      p-6
      flex
      flex-col
      items-center
      justify-center
      gap-3
      text-center
      font-medium
      backdrop-blur
      "
    >
      <Icon size={40} />

      <span>
        {skill.name}
      </span>
    </motion.div>
  );
}