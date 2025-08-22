import Card from "@portfolio/components/general/Card";
import Shell from "@portfolio/components/general/Shell";
import { PROJECTS, ProjectsStructuredData } from "@portfolio/data/projects";
import { ProjectsMetadata } from "@portfolio/metadata/projects-metadata";
import Script from "next/script";

export const metadata = ProjectsMetadata;

export default function Page() {
  const data = PROJECTS;
  return (
    <>
    <Script
        id="projects-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ProjectsStructuredData) }}
      />
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
    </div></>
  );
}
