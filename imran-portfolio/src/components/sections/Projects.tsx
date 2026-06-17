import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="section-container">

        <h2
          className="
          text-4xl
          font-bold
          text-center
          "
        >
          Featured Projects
        </h2>

        <p
          className="
          text-center
          text-muted-foreground
          mt-4
          mb-12
          "
        >
          Projects that showcase my
          learning journey and technical
          skills.
        </p>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}