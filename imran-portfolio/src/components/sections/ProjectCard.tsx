"use client";

import Link from "next/link";
import Image from "next/image";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <div
      className="
      border
      rounded-2xl
      overflow-hidden
      hover:-translate-y-2
      duration-300
      "
    >
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="
        w-full
        h-60
        object-cover
        "
      />

      <div className="p-6">

        <h3
          className="
          text-2xl
          font-bold
          "
        >
          {project.title}
        </h3>

        <p
          className="
          mt-3
          text-muted-foreground
          "
        >
          {project.description}
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className="
          inline-block
          mt-5
          px-5
          py-2
          rounded-lg
          bg-blue-600
          text-white
          "
        >
          View Details
        </Link>
      </div>
    </div>
  );
}