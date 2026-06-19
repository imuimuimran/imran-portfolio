// "use client";

// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// const stats = [
//   {
//     value: "3+",
//     suffix: "+",
//     label: "Major Projects",
//   },
//   {
//     value: "10+",
//     suffix: "+",
//     label: "Technologies",
//   },
//   {
//     value: "100%",
//     suffix: "+",
//     label: "Learning Mindset",
//   },
// ];

// export default function HeroStats() {
//   return (
//     <div className="grid grid-cols-3 gap-4 mt-10">
//       {stats.map((item) => (
//         <motion.div
//           key={item.label}
//           whileHover={{
//             scale: 1.05,
//           }}
//           className="border rounded-xl p-4 text-center"
//         >
//           {/* <h3 className="text-2xl font-bold">
//             {item.value}
//           </h3> */}

//           <h3 className="text-2xl font-bold">
//             <CountUp
//               end={item.value}
//               duration={2}
//             />
//             {item.suffix}
//           </h3>

//           <p className="text-sm text-muted-foreground">
//             {item.label}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   );
// }



"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    value: 3,
    suffix: "+",
    label: "Major Projects",
  },
  {
    value: 10,
    suffix: "+",
    label: "Technologies",
  },
  {
    value: 2,
    suffix: "+",
    label: "Years Learning",
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
          className="
            border
            rounded-xl
            p-4
            text-center
          "
        >
          <h3 className="text-2xl font-bold">
            <CountUp
              end={item.value}
              duration={2}
            />
            {item.suffix}
          </h3>

          <p className="text-sm text-muted-foreground">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}