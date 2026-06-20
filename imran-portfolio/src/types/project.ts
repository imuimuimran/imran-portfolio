// src/types/project.ts

export interface Project {
  id: number;
  slug: string;
  title: string;
  image: string;

  description: string;

  overview: string;

  features: string[];

  technologies: string[];

  liveLink: string;

  githubLink: string;

  challenges: string[];

  futurePlans: string[];
}