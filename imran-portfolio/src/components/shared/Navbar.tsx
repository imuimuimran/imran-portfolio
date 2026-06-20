"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  "About",
  "Skills",
  "Education",
  "Experience",
  "Projects",
  "Contact",
];

const mobileLinks = [
  "Home",
  "About",
  "Skills",
  "Education",
  "Experience",
  "Projects",
  "Contact",
];


export default function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
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

        {/* <ThemeToggle /> */}

        <div className="flex items-center gap-2">

          <ThemeToggle />

          <Sheet
            open={open}
            onOpenChange={setOpen}
          >
            
            <SheetTrigger asChild>
              <button
                className="
                md:hidden
                p-2
                "
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent side="right">

              <div
                className="
                flex
                flex-col
                gap-6
                mt-10
                "
              >
                {mobileLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className={`
                    text-lg
                    font-medium
                    ${active === link.toLowerCase()
                        ? "text-blue-500"
                        : ""
                      }
                    `}
                  >
                    {link}
                  </a>
                ))}

                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="
                  text-lg
                  font-medium
                  "
                >
                  Resume
                </a>

              </div>

            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  );
}