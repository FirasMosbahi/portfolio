type Skill = {
  name: string;
  label: string;
  image: string;
};

type SkillsData = {
  shell: string;
  skills: Skill[];
};

export const SKILLS: SkillsData = {
  shell: "$ $ ls -la /firas/personal/skills",
  skills: [
    {
      name: "Git",
      label: "Version Controle",
      image: "/skills/git.png",
    },
    {
      name: "Github Actions",
      label: "Pipelines definition",
      image: "/skills/github-actions.png",
    },
    {
      name: "Gitlab CI",
      label: "Pipelines definition",
      image: "/skills/gitlab-ci.png",
    },
    {
      name: "Bash",
      label: "Scripting language",
      image: "/skills/bash.png",
    },
    {
      name: "Python",
      label: "Scripting languge",
      image: "/skills/python.png",
    },
    {
      name: "Golang",
      label: "Scripting languge",
      image: "/skills/golang.png",
    },
    {
      name: "Nginx",
      label: "Reverse proxy",
      image: "/skills/nginx.png",
    },
    {
      name: "Traefic",
      label: "Reverse proxy",
      image: "/skills/traefic.png",
    },
    {
      name: "Docker",
      label: "Containers management",
      image: "/skills/docker.png",
    },
    {
      name: "Podman",
      label: "Containers management",
      image: "/skills/podman.png",
    },
    {
      name: "Kubernetes",
      label: "Containers orchestration",
      image: "/skills/kubernetes.png",
    },
    {
      name: "Helm",
      label: "K8s file manager",
      image: "/skills/helm.png",
    },
    {
      name: "ArgoCD",
      label: "GitOps",
      image: "/skills/argocd.png",
    },
    {
      name: "Ansible",
      label: "Configurations management",
      image: "/skills/ansible.png",
    },
    {
      name: "Terraform",
      label: "Infrastructure provisionning",
      image: "/skills/terraform.png",
    },
    {
      name: "AWS",
      label: "Cloud provider",
      image: "/skills/aws.png",
    },
    {
      name: "Azure",
      label: "Cloud provider",
      image: "/skills/azure.png",
    },
    {
      name: "Scaleway",
      label: "Cloud provider",
      image: "/skills/scaleway.png",
    },
        {
      name: "Prometheus",
      label: "Monitoring",
      image: "/skills/prometheus.png",
    },
        {
      name: "Loki",
      label: "Monitoring",
      image: "/skills/loki.png",
    },
        {
      name: "Grafana",
      label: "Monitoring",
      image: "/skills/grafana.png",
    },
  ],
};


export const SkillsStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Firas Mosbahi",
  "url": "https://firas.im",
  "skills": SKILLS.skills.map(skill => skill.name)
};