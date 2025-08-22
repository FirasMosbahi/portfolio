import Card from "@portfolio/components/general/Card";
import Shell from "@portfolio/components/general/Shell";
import {
  EXPERIENCE,
  ExperienceStructuredData,
} from "@portfolio/data/experience";
import { ExperienceMetadata } from "@portfolio/metadata/experience-metadata";
import Script from "next/script";

export const metadata = ExperienceMetadata;

export default function Page() {
  const data = EXPERIENCE;
  return (
    <>
      <Script
        id="experience-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ExperienceStructuredData),
        }}
      />
      <div className="flex h-full flex-col items-center lg:px-16 px-8">
        <Shell cmd={data.shell} />
        <div className="flex flex-col gap-4 mt-8 lg:mb-0 mb-8">
          {data.experiences.map((experience, index) => (
            <Card
              key={index}
              image={experience.image}
              title={experience.position}
              subtitle={experience.name}
              date={experience.date}
              content={experience.tasks}
            />
          ))}
        </div>
      </div>
    </>
  );
}
