import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return notFound();
  }

  return (
    <main className="section-container py-20">

      <Link
        href="/#projects"
        className="
        inline-flex
        items-center
        gap-2
        mb-8
      text-blue-500
        hover:underline
        "
      >
        <ArrowLeft size={18} />
        Back To Projects
      </Link>

      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={700}
        className="
        rounded-2xl
        w-full
        border
        "
      />

      <div className="mt-10">

        <h1
          className="
          text-4xl
          md:text-5xl
          font-bold
          "
        >
          {project.title}
        </h1>

        <p
          className="
          text-lg
          text-muted-foreground
          mt-4
          "
        >
          {project.description}
        </p>
      </div>

      {/* ACTION BUTTONS */}

      <div
        className="
        flex
        flex-wrap
        gap-4
        mt-8
        "
      >
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-6
          py-3
          rounded-lg
          bg-green-600
          text-white
          font-medium
          "
        >
          Live Demo
        </a>

        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-6
          py-3
          rounded-lg
          border
          font-medium
          "
        >
          GitHub Repository
        </a>
      </div>

      {/* OVERVIEW */}

      <section className="mt-14">

        <h2 className="text-3xl font-bold">
          Project Overview
        </h2>

        <p
          className="
          mt-4
          leading-8
          text-muted-foreground
          "
        >
          {project.overview}
        </p>
      </section>

      {/* FEATURES */}

      <section className="mt-14">

        <h2 className="text-3xl font-bold">
          Key Features
        </h2>

        <ul
          className="
          grid
          md:grid-cols-2
          gap-3
          mt-5
          "
        >
          {project.features.map(
            (feature) => (
              <li
                key={feature}
                className="
            border
            rounded-lg
            p-4
            "
              >
                ✓ {feature}
              </li>
            )
          )}
        </ul>
      </section>

      {/* TECH STACK */}

      <section className="mt-14">

        <h2 className="text-3xl font-bold">
          Technologies Used
        </h2>

        <div
          className="
          flex
          flex-wrap
          gap-3
          mt-5
          "
        >
          {project.technologies.map(
            (tech) => (
              <span
                key={tech}
                className="
                px-4
                py-2
                rounded-full
                border
                "
              >
                {tech}
              </span>
            )
          )}
        </div>
      </section>

      {/* CHALLENGES */}

      <section className="mt-14">

        <h2 className="text-3xl font-bold">
          Challenges Faced
        </h2>

        <ul
          className="
          list-disc
          ml-6
          mt-5
          space-y-2
          "
        >
          {project.challenges.map(
            (challenge) => (
              <li key={challenge}>
                {challenge}
              </li>
            )
          )}
        </ul>
      </section>

      {/* FUTURE PLANS */}

      <section className="mt-14">

        <h2 className="text-3xl font-bold">
          Future Improvements
        </h2>

        <ul
          className="
          list-disc
          ml-6
          mt-5
          space-y-2
          "
        >
          {project.futurePlans.map(
            (plan) => (
              <li key={plan}>
                {plan}
              </li>
            )
          )}
        </ul>
      </section>

    </main>
  );
}