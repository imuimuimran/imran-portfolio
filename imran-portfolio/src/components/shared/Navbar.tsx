"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

const links = [
  "About",
  "Skills",
  "Education",
  "Experience",
  "Projects",
  "Contact",
];


export default function Navbar() {
  const active = useActiveSection();
  return (
    // <nav className="sticky top-0 z-50 backdrop-blur border-b">
    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      backdrop-blur-xl
      bg-background/70
      border-b
      "
    >
      <div className="section-container h-16 flex items-center justify-between">

        <Link
          href="#home"
          className="font-bold text-xl"
        >
          Imran
        </Link>

        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={
                active === link.toLowerCase()
                  ? "text-blue-500 font-semibold"
                  : ""
              }
            >
              {link}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}