type Experience = {
  readonly image: string;
  readonly name: string;
  readonly position: string;
  readonly tasks: string[];
  readonly date: string;
};

type ExperienceData = {
  readonly shell: string;
  readonly experiences: Experience[];
};

export const EXPERIENCE : ExperienceData = {
    shell : "$ jobs -l",
    experiences : [
        {
            image : '/experience/devops.png',
            position: 'DevOps Engineer',
            name: 'The QA Company (JEI)',
            date: '02/2025 – Present',
            tasks: [
                'Implementing and maintaining CI/CD pipelines to ensure secure and efficient software delivery.',
                'Designing and managing Kubernetes deployments for multi-service applications with monitoring and logging solutions.',
                'Leading ISO 27001 compliance initiatives by establishing security policies, access control, and risk management processes.',
                'Optimizing infrastructure with Docker, Prometheus, Grafana, and Vault integration for secrets management.'
            ]
        },
        {
           image : '/experience/devops.png',
            position: 'DevOps Intern',
            name: 'Nexaminds',
            date: '06/2024 - 09/2024',
            tasks: [
                'Contributed to automation workflows by containerizing applications with Docker and configuring environments with Kubernetes.',
                'Improved deployment reliability by streamlining monitoring and alerting systems for better observability.'
            ] 
        },
        {
            image : '/experience/web.png',
            position: 'Full Stack Developer',
            name: 'Lovester',
            date: '06/2023 - 05/2024',
            tasks: [
                'Developed and maintained web applications using React.js, Next.js, and Nest.js with RESTful APIs.',
                'Designed responsive user interfaces with Tailwind and optimized backend services with Nest.js and MongoDB.',
                'Collaborated in an Agile environment to deliver scalable features and improve overall product performance.'
            ]
        }
    ]
}