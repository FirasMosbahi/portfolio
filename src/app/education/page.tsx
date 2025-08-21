import Card from "@portfolio/components/general/Card";
import Shell from "@portfolio/components/general/Shell";
import { EDUCATION } from "@portfolio/data/education";

export default function Page() {
  const data = EDUCATION;
  return (
    <div className="flex h-full flex-col items-center lg:px-16 px-8">
      <Shell cmd={data.shell} />
      <div className="flex flex-col gap-4 mt-8 lg:mb-0 mb-8">
        {data.schools.map((school, index) => (
          <Card
            key={index}
            image={school.image}
            title={school.name}
            subtitle={school.diploma}
            date={school.date}
            content={school.description}
          />
        ))}
      </div>
    </div>
  );
}
