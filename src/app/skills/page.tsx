import Shell from "@portfolio/components/general/Shell";
import SkillCard from "@portfolio/components/skills/SkillCard";
import { SKILLS, SkillsStructuredData } from "@portfolio/data/skills";
import { IntroMetadata } from "@portfolio/metadata/intro-metadata";
import Script from "next/script";

export const metadata = IntroMetadata;

export default function Page() {
  const data = SKILLS;
  return (
    <>
      <Script
        id="skills-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SkillsStructuredData),
        }}
      />
      <div className="flex h-full flex-col items-center lg:px-16 px-8">
        <Shell cmd={data.shell} />
        <div className="flex flex-row flex-wrap items-center justify-center lg:gap-x-16 gap-x-8 lg:gap-y-12 gap-y-8 lg:mt-16 mt-8 lg:mb-0 mb-12">
          {data.skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
    </>
  );
}
