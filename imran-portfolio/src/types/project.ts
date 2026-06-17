export interface Project {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;

  technologies: string[];

  liveLink: string;

  githubLink: string;

  challenges: string[];

  futurePlans: string[];
}