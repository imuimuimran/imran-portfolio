import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";

export default function GithubStats() {
  return (
    <section className="py-24">
      <div className="section-container">

        {/* <h2 className="text-center text-4xl font-bold mb-10">
          GitHub Statistics
        </h2> */}
        <SectionHeading
          title="GitHub Statistics"
          subtitle="Insights into my repositories, contributions, and coding streaks."
        />

        <div className="flex flex-col gap-6 items-center">

          <Image
            src="https://github-readme-stats.vercel.app/api?username=imuimuimran&show_icons=true"
            alt="stats"
            width={500}
            height={200}
            unoptimized
          />

          <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=imuimuimran"
            alt="streak"
            width={500}
            height={200}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}