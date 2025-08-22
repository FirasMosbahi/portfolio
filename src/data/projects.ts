type Project = {
  readonly image: string;
  readonly name: string;
  readonly briefDescription: string;
  readonly description: string[];
  readonly redirect: string;
};

type ProjectsData = {
  readonly shell: string;
  readonly projects: Project[];
};

export const PROJECTS : ProjectsData = {
    shell : '$ ls -la /firas/personal/projects',
    projects : [
        {
            image: '/projects/argocd.png',
            name: 'deployment-mini-project',
            briefDescription: "GitOps and IaC oriented project",
            redirect: "https://github.com/FirasMosbahi/deployment-mini-project",
            description: [
                'A complete CI pipeline using Github Actions and CD GitOps pipeline with ArgoCD',
                'Automated infrastructure provisionning with Infrastructure as Code using Terraform to provision AKS',
                'Technologies used : Docker, Github Actions, Terraform, Azure, Kubernetes, ArgoCD'
            ]
        },
        {
            image: '/projects/helm.png',
            name: 'PFA',
            briefDescription: "CI/CD pipelines for microservices application",
            redirect: "https://github.com/FirasMosbahi/pfa",
            description: [
                'A complete CI/CD pipeline using Github Actions with dedicated workflow for each service',
                'Automated infrastructure provisionning with Infrastructure as Code using Terraform to provision AKS and ACR',
                'Kubernetes manifestes parametrised and packaged via Helm',
                'Technologies used : Docker, Github Actions, Prometheus, Grafana, Terraform, Azure, Kubernetes, Helm'
            ]
        },
        {
            image: '/projects/docker.png',
            name: 'DevOps-ci',
            briefDescription: "CI pipeline for Node.js application",
            redirect: "https://github.com/FirasMosbahi/devops-ci",
            description: [
                'A complete CI pipeline to deliver docker image using Github Actions',
                'Dockerized application using Docker and pushed to DockerHub',
                'Technologies used : Docker, Github Actions, NPM, DockerHub'
            ]
        }
    ]
}

export const ProjectsStructuredData = PROJECTS.projects.map(project => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.name,
  "url": project.redirect,
  "description": project.briefDescription,
  "image": `https://firas.im${project.image}`,
  "author": {
    "@type": "Person",
    "name": "Firas Mosbahi",
    "url": "https://firas.im"
  }
}));