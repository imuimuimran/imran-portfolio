"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";
import { IconType } from "react-icons";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
    >
      <div className="section-container">

        {/* <h2
          className="
          text-4xl
          font-bold
          text-center
          mb-4
          "
        >
          Skills & Technologies
        </h2>

        <p
          className="
          text-center
          text-muted-foreground
          mb-12
          "
        >
          Technologies I use to build
          modern web applications.
        </p> */}

        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I use to build modern web applications."
        />

        <div className="space-y-10">

          <SkillCategory
            title="Frontend"
            items={skills.frontend}
          />

          <SkillCategory
            title="Backend"
            items={skills.backend}
          />

          <SkillCategory
            title="Database"
            items={skills.database}
          />

          <SkillCategory
            title="Tools"
            items={skills.tools}
          />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({
  title,
  items,
}: {
  title: string;
  // items: string[];
  items: {
    name: string;
    icon: IconType;
  }[];
}) {
  return (
    <div>

      <h3
        className="
        text-2xl
        font-semibold
        mb-5
        "
      >
        {title}
      </h3>

      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
        "
      >
        {items.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
}