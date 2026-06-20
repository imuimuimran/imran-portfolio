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
      "
      >
        <ArrowLeft size={18} />
        Back To Porjects
      </Link>

      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={700}
        className="
        rounded-2xl
        w-full
        "
      />

      <h1
        className="
        text-5xl
        font-bold
        mt-10
        "
      >
        {project.title}
      </h1>

      <p className="mt-5">
        {project.description}
      </p>

      <section className="mt-10">

        <h2 className="text-3xl font-bold">
          Technologies
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
                border
                rounded-full
                "
              >
                {tech}
              </span>
            )
          )}
        </div>
      </section>

      <section className="mt-10">

        <h2 className="text-3xl font-bold">
          Challenges
        </h2>

        <ul className="list-disc ml-6 mt-4">
          {project.challenges.map(
            (challenge) => (
              <li key={challenge}>
                {challenge}
              </li>
            )
          )}
        </ul>
      </section>

      <section className="mt-10">

        <h2 className="text-3xl font-bold">
          Future Plans
        </h2>

        <ul className="list-disc ml-6 mt-4">
          {project.futurePlans.map(
            (plan) => (
              <li key={plan}>{plan}</li>
            )
          )}
        </ul>
      </section>

      <div className="flex gap-4 mt-10">

        <a
          href={project.liveLink}
          target="_blank"
          className="
          px-6
          py-3
          rounded-lg
          bg-green-600
          text-white
          "
        >
          Live Project
        </a>

        <a
          href={project.githubLink}
          target="_blank"
          className="
          px-6
          py-3
          rounded-lg
          border
          "
        >
          GitHub Repository
        </a>
      </div>
    </main>
  );
}