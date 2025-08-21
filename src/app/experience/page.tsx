import Card from "@portfolio/components/general/Card";
import Shell from "@portfolio/components/general/Shell";
import { EXPERIENCE } from "@portfolio/data/experience";

export default function Page() {
  const data = EXPERIENCE;
  return (
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
  );
}
