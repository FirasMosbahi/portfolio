type IntroData = {
  name: string;
  intro: string[];
  image: string;
  cv: string;
  linkedin : string;
  github : string
};

export const INTRO: IntroData = {
  name: "Firas Mosbehi",
  intro: [
    "I’m a DevSecOps Engineer, I blend development, security, and operations into smooth, automated workflows.",
    " With 3+ years in the game, I’ve built and optimized secure, scalable systems that help teams deliver faster while keeping security airtight.",
    "I’m all about automation, reliability, and doing things the right way—because great software should be both fast and safe.",
  ],
  image: "/intro/firas.png",
  cv: "/intro/cv.pdf",
  linkedin : 'https://www.linkedin.com/in/firas-mosbahi-6363b420a/',
  github : 'https://github.com/FirasMosbahi',
};


export const PersonStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Firas Mosbahi",
  "url": "https://firas.im",
  "sameAs": [
    "https://www.linkedin.com/in/firas-mosbahi-6363b420a/",
    "https://github.com/FirasMosbahi"
  ],
  "jobTitle": "DevSecOps Engineer",
  "image": "https://firas.im/intro/firas.png",
  "description": "Firas Mosbahi is a DevSecOps Engineer with 3+ years experience in CI/CD, Cloud, Kubernetes, GitOps, and automation.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Saint Etienne",
    "addressCountry": "France"
  }
};