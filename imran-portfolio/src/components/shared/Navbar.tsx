"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  "About",
  "Skills",
  "Education",
  "Experience",
  "Projects",
  "Contact",
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur border-b">
      <div className="section-container h-16 flex items-center justify-between">

        <Link
          href="/"
          className="font-bold text-xl"
        >
          Imran
        </Link>

        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
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