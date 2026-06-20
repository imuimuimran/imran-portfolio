import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Imran Hossain | Full Stack Developer",
    template: "%s | Imran Hossain",
  },

  description:
    "Full Stack Developer specializing in MERN Stack, React, Next.js and modern web applications.",

  keywords: [
    "Imran Hossain",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Bangladesh Developer",
  ],

  authors: [
    {
      name: "Imran Hossain",
    },
  ],

  creator: "Imran Hossain",

  openGraph: {
    title:
      "Imran Hossain | Full Stack Developer",

    description:
      "Portfolio website showcasing projects, skills and development journey.",

    type: "website",

    locale: "en_US",
  },
};