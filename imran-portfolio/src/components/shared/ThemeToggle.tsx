// "use client";

// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <button
//       onClick={() =>
//         setTheme(theme === "dark" ? "light" : "dark")
//       }
//     >
//       {theme === "dark" ? (
//         <Sun size={20} />
//       ) : (
//         <Moon size={20} />
//       )}
//     </button>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🚨 Prevent SSR/client mismatch
  if (!mounted) return null;

  return (
    <button onClick={() =>
      setTheme(theme === "dark" ? "light" : "dark")
    }>
      {theme === "dark" ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}