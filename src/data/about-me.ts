type AboutMe = {
    name : string,
    image : string,
    callToAction : string,
    shell: string,
    aboutMe : string[],
    invitation: string
}

export const ABOUT_ME : AboutMe = {
    name : 'Firas Mosbehi',
    image : '/about-me/firas.png',
    callToAction : 'Curious about me ? Here you have it :)',
    shell: '$ whoami',
    aboutMe : [
        'I hold a Software Engineering Diploma from the National Institute of Applied Sciences and Technologies, where I focused on advanced development, system architecture, and DevSecOps principles. This strong academic foundation enables me to design systems that are both efficient and secure.',
        'With over 3 years of experience as a DevOps Engineer, I’ve worked on building, securing, and scaling infrastructure for diverse projects. For the past 6 months, I’ve been part of a Jeune Entreprise Innovante (JEI) — the-QA-company — where I combine innovation with reliability to deliver cutting-edge solutions.',
        'My professional journey is defined by a strong portfolio in CI/CD, cloud infrastructure, and automation. I have designed and implemented automated delivery pipelines that ensure rapid, safe, and repeatable deployments. My work in the cloud focuses on building scalable, cost-effective, and secure infrastructures, while my passion for automation drives me to eliminate inefficiencies and orchestrate systems that work seamlessly.',
        'I am proficient in a wide range of DevOps and cloud technologies, from containerization and orchestration with Docker and Kubernetes to infrastructure as code with Terraform and Ansible, and monitoring and security solutions like Prometheus, Grafana, Vault, and SonarQube. My versatility allows me to adapt quickly to new tools and challenges, always keeping security, scalability, and reliability at the forefront.',
        'Being fluent in English, French, and Arabic, I can collaborate effectively with teams and stakeholders from around the globe. This linguistic versatility has helped me contribute to international projects and work in culturally diverse environments with ease.',
        'Technology is more than just a profession for me—it is my passion. I thrive on solving complex problems, innovating processes, and building systems that make a real impact. My mission is simple: deploy something big, scale to infinity, and serve users reliably and securely. The future of technology is limitless, and I’m ready to build it.',
    ],
    invitation: 'Let’s deploy something big, scale to infinity, and serve users reliably and securely. The future of technology is limitless—let’s build it together.'
}