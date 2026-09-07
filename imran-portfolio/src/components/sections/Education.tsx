"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24"
    >
      <div className="section-container">

        {/* <h2
          className="
          text-4xl
          font-bold
          text-center
          mb-12
          "
        >
          Education & Training
        </h2> */}

        <SectionHeading
          title="Education & Training"
          subtitle="My learning journey - academic, training & knowladge gathering"
        />

        <div
          className="
          max-w-4xl
          mx-auto
          "
        >
          {education.map((item) => (
            <motion.div
              key={item.degree}
              whileHover={{
                scale: 1.02,
              }}
              className="
              border
              rounded-xl
              p-8
              "
            >
              <span
                className="
                text-blue-500
                font-medium
                "
              >
                {item.duration}
              </span>

              <h3
                className="
                text-2xl
                font-bold
                mt-2
                "
              >
                {item.degree}
              </h3>

              {/* Renders the link only if it exists in the data object */}
              {item.link && (
                <p className="mt-1">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:underline font-medium text-sm inline-flex items-center gap-1"
                  >
                    View Certificate ↗
                  </a>
                </p>
              )}
              
              <p
                className="
                font-medium
                mt-1
                "
              >
                {item.institution}
              </p>

              <p
                className="
                mt-4
                text-muted-foreground
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}