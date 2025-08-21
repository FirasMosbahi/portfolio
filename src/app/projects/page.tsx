import Card from "@portfolio/components/general/Card";
import Shell from "@portfolio/components/general/Shell";
import { PROJECTS } from "@portfolio/data/projects";

export default function Page() {
  const data = PROJECTS;
  return (
    <div className="flex h-full flex-col items-center lg:px-16 px-8">
      <Shell cmd={data.shell} />
      <div className="flex flex-col gap-4 mt-2 lg:mb-0 mb-8">
        {data.projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.name}
            subtitle={project.briefDescription}
            content={project.description}
            redirect={project.redirect}
          />
        ))}
      </div>
    </div>
  );
}
